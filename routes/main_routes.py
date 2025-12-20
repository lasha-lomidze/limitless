from flask import Blueprint, render_template
from config import GAMES_DATA

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    return render_template('main/home.html', games=GAMES_DATA)

@main_bp.route('/leaderboard')
def leaderboard():
    return render_template('main/leaderboard.html')

@main_bp.route('/dashboard')
def dashboard():
    return render_template('main/dashboard.html')


"""
rank by popularity / hard of use
leaderboard also by mobile vs desktop
"""