import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useEffect, useState } from "react";
import "./Map.css";
import "mapbox-gl/dist/mapbox-gl.css";
//import { createHmaxHandler } from './api';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function Map() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const [hmaxCords, setHmaxCords] = useState({ lng: null, lat: null });
  const [data, setData] = useState([{}]);

  // initialize board
  useEffect(() => {
    if (mapContainer.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [10.723, 59.91],
        zoom: 7,
        position: "top-right",
      });
    }
  });

  useEffect(() => {
    mapRef.current &&
      mapRef.current.on("load", () => {
        console.log("Load done");

      })
  }, []);

  useEffect(
    (e) => {
      mapRef.current &&
        mapRef.current.on("click", (e) => {
          console.log("You clicked, coords:", e.lngLat);
          let updatedValue = { lng: e.lngLat.lng, lat: e.lngLat.lat };
          setHmaxCords((hmaxCords) => (hmaxCords = { ...updatedValue }));
          //createHmaxHandler(hmaxCords.lng, hmaxCords.lat)
        });

    },
    [hmaxCords]
  );

  return (
    <div>
      <h1>Data calc map service</h1>
      <div ref={mapContainer} className={"map-container"} />
      {typeof data.hmax === "undefined" ? (
        <p>Loading...</p>
      ) : (
        <p>{data.hmax[0]}</p>
      )}
    </div>
  );
}
