import React from 'react';
import NavbarAdmin from '../components/NavbarAdmin';

const AdminDashboard = () => {
  return (
    <div style={styles.background}>
      <NavbarAdmin />
      <div style={styles.dashboard}>
        <h2 style={styles.heading}>Welcome to Admin Dashboard</h2>
        <div style={styles.bottomBoxes}>
          <div style={{ ...styles.box, marginRight: '20px' }}>
            <h4 style={styles.boxHeading}>Active Users</h4>
            <p style={styles.boxContent}>25</p>
          </div>
          <div style={{ ...styles.box, marginRight: '20px' }}>
            <h4 style={styles.boxHeading}>Active Movies</h4>
            <p style={styles.boxContent}>50</p>
          </div>
          <div style={styles.box}>
            <h4 style={styles.boxHeading}>Revenue</h4>
            <p style={styles.boxContent}>$1000</p>
          </div>
        </div>
        <div style={styles.content}>
          <h3 style={styles.subHeading}>Recent User Activity</h3>
          <ul style={styles.userList}>
            <li style={styles.userItem}>User 34863 - edited payment</li>
            <li style={styles.userItem}>User 10134 - created an account</li>
            <li style={styles.userItem}>User 2342 - booked Barbie</li>
            <li style={styles.userItem}>User 232341 - changed their password</li>
            <li style={styles.userItem}>User 09863 - edited payment</li>
            <li style={styles.userItem}>User 102343 - added an avatar</li>
            <li style={styles.userItem}>User 132485 - logged in</li>
            <li style={styles.userItem}>User 23975- deleted their account</li>
            <li style={styles.userItem}>User 382308 - changed their password</li>
            <li style={styles.userItem}>User 967230 - changed their username</li>
            <li style={styles.userItem}>User 286323 - edited payment</li>
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
  bottomBoxes: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  box: {
    flex: '1',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  boxHeading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  boxContent: {
    fontSize: '24px',
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
};

export default AdminDashboard;
