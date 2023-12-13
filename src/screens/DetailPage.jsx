import React, { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getPost, deletePost } from '../services/posts';
import { getPostComments } from '../services/comments';

function DetailPage({user}) {
    const [postData, setPost] = useState(null);

  const { id } = useParams(); // Get the post ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the post details based on the ID and user profile ID
    // if (id && user?.user_profile?.id) {
      fetchPost(); // id, user?.user_profile.id
    //   console.log(id, user?.user_profile.id)
    // }
  }, [id]);


      async function fetchPost() {
        try {
          const postData = await getPost(id);
          setPost(postData);
        //   console.log(postData[0])
        } catch (error) {
          console.error('Error fetching post details:', error);
          // Handle errors as needed
        }
      }

  const handleDelete = async () => {
    try {
      await deletePost(id);
      Navigate('/'); // Redirect to another page after deletion, e.g., home page
    } catch (error) {
      console.error('Error deleting the post:', error);
      // Handle errors as needed
    }
  };

  if (!postData) {
    return <div>Loading...</div>; // Or any other loading state
  }

  return (
    <div>
      <h2>{postData.details}</h2>
       <img src={postData.image_url} alt={postData.details} />
    { postData.user_profile.id === user.user_profile.id ?   
        <button onClick={handleDelete}>Delete Post</button> : null
    }
    </div>
  );
}

export default DetailPage;