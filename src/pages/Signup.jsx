// src/pages/Signup.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded dark:bg-purple-50">
      <h2 className="text-2xl font-semibold mb-4 dark:text-black">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded dark:text-black" required />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded dark:text-black" required />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded dark:text-black" required />
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded">Sign Up</button>
      </form>
      <p className="mt-4 text-center dark:text-black"> Already have an account?{' '}
        <Link to="/login" className="text-purple-600 underline">Login</Link>
      </p>

    </div>
  );
}

export default Signup;