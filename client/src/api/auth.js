import axios from "axios";

const baseUrl = "http://localhost:3000";

export const registerUser = (formData) => {
  return axios.post(`${baseUrl}/api/register`, formData, {
    headers: { "Content-Type": "application/json" },
  });
};

export const loginUser = (formData) => {
  return axios.post(`${baseUrl}/login`, formData, {
    headers: { "Content-Type": "application/json" },
  });
};

// await fetch("/api/register/", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     email,
//     password,
//   }),
// });
