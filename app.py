from flask import Flask, render_template
from routes import auth_bp, game_bp, main_bp   

app = Flask(__name__)

app.register_blueprint(main_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(game_bp) 

if __name__ == "__main__":
    app.run(debug=True)
