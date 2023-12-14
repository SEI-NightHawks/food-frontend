import "./App.css";
import { useState, useEffect } from "react";
import Feed from "../src/screens/Feed.jsx";
import Profile from "../src/screens/Profile.jsx";
import SignUp from "../src/screens/SignUp.jsx";
import SignIn from "./screens/SignIn.jsx";
import { Route, Routes } from "react-router-dom";
import { verifyUser } from "./services/users.js";
import AddPost from "./screens/AddPost.jsx";
import DetailPage from "./screens/DetailPage.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [appToggle, setAppToggle] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await verifyUser();
      setUser(userData);
    };

    fetchUser();
  }, [appToggle]);

  return (
    <div className="App dark:bg-black">
      <Routes>
        <Route path="/profile" element={<Profile user={user} setAppToggle={setAppToggle}/>} />
        <Route path="/feed" element={<Feed user={user} />} />
        <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        <Route path="/" element={<SignIn setUser={setUser} />} />
        <Route path="/addpost" element={<AddPost user={user} />} />
        <Route path="/post/:id" element={<DetailPage setUser={setUser} user={user}/> }/>
      </Routes>
    </div>
  );
}

export default App;
