import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const AdminDashboard = () => {
  
  const [users, setUsers] = useState([]); // Initialize users state as an empty array

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/users/`);
        const userData = response.data.data; // Access the 'data' array from the response
        console.log('User Data:', userData); // Add this line to log user data
        setUsers(userData); // Set the state variable with fetched user data
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
        await axios.delete(`http://localhost:8080/users/${userId}`);
        console.log(`User with ID ${userId} deleted successfully.`);
        // After successful deletion, fetch updated user data
        fetchUserData();
    } catch (error) {
        console.error(`Error deleting user with ID ${userId}:`, error);
    }
  };

  const updateUserStatus = async (userId, newStatus) => {
    try {
      const updatedUser = { ...users.find(user => user._id === userId), status: newStatus }; // Update user status to newStatus
      await axios.put(`http://localhost:8080/users/${userId}`, updatedUser);
      console.log(`User with ID ${userId} status set to Admin.`);
      // Update the users state immediately
      setUsers(prevUsers => prevUsers.map(user => user._id === userId ? { ...user, status: newStatus } : user));
    } catch (error) {
      console.error(`Error updating user status with ID ${userId}:`, error);
    }
  };
  

  return (
    <div className="bg-black min-h-screen">
      <NavbarAdmin />
      <div className="bg-black p-4 rounded-lg shadow-md font-sans max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Admin Dashboard</h1>
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-100">Users</h1>
          <ul className="list-none ">
            {users.map((user) => (
              <li key={user._id} className={myStyles.container}>
                <div className="flex-1">
                  <span>{`${user.firstName} ${user.lastName}`}</span>
                  <br />
                  <span>Email: {user.email}</span>
                  <br />
                  <span>Status: {getStatusLabel(user.status)}</span>
                  <br />
                  <span>User ID: {user._id}</span>
                </div>
                {shouldShowDeleteButton(user.status) && (
                  <>
                    <button onClick={() => handleDeleteUser(user._id)} className={myStyles.redButton}>Delete User</button>
                    <button onClick={() => updateUserStatus(user._id, 1)} className={myStyles.redButton}>Suspend</button>
                    <button onClick={() => updateUserStatus(user._id, 2)} className={myStyles.greenButton}>Make Admin</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const getStatusLabel = (status) => {
  switch (status) {
    case 0:
      return 'Active';
    case 1:
      return 'Inactive';
    case 2:
      return 'Admin';
    default:
      return 'Unknown';
  }
};

const shouldShowDeleteButton = (status) => {
  return status !== 2; // Show delete button for users with status other than 2 
};

export default AdminDashboard;

const myStyles = {
  greenButton: "px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out ml-3",
  redButton: "px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-600 transition duration-300 ease-in-out ml-3",
  container: "mb-2 p-4 bg-white rounded-md shadow-md flex justify-between items-center hover:bg-red-300",
};





















/*

import React from 'react';
import NavbarAdmin from '../components/NavbarAdmin';

const AdminDashboard = () => {
  
  const recentUserActivity = [
    { id: 34863, name: 'John Doe', email: 'john@gmail.com'},
    { id: 10134, name: 'Jane Smith', email: 'jane2@gmail.com' },
    { id: 98765, name: 'Emily Davis', email: 'emilyiscool@gmail.com'}
  ];

  const handleDeleteUser = (userId) => {
    // Implement your delete user logic here
    console.log(`Deleting user with ID: ${userId}`);
  };

  return (
    <div className="bg-black min-h-screen">
      <NavbarAdmin />
      <div className="bg-black p-4 rounded-lg shadow-md font-sans max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Admin Dashboard</h1>
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-100">Users</h1>
          <ul className="list-none ">
            {recentUserActivity.map((user) => (
              <li key={user.id} className={myStyles.container}>
                <div className="flex-1">
                  <span>{`${user.name} - User ${user.id} `}</span>
                  <br />
                  <span>{user.email}</span>
                </div>
                <button onClick={() => handleDeleteUser(user.id)} className={myStyles.redButton}>Delete User</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

const myStyles = {
  greenButton: "px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out ml-3",
  redButton: "px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-600 transition duration-300 ease-in-out ml-3",
  container: "mb-2 p-4 bg-white rounded-md shadow-md flex justify-between items-center hover:bg-red-300",
}

*/