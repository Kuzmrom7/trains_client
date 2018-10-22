import React from "react";

const BackgroundImage = ({ img, children }) => (
  <div
    style={{
      backgroundImage: `url(${img})`,
      height: "100vh",
      overflow: "auto",
      backgroundSize: "cover"
    }}
  >
    {children}
  </div>
);

const BackgroundColor = ({ children }) => (
  <div
    style={{
      height: "100vh",
      overflow: "hidden",
      backgroundSize: "cover",
      backgroundColor: "#B8B8B8"
    }}
  >
    {children}
  </div>
);

export { BackgroundImage, BackgroundColor };
