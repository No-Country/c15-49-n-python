from flask import Blueprint, jsonify

api = Blueprint('api', __name__)


@api.route('/api/hello', methods=['GET'])
def get_resource():
    return jsonify({'data': 'Hello world!'})
