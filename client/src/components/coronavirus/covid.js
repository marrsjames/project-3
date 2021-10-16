import React from "react";
import { Link } from "react-router-dom";
import coronavirus from "../../images/coronavirus.jpg";

const Covid = () => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <Link to={`/coronavirus`}>
        <div className="card">
          <div className="card-header" />
          <h4 className="card-header-title">Hello SEI 21</h4>
        </div>
        <div className="card-image">
          <figure className="image is-1by1">
            <img
              src={coronavirus}
              alt={coronavirus}
              loading="lazy"
              width="225"
              height="225"
            />
          </figure>
        </div>

        <div className="card-content">
          <h5>{} data to go here</h5>
        </div>
      </Link>
    </div>
  );
};

export default Covid;
