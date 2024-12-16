import { ColorTheme } from "../ColorTheme";
import { hexWithOpacity } from "../Helpers/HexWithOpacity";

export const MapTitle = () => (
  <MapPopover>
    <h1 className="text-4xl font-thin px-3 py-1" style={{}}>
      Flowing Hope 2025
    </h1>
  </MapPopover>
);

const MapPopover = ({ children }: { children: React.ReactNode }) => (
  <div
    className={`absolute my-5 top-0 left-0 right-0 mx-auto p-2 shadow-md  rounded text-5xl font-thin z-10 bg-gray bg-opacity-100`}
    style={{
      fontFamily: "Roboto, System-ui",
      width: "fit-content",
      backgroundColor: hexWithOpacity(ColorTheme.primaryColor, 0.75),
    }}
  >
    {children}
  </div>
);
