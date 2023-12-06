import api from "./apiConfig";

export const getUserProfiles = async () => {
  try {
    const response = await api.get("/userProfiles/?format=json");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async (id) => {
  try {
    const response = await api.get(`/userProfiles/${id}?format=json`);
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
