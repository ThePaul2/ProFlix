// Filename - pages/Catalog.js

import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavbarAdmin';
import UserList from '../components/UserList'; // Import the UserList component

const Users = () => {
  // State to hold the user list
  const [userList, setUserList] = useState([]);

  // Dummy data for user list (replace with actual data fetched from backend)
  useEffect(() => {
    // Fetch user list from backend or any other data source
    const fetchUserList = async () => {
      try {
        // Example fetch request
        const response = await fetch('/users');
        const data = await response.json();
        setUserList(data);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchUserList();
  }, []); // Empty dependency array to run effect only once on component mount



  return (
    <div className="bg-gray-800 min-h-screen pt-20"> {/* Gray background */}
      <Navbar />
      {/* Search bar and filters */}
      <div className="container mx-auto px-4 py-10">
        {/* Render user list */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 py-10">User List</h2>
          <UserList users={userList} />
        </div>
      </div>
    </div>
  );
};

export default Users;
