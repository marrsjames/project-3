import React, { useState, useEffect } from "react";
import { getAllDoctors } from "../api/doctors";
import Doctor from "./Doctor";
import doc1Src from "../images/DrHibbert.jpeg";
import doc2Src from "../images/DrNickRiveria.jpeg";
import doc3Src from "../images/DrSnoopy.png";

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [availableNames, setAvailableNames] = useState([]);
  const [visibleName, setVisibleName] = useState(null);

  useEffect(() => {
    getAllDoctors().then((doctors) => setDoctors(doctors));
  }, []);

  useEffect(() => {
    const names = doctors
      .map((doctor) => doctor.name)
      .filter((name) => name !== null);
    setAvailableNames([...new Set(names)]);
  }, [doctors]);

  return (
    <>
      <h1>Our Team</h1>
      <div>
        {availableNames.map((name) => (
          <button onClick={() => setVisibleName(name)}>{name}</button>
        ))}
        <button onClick={() => setVisibleName(null)}>Reset</button>
      </div>
      <section className="tile wrap is-parent is-50">
        <h2>All the doctors</h2>
        <div>
          {doctors
            .filter((doctor) => !visibleName || doctor.name === visibleName)
            .map((doctor) => (
              <Doctor key={doctor._id} {...doctor} />
            ))}
          <img src={doc1Src} alt="Dr. Antony Long." />
          <img src={doc2Src} alt="Dr. James Marrs." />
          <img src={doc3Src} alt="Dr. Anne Kerrins." />
        </div>
      </section>
    </>
  );
};
export default AllDoctors;
