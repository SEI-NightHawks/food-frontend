import React from 'react'
import {useEffect, useState} from 'react'
import {getPosts} from '../../src/services/posts.js'
import Post from '../components/Post.jsx'
import Nav from '../components/Nav.jsx'

function Posts({user}) {
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
        <Nav user={user.user_profile}/>
        <div className="posts-container pt-20 p-3 md:mt-6 lg:mt-6">
        {
          latestPosts.map((post) => (
         <Post key={post.id} post={post} />
          ))
        }
        </div>
      </div>
    )
  }
export default Posts