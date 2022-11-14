from flask import Flask, render_template, request
import sys

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/CreateStore", methods=['POST'])
def Store_result():
    if request.method == 'POST':
        result = request.form
        name=result['storename']
        location=result['location']
        # time
        phonenumber=result['phonenumber']
        category = result['food']
        #주차장
        #가격대
        site = result['site']
        print(name, location, phonenumber, category,site)

        img_file = request.files['file']
        img_file.save("./flask-server/static/img/"+ img_file.filename)
        print(img_file)

        return render_template("result.html", result=result)

'''
@app.route("/CreateMenu", methods=['POST'])
def Menu_result():
    if request.method == 'POST':
        name=request.form['menuname']
        price=request.form['price']
        nutrient=request.form['nutrient']
        print(name, price, nutrient)

        img_file = request.files['file']
        img_file.save("./flask-server/static/img/"+img_file.filename)
        print(img_file)

        return render_template("index.html")
'''



if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)

