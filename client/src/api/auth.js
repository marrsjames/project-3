import axios from "axios";

export const registerUser = (formData) => {
  return axios.post(`/api/register`, formData, {
    headers: { "Content-Type": "application/json" },
  });
};

export const loginUser = (formData) => {
  return axios.post(`/api/login`, formData, {
    headers: { "Content-Type": "application/json" },
  });
};
