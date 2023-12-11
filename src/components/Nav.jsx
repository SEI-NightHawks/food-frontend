import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../services/authUtils';
import { useState } from 'react';
import { FiSun , FiMoon } from "react-icons/fi";

const Nav = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const loggedIn = isAuthenticated();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);  };

  const handleIndicator = (el) => {
    setActiveItem(el);
  };

  const items = [
    { text: "Home", activeColor: "#F87917" },
    { text: "Profile", activeColor: "#663399" },
  ];

  const renderLoggedInNavbar = () => (
    <div
      className={`text-center bg-gray-200 rounded-b-2xl shadow-sm mb-10 fixed top-0 w-full border-b-2 border-gray-300`}
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
        <img src="https://raw.githubusercontent.com/SEI-NightHawks/food-frontend/8655cab7f5affda7ecb0921a827b41434120dac5/src/Images/munch-meet-logo.png" />
        </Link>

        <div className={`flex justify-between w-40`}>
              <button
                className={`focus:outline-none ${darkMode ? 'text-black' : 'text-black'}`}
                onClick={toggleDarkMode}
              >
                {darkMode ? <FiSun className='text-xl'/> : <FiMoon className='text-xl'/>}
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
              <div className="w-14 h-14 overflow-hidden rounded-full border-4 border-white">
                {/* Replace with user image or icon */}
              </div>
            </Link>
            {dropdownVisible && (
              <div className="absolute top-full right-0 mt-2 py-2 w-48 bg-red-600 rounded-lg shadow-lg z-10">
                <Link
                  to="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-green-600"
                >
                  Welcome, {}
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
                <Link
                  to="/sign-out"
                  className="block px-4 py-2 text-gray-800 hover:bg-green-600"
                >
                  Sign Out
                </Link>
                {/* Add more dropdown items here */}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );

  const renderLoggedOutNavbar = () => (
    <nav className={`flex justify-between items-center pb-2 px-4 text-red-400 text-center bg-gray-200 rounded-b-2xl shadow-sm mb-10 fixed top-0 w-full border-b-2 border-gray-300`}>
       <Link
          to="#"
          className={`nav-item h-16 w-16 text-white`}
          onClick={(e) => {
            e.preventDefault();
            handleIndicator(items[0]);
          }}
        >
        <img src="https://raw.githubusercontent.com/SEI-NightHawks/food-frontend/8655cab7f5affda7ecb0921a827b41434120dac5/src/Images/munch-meet-logo.png" />
        </Link>

        <div className="flex flex-row p-2 gap-2">
           <button className='flex-1 text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mt-2 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
            <Link to="/sign-in">Sign In</Link>
          </button>
          <button className='flex-1 text-white w-40 bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium          rounded-lg text-sm px-5 py-1.5 text-center mt-2 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
            <Link to="/sign-up">Sign Up</Link>
          </button>
        </div>

    </nav>
  );
  return loggedIn ? renderLoggedInNavbar() : renderLoggedOutNavbar();
};
export default Nav;