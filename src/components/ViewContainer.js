import React from "react";

const ViewContainer = ({ children }) => (
  <div className="container d-flex h-100 mt-2 ">
    <div className="row justify-content-center w-100">
      <div className="col-12 mx-auto ">{children}</div>
    </div>
  </div>
);

export default ViewContainer;
