import api from "./apiConfig";

export const getPostComments = async (post_id) => {
  try {
    const response = await api.get(`/posts/${post_id}/comments/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getComment = async (id) => {
  try {
    const response = await api.get(`/comments/${id}?format=json`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (post_id, comment) => {
  try {
    const response = await api.post(
      `/posts/${post_id}/comments/create/`,
      comment
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (id) => {
  try {
    const response = await api.delete(`/comments/${id}?format=json`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
