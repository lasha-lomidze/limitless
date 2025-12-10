from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('main/home.html')

@app.route('/leaderboard')
def leaderboard():
    return render_template('main/leaderboard.html')

@app.route('/dashboard')
def dashboard():
    return render_template('main/dashboard.html')

@app.route('/signup')
def signup():
    return render_template('auth/signup.html')

@app.route('/login')
def login():
    return render_template('auth/login.html')

@app.route('/direction-game')
def direction_game():
    return render_template('games/direction-game.html')

@app.route('/reaction-game')
def reaction_game():
    return render_template('games/reaction-game.html')

if __name__ == "__main__":
    app.run(debug=True)


"""
# ^ Reaction Time: one time based
# 2. Sequence Memory Test
#    Scoring: highest sequence length reached before a mistake
# 3. Aim Trainer
#    Scoring: total targets hit in 30s and accuracy %
#    Final score = hits * accuracy
# 4. Number Memory
#    Scoring: longest number correctly recalled
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


"""
rank by popularity / hard of use
leaderboard also by mobile vs desktop
"""