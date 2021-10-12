import React from "react";
import images from "../images/index.js";
import { Link } from "react-router-dom";
import "../styles/styles.scss";

const doctorsCharactersEndpoint = "http://localhost:3000/api/doctors";

const DoctorsCharacterCard = () => {
  const [doctors, setDoctors] = React.useState([[]]);
  React.useEffect(() => {
    fetch(doctorsCharactersEndpoint)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  console.log(doctors);
  return (
    <div className="columns is-full is-3">
      {doctors.map((doctor) => (
        <div className="doctor-card" key={doctor.name}>
          <div className="doctor-card-top">
            <figure class="image is-1by1">
              <img src={doctor.url} alt={doctor.image} loading="lazy" />
            </figure>
            <div class="notification is-warning">
              <p>Name:{doctor.name}</p>
            </div>
            <div class="notification is-success is-light">
              <p>Biography:{doctor.bio}</p>
            </div>
            <p>Appointments:{doctor.appointments}</p>
            <button>Click to make an appointment</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorsCharacterCard;
