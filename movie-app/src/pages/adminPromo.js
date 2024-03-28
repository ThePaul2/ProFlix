import React from 'react';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../components/NavbarAdmin';
import data from "../assets/sampleData.json";

const AdminPromo = () => {
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
          <div className="flex flex-row w-full">
            <h3 className="text-xl font-bold mb-2 text-gray-100">Promotions</h3>
            <div className="ml-auto">
              <Link to={`/edit-promo/new-movie`} className={myStyles.greenButton}>Add Promotion</Link>
            </div>
          </div>
          <ul className="list-none">
            {data.promos.map(promotion => (
              <li key={promotion.id} className={myStyles.container}>
                <div className="flex-1">
                  <span>{`Promotion ${promotion.id} (${promotion.title}) - ${promotion.start_date} to ${promotion.end_date}`}</span>
                </div>
                <div>
                  <Link to={`/edit-promo/${encodeURIComponent(promotion.id)}`} className={myStyles.greenButton}>Edit</Link>
                  <button onClick={() => handleDeleteUser(promotion.id)} className={myStyles.redButton}>Delete Promotion</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPromo;

const myStyles = {
  greenButton: "px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out ml-3",
  redButton: "px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-600 transition duration-300 ease-in-out ml-3",
  container: "mb-2 p-4 bg-white rounded-md shadow-md flex justify-between items-center hover:bg-red-300",
}