import "./styles.css";
import mapboxgl from './node_modules/mapbox-gl/dist/mapbox-gl.js';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.ACCESS_TOKEN;

function getHmaxByCoordsHandler(longitude, latitude) {
  fetch("/hmax?" + new URLSearchParams({ lng: longitude, lat: latitude }), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Printing calculated hmax:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

const map = new mapboxgl.Map({
  container: "map-container",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [10.723, 59.91],
  zoom: 7,
  position: "top-right",
});

map.on("click", (e) => {
  console.log("You clicked, coords:", e.lngLat);
  getHmaxByCoordsHandler(e.lngLat.lng, e.lngLat.lat);
});
