import React from 'react'
import {useEffect, useState} from 'react'
import {getPosts} from '../../src/services/posts.js'
import Post from '../components/Post.jsx'

function Posts(//{setShowNav}
  ) {
  // setShowNav(true)
    const [posts , setPosts] = useState([])

    useEffect(()=>{
      fetchPosts()
    }, []) //only fire this function one time 
  
    async function fetchPosts () {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    return (
      <div>
        <div className="posts-container">
          {
            posts.map((post)=>(
              <Post post={post} />
            ))
          }
        </div>
      </div>
    )
  }
export default Posts