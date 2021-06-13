from flask import Flask, render_template

app = Flask(__name__)

@app.route("/title")
@app.route("/")
def title():
    return render_template("title.html")

@app.route("/lvl1")
def lvl1():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)