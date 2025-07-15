import { toast } from "react-toastify";

export const isTokenValid = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 > Date.now();
  } catch (err) {
    console.error("Invalid token");
    return false;
  }
};

export const logoutUser = () => {

  localStorage.removeItem("token");
  const duration = 3000;
  toast.warn("Session expired. Please log in again.", {
    autoClose: duration,
  });

  setTimeout(() => {
    window.location.reload(); // or navigate to login page
  }, duration);
};
