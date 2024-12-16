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

const center = { lat: 38.427159, lng: -89.910406 };

const icon = {
  //  url:"https://e7.pngegg.com/pngimages/38/957/png-clipart-water-drop-logo-drop-rain-blog-drops-television-blue.png",
  path: 4,
  scale: 6,
  fillOpacity: 0.45,
  strokeWeight: 4,
  strokeColor: "#0000ff",
  fillColor: "#0000ff",
};

type MapProps = { baptisms: Baptism[] };
export const Map: React.FC<MapProps> = ({ baptisms }) => {
  const { isLoaded, loadError } = useGoogleMaps({
    googleMapsApiKey: "AIzaSyBMQeNeNZsjY4mHXExFMrInA-P8Od78goY",
  });

  if (!isLoaded || loadError) return <Spacer />;

  return (
    <>
      <div
        autoFocus={true}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "101.5vh" }}
          center={center}
          zoom={11}
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
      </div>
      <Spacer />
    </>
  );
};

const Spacer = () => (
  <div
    style={{
      margin: 0,
      width: "100%",
      height: "90vh",
    }}
  />
);
