"use client";

import React from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript as useGoogleMaps, //@ts-ignore 
} from "react-google-maps/api"; 
import { mapOptions } from "@/components/Map/MapOptions";
import { RootLayout } from "@/components/RootLayout";
import { useUserLocation } from "@/components/Hooks/useUserLocation";
import { useSaveBaptism } from "@/components/Hooks/useSaveBaptism";
import { AddBaptismMapPrompt } from "@/components/AddBaptismMap/AddBaptismMapPrompt";
import { useApiKey } from "@/components/Hooks/useApiKey";

export default function AddBaptismMap() {
  const userLocation = useUserLocation();
  const saveBaptism = useSaveBaptism();
  const apiKey = useApiKey();

  const { isLoaded, loadError } = useGoogleMaps({
    googleMapsApiKey: "AIzaSyBMQeNeNZsjY4mHXExFMrInA-P8Od78goY",
  });

  if (!isLoaded || loadError || !userLocation) return <div>Please wait...</div>;

  return (
    <RootLayout>
      <AddBaptismMapPrompt
        onSubmit={() => {
          saveBaptism({
            latitude: userLocation.lat,
            longitude: userLocation.lng,
          } as any).then(() => {
            window.location.href = "/";
          });
        }}
      />

      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
        center={userLocation}
        zoom={14}
        options={mapOptions}
      >
        <Marker
          position={userLocation}
          title="Your Location"
          animation={google.maps.Animation.DROP}
        />
      </GoogleMap>
    </RootLayout>
  );
}
