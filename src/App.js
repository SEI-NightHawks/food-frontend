import './App.css';
import Feed from '../src/screens/Feed.jsx'
import Profile from "../src/screens/Profile.jsx"
import SignUp from "../src/screens/SignUp.jsx"
import SignIn from "../src/screens/SignIn.jsx"
import getPosts from "./services/posts.js"
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav.jsx"

const App = () => {
  const [user, setUser] = useState(null);
  const [showNav , setShowNav] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className='App'>
      {showNav? <Nav user={user}/>: null} 
      <Routes>
        {/* <Route path="/" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/profile/:profileId" element={<Profile/>}/> */}
        <Route path="/feed" element={<Feed/> setShowNav={setShowNav}/>}/>
        
      </Routes>
    </div>
  );
}

export default App;