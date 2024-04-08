import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const AdminMovies = () => {
  
    const [users, setUsers] = useState([]); // Initialize users state as an empty array
  
    useEffect(() => {
      fetchUserData();
    }, []);
  
    const fetchUserData = async () => {
      try {
          const response = await axios.get(`http://localhost:8080/movie/`);
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
  
    return (
      <div className="bg-black min-h-screen">
        <NavbarAdmin />
        <div className="bg-black p-4 rounded-lg shadow-md font-sans max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Admin Dashboard</h1>
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gray-100">Users</h1>
            <ul className="list-none ">
              {users && users.map((user) => (
                <li key={user._id} className={myStyles.container}>
                  <div className="flex-1">
                    <span>{`${user._id} ${user._id}`}</span>
                    <br />
                    <span>Email: {user._id}</span>
                    <br />
                    <span>Status: {user._id}</span>
                    <br />
                    <span>User ID: {user._id}</span>
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
























/*

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

*/
