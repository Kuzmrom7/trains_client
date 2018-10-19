import React from "react";

const BackgroundImage = ({ img, children }) => (
  <div
    style={{
      backgroundImage: `url(${img})`,
      height: "100vh",
      overflow: "hidden",
      backgroundSize: "cover"
    }}
  >
    {children}
  </div>
);

export default BackgroundImage;
