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
              <figure className="image1">
                <img src={homepicSrc} height="400px" width="400px" />
                <div>
                  <p className="text">Professional service</p>
                </div>
              </figure>
            </div>
            <div className="column">
              <figure className="images">
                <img src={nhsInIt} />
                <p className="text">Caring staff</p>
              </figure>
            </div>
            <div className="column">
              <figure className="images">
                <img src={practiceNurse} />
                <p className="text">Best medical care</p>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
