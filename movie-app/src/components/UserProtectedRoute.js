// Importing React library and Navigate component from react-router-dom
import { Navigate } from 'react-router-dom';
import React from 'react';

const TheGuardian = ({ children }) => {
  // Retrieving user role from local storage
  const userRole = localStorage.getItem('userRole');

  // Checking if user is not an admin
  if (userRole !== 'user') {
    // Redirecting to home page if not admin
    return <Navigate to="/login" />;
  }

  // Rendering children components if user is admin
  return children;
};

// Exporting TheGuardian component as default export
export default TheGuardian;
