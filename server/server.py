from flask import Flask
from findHmax import findHmax

app = Flask(__name__)
dbSet = set() # (lng, lat, hmax)


@app.route("/hmax", methods=["POST"])
def createHmaxCalc(lng, lat):
  lng = request.args.get("lng")
  lat = request.args.get("lat")
  hmax = findHmax(lng, lat)
  return dbSet.add({lng, lat, hmax}, )

@app.route("/hmax", methods=["GET"])
def getHmaxCalc():
  return dbSet


if __name__ == "__main__":
  app.run(debug=True)