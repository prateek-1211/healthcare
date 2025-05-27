import React from 'react';
import { Link } from 'react-router-dom';
import menuItems from '../data/navigation';
import '../styles/Sidebar.css';

const Sidebar = ({ onSelect }) => {
  return (
    <aside className="menu-panel">
      <header className="menu-header">General</header>
      <nav>
        <ul className="menu-list">
          {menuItems.map((menu, index) => {
            const IconComponent = menu.icon;
            return (
              <li key={index} className="menu-entry" onClick={() => onSelect?.(menu.path)}>
                <Link to={menu.path} className="menu-link">
                  <IconComponent className="menu-icon" />
                  <span className="menu-label">{menu.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
