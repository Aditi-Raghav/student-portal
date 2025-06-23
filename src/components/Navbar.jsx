// src/components/Navbar.js
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navbar({ user, onLogout, darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 bg-white dark:bg-[#1f1f1f] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Left: Brand */}
        <div className="text-2xl font-bold text-purple-700 dark:text-white">
        Student Portal
        </div>
      
       {/* Middle: Nav links */}
       <div className="flex gap-6">
        <NavLink to="/" className={({ isActive }) => `text-lg font-medium dark:text-white ${
        isActive ? 'underline text-purple-900' : 'text-purple-700'}`}>HOME</NavLink>
        <NavLink to="/users" className={({ isActive }) => `text-lg font-medium dark:text-white ${
        isActive ? 'underline text-purple-900' : 'text-purple-700'}`}>USERS</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => `text-lg font-medium dark:text-white ${
        isActive ? 'underline text-purple-900' : 'text-purple-700'}`}>DASHBOARD</NavLink>
       </div>

        {/* Right: Auth + Login/Logout */}
        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <span className="flex items-center space-x-2 text-base text-purple-700 dark:text-white font-semibold">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png"  alt={`${user.name} avatar`} className="w-7 h-7 rounded-full object-cover"/>
                <span className="uppercase">{user.name}</span>
              </span>

              <button onClick={handleLogout} className="text-base text-red-500 hover:underline font-medium"> LOGOUT </button>
            </>
          ) : (
            <Link to="/login" className="text-base text-purple-700 dark:text-white hover:underline font-medium"> LOGIN </Link>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 px-4 py-2 text-base border rounded border-purple-700 text-purple-700 hover:bg-purple-100 dark:border-white dark:text-white dark:bg-[#2f2f2f] dark:hover:bg-[#555] font-medium uppercase"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;