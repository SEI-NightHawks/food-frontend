// import React from 'react'
// import {useEffect, useState} from 'react'
// // import {getDishes} from '../services/dishes.js'
// import Post from '../components/Post.jsx'

// function Posts( //{setShowNav}
// ) {
// //   setShowNav(true)
//     const [posts , setPosts] = useState([])

//     useEffect(()=>{
//       fetchPosts()
//     }, []) //only fire this function one time 
  
//     async function fetchPosts () {
//       const allPosts = await getPosts()
//       setPosts(allPosts)
//     }
  
//     return (
//       <div>
//         <h1>Post</h1>
//         <div className="post-container">
//           {
//             posts.map((post)=>(
//               <Post post={post} />
//             ))
//           }
//         </div>
//       </div>
//     )
//   }
// export default Post