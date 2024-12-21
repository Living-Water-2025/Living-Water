import { OverlayView } from "@react-google-maps/api";
import { Baptism } from "../API/Models/Baptism";
import { MdWaterDrop } from "react-icons/md";
import { ColorTheme } from "../ColorTheme";

export const BaptismMarker = ({ baptism }: { baptism: Baptism }) => {
  return (
    <OverlayView
      key={baptism.id + 2}
      position={{ lat: baptism.latitude, lng: baptism.longitude }}
      mapPaneName={OverlayView.OVERLAY_LAYER}
    >
      <WaterDropMarker />
    </OverlayView>
  );
};

const WaterDropMarker = () => (
  <div
    style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -88%)",
      width: "3rem",
      height: "3rem",
      animation: "drop-in 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      pointerEvents: "none",
    }}
  >
    <MdWaterDrop size={"3rem"} color={ColorTheme.primaryColorTertiary} />
  </div>
);
