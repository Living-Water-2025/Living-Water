import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { MarkerClusterer } from "@react-google-maps/api";
import { mapOptions } from "./Map/MapOptions";
import { Baptism } from "./API/Models/Baptism";

const center = { lat: 38.427159, lng: -89.910406 };

const icon = {
  path: 4,
  scale: 6,
  fillOpacity: 0.45,
  strokeWeight: 4,
  strokeColor: "#0000ff",
  fillColor: "#0000ff",
};

interface IClusteringMapProps {
  baptisms: Baptism[];
}

export const ClusteringMap: React.FC<IClusteringMapProps> = ({ baptisms }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
  });

  if (!isLoaded || loadError) return <div>Loading...</div>;

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
          zoom={10}
          options={mapOptions}
        >
          <MarkerClusterer>
            {(clusterer) => (
              <>
                {baptisms.map((baptism) => (
                  <Marker
                    key={baptism.id}
                    position={{ lat: baptism.latitude, lng: baptism.longitude }}
                    clusterer={clusterer}
                    icon={icon}
                    title={`Baptism ID: ${baptism.id}`}
                    animation={google.maps.Animation.DROP}
                  />
                ))}
              </>
            )}
          </MarkerClusterer>
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