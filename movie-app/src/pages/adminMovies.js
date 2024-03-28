import React from 'react';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../components/NavbarAdmin';
import data from "../assets/sampleData.json";

const AdminMovies = () => {
  const handleDeleteUser = (userId) => {
    // Implement your delete user logic here
    console.log(`Deleting user with ID: ${userId}`);
  };

  return (
    <div className="bg-black min-h-screen">
      <NavbarAdmin />
      <div className="bg-black p-4 rounded-lg shadow-md font-sans max-w-4xl mx-auto">
        <h2 style={styles.heading}>Welcome to Admin Dashboard</h2>
        <div style={styles.content}>
          <div className="flex flex-row w-full">
            <h1 className="text-3xl font-bold mb-2 text-gray-100">Movies</h1>
            <div className="ml-auto">
              <Link to={`/edit-movie/new-movie`} className={myStyles.greenButton}>Add Movie</Link>
            </div>
          </div>
          <ul className="list-none">
          {data.movies.map(movie => (
            <li key={movie.id} className={myStyles.container}>
              <div className="flex-1">
                <span>{`id: ${movie.id} - ${movie.name}`}</span>
              </div>
              <div>
                <Link to={`/edit-movie/${encodeURIComponent(movie.id)}`} className={myStyles.greenButton}>Edit</Link>
                <button onClick={() => handleDeleteUser(movie.id)} className={myStyles.redButton}>Delete Movie</button>
              </div>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const myStyles = {
  greenButton: "px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out ml-3",
  redButton: "px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-600 transition duration-300 ease-in-out ml-3",
  container: "mb-2 p-4 bg-white rounded-md shadow-md flex justify-between items-center hover:bg-red-300",
}

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
    display: 'flex',
    alignItems: 'center',
  },
  addButton: {
    marginLeft: '20px',
    padding: '5px 10px',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none', // Add this to remove underline
  },
  movieItem: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  movieInfo: {
    flex: '1',
    marginRight: '10px',
  },
  editButton: {
    padding: '5px 10px',
    backgroundColor: '#ff5050',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none', // Add this to remove underline
  },
};

export default AdminMovies;
