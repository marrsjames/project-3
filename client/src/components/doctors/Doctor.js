import React from "react";
import images from "../../images/index.js";

const Doctor = (doctor) => {
  return (
    <div key={doctor.id} className="tile is-child is-primary">
      <h2 className="title">
        <img src={images["DrHibbert"]} alt={doctor.name} />
        {doctor.name} ({doctor.bio})
      </h2>
      <p className="subtitle">
        {doctor.services} ({doctor.appointments})
      </p>
    </div>
  );
};
export default Doctor;
