import React from "react";
import { ColorTheme } from "./ColorTheme";
export const AboutUs: React.FC = () => (
  <div className="rounded-lg shadow-md p-5 ">
    <p
      className="text-md leading-relaxed p-4 m-3 rounded-lg "
      style={{
        backgroundColor: ColorTheme.primaryColorSecondary,
      }}
    >
      This map is a testimony to the work the Lord is doing in our community.
      Each pin represents a member stepping forward in faith, being baptised,
      and becoming part of the family of God.
    </p>
    <p
      className="text-md leading-relaxed p-4 m-3 rounded-lg"
      style={{ backgroundColor: ColorTheme.primaryColorSecondary }}
    >
      As we journey together toward achieiving 1000 baptisms by 2025, we give
      thanks to all those who have participated - if you have questions or would
      like to learn more about our mission, please don't hesitate to reach out!
    </p>
  </div>
);
