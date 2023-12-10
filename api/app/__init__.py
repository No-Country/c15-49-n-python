from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from flask_login import LoginManager
from flask_marshmallow import Marshmallow

from .config import config
from .routes import api


db = SQLAlchemy()
migrate = Migrate()
ma = Marshmallow()
login_manager = LoginManager()


def create_app(config_name='default'):
    app = Flask(__name__)
    app.config.from_object(config[config_name])

    db.init_app(app)
    migrate.init_app(app, db)

    app.register_blueprint(api)

    ma.init_app(app)
    login_manager.init_app(app)

    from .models import User, Job, Relationship_user_job, Job_detail, Service, Assessment

    return app
