# /auth/views.py
from flask import request, jsonify, redirect, url_for, flash
from . import auth
from ..models import User, db, Service, Job_detail 
 
from flask_login import login_user, logout_user, login_required, current_user
from . import auth



import re

@auth.route("/api/register", methods=['POST'])
def register():
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')
    first_name = data.get('first_name')
    last_name = data.get('last_name')

    if not email or not password:
        return jsonify({'message': 'Datos incompletos'}), 400

    # Verificar la longitud de la contraseña
    if not (8 <= len(password) <= 16):
        return jsonify({'message': 'La contraseña debe tener entre 8 y 16 caracteres'}), 400

    # Verificar que la contraseña contenga al menos una mayúscula, una minúscula y un número
    if not re.search(r'[A-Z]', password) or not re.search(r'[a-z]', password) or not re.search(r'\d', password):
        return jsonify({'message': 'La contraseña debe contener al menos una mayúscula, una minúscula y un número'}), 400

    existing_user = User.query.filter_by(email=email).first()

    if existing_user:
        return jsonify({'message': 'El correo electrónico ya existe'}), 400

    new_user = User(email=email, first_name=first_name, last_name=last_name)
    new_user.set_password(password)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Usuario registrado exitosamente'}), 201



@auth.route("/api/login", methods=['POST'])
def login():
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    
    if user and user.check_password(password):
        # inicio de sesión aquí
        login_user(user)
        return jsonify({'message': 'Inicio de sesión exitoso', 'user_id': user.id, 'email': user.email}), 200
    else:
        return jsonify({'message': 'Correo electrónico o contraseña inválidos'}), 401



### solo para ver si esta bien la ruta
@auth.route("/")
def index():
    return jsonify({'users': "hola"})



@auth.route("/api/logout")
@login_required
def logout():
    logout_user()
    return jsonify({'message': 'Cierre de sesión exitoso'}), 200


# /auth/views.py

##### VER INFORMACION DEL USUARIO #####
@auth.route("/api/user_info")
@login_required
def user_info():
    user_info = {
        'user_id': current_user.id,
        'email': current_user.email,
        'first_name': current_user.first_name,
        'last_name': current_user.last_name,
        'location': current_user.location,
        'profile_image': current_user.profile_image,
        'jobs': get_user_jobs(current_user.id),  # Obtener trabajos del usuario
    }
    return jsonify(user_info), 200

def get_user_jobs(user_id):
    jobs = []

    # Obtener todos los servicios del usuario
    services = Service.query.filter_by(id_user=user_id).all()

    for service in services:
        job = {
            'description': service.description,
            'state': service.state,
            'job_details': get_job_details(service.id),
        }
        jobs.append(job)

    return jobs

def get_job_details(service_id):
    job_details = []

    # Obtener todos los detalles del trabajo para el servicio dado
    job_details_db = Job_detail.query.filter_by(id_service=service_id).all()

    for job_detail_db in job_details_db:
        job_detail = {
            'description': job_detail_db.description,
            'attention_day': job_detail_db.attention_day,
            'attention_time': job_detail_db.attention_time,
        }
        job_details.append(job_detail)

    return job_details



### Editar Perfil ####

@auth.route("/api/edit_profile", methods=['PUT'])
@login_required
def edit_profile():
    data = request.get_json()

    current_user.first_name = data.get('first_name', current_user.first_name)
    current_user.last_name = data.get('last_name', current_user.last_name)
    current_user.location = data.get('location', current_user.location)
    current_user.profile_image = data.get('profile_image', current_user.profile_image)

    db.session.commit()

    return jsonify({'message': 'Perfil actualizado exitosamente'}), 200


