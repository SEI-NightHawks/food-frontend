import './App.css';
import Feed from '../src/screens/Feed.jsx'
import Profile from "../src/screens/Profile.jsx"
import SignUp from "../src/screens/SignUp.jsx"
import SignIn from "../src/screens/SignIn.jsx"
import getPosts from "./services/posts.js"
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/profile/:profileId" element={<Profile/>}/>
        
      </Routes>
    </div>
  );
}

export default App;