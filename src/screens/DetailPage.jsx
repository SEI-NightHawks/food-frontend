import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getPost, deletePost } from "../services/posts";
import { getPostComments } from "../services/comments";

function DetailPage({ user }) {
  const [postData, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  console.log(postData);
  console.log(comments);
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
      Navigate("/"); // Redirect to another page after deletion, e.g., home page
    } catch (error) {
      console.error("Error deleting the post:", error);
      // Handle errors as needed
    }
  };

  if (!postData) {
    return <div>Loading...</div>; // Or any other loading state
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
        <div className="flex items-center mb-4">
          <img
            src={postData.user_profile.profile_pic_url}
            alt="Author Profile"
            className="w-10 h-10 rounded-full mr-2"
          />
          <p className="font-semibold">{postData.user_profile.user.username}</p>
        </div>

        <img
          src={postData.image_url}
          alt="Post"
          className="mb-4 rounded-md shadow-md"
        />
        <h1 className="text-1xl font-semibold mb-4">{postData.details}</h1>
        <div className="border-t-2 border-gray-200 my-6" />

        {/* Comments section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Comments</h2>
          {comments.map((comment) => (
            <div key={comment.id} className="mb-4">
              <div className="flex items-center mb-2">
                <img
                  src={comment.user_profile.profile_pic_url}
                  alt="Commenter Profile"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <p className="font-semibold">
                  {comment.user_profile.user.username}
                </p>
              </div>
              <p>{comment.comment}</p>
            </div>
          ))}

          <div className="mt-8">
          {postData.user_profile.id === user.user_profile.id ? (
            <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600">Delete Post</button>
          ) : null}
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
