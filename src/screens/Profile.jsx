import { useEffect, useState } from "react";
import { getUserPosts } from "../services/posts.js";
import Nav from "../components/Nav.jsx";

function Profile({ user }) {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const userPostsData = await getUserPosts(user.user_profile.id);
    setUserPosts(userPostsData);
  }

  return (
    <div>
      <Nav user={user} />
      <div className="container mx-auto p-4">
            <div className="flex items-center flex-col justify-center mt-20"> 
              <img
                src={user.user_profile.profile_pic_url}
                alt="/"
                className="rounded-full object-cover border-4 border-black h-44 w-44 mt-10"
              />
              <h1 className="text-2xl mt-5 text-black text-center font-bold">{user.user_profile.user.username}</h1>
            </div>
        <div className="grid grid-cols-3 gap-2 mt-8">
          {userPosts.map((photo) => (
            <div key={photo.id} className="aspect-w-1 aspect-h-1">
              <img
                src={photo.image_url}
                alt={`${photo.id}`}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
