"use client";

import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { BaptismAPI } from "@/components/API/BaptismAPI";
import { Baptism } from "@/components/API/Models/Baptism";
import { deleteMapOptions } from "@/components/Map/MapOptions";
import { RootLayout } from "@/components/RootLayout";
import { AddBaptismMapPrompt } from "@/components/AddBaptismMap/AddBaptismMapPrompt";
import { DeleteBaptismPrompt } from "@/components/DeleteBaptismMap/DeleteBaptismPrompt";

const center = { lat: 38.427159, lng: -89.910406 };

export default function DeleteBaptismMap() {
  const [baptisms, setBaptisms] = useState<Baptism[]>([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
  });

  useEffect(() => {
    const fetchBaptisms = async () => {
      const baptismAPI = new BaptismAPI();
      const fetchedBaptisms = await baptismAPI.getBaptisms();
      setBaptisms(fetchedBaptisms);
    };
    fetchBaptisms();
  }, []);

  const handleDelete = async (id: string, password: string) => {
    const baptismAPI = new BaptismAPI();
    const response = await baptismAPI.deleteBaptism(id, password);

    if (response.success) {
      setBaptisms(baptisms.filter((baptism) => baptism.id !== id));
      alert("'1' Baptism deleted successfully");
    } else {
      alert("Wrong Password. Try Again.");
    }
  };

  const confirmDelete = (id: string) => {
    const password = prompt("Enter password to delete this baptism:");
    if (password) {
      handleDelete(id, password);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;
  if (loadError) return <div>Error loading maps</div>;

  return (
    <RootLayout>
      <DeleteBaptismPrompt />
      <GoogleMap
        mapContainerStyle={{
          width: "100vw",
          height: "100%",
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
