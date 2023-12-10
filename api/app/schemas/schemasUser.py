from app.models.user import User
from app import ma

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'first_name', 'last_name', 'location', 'is_active')