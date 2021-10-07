import React from "react";
const Doctor = (doctor) => {
  return (
    <div className="tile is-child is-primary">
      <h2 className="title">
        {doctor.name} ({doctor.bio})
      </h2>
      <p className="subtitle">
        {doctor.services} ({doctor.appointments})
      </p>
    </div>
  );
};
export default Doctor;
