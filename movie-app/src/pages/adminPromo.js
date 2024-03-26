import React from 'react';
import { Link } from 'react-router-dom';
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
    console.log(`Deleting user with ID: ${userId}`);
  };

  const handleEditPromotion = (userId) => {
    console.log(`Editing promotion for user with ID: ${userId}`);
  };

  return (
    <div className="bg-black min-h-screen">
      <NavbarAdmin />
      <div className="bg-black p-6 rounded-lg shadow-md font-sans max-w-screen-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to Admin Dashboard</h2>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-100">Promotions</h3>
          <ul className="list-none">
            {recentUserActivity.map((promotion) => (
              <li key={promotion.id} className="mb-2 p-4 bg-white rounded-md shadow-md flex justify-between items-center hover:bg-red-300">
                <div className="flex-1">
                  <span>{`Promotion ${promotion.id} (${promotion.name}) - ${promotion.length}`}</span>
                </div>
                <div>
                  <Link to={`/edit-promo`} className="mr-2 px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out">Edit</Link>
                  <button onClick={() => handleDeleteUser(promotion.id)} className="px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-600 transition duration-300 ease-in-out">Delete Promotion</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
