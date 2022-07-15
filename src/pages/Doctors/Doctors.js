import React from "react";
import "./Doctors.scss";
import { Helmet } from "react-helmet";

const Doctors = () => {
  return (
    <div>
      <Helmet>
        <title>Archiva | Doctors</title>
      </Helmet>
      <div className="outlet__doctors">
        <div className="doctor__header">
          <h3>Doctors</h3>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
