import React from "react";
import { ColorTheme } from "../ColorTheme";

type ProgressBarProps = {
  numBaptisms: number; // Progress percentage (0-100)
};

const ProgressBar: React.FC<ProgressBarProps> = ({ numBaptisms }) => {
  const goalBaptisms = 12;
  const percentComplete = (numBaptisms / goalBaptisms) * 100;
  return (
    <div className="rounded-lg shadow-md p-1 bg-white">
      <div
        className="rounded-lg bg-gray-50"
        style={{
          width: "100%",
          height: "3vh",
        }}
      >
        <div
          className="rounded-lg"
          style={{
            width: `${percentComplete}%`,
            background: ColorTheme.primaryColor,
            height: "100%",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {numBaptisms && `${numBaptisms} of ${goalBaptisms}`}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
