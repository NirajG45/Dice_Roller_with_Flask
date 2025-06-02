from flask import Flask, render_template, jsonify, session
import random
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'dice-secret-key'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/roll', methods=['GET'])
def roll_dice():
    dice_value = random.randint(1, 6)
    roll_time = datetime.now().strftime("%H:%M:%S")

    if 'history' not in session:
        session['history'] = []

    session['history'].insert(0, {'value': dice_value, 'time': roll_time})
    session['history'] = session['history'][:5]  # keep last 5 rolls

    return jsonify({
        'value': dice_value,
        'history': session['history']
    })

if __name__ == '__main__':
    app.run(debug=True)
