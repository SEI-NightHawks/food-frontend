import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../services/authUtils';
import { useState } from 'react';
import { signOut } from '../services/users';


const Nav = ({user}) => {
  const [activeItem, setActiveItem] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const loggedIn = isAuthenticated();
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  let navigate = useNavigate()

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);  };

  const handleIndicator = (el) => {
    setActiveItem(el);
  };

  const handleSignOut = async (e) => {
    await signOut()
    navigate("/sign-in")
  }

  const items = [
    { text: "Home", activeColor: "#F87917" },
    { text: "Profile", activeColor: "#663399" },
  ];

  const renderLoggedInNavbar = () => (
    <div
      className={`backdrop-blur-sm text-center bg-red-200 bg-opacity-30 rounded-b-2xl shadow-lg mb-10 fixed top-0 w-full border-b-1 border-gray-300`}
    >
      <nav
        className={`flex justify-between items-center p-2 sm:p-4 text-white`}
      >
        <Link
          to="#"
          className={`nav-item h-16 w-16 text-white`}
          onClick={(e) => {
            e.preventDefault();
            handleIndicator(items[0]);
          }}
        >
        <img src="https://github.com/SEI-NightHawks/food-frontend/blob/develop/src/Images/logo.png?raw=true" />
        </Link>

        <div className={`flex justify-between w-40 `}>
          <button
            className={`focus:outline-none text-white`}
            onClick={toggleDarkMode}
          >
            {/* Dark Mode */}
          </button>
          <div className="relative">
            <Link
              to="#"
              className={`nav-item text-white`}
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
                handleIndicator(items[1]);
              }}
            >
              <div className="w-14 h-14 overflow-hidden rounded-full shadow-lg">
                <img className='w-full h-full object-cover' src={user?.profile_pic_url} alt={user?.user_profile?.user?.username}/>
              </div>
            </Link>
            {dropdownVisible && (
              <div className="absolute top-full right-0 mt-2 py-2 w-48 bg-red-600 rounded-lg shadow-lg z-10">
                <Link
                  to="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-green-600"
                >
                  Welcome, {user?.user_profile?.user?.username}
                </Link>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-green-600"
                >
                  Profile
                </Link>
                <Link
                  to="/add-post"
                  className="block px-4 py-2 text-gray-800 hover:bg-green-600"
                >
                  Add Post
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block px-4 py-2 text-gray-800 hover:bg-green-600"
                >
                  Sign Out
                </button>
                {/* Add more dropdown items here */}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );

  const renderLoggedOutNavbar = () => (
    <nav>
      <ul>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );

  return loggedIn ? renderLoggedInNavbar() : renderLoggedOutNavbar();
};

export default Nav;