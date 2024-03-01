import React from 'react';
import NavbarAdmin from '../components/NavbarAdmin';

const AdminDashboard = () => {
  const recentUserActivity = [
    { id: 34863, name: 'John Doe', email: 'john@gmail.com', action: 'Since: 2021' },
    { id: 10134, name: 'Jane Smith', email: 'jane2@gmail.com', action: 'Since: 2009' },
    { id: 98765, name: 'Emily Davis', email: 'emilyiscool@gmail.com', action: 'Since: 2017' },
    { id: 45678, name: 'Michael Wilson', email: 'michael123@gmail.com', action: 'Since: 2013' },
    { id: 17223, name: 'Sarah Thompson', email: 'sarahisawesom@gmail.com', action: 'Since: 2012' },
    { id: 77890, name: 'David Martinez', email: 'david@gmail.com', action: 'Since: 2020' },
    { id: 57534, name: 'Sophia Taylor', email: 'sophia@gmail.com', action: 'Since: 2016' },
    { id: 43444, name: 'James Rodriguez', email: 'jamesrpd@gmail.com', action: 'Since: 2019' },
    { id: 36783, name: 'Olivia Hernandez', email: 'olivia@gmail.com', action: 'Since: 2014' },
    { id: 22672, name: 'Daniel Gonzalez', email: 'daniel@gmail.com', action: 'Since: 2011' },
    { id: 60856, name: 'Isabella Lopez', email: 'isabellalopez@gmail.com', action: 'Since: 2010' },
    { id: 93277, name: 'William Perez', email: 'william@gmail.com', action: 'Since: 2018' },
    { id: 71357, name: 'Ethan Adams', email: 'ethan@gmail.com', action: 'Since: 2015' },
    { id: 82358, name: 'Mia Baker', email: 'mia@gmail.com', action: 'Since: 2012' },
    { id: 12321, name: 'Alexander Rivera', email: 'alexander@gmail.com', action: 'Since: 2021' },
    { id: 28972, name: 'Charlotte Wright', email: 'charlotte@gmail.com', action: 'Since: 2013' },
    { id: 34653, name: 'Matthew Clark', email: 'matthew@gmail.com', action: 'Since: 2014' },
    { id: 45675, name: 'Ava Lewis', email: 'ava@gmail.com', action: 'Since: 2017' },
    { id: 59505, name: 'Jackson Lee', email: 'jacksoniscool@gmail.com', action: 'Since: 2016' },
    { id: 67126, name: 'Amelia King', email: 'amelia@gmail.com', action: 'Since: 2019' },
    { id: 70317, name: 'Logan Scott', email: 'loganisfunny@gmail.com', action: 'Since: 2020' },
    { id: 80128, name: 'Abigail Hall', email: 'abigail@gmail.com', action: 'Since: 2018' }
  ];

  const handleDeleteUser = (userId) => {
    // Implement your delete user logic here
    console.log(`Deleting user with ID: ${userId}`);
  };

  return (
    <div className="bg-black min-h-screen">
      <NavbarAdmin />
      <div className="bg-black p-4 rounded-lg shadow-md font-sans max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to Admin Dashboard</h2>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-100">Users</h3>
          <ul className="list-none ">
            {recentUserActivity.map((user) => (
              <li key={user.id} className="mb-4 bg-white rounded-lg shadow-md p-4 flex justify-between items-center hover:bg-red-300">
                <div>
                  <span>{`User ${user.id} (${user.name}) - ${user.action}`}</span>
                  <br />
                  <span>{user.email}</span>
                </div>
                <button onClick={() => handleDeleteUser(user.id)} className="px-4 py-2 bg-red-500 rounded text-white cursor-pointer transition duration-300 hover:bg-red-600">Delete User</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;