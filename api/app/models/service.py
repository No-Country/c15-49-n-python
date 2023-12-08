from .. import db
import datetime


class Service(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    id_relationship_user_job = db.Column(db.Integer, db.ForeignKey('relationship_user_job.id', use_alter=True), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    date_create = db.Column(db.Date, default=datetime, nullable=False)
    date_start = db.Column(db.Date, default=datetime, nullable=False)
    date_end = db.Column(db.Date, default=datetime, nullable=False)
    attention_time = db.Column(db.Date, default=datetime, nullable=False)
    id_assessment = db.Column(db.Integer, db.ForeignKey('assessment.id'), nullable=False)
    state = db.Column(db.Enum('pending', 'in_progress', 'completed'), nullable=False)
    
    def _repr_(self):
        return f"<Service {self.description}>"
    