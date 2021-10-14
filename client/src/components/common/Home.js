import React from "react";
import homepicSrc from "../../images/Homepage-Pic1.jpg";
import nhsInIT from "../../images/NHS-In-It-Together.jpg";
import practiceNurse from "../../images/practice-nurse.jpg";

const Home = () => {
  return (
    <section className="hero is-fullheight-with-navbar is-success">
      <div className="hero-body">
        <div className="title is-1 has-text-centered has-text-black">
          <h1>GA SURGERY</h1>
          <p>
            This is the homepage. We will have a picture of doctors smiling and
            laughing whilst jabbing patients.
          </p>

          <img src={homepicSrc} alt="" height="500" width="500" />
          <img src={nhsInIT} alt="" height="500" width="500" />
          <img src={practiceNurse} alt="" height="500" width="500" />
        </div>
      </div>
    </section>
  );
};

export default Home;
