# /app/views.py
from flask import Blueprint, jsonify
from .models import User, Service, Assessment, Relationship_user_job

from flask import Blueprint

user_views = Blueprint('user_views', __name__)



@user_views.route('/get_user_data/<int:user_id>', methods=['GET'])
def get_user_data(user_id):
    user = User.query.get(user_id)

    if not user:
        return jsonify({'message': 'Usuario no encontrado'}), 404

    # Filtrar información sensible antes de enviarla al frontend
    user_data = {
        'id': user.id,
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'location': user.location,
        'is_active': user.is_active,
        'profile_image': user.profile_image,
        'services': [],
        'jobs': [],
        'average_rating': 0.0  # Inicializar el promedio
    }

    # Obtener servicios del usuario
    services = Service.query.filter_by(id_user=user.id).all()
    for service in services:
        user_data['services'].append({
            'id': service.id,
            'description': service.description,
            'date_create': str(service.date_create),
            'date_start': str(service.date_start),
            'date_end': str(service.date_end),
            'state': service.state
        })

    # Obtener trabajos asociados al usuario
    job_relationships = Relationship_user_job.query.filter_by(id_user=user.id).all()
    for job_relationship in job_relationships:
        id_job = job_relationship.id_job
        job = Job.query.get(id_job)
        print(job)
        user_data['jobs'].append({
            'id': job.id,
            'description': job.description,
            'is_active': job.is_active
        })

    # Obtener promedio de valoraciones
    assessments = Assessment.query.filter_by(id_service=user.id).all()
    total_ratings = len(assessments)
    if total_ratings > 0:
        sum_ratings = sum([assessment.assessment_user_client for assessment in assessments])
        user_data['average_rating'] = round(sum_ratings / total_ratings, 2)

    return jsonify(user_data), 200


################## alls #########################
from flask import Blueprint, jsonify
from .models import User, Service, Assessment, Relationship_user_job

# user_views = Blueprint('user_views', __name__)

@user_views.route('/get_users_with_jobs', methods=['GET'])
def get_users_with_jobs():
    users_with_jobs = []

    # Obtener todos los usuarios que tienen al menos un trabajo asociado
    users = User.query.join(Relationship_user_job).filter(User.id == Relationship_user_job.id_user).all()

    for user in users:
        user_data = {
            'id': user.id,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'location': user.location,
            'is_active': user.is_active,
            'profile_image': user.profile_image,
            'services': [],
            'jobs': [],
            'average_rating': 0.0  # Inicializar el promedio
        }

        # Obtener servicios del usuario
        services = Service.query.filter_by(id_user=user.id).all()
        for service in services:
            user_data['services'].append({
                'id': service.id,
                'description': service.description,
                'date_create': str(service.date_create),
                'date_start': str(service.date_start),
                'date_end': str(service.date_end),
                'state': service.state
            })

        # Obtener trabajos asociados al usuario
        job_relationships = Relationship_user_job.query.filter_by(id_user=user.id).all()
        for job_relationship in job_relationships:
            id_job = job_relationship.id_job
            job = Job.query.get(id_job)
            user_data['jobs'].append({
                'id': job.id,
                'description': job.description,
                'is_active': job.is_active
            })

        # Obtener promedio de valoraciones
        assessments = Assessment.query.filter_by(id_service=user.id).all()
        total_ratings = len(assessments)
        if total_ratings > 0:
            sum_ratings = sum([assessment.assessment_user_client for assessment in assessments])
            user_data['average_rating'] = round(sum_ratings / total_ratings, 2)

        users_with_jobs.append(user_data)

    return jsonify(users_with_jobs), 200


# ########### parte de editar perfil #############
from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from .models import User, db

# user_views = Blueprint('user_views', __name__)

@user_views.route('/update_user_data/<int:user_id>', methods=['POST'])
@login_required
def update_user_data(user_id):
    # Asegúrate de que el usuario que intenta actualizar sus datos es el mismo que está autenticado
    if current_user.id != user_id:
        return jsonify({'message': 'No tienes permisos para actualizar estos datos'}), 403

    user = User.query.get(user_id)

    if not user:
        return jsonify({'message': 'Usuario no encontrado'}), 404

    # Actualiza los datos del usuario con la información proporcionada en la solicitud
    data = request.get_json()

    user.first_name = data.get('first_name', user.first_name)
    user.last_name = data.get('last_name', user.last_name)
    user.location = data.get('location', user.location)

    # Puedes agregar más campos aquí según sea necesario

    # Guarda los cambios en la base de datos
    db.session.commit()

    return jsonify({'message': 'Datos del usuario actualizados exitosamente'}), 200


