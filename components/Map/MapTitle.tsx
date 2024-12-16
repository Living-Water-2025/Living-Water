import { ColorTheme } from "../ColorTheme";
import { hexWithOpacity } from "../Helpers/HexWithOpacity";
import { GiBigWave } from "react-icons/gi";

export const MapTitle = () => (
  <MapPopover>
    <h1 className="text-4xl font-thin px-3 py-1 flex row" style={{}}>
      <GiBigWave className="pr-3 text-slate-100" size={"2.5rem"} /> Flowing Hope
    </h1>
  </MapPopover>
);

const MapPopover = ({ children }: { children: React.ReactNode }) => (
  <div
    className={`absolute my-5 top-0 left-0 right-0 mx-auto p-1 shadow-md  rounded text-5xl font-thin z-10 bg-gray`}
    style={{
      alignItems: "center",
      fontFamily: "Roboto, System-ui",
      width: "fit-content",
      backgroundColor: hexWithOpacity(ColorTheme.primaryColor, 0.8),
    }}
  >
    {children}
  </div>
);
