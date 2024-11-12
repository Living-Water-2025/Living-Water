"use client";

import React, { useEffect, useRef } from 'react';

declare global {
    interface Window {
        google: any;
    }
}

export const Map: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadGoogleMapsScript = () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBMQeNeNZsjY4mHXExFMrInA-P8Od78goY`;
            script.async = true;
            script.onload = () => {
                if (window.google && mapRef.current) {
                    const map = new window.google.maps.Map(mapRef.current, {
                        zoom: 12,
                        center: { lat: 38.47, lng: -89.93 }, // Center on New York City
                    });

                    // Define multiple locations for markers
                    const locations = [
                        { lat: 38.60, lng: -89.50 }, // NYC
                        { lat: 38.45, lng: -89.60 }, // Brooklyn
                        { lat: 38.10, lng: -89.92 }, // Times Square
                        { lat: 38.30, lng: -89.93 }, // Wall Street
                        { lat: 38.47, lng: -89.80 }, // Empire State Building
                    ];

                    // Loop through the locations array and add markers
                    locations.forEach(location => {
                        new window.google.maps.Marker({
                            position: location,
                            map: map,
                            icon: {
                                path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                                scale: 5,
                                fillColor: '#ff0000',
                                fillOpacity: 0.8,
                                strokeWeight: 1,
                            },
                        });
                    });
                }
            };
            document.body.appendChild(script);
        };

        if (!window.google) {
            loadGoogleMapsScript();
        }
    }, []);

    return (
        <div>
            <h2>Google Maps with Multiple Markers</h2>
            <div ref={mapRef} style={{ height: '500px', width: '100%' }}></div>
        </div>
    );
};
