import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlaces, clearPlaces } from "./store/actions/places";
import { useLoadScript } from "@react-google-maps/api";
import Autocomplete from "react-google-autocomplete";
import Maps from "./components/Maps"


const API_KEY = "AIzaSyC68Uwodszje8PGGMA0DEWb5CI3zyiqmwo&";

function App() {
  const dispatch = useDispatch();
  const places = useSelector(state => state.places);
  const [autocomplete, setAutocomplete] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries: ['places']
  });


  useEffect(() => {
    if (autocomplete) {
      const listener = autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const location = place.geometry.location;
        dispatch(setPlaces({ place, location }));
      });
      return () => window.google.maps.event.removeListener(listener);
    }
  }, [autocomplete, dispatch]);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <Autocomplete
        onLoad={autocomplete => {
          setAutocomplete(autocomplete);
        }}
        onUnmount={() => {
          dispatch(clearPlaces());
        }}
      />
        <Maps places={places}></Maps>

    </div>
  );
}

export default App;