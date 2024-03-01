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

    // Add more user activities here
  ];

  const handleDeleteUser = (userId) => {
    // Implement your delete user logic here
    console.log(`Deleting user with ID: ${userId}`);
  };

  return (
    <div style={styles.background}>
      <NavbarAdmin />
      <div style={styles.dashboard}>
        <h2 style={styles.heading}>Welcome to Admin Dashboard</h2>
        <div style={styles.content}>
          <h3 style={styles.subHeading}>Users</h3>
          <ul style={styles.userList}>
            {recentUserActivity.map((user) => (
              <li key={user.id} style={styles.userItem}>
                <div>
                  <span>{`User ${user.id} (${user.name}) - ${user.action}`}</span>
                  <br />
                  <span>{user.email}</span>
                </div>
                <button onClick={() => handleDeleteUser(user.id)} style={styles.deleteButton}>Delete User</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundColor: '#000',
    minHeight: '100vh',
  },
  dashboard: {
    backgroundColor: '#000',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  content: {},
  subHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#f4f4f4',
  },
  userList: {
    listStyle: 'none',
    padding: 0,
  },
  userItem: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#ff5050',
    border: '1px solid red', // Add red border here
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none', // Add this to remove underline
  },
};

export default AdminDashboard;
