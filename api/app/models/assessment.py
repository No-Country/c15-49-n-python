from .. import db


class Assessment(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    id_service = db.Column(db.Integer, db.ForeignKey('service.id', use_alter=True), nullable=False)
    assessment_user_client = db.Column(db.Float, nullable=False)
    comment_user_client = db.Column(db.Float, nullable=False)
    assessment_user_provider = db.Column(db.Float, nullable=False)
    assessment_user_provider = db.Column(db.Float, nullable=False)
    state = db.Column(db.Enum('canceled', 'evaluate', 'aproved'), default='aproved', nullable=False)
    
    def _repr_(self):
        return f"<Assessment {self.id}>"
    