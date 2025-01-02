import "@/app/globals.css";
import React from "react";
import { MapPopover } from "../MapPopover";

export const DeleteBaptismPrompt = () => {
  return (
    <MapPopover>
      <div
        className="text-3xl p-3 text-white shadow-md shadow-black bg-black bg-opacity-75"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <span className="p-4">Select a baptism to delete</span>
      </div>
    </MapPopover>
  );
};
