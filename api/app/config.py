# /app/config.py

class Config:
    SQLALCHEMY_DATABASE_URI ='mysql+pymysql://root@localhost:3306/arreglos'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'your_secret_key'
    SESSION_COOKIE_NAME = 'mi_sesion'
    JWT_SECRET_KEY = 'tu_clave_secreta'
