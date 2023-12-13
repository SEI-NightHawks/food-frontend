import "./App.css";
import { useState, useEffect } from "react";
import Feed from "../src/screens/Feed.jsx";
import Profile from "../src/screens/Profile.jsx";
import SignUp from "../src/screens/SignUp.jsx";
import SignIn from "./screens/SignIn.jsx";
import { Route, Routes } from "react-router-dom";
import { verifyUser } from "./services/users.js";
import AddPost from "./screens/AddPost.jsx";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await verifyUser();
      setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Feed user={user} />} />
        <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        <Route path="/" element={<SignIn setUser={setUser} />} />
        <Route path="/addpost" element={<AddPost user={user} />} />
        <Route
          path="/profile"
          element={<Profile setUser={setUser} user={user} />}
        />
        <Route path="/feed" element={<Feed user={user} />} />
        <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        <Route path="/" element={<SignIn setUser={setUser} />} />
        <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
        <Route path="/addpost" element={<AddPost setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
