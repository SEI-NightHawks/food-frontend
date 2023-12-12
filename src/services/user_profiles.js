import api from "./apiConfig";
import { jwtDecode } from "jwt-decode";

export const getUserProfiles = async () => {
  try {
    const response = await api.get("/userProfiles/?format=json");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async (user) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token available');
    }
    const decodedToken = jwtDecode(token);
    const userProfileId = decodedToken.user_id;
    console.log(userProfileId, "abewdfbsDWFCJUswhnfcjuhn")
    const response = await api.get(`/user/profile/`, {
      ...user,
      user_profile: userProfileId,
    });
    console.log(response);
    return response.data;



    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUserProfile = async (userProfile) => {
  try {
    const response = await api.post("/userProfiles/?format=json", userProfile);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (id, userProfile) => {
  try {
    const response = await api.put(`/userProfiles/${id}?format=json`, userProfile);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUserProfile = async (id) => {
  try {
    const response = await api.delete(`/userProfiles/${id}?format=json`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
