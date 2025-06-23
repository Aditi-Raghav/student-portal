// src/pages/Users.jsx

import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6">Loading users...</p>;
  if (error) return <p className="p-6 text-red-500">Failed to load users.</p>;

  return (
    <div className="p-6 mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 transition-colors duration-300">
      {users.map(user => (
        <div key={user.id} className="bg-white dark:bg-[#2f2f2f] dark:border dark:border-[#444] p-4 rounded shadow transition-colors  transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fadeIn">
          <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2">{user.name}</h3>
          <p className="text-purple-900 dark:text-white">Email: {user.email}</p>
          <p className="text-purple-900 dark:text-white">Phone: {user.phone}</p>
          <p className="text-purple-900 dark:text-white">Website: {user.website}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
//text-gray-300