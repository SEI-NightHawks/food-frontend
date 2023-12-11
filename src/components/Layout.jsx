import React, { useState, useEffect } from 'react';
import Nav from './Nav'; // Import your Navbar component
const Layout = ({ children }) => {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [activeItem, setActiveItem] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleIndicator = (el) => {
    const newStyle = {
      width: `${el.offsetWidth}px`,
      left: `${el.offsetLeft}px`,
      backgroundColor: el.getAttribute('active-color'),
    };
    setIndicatorStyle(newStyle);
    setActiveItem(el);
  };
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  useEffect(() => {
    const indicator = document.querySelector('.nav-indicator');
    const items = document.querySelectorAll('.nav-item');
    const dropdownContent = document.getElementById('dropdown-content');
    const dropdownToggle = document.querySelector('.dropdown > .nav-item');
    const handleIndicator = (el) => {
      items.forEach((item) => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
      });
      indicator.style.width = `${el.offsetWidth}px`;
      indicator.style.left = `${el.offsetLeft}px`;
      indicator.style.backgroundColor = el.getAttribute('active-color');
      el.classList.add('is-active');
      el.style.color = el.getAttribute('active-color');
    };
    const toggleDropdown = () => {
      dropdownContent.classList.toggle('show-dropdown');
    };
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target === dropdownToggle) {
          toggleDropdown();
        } else {
          handleIndicator(e.target);
        }
      });
      item.classList.contains('is-active') && handleIndicator(item);
    });
  }, []); // Empty dependency array to run the effect only once on mount
  return (
    <div className="layout-container">
      <Nav
        indicatorStyle={indicatorStyle}
        activeItem={activeItem}
        dropdownVisible={dropdownVisible}
        handleIndicator={handleIndicator}
        toggleDropdown={toggleDropdown}
      />
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};
export default Layout