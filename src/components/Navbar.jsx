import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navbar({ user, onLogout, darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 bg-white dark:bg-[#1f1f1f] shadow-md z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex items-center justify-between w-full md:w-auto">
        <div className="text-2xl font-bold text-purple-700 dark:text-white mr-4">
          Student Portal
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base border rounded border-purple-700 text-purple-700 hover:bg-purple-100 dark:border-white dark:text-white dark:bg-[#2f2f2f] dark:hover:bg-[#555] font-medium uppercase"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-purple-700 dark:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </div>
        </div>

        {/* Middle + Right Nav: hidden on mobile when closed */}
        <div className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:flex md:items-center md:gap-6 mt-4 md:mt-0`}>
          {/* Nav Links */}
          <div className={`flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:flex`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-medium dark:text-white ${
                  isActive ? 'underline text-purple-900' : 'text-purple-700'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `text-lg font-medium dark:text-white ${
                  isActive ? 'underline text-purple-900' : 'text-purple-700'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              USERS
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `text-lg font-medium dark:text-white ${
                  isActive ? 'underline text-purple-900' : 'text-purple-700'
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              DASHBOARD
            </NavLink>
          </div>

          {/* Right: Auth + Dark Mode */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
            {user ? (
              <>
                <span className="flex items-center space-x-2 text-base text-purple-700 dark:text-white font-semibold">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png"
                    alt={`${user.name} avatar`}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="uppercase">{user.name}</span>
                </span>

                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="text-base text-red-500 hover:underline font-medium mt-2 md:mt-0"
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-base text-purple-700 dark:text-white hover:underline font-medium mt-2 md:mt-0"
              >
                LOGIN
              </Link>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;