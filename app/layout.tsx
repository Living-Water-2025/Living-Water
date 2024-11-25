import type { Metadata } from "next";
import "./globals.css";
import { RootLayout } from "@/components/RootLayout";
import { ChildProcess } from "child_process";

export const metadata: Metadata = {
  title: "Living Water 2025",
  description: "Living Water 2025",
};

export default function Root(p: { children: React.ReactNode }) {
  return (
    <html>
      <body
        style={{
          margin: 0,
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
        }}
      >
        {p.children}
      </body>
    </html>
  );
}
