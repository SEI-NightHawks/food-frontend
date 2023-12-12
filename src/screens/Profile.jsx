import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../services/user_profiles.js";
import { getUserPosts } from "../services/posts.js";
import { isAuthenticated } from "../services/authUtils.js";
import Nav from "../components/Nav.jsx";

function Profile() {
  const [user, setUser] = useState({ user: {} });
  const [userPosts, setUserPosts] = useState([]);
  console.log(user);

<<<<<<< HEAD
    useEffect(()=>{
        fetchUser()
      }, [])
    
      async function fetchUser () {
        const user = await getUserProfile()
        setUser(user)
      }


      return (
        <div>
          <Nav user={user}/> 
          <div className="container mx-auto p-4">
=======
  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, []); //only fire this function one time

  async function fetchUser() {
    const user = await getUserProfile();
    setUser(user);
  }
  async function fetchPosts() {
    const userPosts = await getUserPosts();
    setUserPosts(userPosts);
  }

  return (
    <div>
      <Nav user={user} />
      <div className="container mx-auto p-4">
>>>>>>> 1190bc0c93c6514767d5a0c7db8cb38a1a6e7c72
            <div className="flex items-center flex-col justify-center mt-20"> {/* Using flex-col to stack elements */}
              <img
                src={user.profile_pic_url}
                alt="/"
                className="rounded-full object-cover border-4 border-black h-44 w-44 mt-10"
              />
              <h1 className="text-2xl mt-5 text-black text-center font-bold">{user.user.username}</h1>
            </div>
<<<<<<< HEAD
          </div>
          <div className='container pt-8 max-w-5xl'>
            <div className="grid grid-cols-3 border-black">
          </div>

=======
        {/* Display user photos */}
        <div className="grid grid-cols-3 gap-2 mt-8">
          {userPosts.map((photo) => (
            <div key={photo.id} className="aspect-w-1 aspect-h-1">
              <img
                src={photo.image_url}
                alt={`Photo ${photo.id}`}
                className="object-cover"
              />
            </div>
          ))}
        </div>
>>>>>>> 1190bc0c93c6514767d5a0c7db8cb38a1a6e7c72
      </div>
    </div>
  );
}

export default Profile;
