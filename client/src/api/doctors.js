import axios from "axios";

export const getAllDoctors = async () => {
  const options = { method: "GET", url: `/api/doctors` };
  const { data } = await axios.request(options);
  return data;
};
export const getDoctor = async (id) => {
  const options = { method: "GET", url: "/api/doctors/${id}" };
  const { data } = await axios.request(options);
  return data;
};
