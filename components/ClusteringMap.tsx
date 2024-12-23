import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { MarkerClusterer } from "@react-google-maps/api";
import { mapOptions } from "./Map/MapOptions";
import { ClusteredBaptism } from "./API/Models/ClusteredBaptism";
import { Baptism } from "./API/Models/Baptism";

const center = { lat: 38.427159, lng: -89.910406 };

interface IClusteringMapProps {
  baptisms: Baptism[];
}

export const ClusteringMap: React.FC<IClusteringMapProps> = ({ baptisms }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
  });

  if (!isLoaded || loadError) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100vh" }}
      center={center}
      zoom={10}
      options={mapOptions}
    >
      <MarkerClusterer>
        {(clusterer) => (
          <>
            {baptisms.map((baptism) => (
              <Marker
                key={`${baptism.latitude}-${baptism.longitude}`}
                position={{ lat: baptism.latitude, lng: baptism.longitude }}
                clusterer={clusterer}
              />
            ))}
          </>
        )}
      </MarkerClusterer>
    </GoogleMap>
  );
};
