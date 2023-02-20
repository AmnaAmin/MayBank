import React from "react";

import { GoogleMap, Marker } from "@react-google-maps/api";


const containerStyle = {
  width: "100vw",
  height: "100vh"
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};


function Maps(props) {
    let places = props.places.places
    return (
      <div style={containerStyle}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={8}
          center={center}
        >
          {places.map(place => <Marker key={place.id} position={place.location}/> )}
        </GoogleMap>
      </div>
  );
}

export default Maps;