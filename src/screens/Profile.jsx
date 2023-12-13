import { useEffect, useState } from "react";
import { getUserPosts } from "../services/posts.js";
import Nav from "../components/Nav.jsx";
import { useNavigate } from "react-router-dom";
import { navigate } from 'react-router-dom';


function Profile({ user }) {
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [user]);

  async function fetchPosts() {
    if (!user) return;
    const userPostsData = await getUserPosts(user?.user_profile.id);
    setUserPosts(userPostsData);
  }
  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
    console.log(postId);
}
  if (!user) return <h1>Loading...</h1>;

  return (
    <div>
      <Nav user={user?.user_profile} />
      <div className="container mx-auto p-4">
            <div className="flex items-center flex-col justify-center mt-20"> 
              <img
                src={user?.user_profile.profile_pic_url}
                alt="/"
                className="rounded-full object-cover border-4 border-black h-44 w-44 mt-10"
              />
              <h1 className="text-2xl mt-5 text-black text-center font-bold">{user.user_profile.user.username}</h1>
            </div>
        <div className="grid grid-cols-3 gap-2 mt-8">
          {userPosts.map((photo) => (
            <div key={photo.id} className="aspect-w-1 aspect-h-1" onClick={() => handlePostClick(photo.id)}>
              <img
                src={photo.image_url}
                alt={`${photo.id}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
