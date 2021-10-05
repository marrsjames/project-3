const baseUrl = "http://localhost:3000/api";

export const registerUser = (formData) => {
  return axios.post(`${baseUrl}/register`, formData);
};
