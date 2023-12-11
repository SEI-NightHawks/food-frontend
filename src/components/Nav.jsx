import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../services/authUtils';
import { useState } from 'react';

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

        <div className={`flex justify-between w-40 `}>
          <button
            className={`focus:outline-none text-white`}
            onClick={toggleDarkMode}
          >
            Dark Mode
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