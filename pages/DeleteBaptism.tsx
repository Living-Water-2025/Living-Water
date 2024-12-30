"use client";

import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { BaptismAPI } from "@/components/API/BaptismAPI";
import { RootLayout } from "@/components/RootLayout";
import { Baptism } from "@/components/API/Models/Baptism";
import { darkModeStyles } from "@/components/Map/DarkModeStyles";
import { deleteMapOptions } from "@/components/Map/MapOptions";
import { AddBaptismMapPrompt } from "@/components/AddBaptismMap/AddBaptismMapPrompt";

const center = { lat: 38.427159, lng: -89.910406 };

export default function DeleteBaptism() {
  const [baptisms, setBaptisms] = useState<Baptism[]>([]);
  const [message, setMessage] = useState("");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
  });

  React.useEffect(() => {
    const fetchBaptisms = async () => {
      const baptismAPI = new BaptismAPI();
      const fetchedBaptisms = await baptismAPI.getBaptisms();
      setBaptisms(fetchedBaptisms);
    };
    fetchBaptisms();
  }, []);

  const handleDelete = async (id: string, password: string) => {
    try {
      const baptismAPI = new BaptismAPI();
      await baptismAPI.deleteBaptism(id, password);
      setBaptisms(baptisms.filter((baptism) => baptism.id !== id));
      setMessage("Baptism deleted successfully");
    } catch (error) {
      setMessage("Failed to delete baptism");
    }
  };

  const confirmDelete = (id: string) => {
    const password = prompt("Enter password to delete this baptism:");
    if (password) {
      handleDelete(id, password);
    }
  };

  if (!isLoaded || loadError) return <div>Loading...</div>;

  return (
    <RootLayout>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100vh",
        }}
        center={center}
        zoom={10}
        options={deleteMapOptions}
      >
        {baptisms.map((baptism) => (
          <Marker
            key={baptism.id}
            position={{ lat: baptism.latitude, lng: baptism.longitude }}
            onClick={() => confirmDelete(baptism.id)}
          />
        ))}
      </GoogleMap>
    </RootLayout>
  );
}
