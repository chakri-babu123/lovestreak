import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Heart,
  Gift,
  MessageCircle,
  User,
  Bell
} from 'lucide-react';

import './css/Navbar.css';

function CustomNavbar() {
  const hasNotification = true; // Set this dynamically as needed

  return (
    <div className="bottom-navbar">
      <NavLink to="/" className={({ isActive }) => 'nav-icon' + (isActive ? ' active' : '')}>
        <Home size={20} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/streaks" className={({ isActive }) => 'nav-icon' + (isActive ? ' active' : '')}>
        <Heart size={20} />
        <span>Streak</span>
      </NavLink>
      <NavLink to="/feeds" className={({ isActive }) => 'nav-icon' + (isActive ? ' active' : '')}>
        <Gift size={20} />
        <span>Feed</span>
      </NavLink>
      <NavLink to="/chat" className={({ isActive }) => 'nav-icon notification-icon' + (isActive ? ' active' : '')}>
        <div className="icon-wrapper">
          <MessageCircle size={20} />
           {hasNotification && <span className="notification-dot"></span>}
        </div>
        <span>Chat</span>
      </NavLink>

      {/* Notification menu with red dot */}
      <NavLink to="/notifications" className={({ isActive }) => 'nav-icon notification-icon' + (isActive ? ' active' : '')}>
        <div className="icon-wrapper">
          <Bell size={20} />
          {hasNotification && <span className="notification-dot"></span>}
        </div>
        <span>Notify</span>
      </NavLink>

      <NavLink to="/userprofileview" className={({ isActive }) => 'nav-icon ' + (isActive ? ' active' : '')}>
        <User size={20} />
        <span>Profile</span>
      </NavLink>
    </div>
  );
}

export default CustomNavbar;
