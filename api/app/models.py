# /app/models.py

from .extensions import db
from flask_login import UserMixin, user_loaded_from_cookie
from werkzeug.security import generate_password_hash, check_password_hash

import datetime

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password_hash = db.Column(db.String(512), nullable=False)
    first_name = db.Column(db.String(255))
    last_name = db.Column(db.String(255))
    location = db.Column(db.String(255))
    is_active = db.Column(db.Boolean, default=True)
    profile_image = db.Column(db.String(255))  # incluimos imagen de perfil
    services = db.relationship('Service', backref='user', lazy=True)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def get_id(self):
        return str(self.id)


#####################################################        

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    id_relationship_user_job = db.Column(db.Integer, db.ForeignKey('relationship_user_job.id', use_alter=True), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    date_create = db.Column(db.Date, default=datetime.datetime.utcnow, nullable=False)
    date_start = db.Column(db.Date, default=datetime.datetime.utcnow, nullable=False)
    date_end = db.Column(db.Date, default=datetime.datetime.utcnow, nullable=False)
    attention_time = db.Column(db.Date, default=datetime.datetime.utcnow, nullable=False)
    id_assessment = db.Column(db.Integer, db.ForeignKey('assessment.id'), nullable=False)
    state = db.Column(db.Enum('pending', 'in_progress', 'completed'), nullable=False)
    # user = db.relationship('User', backref=db.backref('services', lazy=True))


class Relationship_user_job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    id_job = db.Column(db.Integer, db.ForeignKey('job.id'), nullable=False)

    # Añade una relación a la tabla Job
    job = db.relationship('Job')


class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), nullable=False)
    is_active = db.Column(db.Boolean, default=True)


class Job_detail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_relationship_user_job = db.Column(db.Integer, db.ForeignKey('relationship_user_job.id'), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    attention_day = db.Column(db.Date, default=datetime.datetime.utcnow, nullable=False)
    attention_time = db.Column(db.Date, default=datetime.datetime.utcnow, nullable=False)

class Assessment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_service = db.Column(db.Integer, db.ForeignKey('service.id', use_alter=True), nullable=False)
    assessment_user_client = db.Column(db.Float, nullable=False)
    comment_user_client = db.Column(db.Float, nullable=False)
    assessment_user_provider = db.Column(db.Float, nullable=False)
    comment_user_provier = db.Column(db.Float, nullable=False)
    state = db.Column(db.Enum('canceled', 'evaluate', 'approved'), default='approved', nullable=False)