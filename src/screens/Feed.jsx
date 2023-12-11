import React from 'react'
import {useEffect, useState} from 'react'
import {getPosts} from '../../src/services/posts.js'
import Post from '../components/Post.jsx'
import Nav from '../components/Nav.jsx'

function Posts(//{setShowNav}
) {
  // setShowNav(true)
    const [posts , setPosts] = useState([])
    const latestPosts = [...posts].reverse();

    useEffect(()=>{
      fetchPosts()
    }, []) //only fire this function one time 
  
    async function fetchPosts () {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    return (
      <div className="flex flex-col">
        <Nav />
        <div className="posts-container pt-20 p-3">
        {
          latestPosts.map((post) => (
         <Post key={post.id} post={post} />
          ))
        }
        </div>
      </div>
    )
  }
  // return (
  //   <div>
  //     <div className="posts-container">
  //       {posts.map((post) => (
  //         <Post post={post} />
  //       ))}
  //     </div>
  //   </div>
  // );

export default Posts;
