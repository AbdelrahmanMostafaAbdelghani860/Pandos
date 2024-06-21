import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 52.494192425130684,
  lng: 13.446398310743678,
};

function Googlemaplocation() {
  return (
    <div className="w-full max-w-md mx-auto mt-16 p-2">
      <LoadScript googleMapsApiKey="AIzaSyB-9TP8Qq7N7orJ08ZiwLHUU2yqN5omwcs">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}></GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Googlemaplocation;
