// src/pages/Home.jsx
import React from 'react';

function Home() {
  return (
    
    <div className="p-8 mt-6 text-center text-purple-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to Student Portal</h1>
      <p className="text-lg text-purple-700 dark:text-purple-300"> Manage your academic details in one place. </p>
      <div className="flex justify-center mb-6 mt-6 animate-float">
        <img src="https://cdn-icons-png.flaticon.com/512/29/29302.png" alt="Book Light Mode" className="w-12 h-12 object-contain block dark:hidden"/>
        <img src="https://cdn-icons-png.flaticon.com/256/15772/15772135.png" alt="Book Dark Mode" className="w-12 h-12 object-contain hidden dark:block"/>
      </div>


      {/* Announcement */}
      <div className="mt-10 bg-purple-50 p-6 rounded-xl border border-purple-100 dark:bg-[#2f2f2f] dark:border-[#444] animate-float">
        <h3 className="text-lg font-bold text-purple-800 dark:text-white  animate-growshrink">📢 Latest Announcement</h3>
        <p className="mt-2 text-sm text-purple-700  dark:text-purple-300">
        Project submission - June 30
        </p>
        <p className="mt-2 text-sm text-purple-700  dark:text-purple-300">
        Guest Lecture on AI - July 10
        </p>
        <p className="mt-2 text-sm text-purple-700  dark:text-purple-300">
          Mid-semester exams begin next Monday. Please check the dashboard for your schedule.
        </p>
        
      </div>


      <div className="mt-10 bg-white dark:bg-[#2f2f2f] p-6 rounded-xl shadow-md border border-purple-100 dark:border-[#444] animate-slideInSkew max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold text-purple-800 dark:text-white mb-4">🎓 Student Details</h2>
  
        <div className="text-left space-y-2 text-purple-900 dark:text-purple-300">
          <p><span className="font-semibold">Name:</span> Aditi</p>
          <p><span className="font-semibold">Email:</span> student@example.com</p>
          <p><span className="font-semibold">Enrollment Number:</span> ENR2025CS1045</p>
          <p><span className="font-semibold">Contact Number:</span> 1010101010</p>
        </div>
      </div>
      
      <img 
        src= "https://i.pinimg.com/originals/ab/6c/7c/ab6c7c43ff4b01f0edd73e5815f69a45.png"
        alt="Student"
        className="mx-auto mt-10 w-64"
      />

    </div>
  );
}

export default Home;

// https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/65fb1e653a3cc9c6ba57d643_442_DesignBlogHeader_2400x1260.jpg
// import studentImg from '../assets/pngtree-vector-illustration-of-a-teenager-studying-with-her-laptop-png-image_2367168-removebg-preview.png';
// good- https://marketplace.canva.com/EAFwYA9k8s4/1/0/1600w/canva-galaxy-desktop-wallpaper-T0lY2vYriqQ.jpg
// https://applescoop.org/image/wallpapers/mac/34846109718549945-61797508807665778.webp
// <div className="min-h-screen  dark:bg-[url('https://marketplace.canva.com/EAFwYA9k8s4/1/0/1600w/canva-galaxy-desktop-wallpaper-T0lY2vYriqQ.jpg')] dark:bg-cover dark:bg-center">
// book image- https://cdn-icons-png.flaticon.com/512/29/29302.png
// file image- https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png
// {studentImg}, https://media.istockphoto.com/id/2149186896/vector/girl-working-on-laptop-vector-illustration-working-from-home-and-freelance-concept.jpg?s=612x612&w=0&k=20&c=JD3Lc9oJaBtF4loCBhfq_xitz8rQyJCN1u7xSQDyrtw=,, https://thumbs.dreamstime.com/b/student-studying-laptop-vector-icon-symbol-isolated-white-background-196225242.jpg