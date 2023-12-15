from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os

from .config import config
from .routes import api
from .auth import auth

# DB
db = SQLAlchemy()
migrate = Migrate()


def create_app(config_name='default'):
    app = Flask(__name__,template_folder='../../app')
    # SE AGREGA PARA MANEJAR LAS SESIONES MEDIANTE FLASK
    app.config['SESSION_TYPE'] = 'filesystem'
    app.secret_key = os.urandom(24)
    
    app.config.from_object(config[config_name])

    db.init_app(app)
    migrate.init_app(app, db)

    app.register_blueprint(api)
    
    # blueprint for auth routes in our app
    app.register_blueprint(auth)

    from .models import User, Job, RelationshipUserJob, JobDetail, Service, Assessment

    return app
