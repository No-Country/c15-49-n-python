from flask import Blueprint, jsonify, render_template, session

api = Blueprint('api', __name__)

@api.route('/api/hello', methods=['GET'])
def get_resource():
    # COMO USAR LA VARIABLE DE SESION PARA VERIFICAR USUARIOS LOGUEADOS
    if 'email' in session:
        return jsonify({'data': 'Hello world! You\'re login user!!'})
    else:
        return jsonify({'data': 'You aren\'t loggin...'})


@api.route('/api/testForm')
def test_form():
    # FORMULARIO PARA TESTEAR METODOS DE LOGIN Y LOGOUT -- PUEDE SER ELIMINADO SIN INCONVENIENTES INCLUYENDO EL ARCHIVO index.html
    return render_template('index.html')


