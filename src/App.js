import "./App.css";
import Feed from "../src/screens/Feed.jsx";
import Profile from "../src/screens/Profile.jsx";
import SignUp from "../src/screens/SignUp.jsx";
// import SignIn from "../src/screens/SignIn.jsx"
import SignInCopy from "../src/screens/SignInCopy.jsx";
import getPosts from "./services/posts.js";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignInCopy />} />
        {/* <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/profile/:profileId" element={<Profile/>}/> */}
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
