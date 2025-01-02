export const MapPopover = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute flex bottom-0 left-0 right-0 m-0 p-4 rounded-br-xl text-5xl font-thin z-40  justify-center">
      {children}
    </div>
  );
};
