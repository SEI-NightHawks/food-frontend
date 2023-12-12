import api from "./apiConfig";
import { jwtDecode } from "jwt-decode";

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/users/register/", credentials);
    const token = resp.data.access;
    console.log(resp.data)
    localStorage.setItem('token', token);
    const user = jwtDecode(token);
    return user;
  } catch (error) {
    console.error("Sign-up error:", error);
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/users/login/", credentials);
    localStorage.setItem("token", resp.data.access);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (passwords, user) => {
  try {
    const resp = await api.post("/");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await api.get("/users/verify/");
    return res.data;
  }
  return false;
};