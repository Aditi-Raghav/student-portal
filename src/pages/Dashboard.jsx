// src/pages/Dashboard.js
import React from 'react';
import { motion } from 'framer-motion';

function Dashboard() {
  const summary = [
    { title: 'GPA', value: '8.8' },
    { title: 'Attendance', value: '90%' },
    { title: 'Subjects', value: '12/15' },
    { title: 'Fee Status', value: 'Paid' },
  ];

  return (
    <div className="p-6 mt-6 grid sm:grid-cols-3 gap-4">
      {summary.map((item) => (
        <div key={item.title} className="bg-white dark:bg-[#2f2f2f] dark:border dark:border-[#444] p-6 rounded shadow text-center transition-colors duration-300 transform hover:scale-105 hover:shadow-x">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-2xl text-purple-700 dark:text-purple-300">{item.value}</p> 
        </div>
      ))}

        {/* Progress Card */}
        <div className="bg-white dark:bg-[#2f2f2f] dark:border dark:border-[#444] p-6 rounded shadow text-center hover:scale-105 transition-transform">
          <h3 className="text-lg font-semibold">Assignment Completion</h3>
          <ProgressBar value={75} />
          <p className="text-sm mt-1 text-purple-700 dark:text-purple-300">75% complete</p>
        </div>
    </div>
  );
}

export default Dashboard;

function ProgressBar({ value }) {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mt-2">
      <motion.div
        className="bg-green-500 h-4 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.5 }}
      />
    </div>
  );
}

//text-blue-600
//hover:scale-[1.03] hover:shadow-lg