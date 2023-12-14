import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getPost, deletePost } from "../services/posts.js";
import { getPostComments } from "../services/comments.js";
import Nav from "../components/Nav.jsx";

function DetailPage({ user }) {
  const [postData, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const { id } = useParams(); // Get the post ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    fetchComments();
    fetchPost();
  }, [id]);

  async function fetchPost() {
    try {
      const postData = await getPost(id);
      setPost(postData);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  }
  async function fetchComments() {
    try {
      const comments = await getPostComments(id);
      setComments(comments);
    } catch (error) {
      console.error("Error fetching comment details:", error);
    }
  }

  const handleDelete = async () => {
    try {
      await deletePost(id);
      navigate("/profile"); // Redirect to another page after deletion, e.g., home page
    } catch (error) {
      console.error("Error deleting the post:", error);
      // Handle errors as needed
    }
  };

  if (!postData) {
    return <div>Loading...</div>; // Or any other loading state
  }

  return (
    <div>
      <Nav user={user} />
      <div className="container mx-auto mt-8 pt-20">
        <div className="max-w-xl mx-auto bg-white rounded-xl border border-gray-300">
          <div className="flex items-center p-4">
            <img
              src={postData.user_profile.profile_pic_url}
              alt="Author Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <p className="font-semibold">
              {postData.user_profile.user.username}
            </p>
          </div>
          <img
            src={postData.image_url}
            alt="Post"
            className="w-full h-auto rounded-t-md"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold mb-2">{postData.details}</h1>
            {/* Comments section */}
            <div className="mb-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex mb-2">
                  <img
                    src={comment.user_profile.profile_pic_url}
                    alt="Commenter Profile"
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <div>
                    <p className="font-semibold">
                      {comment.user_profile.user.username}
                    </p>
                    <p className="text-sm">{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Delete post option */}
            <div>
              {user &&
              postData &&
              postData.user_profile.id === user.user_profile.id ? (
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-red-600"
                >
                  Delete Post
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;

{
  /*  { postData.user_profile.id === user.user_profile.id ?   
        <button onClick={handleDelete}>Delete Post</button> : null
    } */
}
