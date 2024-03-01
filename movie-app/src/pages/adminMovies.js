import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavbarAdmin from '../components/NavbarAdmin';
import data from "../assets/sampleData.json"; // Importing the sample data

const AdminMovies = () => {
  return (
    <div style={styles.background}>
      <NavbarAdmin />
      <div style={styles.dashboard}>
        <h2 style={styles.heading}>Welcome to Admin Dashboard</h2>
        <div style={styles.content}>
          <h3 style={styles.subHeading}>
            Edit Movies
            <Link to={`/edit-movie`} style={styles.addButton}>Add Movie</Link>
          </h3>
          {/* Mapping through the movies array */}
          {data.movies.map(movie => (
            <div key={movie.id} style={styles.movieItem}>
              <p style={styles.movieInfo}>id: {movie.id} - {movie.name}</p>
              {/* Link to the edit page */}
              <Link to={`/edit-movie`} style={styles.editButton}>Edit</Link>
              {/*<Link to={`/edit-movie/${movie.id}`} style={styles.editButton}>Edit</Link>*/}
            </div>
          ))}
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
