import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
// import {Link} from 'react-router-dom'
// import "../css/Characters.css"

function Post({post}) {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-3xl shadow-md max-w-md mx-auto my-4">
    {/* Header - User Info */}
    <div className="flex items-center bg-magenta-100 rounded-t-3xl p-4">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={post.user_profile.profile_pic_url}
          // alt={post.details}
        />
        <span className="ml-2 font-semibold">{post.user_profile.user.username}</span>
    </div>
    {/* Image */}
        <img
              className="w-full object-cover"
              src={post.image_url}
              alt={post.details}
            />
      {/* Caption */}
      <div className="px-4 pb-2 flex justify p-4">
        <span className="flex items-center text-red-700 text-2xl"><HiLocationMarker /></span>
        <span className="flex items-center font-semibold">&nbsp;{post.location}</span>
      </div>

      <div className="px-4 pb-2 ">
        <span className="font-semibold">{post.user_profile.user.username} </span>{post.details}
      </div>

    </div>
    // </Link>
  )
}

export default Post