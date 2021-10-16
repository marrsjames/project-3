import axios from "axios";
// import { getToken } from '../lib/auth'

export const getAllAppointments = async () => {
  const options = { method: "GET", url: "/api/appointments" };

  const { data } = await axios.request(options);
  return data;
};

export const createAppointment = (formData) => {
  const options = {
    method: "POST",
    data: formData,
    url: "/api/appointments",
    // headers: { Authorization: `Bearer ${getToken()}` },
  };
  return axios(options);
};

export const getSingleAppointment = async (id) => {
  const options = { method: "GET", url: `/api/appointments/${id}` };

  const { data } = await axios.request(options);
  return data;
};

export const editAppointment = async (id, formData) => {
  console.log(`This is the id`, id);
  const options = {
    method: "PUT",
    data: formData,
    url: `/api/appointments/${id}/edit`,
  };

  console.log(`${id}`);

  return axios(options);
};

export const deleteAppointment = async (id) => {
  const options = {
    method: "DELETE",
    url: `/api/appointments/${id}`,
  };

  return axios(options);
};
