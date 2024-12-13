import React, { use, useEffect } from "react";
import { ColorTheme } from "../ColorTheme";
import { useShimmerAnimation } from "../Hooks/useShimmerAnimation";

type ProgressBarProps = {
  numBaptisms: number; 
};

const ProgressBar: React.FC<ProgressBarProps> = ({ numBaptisms }) => {
  const goalBaptisms = 4;
  const percentComplete = (numBaptisms / goalBaptisms) * 100;
  
  useShimmerAnimation()
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
          className="rounded-lg shimmer-effect"
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

