from flask import Flask, jsonify, request
import calcWaves

app = Flask(__name__) #define app using Flask

@app.route("/")
def root():
  return "A web app to calc wave hight on clicked coordinates"

@app.route("/hmax", methods=["GET"])
def getHmaxByCoords():
  longitude = request.args["lng"]
  latitude = request.args["lat"]
  calc_hmax = calcWaves.findHmax(longitude, latitude)
  return jsonify(calc_hmax)

if __name__ == "__main__": #run app in debug mode
  app.run(debug=True)