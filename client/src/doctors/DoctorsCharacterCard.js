import React from "react";
import images from "../images/index.js";
//import { Link } from "react-router-dom";
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
    <div className="heading">
      <h1>
        <i class="fas fa-users">The team</i>
      </h1>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {doctors.map((doctor) => (
              <div className="column is-one-third">
                <div className="box">
                  <div className="card" key={doctor.name}>
                    <div className="card-header has-background-primary-light">
                      <h2>{doctor.name}</h2>
                      <h3>{doctor.qualifications}</h3>
                    </div>
                    <div className="card-image">
                      <figure className="image is-By1">
                        <img
                          className="is-square"
                          src="https://bulma.io/images/placeholder/128x128.png"
                          src={doctor.url}
                          alt={doctor.image}
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <div className="card-bio has-background-link-light">
                      <br />
                      <h4>
                        <u> Doctor Information:</u>
                        <br />
                        {doctor.bio}
                      </h4>
                      <br />
                      <h4>Appointments:{doctor.appointments}</h4>
                      <button className="button is-success is-hovered is-default is-outlined">
                        <span className="icon-text">
                          <span className="icon is-small">
                            <i class="fas fa-calendar-check"></i>
                          </span>
                          <span>
                            <a href="./appointments">
                              Click to book appointment.
                            </a>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsCharacterCard;

/* <div className="notification is-warning">
                <h2>Name:{doctor.name}</h2>
              </div>
 this code worked   from ln 17 - 54
 <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-one-third">
            {doctors.map((doctor) => (
              <div className="card">
                <div className="card-header">
                  <div
                    className="card-header-title notification is-success"
                    key={doctor.name}
                  >
                    <h1>Name:{doctor.name}</h1>
                  </div>
                  <div className="card-image">
                    <figure class="image is-1by1">
                      <img
                        src={doctor.url}
                        alt={doctor.image}
                        loading="lazy"
                        width="255"
                        height="255"
                      /> 
                    </figure>
                    <div class="notification is-success is-light">
                      <h3>Biography:{doctor.bio}</h3>
                    </div>
                    <h3>Appointments:{doctor.appointments}</h3>
                    <button className="button is-dark is-danger are-large is-outlined is-rounded">
                      Click to make an appointment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
              */
