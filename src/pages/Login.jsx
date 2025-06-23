// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy credentials
    if (email === 'student@example.com' && password === '123456') {
      onLogin({ name: 'Aditi', email });
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded dark:bg-purple-50">
      <h2 className="text-2xl font-semibold mb-4 dark:text-black">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded dark:text-black" placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded dark:text-black" placeholder="Password" required />
        <button type="submit" className="w-full bg-purple-600  hover:bg-purple-700 text-white py-2 rounded">Login</button>
      </form>

      <p className="mt-4 text-center dark:text-black">
        Don&apos;t have an account?{' '}
        <Link to="/signup" className="text-purple-600 underline">Sign up</Link>
      </p>

    </div>
  );
}

export default Login;