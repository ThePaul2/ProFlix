import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../components/NavbarAdmin';

const AdminDashboard = () => {
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    // Generate a random revenue between 1000 and 5000
    const randomRevenue = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    setRevenue(randomRevenue);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <NavbarAdmin />
      <div className="bg-black p-6 rounded-lg shadow-md font-sans max-w-screen-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to Admin Dashboard</h2>
        <div className="flex justify-between mb-4">
          <div className="flex-1 mr-4 bg-white rounded-lg p-4 text-center transition duration-300 ease-in-out hover:bg-red-600">
            <h4 className="text-lg font-bold mb-2 text-gray-800">Active Users</h4>
            <p className="text-xl text-gray-800">25</p>
          </div>
          <div className="flex-1 mr-4 bg-white rounded-lg p-4 text-center transition duration-300 ease-in-out hover:bg-red-600">
            <h4 className="text-lg font-bold mb-2 text-gray-800">Active Movies</h4>
            <p className="text-xl text-gray-800">50</p>
          </div>
          <div className="flex-1 bg-white rounded-lg p-4 text-center transition duration-300 ease-in-out hover:bg-red-600">
            <h4 className="text-lg font-bold mb-2 text-gray-800">Revenue</h4>
            <p className="text-xl text-gray-800">${revenue}</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-100">Recent User Activity</h3>
          <ul className="list-none">
            <li className={myStyles.container}>
              <span>User 34863 - edited payment</span>
            </li>
            <li className={myStyles.container}>
              <span>User 10134 - created an account</span>
            </li>
            <li className={myStyles.container}>
              <span>User 2342 - booked Barbie</span>
            </li>
            <li className={myStyles.container}>
              <span>User 232341 - changed their password</span>
            </li>
            <li className={myStyles.container}>
              <span>User 09863 - edited payment</span>
            </li>
            <li className={myStyles.container}>
              <span>User 102343 - added an avatar</span>
            </li>
            <li className={myStyles.container}>
              <span>User 132485 - logged in</span>
            </li>
            <li className={myStyles.container}>
              <span>User 23975- deleted their account</span>
            </li>
            <li className={myStyles.container}>
              <span>User 382308 - changed their password</span>
            </li>
            <li className={myStyles.container}>
              <span>User 967230 - changed their username</span>
            </li>
            <li className={myStyles.container}>
              <span>User 286323 - edited payment</span>
            </li>
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