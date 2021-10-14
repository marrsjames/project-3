const axios = require("axios");
const covidArea = document.querySelector('input[name="area"]');
const covidURL = "https://api.coronavirus.data.gov.uk/v1/data";

const endpoint =
  "https://api.coronavirus.data.gov.uk/v1/data?" +
  "filters=areaType=nation;areaName=england&" +
  'structure={"date":"date","newCases":"newCasesByPublishDate"}';

export const getCovidData = async (url) => {
  const { data, status, statusText } = await axios.get(url, { timeout: 10000 });

  if (status >= 400) throw new Error(statusText);

  return data;
}; // getData

export const main = async () => {
  const result = await getCovidData(endpoint);
}; // main

main().catch((err) => {
  console.error(err);

  process.exitCode = 1;
});

// region / utla / ltla <= use postcode to find this using https://api.coronavirus.data.gov.uk/generic/code/postcode/[]%20[]
// newCasesBySpecimenDate
// newDeaths28DaysByDeathDate
// cumPeopleVaccinatedCompleteByPublishDate or cumPeopleVaccinatedCompleteByVaccinationDate
