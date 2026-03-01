import axios from "axios";

const API = axios.create({
  baseURL: "https://fitpulse-home-workout-planner-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = (data: {
  name: string;
  email: string;
  password: string;
}) => API.post("/auth/register", data);

export const loginUser = (data: {
  email: string;
  password: string;
}) => API.post("/auth/login", data);