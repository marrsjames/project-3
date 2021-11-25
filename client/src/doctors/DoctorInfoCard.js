import React from "react";
import { Link } from "react-router-dom";

const DoctorInfoCard = ({ _id, name, bio, image }) => {
  console.log({ _id, name, bio, image });

  return (
    <Link to={`/doctors/${id}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={doctor.url} alt={doctor.image} loading="lazy" />
          </figure>
        </div>

        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/1280x960.png" />
              </figure>
            </div>

            <div class="media-content">
              <p class="title is-4">Doctor 1</p>
              <p class="subtitle is -6">@akerrins</p>
            </div>
          </div>

          <div class="content">
            Lorm ipsum ..................<a>@twitter</a>.<a href="#">#css</a>
            <a href="#">responsive</a>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default DoctorInfoCard;
