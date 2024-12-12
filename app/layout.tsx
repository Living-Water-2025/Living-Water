import type { Metadata } from "next";
import "./globals.css";
import { ColorTheme } from "@/components/ColorTheme";

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
          height: "90vh",
          width: "100%",
          backgroundColor: ColorTheme.backgroundColor,
          color: ColorTheme.backgroundColor,
        }}
      >
        {p.children}
      </body>
    </html>
  );
}
