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

@game_bp.route('/sound-localization')
def sound_localization_game():
    return render_template('games/sound-localization.html')

"""
# ^ Reaction Time: one time based
# 2. Sequence Memory Test
#    Scoring: highest sequence length reached before a mistake
# ^ Aim Trainer: Scoring: total targets hit in 30s and accuracy %
# ? 4. Number Memory: Scoring: longest number correctly recalled
# 5. Verbal Memory
#    Scoring: total correct “seen/unseen” decisions before 3 mistakes
# 6. Chimp Test
#    Scoring: highest level where all numbers are clicked in order
# 7. Visual Memory Grid
#    Scoring: highest grid size successfully recalled
# 8. Typing Speed / Burst Typing
#    Scoring: words per minute or characters per second (depending on mode)
# 9. Image Recall (show image → ask details).
#    Scoring: percentage of correct answers to detail questions
# ^ Direction Test (arrow up/down/left/right → respond fast): countdown based
# 11. Tracking Test (follow moving dot with mouse)
#     Scoring: time-on-target percentage
# 12. Number Comparison (which of two numbers is bigger?)
#     Scoring: accuracy and reaction time combined
#     Final score = accuracy% * (1 / avg_time)
# 13. Stroop Color Test (word color vs text meaning)
#     Scoring: accuracy% * (1 / avg_incongruent_reaction_time)
# 14. Sequence Completion (IQ-style number sequences → next number)
#     Scoring: total correct answers before time runs out or mistake limit reached
# 15. Dot Estimation (guess quantity from 100–500 random dots)
#     Scoring: average absolute error (lower = better)
# 16. Pitch Memory (3 tones → which one changed?)
#     Scoring: longest streak of correct identifications
# 17. Rhythm Reproduction (tap spacebar to reproduce rhythm)
#     Scoring: similarity score (0–100) based on timing deviation from the pattern
# 18. Sound Localization (audio plays → left or right?)
#     Scoring: percentage of correct responses
# 19. Continuous Performance Test (press only when “X” appears)
#     Scoring: hits - false alarms
# 20. Probability Guess (spinner or probability wheel → guess percentage)
#     Scoring: average error between guess and true probability (lower = better)
"""