import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from "axios";

const Promos = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    fetchPromos();
  }, []);

  const fetchPromos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/promo');
      setPromos(response.data);
    } catch (error) {
      console.error('Error fetching promos:', error);
    }
  };

  return (
    <div style={styles.background}>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Promos</h1>
        <div style={styles.promosContainer}>
          {promos.map((promo) => (
            <div key={promo._id} style={styles.promoItem}>
              <div style={styles.eventDetails}>
                <span style={styles.promoTitle}>{promo.name}</span><br />
                <span>{promo.description}</span><br />
              </div>
              <div style={styles.imageContainer}>
                <img src={promo.image} alt={promo.name} style={styles.image} />
              </div>
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
    padding: '20px 0',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
    color: '#fff',
  },
  heading: {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '40px',
  },
  promosContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  promoItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid #333',
    borderRadius: '5px',
    padding: '20px',
    backgroundColor: '#333',
    transition: 'box-shadow 0.3s ease',
  },
  eventDetails: {
    marginBottom: '20px',
    lineHeight: '1.4',
  },
  promoTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '10px',
  },
  imageContainer: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
};

export default Promos;
