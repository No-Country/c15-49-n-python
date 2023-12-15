from .app import create_app
from http.server import BaseHTTPRequestHandler


class handler(BaseHTTPRequestHandler):
    app = create_app()
    app.run(debug=True)


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
