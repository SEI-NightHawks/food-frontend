import React, { useEffect, useState } from "react";
import { getPosts } from "../../src/services/posts.js";
import Post from "../components/Post.jsx";
import Nav from "../components/Nav.jsx";

function Posts({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []); //only fire this function one time

  async function fetchPosts() {
    const allPosts = await getPosts();
    const latestPosts = [...allPosts].reverse();
    setPosts(latestPosts);
  }

  return (
    <div className="flex flex-col">
      <Nav user={user} />
      <div className="posts-container pt-20 p-3 md:mt-6 lg:mt-6">
        {posts.map((post) => (
          <Post key={post.id} post={post} user={user?.user_profile} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
