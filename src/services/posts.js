import api from "./apiConfig";
import { isAuthenticated } from "./authUtils";
import { jwtDecode } from "jwt-decode";

export const getPosts = async () => {
  try {
    const response = await api.get("/posts/?format=json");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserPosts = async (id) =>{
  try {
    const response = await api.get(`user/posts/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

//Use this for the post detail page :)
export const getPost = async (id) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token available');
    }
    const decodedToken = jwtDecode(token);
    const userProfileId = decodedToken.user_id;
    const response = await api.get(`user/posts/${id}/?format=json&user_profile=${userProfileId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    // const token = localStorage.getItem('token');
    // if (!token) {
    //   throw new Error('No token available');
    // }
    // const decodedToken = jwtDecode(token);
    // const userProfileId = decodedToken.user_id;
    // console.log(userProfileId, "abewdfbsDWFCJUswhnfcjuhn")
    const response = await api.post("/posts/", post);
    return response.data;

  } catch (error) {
    console.log("Error response data:", error.response.data);
    throw error;
  }
};

export const updatePost = async (id, post) => {
  try {
    const response = await api.put(`/posts/${id}?format=json`, post);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/posts/${id}?format=json`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
