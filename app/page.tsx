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
      <MapTitle />
      <Map baptisms={baptisms} />
      <ProgressBar numBaptisms={baptisms.length} />
      <AboutUs />
    </>
  );
}
