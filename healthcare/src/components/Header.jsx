import React from 'react';
import { Bell, Plus, ArrowRight } from 'lucide-react';
import '../styles/Header.css';
import profileImage from '../assets/user.png';

const Header = () => {
  return (
    <div className="top-bar">
      <input
        className="top-bar__search"
        type="search"
        placeholder="Type to search..."
      />
      <span className="top-bar__username">Dr. Prateek Sharma</span>
      <div className="top-bar__actions">
        <Bell className="top-bar__icon" />
        <button className="top-bar__add-btn">
          <Plus size={18} />
        </button>
        <img
          src={profileImage}
          alt="Profile"
          className="top-bar__avatar"
        />
        <ArrowRight className="top-bar__icon" />
      </div>
    </div>
  );
};

export default Header;
