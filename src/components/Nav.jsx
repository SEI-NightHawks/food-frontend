import React, { useState } from "react";
import {NavLink} from 'react-router-dom'

const Nav = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleIndicator = (el) => {
    setActiveItem(el);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const items = [
    { text: "Home", activeColor: "#F87917" },
    { text: "Profile", activeColor: "#663399" },
  ];

  return (
    <div
      className={`text-center bg-green-500 rounded-b-2xl shadow-md mb-10 fixed top-0 w-full ${
        darkMode ? "dark" : ""
      }`}
    >
  
      <nav
        className={`flex justify-between items-center p-2 sm:p-4 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >

        <a
          href="#"
          className={`nav-item text-white`}
          active-color="#F87917"
          onClick={(e) => {
            e.preventDefault();
            handleIndicator(items[0]);
          }}
        >
          Home
        </a>

        <div className={`flex justify-between w-40 `}>  
          {/* for the light n dark mode w/ dropdown */}
        <button
          className={`focus:outline-none ${
            darkMode ? "text-white" : "text-black"
          }`}
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}  
        </button>
        <div className="relative">
          <a
            href="#"
            className={`nav-item text-white`}
            active-color="#663399"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
              handleIndicator(items[1]);
            }}
          >
            <div className="w-14 h-14 overflow-hidden rounded-full border-4 border-white">
              {/* // needs to be replaced by image */}
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            > */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
              {/* </svg> */}
            </div>
          </a>
          {dropdownVisible && (
            <div className="absolute top-full right-0 mt-2 py-2 w-48 bg-red-600 rounded-lg shadow-lg z-10">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-green-600"
              >
                Welcome, {}
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-green-600"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-green-600"
              >
                Add Post
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-green-600"
              >
                Sign Out
              </a>
              {/* Add more dropdown items here */}
            </div>
          )}
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;