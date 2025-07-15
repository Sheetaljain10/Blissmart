// axiosConfig.js
import axios from "axios";
import { API_BASE_URL } from "../config/Config";

const instance = axios.create({
  baseURL: API_BASE_URL,
});

instance.interceptors.request.use((config) => {
  const publicPaths = [
    "/api/auth/register",
    "/api/auth/login",
    "/api/auth/upload-image",
  ];
  const isPublic = publicPaths.some((path) => config.url.includes(path));

  if (!isPublic) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default instance;