# #### Agregamos un trabajo al que se dedica ####

from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from .models import User, Job, Relationship_user_job


@user_views.route('/add_user_job', methods=['POST'])
@login_required
def add_user_job():
    # Asegúrate de que el usuario esté autenticado
    user = current_user

    # Obtén los datos del trabajo de la solicitud JSON
    data = request.get_json()

    job_description = data.get('job_description')

    if not job_description:
        return jsonify({'message': 'La descripción del trabajo es obligatoria'}), 400

    # Verifica si el trabajo ya existe en la base de datos
    job = Job.query.filter_by(description=job_description).first()

    if not job:
        # Si el trabajo no existe, créalo
        job = Job(description=job_description, is_active=True)
        db.session.add(job)
        db.session.commit()

    # Verifica si ya existe una relación entre el usuario y el trabajo
    existing_relationship = Relationship_user_job.query.filter_by(id_user=user.id, id_job=job.id).first()

    if not existing_relationship:
        # Si no existe la relación, créala
        relationship = Relationship_user_job(id_user=user.id, id_job=job.id)
        db.session.add(relationship)
        db.session.commit()

    return jsonify({'message': 'Trabajo agregado exitosamente'}), 200



######### lo mismo que el anterior pero enviando el ID ####
from flask import Blueprint, jsonify, request
from flask_login import current_user
from .models import User, Job, Relationship_user_job

# user_views = Blueprint('user_views', __name__)

@user_views.route('/add_user_job_id/<int:user_id>', methods=['POST'])
def add_user_job_id(user_id):
    # Verifica si el usuario está autenticado
    if not current_user.is_authenticated:
        return jsonify({'message': 'Debes estar autenticado para realizar esta acción'}), 401

    # Verifica si el usuario autenticado coincide con el ID proporcionado en la URL
    if current_user.id != user_id:
        return jsonify({'message': 'No tienes permisos para modificar el trabajo de este usuario'}), 403

    # Obtén los datos del trabajo de la solicitud JSON
    data = request.get_json()

    job_description = data.get('job_description')

    if not job_description:
        return jsonify({'message': 'La descripción del trabajo es obligatoria'}), 400

    # Verifica si el trabajo ya existe en la base de datos
    job = Job.query.filter_by(description=job_description).first()

    if not job:
        # Si el trabajo no existe, créalo
        job = Job(description=job_description, is_active=True)
        db.session.add(job)
        db.session.commit()

    # Verifica si ya existe una relación entre el usuario y el trabajo
    existing_relationship = Relationship_user_job.query.filter_by(id_user=user_id, id_job=job.id).first()

    if not existing_relationship:
        # Si no existe la relación, créala
        relationship = Relationship_user_job(id_user=user_id, id_job=job.id)
        db.session.add(relationship)
        db.session.commit()

    return jsonify({'message': 'Trabajo modificado/agregado exitosamente'}), 200

################ buscamos por profesion y ubicacion ##############

from flask import Blueprint, jsonify, request
from .models import User, Relationship_user_job

# user_views = Blueprint('user_views', __name__)

@user_views.route('/search_users', methods=['GET'])
def search_users():
    # Obtén los parámetros de búsqueda desde la solicitud GET
    job_description = request.args.get('job_description')
    location = request.args.get('location')

    # Construye la consulta base para obtener usuarios que coincidan con el trabajo
    query = User.query.join(Relationship_user_job).filter(Relationship_user_job.id_user == User.id)

    print(query)

    # Filtra por descripción de trabajo si se proporciona
    if job_description:
        query = query.filter(Relationship_user_job.job.has(description=job_description))

    # Filtra por descripción de trabajo
    # query = query.filter(Relationship_user_job.job.has(description=job_description))
    

    # Filtra por ubicación si se proporciona
    if location:
        query = query.filter(User.location == location)

    # Ejecuta la consulta y obtén los resultados
    users = query.all()

    # Construye la lista de resultados
    results = []
    for user in users:
        results.append({
            'id': user.id,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'location': user.location,
            'is_active': user.is_active,
            'profile_image': user.profile_image,
            'jobs': [relationship.job.description for relationship in user.relationships_user_job]
        })

    return jsonify(results), 200



