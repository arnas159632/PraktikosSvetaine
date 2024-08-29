from flask import Flask
from routes.main_routes import main_routes
from routes.admin_routes import admin_routes
from routes.auth_routes import auth_routes
from routes.document_routes import document_routes  # Ensure correct import

app = Flask(__name__)

app.config['SECRET_KEY'] = 'arnas'

# Register blueprints
app.register_blueprint(main_routes)
app.register_blueprint(admin_routes)
app.register_blueprint(auth_routes)
app.register_blueprint(document_routes)  # Register the document_routes blueprint

if __name__ == '__main__':
    app.run(debug=True)
