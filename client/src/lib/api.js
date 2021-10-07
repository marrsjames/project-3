import axios from "axios";
import { getToken } from "./auth";

const baseUrl = "//localhost/3000/api";

export const getAllDoctors = () => {
  return axios.get(`${baseUrl}/cheeses`);
};

export const getSingleCheese = (id) => {
  return axios.get(`${baseUrl}/cheeses/${id}`);
};

export const createCheese = (formData) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

  return axios.post(`${baseUrl}/cheeses`, formData, requestConfig);
};

export const editCheese = (id, formData) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

  return axios.put(`${baseUrl}/cheeses/${id}`, formData, requestConfig);
};

export const deleteCheese = (id) => {
  const requestConfig = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

  return axios.delete(`${baseUrl}/cheeses/${id}`, requestConfig);
};

// AUTH METHODS

export const registerUser = (formData) => {
  return axios.post(`${baseUrl}/register`, formData);
};

export const loginUser = (formData) => {
  return axios.post(`${baseUrl}/login`, formData);
};
