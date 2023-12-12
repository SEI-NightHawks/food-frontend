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
      }, [])
    
      async function fetchUser () {
        const user = await getUserProfile()
        setUser(user)
      }


      return (
        <div>
          <Nav user={user}/> 
          <div className="container mx-auto p-4">
            <div className="flex items-center flex-col justify-center mt-20"> {/* Using flex-col to stack elements */}
              <img
                src={user.profile_pic_url}
                alt="/"
                className="rounded-full object-cover border-4 border-black h-44 w-44 mt-10"
              />
              <h1 className="text-2xl mt-5 text-black text-center font-bold">{user.user.username}</h1>
            </div>
          </div>
          <div className='container pt-8 max-w-5xl'>
            <div className="grid grid-cols-3 border-black">
          </div>

      </div>
    </div>
  );
}

export default Profile;