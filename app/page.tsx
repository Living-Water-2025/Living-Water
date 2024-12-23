"use client";
import { useBaptisms } from "@/components/Hooks/useBaptisms";
import { ClusteringMap } from "@/components/ClusteringMap";
import { MapTitle } from "@/components/Map/MapTitle";
import ProgressBar from "@/components/ProgressBar/progressBar";
import { AboutUs } from "@/components/AboutUs";

export default function Home() {
  const baptisms = useBaptisms();
  return (
    <>
      {/*Map and title exist in the background and adds a screen-sized empty div over itself.*/}
      <MapTitle />
      <ClusteringMap baptisms={baptisms} />

      <div
        style={{
          padding: "1rem",
          background: "rgb(0,0,0, 0.5)",
        }}
        className="w-4/5 flex flex-col mx-auto"
      >
        <ProgressBar numBaptisms={baptisms.length} />
        <AboutUs />
      </div>
    </>
  );
}
