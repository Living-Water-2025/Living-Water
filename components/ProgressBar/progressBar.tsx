import React from "react";

type ProgressBarProps = {
  numBaptisms: number; // Progress percentage (0-100)
};

const ProgressBar: React.FC<ProgressBarProps> = ({ numBaptisms }) => {
  const goalBaptisms = 12;
  const percentComplete = (numBaptisms / goalBaptisms) * 100;
  return (
    <div className="rounded-lg shadow-md px-3 py-1">
      <div
        style={{
          width: "100%",
          background: "#e0e0e0",
          borderRadius: "10px",
          height: "20px",
        }}
      >
        <div
          style={{
            width: `${percentComplete}%`,
            background: "#29d",
            height: "100%",
            borderRadius: "10px",
            textAlign: "center",
            color: "#fff",
            lineHeight: "20px",
            fontWeight: "bold",
          }}
        >
          {numBaptisms} of {goalBaptisms}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