@user_views.route('/search_users1', methods=['GET'])
def search_users1():
    # Obtén los parámetros de búsqueda desde la solicitud GET
    # job_description = request.args.get('job_description')
    # location = request.args.get('location')

    # Obtén los datos JSON de la solicitud
    data = request.get_json()

    # Extrae los parámetros de búsqueda desde los datos JSON
    job_description = data.get('job_description')
    location = data.get('location')


    print(job_description)

    # Construye la consulta base para obtener usuarios que coincidan con el trabajo
    # query = User.query.join(Relationship_user_job).join(Job).options(db.contains_eager(User.services)).filter(Relationship_user_job.id_user == User.id)

    # Construye la consulta base para obtener usuarios que coincidan con el trabajo
    query = User.query.join(Relationship_user_job).filter(Relationship_user_job.id_user == User.id)

    # Filtra por descripción de trabajo si se proporciona
    if job_description:
        # Aplica un filtro que coincide con cualquier parte de la descripción, sin distinguir mayúsculas y minúsculas
        query = query.filter(Job.description.ilike(f"%{job_description}%"))

    # Filtra por ubicación si se proporciona
    if location:
        # Aplica un filtro que coincide con cualquier parte de la ubicación, sin distinguir mayúsculas y minúsculas
        query = query.filter(User.location.ilike(f"%{location}%"))

    # Ejecuta la consulta y obtén los resultados
    users = query.all()

    # Construye la lista de resultados
    results = []
    for user in users:
        results.append({
            'id': user.id,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'location': user.location,
            'is_active': user.is_active,
            'profile_image': user.profile_image,
        })

    return jsonify(results), 200

############## Actualizar Valoraciones ##############
# /app/views.py
from flask import Blueprint, jsonify, request
from .models import User, Service, Assessment

# user_views = Blueprint('user_views', __name__)

@user_views.route('/add_rating/<int:service_id>', methods=['POST'])
@login_required
def add_rating(service_id):
    user = current_user
    service = Service.query.get(service_id)

    if not service or service.user_id != user.id:
        return jsonify({'message': 'No tienes permisos para agregar una valoración a este servicio'}), 403

    data = request.get_json()

    assessment_user_client = data.get('assessment_user_client')
    comment_user_client = data.get('comment_user_client')

    assessment = Assessment(
        id_service=service.id,
        assessment_user_client=assessment_user_client,
        comment_user_client=comment_user_client,
        assessment_user_provider=0.0,  # Puedes añadir más campos según sea necesario
        comment_user_provider=""
    )

    db.session.add(assessment)
    db.session.commit()

    return jsonify({'message': 'Valoración agregada exitosamente'}), 200


##########################  Historial de Servicios ##################
# /app/views.py
from flask import Blueprint, jsonify
from flask_login import current_user, login_required
from .models import Service

# user_views = Blueprint('user_views', __name__)

@user_views.route('/service_history', methods=['GET'])
@login_required
def service_history():
    user = current_user

    services = Service.query.filter_by(id_user=user.id).all()

    history = []
    for service in services:
        history.append({
            'id': service.id,
            'description': service.description,
            'date_start': str(service.date_start),
            'date_end': str(service.date_end),
            'state': service.state
            # Puedes añadir más campos según sea necesario
        })

    return jsonify(history), 200


################## Configuración del Perfil ##########################
# /app/views.py
from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from .models import User

# user_views = Blueprint('user_views', __name__)

@user_views.route('/update_profile', methods=['POST'])
@login_required
def update_profile():
    user = current_user

    data = request.get_json()

    user.first_name = data.get('first_name', user.first_name)
    user.last_name = data.get('last_name', user.last_name)
    user.location = data.get('location', user.location)

    # Puedes añadir más campos según sea necesario

    db.session.commit()

    return jsonify({'message': 'Perfil actualizado exitosamente'}), 200




########################### Eliminar Cuenta #############################
# /app/views.py
from flask import Blueprint, jsonify
from flask_login import current_user, login_required
from .models import User

# user_views = Blueprint('user_views', __name__)

@user_views.route('/delete_account', methods=['DELETE'])
@login_required
def delete_account():
    user = current_user

    # Implementa el código para eliminar el usuario y sus datos relacionados

    db.session.delete(user)
    db.session.commit()

    return jsonify({'message': 'Cuenta eliminada exitosamente'}), 200


### solo para ver si esta bien la ruta
@user_views.route("/ver")
def index2():
    return jsonify({'message': '¡Hola! Esta es la ruta user_views'})
