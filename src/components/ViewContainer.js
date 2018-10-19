import React from "react";

const ViewContainer = ({ children }) => (
  <div className="container d-flex h-100 ">
    <div className="row align-self-center w-100">
      <div className="col-12 mx-auto ">{children}</div>
    </div>
  </div>
);

export default ViewContainer;
