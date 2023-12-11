import './App.css';
import { useState, useEffect } from "react";
import Feed from '../src/screens/Feed.jsx'
import Profile from "../src/screens/Profile.jsx"
import SignUp from "../src/screens/SignUp.jsx"
import SignIn from "./screens/SignIn.jsx"
import getPosts from "./services/posts.js"
import AddPost from './screens/AddPost.jsx';
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav.jsx"
import { verifyUser } from "./services/users.js";
import { isAuthenticated } from '../src/services/authUtils.js';


function App () {
  const [user, setUser] = useState(null);
  const [showNav, setShowNav] = useState (false)

  return (
    <div className='App'>
      {showNav? <Nav user={user}/>: null} 
      <Routes>
        {/* <Route path="/profile/:profileId" element={<Profile/>}/>  */}
        <Route path="/feed" element={<Feed/> }/>
        <Route path="/sign-up" element={<SignUp setUser={setUser}/> }/>
        <Route path="/" element={<SignIn setUser={setUser}/>}/>
        <Route path="/sign-in" element={<SignIn setUser={setUser}/> }/>
        <Route path="/addpost" element={<AddPost setUser={setUser} setShowNav={setShowNav}/> }/>
      </Routes>
    </div>
  );
}

export default App;