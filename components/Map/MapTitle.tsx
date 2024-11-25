export const MapTitle = () => (
  <MapPopover>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      Living Water
      <span className="text-3xl p-3 text-blue-400"> 2025 </span>
    </div>
  </MapPopover>
);

const MapPopover = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute top-0 left-0 m-0 p-4 shadow-md shadow-black rounded-br-xl text-5xl font-thin z-10 bg-black bg-opacity-75">
      {children}
    </div>
  );
};
