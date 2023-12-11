import './App.css';
import { useState, useEffect } from "react";
import Feed from '../src/screens/Feed.jsx'
import Profile from "../src/screens/Profile.jsx"
import SignUp from "../src/screens/SignUp.jsx"
import SignIn from "../src/screens/SignIn.jsx"
import getPosts from "./services/posts.js"
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav.jsx"
import { verifyUser } from "./services/users.js";
import { isAuthenticated } from '../src/services/authUtils.js';


function App () {

  return (
    <div className='App'>
      <Routes>
        {/* <Route path="/profile/:profileId" element={<Profile/>}/>  */}
        <Route path="/feed" element={<Feed/> }/>
        <Route path="/sign-up" element={<SignUp/> }/>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/sign-in" element={<SignIn/> }/>
      </Routes>
    </div>
  );
}

export default App;