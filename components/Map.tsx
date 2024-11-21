"use client";

import { resolve } from "path";
import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    google: any;
  }
}

type BaptismLocation = {
  id: string;
  latitude: number;
  longitude: number;
};
 

export const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [locations, setLocations] = useState<BaptismLocation[]>([]);
  

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
      featureType: "administrative.land_parcel",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#bdbdbd" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [{ color: "#2c2c2c" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#8a8a8a" }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#373737" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#3c3c3c" }],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [{ color: "#4e4e4e" }],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [{ color: "#616161" }],
    },
    {
      featureType: "transit",
      stylers: [{ visibility: "off" }],
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

  const removeBusinessIcon = [
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }],
    },
  ];

  const initializeMap = () => {
    if (window.google && mapRef.current) {
      const mapOptions = {
        zoom: 12,
        center: { lat: 38.47, lng: -89.93 },
        mapTypeControl: false,
        streetViewControl: false,
        styles: [...removeBusinessIcon, ...darkModeStyles],
      };

      // Initialize the map with options
      const map = new window.google.maps.Map(mapRef.current, mapOptions);

      locations.forEach((location) => {
        new window.google.maps.Marker({
          position: { lat: location.latitude, lng: location.longitude },
          map: map,
          title: `Baptism ID: ${location.id}`,
          icon: {
            path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            scale: 5,
            fillColor: "#ff0000",
            fillOpacity: 0.8,
            strokeWeight: 1,
          },
        });
      });
    }
  };

  const fetchBaptisms = async () => {
    try {
      const response = await fetch("https://living-water-backend-dev.azurewebsites.net/api/GetAllBaptisms");
      const data: BaptismLocation[] = await response.json();
      setLocations(data);
    } catch (error) {
      console.error("Error fetching baptism locations:", error);
    }
  };

  useEffect(() => {
    fetchBaptisms();
  }, []);

  useEffect(() => {
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
  }, [locations]);

 

  return <div ref={mapRef} style={{ height: "500px", width: "100%" }} />;
};

