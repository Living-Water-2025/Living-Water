export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        margin: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      {children}
    </div>
  );
}
