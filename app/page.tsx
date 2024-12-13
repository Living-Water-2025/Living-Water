"use client";
import { useBaptisms } from "@/components/Hooks/useBaptisms";
import { Map } from "../components/Map/Map";
import { MapTitle } from "@/components/Map/MapTitle";
import ProgressBar from "@/components/ProgressBar/progressBar";
import { AboutUs } from "@/components/AboutUs";

export default function Home() {
  const baptisms = useBaptisms();
  return (
    <>
      {/*Map and title exist in the background and adds a screen-sized empty div over itself.*/}
      <MapTitle />
      <Map baptisms={baptisms} />

      <div className="w-4/5 flex flex-col mx-auto">
        <ProgressBar numBaptisms={baptisms.length} />
        <AboutUs />
      </div>
    </>
  );
}
