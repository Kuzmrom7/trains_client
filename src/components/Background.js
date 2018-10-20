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

const BackgroundColor = ({ children }) => (
  <div
    style={{
      height: "100vh",
      overflow: "hidden",
      backgroundSize: "cover",
      backgroundColor: "#E1E5E5"
    }}
  >
    {children}
  </div>
);

export { BackgroundImage, BackgroundColor };
