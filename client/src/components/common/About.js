import React from "react";
import bloodTest from "../../images/blood-test.jpg";
import generalCheckup from "../../images/general-checkup.jpg";
import travelVaccinations from "../../images/vaccinations.png";
import covidTest from "../../images/covid-test.jpg";
import stdTest from "../../images/stiTest.jpg";
import wartRemoval from "../../images/wart-removal.jpg";
const About = () => {
  return (
    <section className="hero is-fullheight-with-navbar is-success">
      <div className="hero-body">
        <div className="title is-1 has-text-centered has-text-black">
          <h1>
            <i class="fas fa-clinic-medical"></i>GA-ASSEMBLY SURGERY
            <i class="fas fa-laptop-medical"></i>
          </h1>
          <div ClassName="container">
            <div className="columns is-multiline">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <article class="tile is-child notification is-link">
                      <p className="title">General checkup</p>
                      <p className="subtitle">Dr. James Marrs</p>
                      <figure className="image is-4by3">
                        <img src={generalCheckup} />
                      </figure>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article class="tile is-child notification is-link">
                      <p className="title">Blood tests</p>
                      <p className="subtitle">Dr. Antony Long</p>
                      <figure className="image is-4by3">
                        <img src={bloodTest} />
                      </figure>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article class="tile is-child notification is-link">
                      <p className="title">Travel vaccinations</p>
                      <p className="subtitle">Dr. Tom Briody</p>
                      <figure className="image is-4by3">
                        <img src={travelVaccinations} />
                      </figure>
                    </article>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <article class="tile is-child notification is-link">
                      <p className="title">Covid test/vaccination</p>
                      <p className="subtitle">Dr. Arjun Doel</p>
                      <figure className="image is-4by3">
                        <img src={covidTest} />
                      </figure>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article class="tile is-child notification is-link">
                      <p className="title">STD testing</p>
                      <p className="subtitle">Dr. Anne Kerrins</p>
                      <figure className="image is-4by3">
                        <img src={stdTest} />
                      </figure>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article class="tile is-child notification is-link">
                      <p className="title">Wart removal</p>
                      <p className="subtitle">Dr. Doogie Howser</p>
                      <figure className="image is-4by3">
                        <img src={wartRemoval} />
                      </figure>
                    </article>
                  </div>
                </div>
                <p>
                  Now this is a story all about how <br />
                  Our life got flipped turned upside down
                  <br />
                  And we'd like to take a minute, just sit right there
                  <br />
                  We'll tell you how we built this project called SEI Surgery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
