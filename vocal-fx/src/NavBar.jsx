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
        <button className="try-now">Try Now</button>
      </div>
    </nav>
  );
};

const NavItem = ({ item }) => {
  return (
    <div className="nav-item">
      <a href={item.href || '#'}>{item.label}</a>
    </div>
  );
};

const NAV_ITEMS = [
  { label: 'Why Synced', href: '#' },
  { label: 'Tutorial', href: '#' },
];

export default NavBar;