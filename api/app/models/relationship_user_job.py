from .. import db


class RelationshipUserJob(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    id_job = db.Column(db.Integer, db.ForeignKey('job.id'), nullable=False)

    def __repr__(self):
        return f"<RelationshipUserJob {self.id}>"
