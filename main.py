import sqlite3
from flask import Flask, render_template, redirect, url_for, request
import json

app = Flask(__name__)

# Main pages
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


# db routes

@app.route('/submit_order', methods=['POST'])
def submit_order():
    # Get the order and add to the database
    
    raw_data = request.get_data()
    pizza_list = json.loads(raw_data)


    return redirect(url_for('order_status'))


if __name__ == "__main__":
    app.run(host="localhost", debug=True)