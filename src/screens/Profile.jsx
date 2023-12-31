import { useEffect, useState } from "react";
import { getUserPosts } from "../services/posts.js";
import { updateUserProfile } from "../services/user_profiles.js";
import Nav from "../components/Nav.jsx";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { GoShare } from "react-icons/go";
import { FaFacebookMessenger } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Profile({ user, setAppToggle }) {
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState([]);
  const [profile_pic_url, setProfile_pic_url] = useState("")
  const [toggleEdit, setToggleEdit] = useState(false)

  useEffect(() => {
    fetchPosts();
  }, [user]);

  async function fetchPosts() {
    if (!user) return;
    const userPostsData = await getUserPosts(user?.user_profile.id);
    setUserPosts(userPostsData);
    setProfile_pic_url(user?.user_profile?.profile_pic_url)
    user.user_profile.posts_count = userPostsData.length;
  }
  
  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
    console.log(postId);
  }

  const [toggleState, setToggleState] = useState("posts");

  const handleToggle = (value) => {
    setToggleState(value);
  };

  const handleProfileEditSubmit = async (e) => {
    e.preventDefault()
    await updateUserProfile({profile_pic_url})
    setToggleEdit(false)
    setAppToggle(prev => !prev)
  }

  if (!user) return <h1>Loading...</h1>;

  return (
    <div>
      <Nav user={user} />
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center mt-20">
          <div className="flex flex-row">
            <div className="mr-10">
              <img
                src={user?.user_profile.profile_pic_url}
                alt="/"
                className="rounded-full object-cover border-4 border-black h-44 w-44 mt-10"
              />
            </div>
            <div>
              <h1 className="text-4xl mt-5 text-black dark:text-white text-center font-bold">
                {user.user_profile.user.username}
              </h1>
              <p className="mt-2 text-black text-center">Posts: {user.user_profile.posts_count}</p>
              <div className="flex flex-row items-center justify-center mt-5">
                  <button className=" m-2 bg-black hover:bg-red-400 text-white font-bold py-1 px-2  rounded-xl transform transition duration-500 ease-in-over hover:scale-105 md:block hidden">
                    Message
                  </button>
                  <button className="m-2 bg-black hover:bg-red-400 text-white font-bold py-1 px-2 rounded-xl transform transition duration-500 ease-in-over hover:scale-105 md:hidden block">
                      <FaFacebookMessenger size={20} />
                  </button>

               <Link to="/">
                  <button className="m-2 bg-black hover:bg-red-400 text-white font-bold py-1 px-2 rounded-xl transform transition duration-500 ease-in-over hover:scale-105 md:block hidden">
                      Share Profile
                  </button>
                  <button className="m-2 bg-black hover:bg-red-400 text-white font-bold py-1 px-2 rounded-xl transform transition duration-500 ease-in-over hover:scale-105 md:hidden block">
                      <GoShare  size={20} />
                  </button>
                </Link>
                <button onClick={() => setToggleEdit(prev => !prev)} className=" m-2 bg-black hover:bg-red-400 text-white font-bold py-1 px-2  rounded-xl transform transition duration-500 ease-in-over hover:scale-105 md:block hidden">
                    Edit Profile
                </button>
                <button className="m-2 bg-black hover:bg-red-400 text-white font-bold py-1 px-2 rounded-xl transform transition duration-500 ease-in-over hover:scale-105 md:hidden block">
                    <CiEdit size={20} />
                </button>
              </div>
              {toggleEdit && 
                <div>
                  <form onSubmit={handleProfileEditSubmit} className="mb-4">
                    <input 
                      type="text"
                      name="profile_pic_url"
                      placeholder="update profile pic"
                      value={profile_pic_url}
                      onChange={(e) => setProfile_pic_url(e.target.value)}
                      className="border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-red-400"
                    />
                    <button className="bg-red-400 text-black dark:text-white py-2 px-4 rounded-md" type="submit">Update Profile Image</button>
                  </form>
                </div>
              }
            </div>
          </div>
        </div>
        <div className="text-center mt-5 text-xl text-black font-bold border-b-4 pb-4">
          <button 
            className={`${
              toggleState === "posts" 
                ? "bg-black text-white p-1" 
                : "bg-white text-black"
            } transition-colors duration-200 mx-2 rounded-xl  hover:bg-red-400`}
            onClick={() => handleToggle("posts")}
          >
            Your Posts  
          </button>
          <button 
            className={`${
              toggleState === "likes" 
                ? "bg-red-400 text-white p-1" 
                : "bg-white text-black"
            } transition-colors duration-200 mx-2 rounded-xl  hover:bg-red-400`}
            onClick={() => handleToggle("likes")}
          >
            Likes
          </button>
        </div>
        {toggleState === 'posts' ? (
          <div className="grid grid-cols-3 gap-2 mt-8">
            {userPosts
              .slice()
              .reverse()
              .map((photo) => (
                <div key={photo.id} className="aspect-w-1 aspect-h-1" onClick={() => handlePostClick(photo.id)}>
                  <img
                    src={photo.image_url}
                    alt={`${photo.id}`}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110
                    hover:opacity-80"
                  />
                </div>
              ))}
          </div>
        ) : null}
    </div>
    </div>
  )}
  
  export default Profile