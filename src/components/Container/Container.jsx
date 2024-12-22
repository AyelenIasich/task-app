import React from "react";
import "./Container.css";

function Container({ children }) {
  return (
    <section className="container-fluid bg-container">
      <div className="row">
        <div className="col-12 col-sm-11 col-md-8 col-lg-6 mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
}
import "./Container.css";

export default Container;
