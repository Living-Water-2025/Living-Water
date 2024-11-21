"use client";

import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    google: any;
  }
}

const LocationMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Dark mode styles for Google Maps
  const darkModeStyles = [
    { elementType: "geometry", stylers: [{ color: "#212121" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#373737" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#3c3c3c" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#000000" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#3d3d3d" }],
    },
  ];

  // Function to request the user's location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  // Initialize the Google Map and show the user's location
  const initializeMap = () => {
    if (window.google && mapRef.current && userLocation) {
      const mapOptions = {
        zoom: 12,
        center: userLocation, // Center the map on the user's location
        mapTypeControl: false,
        streetViewControl: false,
        styles: darkModeStyles, // Apply dark mode styles to the map
      };

      // Initialize the map with options
      const map = new window.google.maps.Map(mapRef.current, mapOptions);

      // Add a marker at the user's location
      new window.google.maps.Marker({
        position: userLocation,
        map: map,
        title: "Your Location",
      });
    }
  };

  useEffect(() => {
    // Request the user's location on component mount
    getUserLocation();
  }, []);

  useEffect(() => {
    // Once the user's location is available, initialize the map
    if (userLocation) {
      const loadGoogleMapsScript = () => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBMQeNeNZsjY4mHXExFMrInA-P8Od78goY`;
        script.async = true;
        script.onload = initializeMap;
        document.body.appendChild(script);
      };

      if (!window.google) {
        loadGoogleMapsScript();
      } else {
        initializeMap();
      }
    }
  }, [userLocation]);

  return (
    <div style={{ backgroundColor: "#121212", color: "#e0e0e0", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#ffffff" }}>Your Location on the Map</h1>
      <div ref={mapRef} style={{ height: "500px", width: "100%" }} />
    </div>
  );
};

export default LocationMap;
