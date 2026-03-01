import axios from "axios";

const API = "http://localhost:5000/api/auth";

export const loginUser = (data: { email: string; password: string }) => {
  return axios.post(`${API}/login`, data);
};

export const registerUser = (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return axios.post(`${API}/register`, data);
};