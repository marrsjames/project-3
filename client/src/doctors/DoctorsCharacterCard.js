import React from "react";
import images from "../images/index.js";

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
    <div className="doctors-wrapper">
      {doctors.map((doctor) => (
        <div className="doctor-card" key={doctor.name}>
          <div className="doctor-card-top">
            <img
              src={doctor.url}
              alt={doctor.image}
              loading="lazy"
              width="225"
              height="255"
            />
            <p>Name:{doctor.name}</p>
            <p>Biography:{doctor.bio}</p>
            <p>Appointments:{doctor.appointments}</p>
            <button>Click to make an appointment</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorsCharacterCard;
