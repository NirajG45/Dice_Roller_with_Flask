from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/roll')
def roll():
    number = random.randint(1, 6)
    return jsonify({'number': number})

if __name__ == '__main__':
    app.run(debug=True)
