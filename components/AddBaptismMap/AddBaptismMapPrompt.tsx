import "@/app/globals.css";
import React from "react";
import { MapPopover } from "../MapPopover";

interface IAddBaptismMapPrompt {
  onSubmit: () => void;
}

export const AddBaptismMapPrompt = (p: IAddBaptismMapPrompt) => {
  const [submitEnabled, setSubmitEnabled] = React.useState(true);

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
        <span className="p-4">Add a baptism here?</span>
        <button
          disabled={!submitEnabled}
          onClick={() => {
            setSubmitEnabled(false);
            p.onSubmit();
          }}
          className="p-4 bg-blue-400 rounded-xl"
        >
          Submit{" "}
        </button>
      </div>
    </MapPopover>
  );
};
