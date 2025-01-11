'use client';
import './NavBar.css';

import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="synced">Synced</div>
      <button className="menu-button" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>
      <div className={`desktop-menu ${isOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
      </div>
      <div className="sign-buttons">
        <button className="sign-up">Try Now</button>
      </div>
    </nav>
  );
};

const NavItem = ({ item }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="nav-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <a href={item.href || '#'}>{item.label}</a>
      {item.children && isDropdownOpen && (
        <div className="dropdown">
          {item.children.map((child) => (
            <a key={child.label} href={child.href || '#'}>
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const NAV_ITEMS = [
  {
    label: 'Why Synced',
    children: [
      { label: 'Explore Design Work', href: '#' },
      { label: 'New & Noteworthy', href: '#' },
    ],
  },
  {
    label: 'Tutorial',
    children: [
      { label: 'Job Board', href: '#' },
      { label: 'Freelance Projects', href: '#' },
    ],
  },
];

export default NavBar;