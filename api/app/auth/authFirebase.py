from flask import Blueprint, jsonify, request, session

import pyrebase

# FIREBASE CONFIG---------------------------------------------------

configFirebase = {
    'apiKey': "AIzaSyDkhQ2cdspVOgDSS6eLeYHI95CxRi_DIZk",
    'authDomain': "nc-arreglos-ya.firebaseapp.com",
    'projectId': "nc-arreglos-ya",
    'storageBucket': "nc-arreglos-ya.appspot.com",
    'messagingSenderId': "54810517070",
    'appId': "1:54810517070:web:10622655fbf945d1e56d1f",
    'databaseURL':''
}

firebase = pyrebase.initialize_app(configFirebase)
authFirebase = firebase.auth()

# END FIREBASE CONFIG------------------------------------------------

auth = Blueprint('auth', __name__)

@auth.route('/auth/login', methods=['POST'])
def login():
    # DATA FOR TEST BY POSTMAN
    """
    email=request.args['email']
    password=request.args['password']
    """
    # DATA FOR TEST OR USE BY JSON
    data=request.get_json()
    email=data['email']
    password=data['password']
    
    try:
        # EN LA SIGUIENTE LINEA UTILIZO FIREBASE PARA EL LOGIN
        login=authFirebase.sign_in_with_email_and_password(email,password)
        # Seteo la sesion con el email del usuario por ahora...
        session['id']=login['localId']
        user_id=session['id']
        session['email']=login['email']
        email=session['email']
        return jsonify({'user_id': user_id, 'email':email})
        #return jsonify({'data': 'LOGIN', 'success': True})
    except Exception as e:
        print(e)
        return jsonify({'data': 'LOGIN', 'success': False})


@auth.route('/auth/signup', methods=['POST'])
def singup():
    
    # DATA FOR TEST BY POSTMAN
    """
    email=request.args['email']
    password=request.args['password']
    password=request.args['password']
    name=request.args['name']
    """
    # DATA FOR TEST OR USE BY JSON
    data=request.get_json()
    email=data['email']
    password=data['password']
    name=data['name']
    last_name=data['last_name']
    try:
        # CREO EL USUARIO EN FIREBASE Y DEVUELVO EL ID LOCAL
        signup_user = authFirebase.create_user_with_email_and_password(email,password)
        
        ### FALTA EL CRUD PARA CREAR EL USUARIO EN LA DB DEL PROYECTO
        
        return jsonify({'success': True,'usuario':signup_user['localId']})
    except:
        return jsonify({'success': False})
    

@auth.route('/auth/logout', methods=['POST'])
def logout():
    # VERIFICO QUE EXISTA LA SESION Y SI EXISTE LA BORRO PARA SALIR DE LA CUENTA
    if 'email' in session:
        session.clear()
        return jsonify({'success': True})
    else:
        return jsonify({'result': 'no session to clear'})


