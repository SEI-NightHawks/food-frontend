import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../services/user_profiles.js';
import { getPost } from '../services/posts.js';
import { isAuthenticated } from '../services/authUtils.js';
import Nav from '../components/Nav.jsx'

function Profile() {
    const [user , setUser] = useState({ user: {} })
    console.log(user)

    useEffect(()=>{
        fetchUser()
      }, []) //only fire this function one time 
    
      async function fetchUser () {
        const user = await getUserProfile()
        setUser(user)
      }

  return (
    <div className="container mx-auto px-4">
         {/* <Nav user={user}/> */}
      <div className="w-40 h-40 overflow-hidden rounded-full border-4 border-white"></div>
      <h1 className="text-2xl font-bold">{user.user.username} Profile</h1>

      {/* Display user photos */}
      {/* <div className="grid grid-cols-3 gap-4 mt-8">
        {userPosts.slice(0, 9).map((photo) => (
          <img key={photo.id} src={photo.imageUrl} alt={`Photo ${photo.id}`} className="w-full h-auto" />
        ))}
      </div> */}
    </div>
  );
}

export default Profile;