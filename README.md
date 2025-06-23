**Student Portal – React + Tailwind CSS**

A responsive student portal built with React, Tailwind CSS, and React Router DOM, featuring authentication, a sticky navbar, API integration, and a user dashboard. This project was bootstrapped using a React + Vite starter template.

**Features Implemented**

1) Authentication Pages

Login Page: Email + password fields
Dummy login validation with **hardcoded credentials (email-student@example.com, password- 123456)**
Redirects to dashboard on success

Signup Page
Form with name, email, and password
Redirects to login

2) Sticky Top Navbar
Sticky on scroll
Includes:
   App name
   Dark Mode Button
   Navigation links: Home | Users | Dashboard | Username | Logout
   Logged-in user name with icon on the right

3) Home Page
Welcome message: "Welcome to Student Portal, manage your academic details in one place."
Latest Announcements
Student Details: Name, Email, Enrollment Number, Contact Number

4) Users Page
Fetches user data from https://jsonplaceholder.typicode.com/users
Displays data in a responsive card layout
Shows: Name (darker), Email, Phone, Website
Includes loading and error states

5) Dashboard Page
Displays static summary cards:
GPA
Attendance
Subjects
Fee Status
Assignment Completion Percentage
Responsive layout using Tailwind Flex

6) Logout Functionality
Clears dummy authentication state
Redirects to login page

**Screenshot of Final Layout**

**Challenges & Learning**
Tailwind Layouts: Building a responsive and styled UI using Tailwind helped improve my understanding of CSS.
Sticky Navbar + Responsive Layouts: Positioning and responsiveness were tricky to get right, especially with overlapping content and scroll behaviors.

**Tech Stack**
React
React Router DOM
Tailwind CSS
fetch

**Extra Features**
🌙 Dark Mode using Tailwind's dark: classes with Black and Light Purple theme
✨ Animations on card hover and page load using Tailwind transitions