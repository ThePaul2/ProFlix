import React from 'react';
import NavbarAdmin from '../components/NavbarAdmin';

const AdminDashboard = () => {
  const recentUserActivity = [
    { id: 34863, name: 'Free Popcorn', length: 'Since: 2 days' },
    { id: 10134, name: 'Buy 1 Get 1',  length: 'Since: 1 month' },
    { id: 98765, name: 'Bring a Date', length: 'Since: 1 week' },
    { id: 45678, name: '10% off Mondays', length: 'Since: 3 weeks' },
    { id: 17223, name: 'Skip the Line',  length: 'Since: 1 hour' },
    { id: 23890, name: 'Happy Hour', length: 'Since: 4 hours' },
    { id: 55678, name: 'Family Bundle', length: 'Since: 2 weeks' },
    { id: 87654, name: 'Weekend Special', length: 'Since: 5 days' },
    { id: 98761, name: 'Loyalty Points', length: 'Since: 3 months' },
    { id: 34567, name: 'Early Bird Discount', length: 'Since: 6 weeks' },
    { id: 12345, name: 'Student Discount', length: 'Since: 1 semester' },
    { id: 65789, name: 'VIP Membership', length: 'Since: 1 year' },
    { id: 43567, name: 'Senior Citizen Discount', length: 'Since: 2 years' },
    { id: 76543, name: 'Limited Time Offer', length: 'Since: 1 day' },
    { id: 23456, name: 'Flash Sale', length: 'Since: 1 hour' },
    { id: 87654, name: 'Weekend Brunch', length: 'Since: 2 months' },
    { id: 45678, name: 'Late Night Special', length: 'Since: 3 days' },
    { id: 34567, name: 'Refer a Friend', length: 'Since: 1 month' },
    { id: 89012, name: 'Online Exclusive', length: 'Since: 2 weeks' },
    { id: 56789, name: 'Meal Combo', length: 'Since: 4 days' },
    { id: 43210, name: 'Themed Nights', length: 'Since: 1 month' },
    { id: 67890, name: 'Weekday Lunch Deal', length: 'Since: 1 week' },
    { id: 78901, name: 'Limited Edition Menu', length: 'Since: 2 weeks' },
    { id: 12345, name: 'Customer Appreciation Day', length: 'Since: 1 year' },
    { id: 87654, name: 'Double Points', length: 'Since: 3 months' },
    { id: 98765, name: 'Seasonal Promotion', length: 'Since: 1 season' },
    { id: 56789, name: 'Early Bird Special', length: 'Since: 2 weeks' },
    { id: 34567, name: 'Holiday Discount', length: 'Since: 1 month' },
    { id: 67890, name: 'Weekly Raffle', length: 'Since: 1 week' },
    { id: 45678, name: 'Buy More Save More', length: 'Since: 2 weeks' },
    { id: 89012, name: 'Anniversary Sale', length: 'Since: 1 year' },
    { id: 34567, name: 'Grand Opening Offer', length: 'Since: 1 week' },
    { id: 87654, name: 'Early Access', length: 'Since: 1 day' }

  ];

  const handleDeleteUser = (userId) => {
    // Implement your delete user logic here
    console.log(`Deleting user with ID: ${userId}`);
  };

  const handleEditPromotion = (userId) => {
    // Implement your edit promotion logic here
    console.log(`Editing promotion for user with ID: ${userId}`);
  };

  return (
    <div style={styles.background}>
      <NavbarAdmin />
      <div style={styles.dashboard}>
        <h2 style={styles.heading}>Welcome to Admin Dashboard</h2>
        <div style={styles.content}>
          <h3 style={styles.subHeading}>Promotions</h3>
          <ul style={styles.userList}>
            {recentUserActivity.map((promotion) => (
              <li key={promotion.id} style={styles.userItem}>
                <div>
                  <span>{`Promotion ${promotion.id} (${promotion.name}) - ${promotion.length}`}</span>
                </div>
                <div>
                  <button onClick={() => handleEditPromotion(promotion.id)} style={styles.editButton}>Edit Promotion</button>
                  <button onClick={() => handleDeleteUser(promotion.id)} style={styles.deleteButton}>Delete Promotion</button>
                </div>
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
  editButton: {
    marginRight: '10px',
    padding: '5px 10px',
    backgroundColor: '#4CAF50',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none', // Add this to remove underline
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
