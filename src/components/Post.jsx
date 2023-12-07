import React from 'react'
// import {Link} from 'react-router-dom'
// import "../css/Characters.css"

function Post({post}) {
  console.log(post)
  return (
    <div className="bg-white border-2 border-gray-300 rounded-3xl shadow-md max-w-md mx-auto my-4">
    {/* Header - User Info */}
    <div className="flex items-center p-4">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={post.image_url}
          // alt={post.details}
        />
        <span className="ml-2 font-semibold">{post.user_profile}</span>
    </div>
    {/* Image */}
        <img
              className="w-full object-cover"
              src={post.image_url}
              alt={post.details}
            />

      {/* Caption */}
      <div className="px-4 pb-2 flex justify-between p-4">
        <span className="font-semibold">{post.location}</span>
      </div>

      <div className="px-4 pb-2 ">
        <span className="font-semibold">{post.user_profile} </span>{post.details}
      </div>

    </div>
    // </Link>
  )
}

export default Post