import "@/app/globals.css";
import React from "react";

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

const MapPopover = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute flex bottom-0 left-0 right-0 m-0 p-4 rounded-br-xl text-5xl font-thin z-40  justify-center">
      {children}
    </div>
  );
};
