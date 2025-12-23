from flask import Flask, render_template
from routes.auth_routes import auth_bp  
from routes.game_routes import game_bp
from routes.main_routes import main_bp
import models
import os

if not os.path.exists('instance'):
    os.makedirs('instance')

app = Flask(__name__)

app.register_blueprint(main_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(game_bp) 

with app.app_context():
    models.Base.metadata.create_all(bind=models.engine)

if __name__ == "__main__":
    app.run(debug=True)
