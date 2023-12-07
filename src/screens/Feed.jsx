import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/posts.js';
import Post from '../components/Post.jsx';

function Posts(props) {
  // Log the props
  console.log(props);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const allPosts = await getPosts();
    setPosts(allPosts);
  }

  return (
    <div>
      <h1>Post</h1>
      <div className="post-container">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
