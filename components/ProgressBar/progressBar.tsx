import React, { use, useEffect } from "react";
import { ColorTheme } from "../ColorTheme";
import { useShimmerAnimation } from "../Hooks/useShimmerAnimation";

type ProgressBarProps = {
  numBaptisms: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ numBaptisms }) => {
  const goalBaptisms = 200;
  const percentComplete = (numBaptisms / goalBaptisms) * 100;

  useShimmerAnimation();

  return (
    <div>
      <div
        style={{
          marginRight: "1rem",
          textAlignLast: "right",
          color: ColorTheme.textColorLight,
        }}
      >
        {percentComplete.toFixed(0)}% Complete
      </div>
      <Bar
        percentComplete={percentComplete}
        numBaptisms={numBaptisms}
        goalBaptisms={goalBaptisms}
      />
    </div>
  );
};

export default ProgressBar;

type BarProps = {
  percentComplete: number;
  goalBaptisms: number;
  numBaptisms: number;
};

const Bar: React.FC<BarProps> = ({
  percentComplete,
  goalBaptisms,
  numBaptisms,
}) => (
  <div
    style={{
      background: ColorTheme.backgroundColorSecondary,
      width: "100%",
      height: "1.5rem",
      borderRadius: "0.5rem /* 8px */",
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
      {numBaptisms}
    </div>
  </div>
);
