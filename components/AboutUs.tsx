import React from "react";
import { ColorTheme } from "./ColorTheme";
export const AboutUs: React.FC = () => (
  <div>
    <div className="rounded-lg shadow-md p-5 ">
      <h2
        className="text-2xl font-bold mb-4 text-center"
        style={{ color: ColorTheme.primaryColorTertiary }}
      >
        About
      </h2>
      <p
        className="text-md leading-relaxed p-4 m-3 rounded-lg "
        style={{ backgroundColor: ColorTheme.primaryColor }}
      >
        This map is a testimony to the work the Lord is doing in our community.
        Each pin represents a member stepping forward in faith, being baptised,
        and becoming part of the family of God.
      </p>
      <p
        className="text-md leading-relaxed p-4 m-3 rounded-lg"
        style={{ backgroundColor: ColorTheme.primaryColor }}
      >
        As we journey together toward achieiving 100 baptisms by 2025, we give
        thanks to all those who have participated - if you have questions or
        would like to learn more about our mission, please don't hesitate to
        reach out!
      </p>
    </div>
  </div>
);
