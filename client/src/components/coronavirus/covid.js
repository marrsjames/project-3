import React, { useState, useEffect } from "react";
import { getCovidData } from "../../api/CovidApi";
import axios from "axios";

const postcodeValue = document.querySelector(`input[name='postcode']`);

const Covid = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const covidPostcode = {
    method: "GET",
    // url: `https://api.coronavirus.data.gov.uk/generic/code/postcode/${postcode}`,
  };

  axios
    .request(covidPostcode)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    const postcode = postcodeValue.value;
  };

  return (
    <>
      <div>
        <h1 className="title">Coronavirus Information</h1>
        {/* <h2>
          Travel guidance - link to an API? <br /> Sections with information{" "}
          <br />
          Hyperlink to our services for coranvirus vaccinations/testing/blah
        </h2> */}

        <div class="search-bar">
          <form onSubmit={handleSubmit}>
            <span>Find out more coronavirus info in your area: </span>
            <input
              type="text"
              placeholder="Enter your postcode"
              name="postcode"
              onChange={(event) => {
                setSearchQuery(event.target.value);
                console.log(event.target.value);
              }}
            ></input>
            <input type="submit" value="🔍"></input>
            <p>The number of cases today are: </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Covid;
