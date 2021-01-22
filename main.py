import sqlite3
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/order')
def order():
    return render_template("order.html")

@app.route('/order_status')
def order_status():
    return render_template("order_status.html")

@app.route('/store_functions')
def store_functions():
    return render_template("store_functions.html")


if __name__ == "__main__":
    app.run(host="localhost", debug=True)