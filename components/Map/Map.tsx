"use client";
import React from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript as useGoogleMaps,
  //@ts-ignore
} from "@react-google-maps/api";
import { mapOptions } from "./MapOptions";
import { Baptism } from "../API/Models/Baptism";

const center = { lat: 38.627260, lng: -90.021368}; 

const icon = {
//  url:"https://e7.pngegg.com/pngimages/38/957/png-clipart-water-drop-logo-drop-rain-blog-drops-television-blue.png",
  path: 4,
  scale: 5,
  fillOpacity: 0.45,
  strokeWeight: 4,
  strokeColor: "#0000ff",
  fillColor: "#0000ff",
};

type MapProps = { baptisms: Baptism[]}
export const Map: React.FC<MapProps> = ( {baptisms}) => {
 

  const { isLoaded, loadError } = useGoogleMaps({
    googleMapsApiKey: "AIzaSyBMQeNeNZsjY4mHXExFMrInA-P8Od78goY",
  });

  if (!isLoaded || loadError) return <div>Please wait...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={center}
      zoom={12}
      options={mapOptions}
    >
      {baptisms.map((baptism) => (
        <Marker
          key={baptism.id}
          position={{ lat: baptism.latitude, lng: baptism.longitude }}
          title={`Baptism ID: ${baptism.id}`}
          icon={icon}
          animation={google.maps.Animation.DROP}
        />
      ))}
    </GoogleMap>
  );
};