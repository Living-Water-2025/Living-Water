
import React from "react";

type ProgressBarProps = {
  progress: number; // Progress percentage (0-100)
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div style={{ width: "100%", background: "#e0e0e0", borderRadius: "10px", height: "20px" }}>
      <div
        style={{
          width: `${progress}%`,
          background: "#29d",
          height: "100%",
          borderRadius: "10px",
          textAlign: "center",
          color: "#fff",
          lineHeight: "20px",
          fontWeight: "bold",
        }}
      >
        {progress.toFixed(0)}%
      </div>
    </div>
  );
};

export default ProgressBar;
