import './App.css';
import Feed from '../src/screens/Feed.jsx'
import Profile from "../src/screens/Profile.jsx"
import SignUp from "../src/screens/SignUp.jsx"
import SignIn from "../src/screens/SignIn.jsx"
import getPosts from "./services/posts.js"
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav.jsx"
import AddPost from './screens/AddPost.jsx';
import './App.css';


function App () {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/profile/:profileId" element={<Profile/>}/>
        <Route path="/feed" element={<Feed/> }/>
        <Route path="/addpost" element={<AddPost/> }/>
        
      </Routes>
    </div>
  );
}

export default App;