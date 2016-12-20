import os

from flask import Flask
from flask import render_template
from flask import send_file


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/flights/')
def flights():
    return send_file('data/flights.json')

if __name__ == '__main__':
    app.run('0.0.0.0', int(os.getenv('PORT', 3000)))
