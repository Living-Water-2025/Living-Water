"use client";

import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { BaptismAPI } from "@/components/API/BaptismAPI";
import { RootLayout } from "@/components/RootLayout";
import { Baptism } from "@/components/API/Models/Baptism";

const PASSWORD = "secure1234"; // Hardcoded password
const center = { lat: 38.427159, lng: -89.910406 };

export default function DeleteBaptism() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [baptisms, setBaptisms] = useState<Baptism[]>([]);
  const [message, setMessage] = useState("");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
  });

  const handleLogin = async () => {
    if (password === PASSWORD) {
      setAuthenticated(true);
      const baptismAPI = new BaptismAPI();
      const fetchedBaptisms = await baptismAPI.getBaptisms();
      setBaptisms(fetchedBaptisms);
    } else {
      setMessage("Incorrect password");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const baptismAPI = new BaptismAPI();
      await baptismAPI.deleteBaptism(id);
      setBaptisms(baptisms.filter((baptism) => baptism.id !== id));
      setMessage("Baptism deleted successfully");
    } catch (error) {
      setMessage("Failed to delete baptism");
    }
  };

  const confirmDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this baptism?")) {
      handleDelete(id);
    }
  };

  if (!isLoaded || loadError) return <div>Loading...</div>;

  return (
    <RootLayout>
      {!authenticated ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl mb-4">Enter Password</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded mb-4"
          />
          <button onClick={handleLogin} className="p-2 bg-blue-500 text-white rounded">
            Login
          </button>
          {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl mb-4">Delete Baptism</h1>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "80vh" }}
            center={center}
            zoom={10}
          >
            {baptisms.map((baptism) => (
              <Marker
                key={baptism.id}
                position={{ lat: baptism.latitude, lng: baptism.longitude }}
                onClick={() => confirmDelete(baptism.id)}
              />
            ))}
          </GoogleMap>
          {message && <p className="mt-4">{message}</p>}
        </div>
      )}
    </RootLayout>
  );
}