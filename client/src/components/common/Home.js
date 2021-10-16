import React from "react";
import homepicSrc from "../../images/HomepagePic1.jpeg";
import nhsInIt from "../../images/nhsInIt.jpeg";
import practiceNurse from "../../images/practice-nurse.jpeg";

const Home = () => {
  return (
    <section
      className="hero is-fullheight-with-navbar is-success
    "
    >
      <div className="hero-body">
        <div className="title is-1 has-text-centered has-text-black">
          <h1>
            <i class="fas fa-clinic-medical"></i>GA-ASSEMBLY SURGERY
            <i class="fas fa-laptop-medical"></i>
          </h1>
          <p>
            Welcome to GA-Surgery. We offer the best medical service in London.
            We look forward to meeting and treating you as our valued clients.
          </p>
          <div className="columns is-multiline">
            <div className="column">
              <figure className="images">
                <img src={homepicSrc} alt="picture of doctor with patient" />
                <div>
                  <p className="text">Professional service</p>
                </div>
              </figure>
            </div>
            <div className="column">
              <figure className="images">
                <img
                  src={nhsInIt}
                  alt="picture of doctor vaccinating a woman"
                />
                <p className="text">Caring staff</p>
              </figure>
            </div>
            <div className="column">
              <figure className="images" alt="picture of a practice nurse">
                <img src={practiceNurse} />
                <p className="text">Best medical care</p>
              </figure>
            </div>
            <div className="column">
              <figure className="map" alt="location">
                <iframe
                  className="googleMap"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8851884246096!2d-0.07479008428864761!3d51.515322317944914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb6078166ad%3A0xa02c6b7806328464!2sGeneral%20Assembly%20London!5e0!3m2!1sen!2suk!4v1634376543404!5m2!1sen!2suk"
                  loading="lazy"
                ></iframe>
                <p className="text">
                  Address:1st Floor, The Relay Building, 114 Whitechapel High
                  St, London E1 7PT
                </p>
                <p className="text">Telephone Number:+442033089506</p>
                <p className="text">
                  <i class="fas fa-globe">www.ga-surgery.com</i>
                </p>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
