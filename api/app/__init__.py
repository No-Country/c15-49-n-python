# app/__init__.py
from flask import Flask
from .config import Config
from .extensions import db, migrate, ma, login_manager, configure_cors

# from flask import Blueprint

# user_views = Blueprint('user_views', __name__)



def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Configuración CORS
    configure_cors(app)

    db.init_app(app)
    migrate.init_app(app, db)
    ma.init_app(app)
    login_manager.init_app(app)


    from .models import User
    @login_manager.user_loader
    def load_user(user_id):
        # Esta función se utiliza para cargar el usuario durante el proceso de login.
        # Se llama automáticamente por Flask-Login.
        return User.query.get(int(user_id))


    with app.app_context():
        from .auth import auth
        app.register_blueprint(auth)

        # Importa y registra el blueprint user_views
        from .views import user_views
        app.register_blueprint(user_views)

        return app
