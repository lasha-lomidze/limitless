from flask import Blueprint, render_template

game_bp = Blueprint("games", __name__, url_prefix='/games')

@game_bp.route('/direction')
def direction_game():
    return render_template('games/direction.html')

@game_bp.route('/reaction')
def reaction_game():
    return render_template('games/reaction.html')

@game_bp.route('/aim')
def aim_game():
    return render_template('games/aim.html') 

@game_bp.route('/dot-estimation')
def dot_estimation_game():
    return render_template('games/dot-estimation.html')

@game_bp.route('/number-memory')
def number_memory_game():
    return render_template('games/number-memory.html')
