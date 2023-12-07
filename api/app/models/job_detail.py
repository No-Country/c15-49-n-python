from .. import db
import datetime


class Job_detail(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    id_relation_user_job = db.Column(db.Integer, db.ForeignKey('relation_user_job.id'), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    attention_day = db.Column(db.Date, default=datetime, nullable=False)

    def _repr_(self):
        return f"<Job_detail {self.id}>"