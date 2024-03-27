import React from 'react';
import Navbar from '../components/Navbar'; // Assuming you have a Navbar component

const Promos = () => {
  // Sample events data (you can replace it with your actual data)
  const events = [
    { id: 1, image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-theatre-poster-template-5c872c5ff28ad75b461b35f268379459_screen.jpg?ts=1636968444', title: 'Event 1', description: 'Watch a special Screening' },
    { id: 2, image: 'https://marketplace.canva.com/EAE37tOzCNk/1/0/1131w/canva-blue-illustration-movie-night-poster-SzakHZJYsGw.jpg', title: 'Event 2', description: 'Dress up Day' },
    { id: 3, image: 'https://c8.alamy.com/comp/2GPG982/breakfast-at-tiffanys-movie-poster-now-showing-outside-of-theater-nyc-2GPG982.jpg', title: 'Event 3', description: 'Free for kids' },
	{ id: 4, image: 'https://shop.cinemashop.com/cdn/shop/products/gd-outdoor-290_290x.jpg?v=1559320347', title: 'Event 4', description: 'Neon Out' },
	{ id: 5, image: 'https://c8.alamy.com/comp/2ERTW8T/movie-night-poster-cinema-festival-night-event-in-movie-theater-vector-flyer-with-cartoon-illustration-of-people-in-cinema-hall-with-open-doors-and-red-rope-fence-2ERTW8T.jpg', title: 'Event 5', description: 'Bring a Date!' },
	// Add more events as needed
  ];

  
  
	return (
	  <div style={styles.background}>
		<Navbar />
		<div style={styles.container}>
		  <h1 style={styles.heading}>Events</h1>
		  {events.map(event => (
			<div key={event.id} style={styles.eventBox}>
			  <div style={styles.eventDetails}>
				<h2 style={styles.title}>{event.title}</h2>
				<p style={styles.description}>{event.description}</p>
			  </div>
			  <img src={event.image} alt={event.title} style={styles.image} />
			</div>
		  ))}
		</div>
	  </div>
	);
  };
  
  const styles = {
	background: {
	  backgroundColor: '#000',
	  minHeight: '100vh',
	},
	container: {
	  maxWidth: '800px',
	  margin: '20px auto',
	  padding: '0 20px',
	},
	heading: {
	  textAlign: 'center',
	  fontSize: '28px',
	  marginBottom: '20px',
	  color: '#fff', // White color for heading text
	},
	eventBox: {
	  display: 'flex',
	  alignItems: 'center',
	  border: '1px solid #ccc', // Grey border around each event
	  borderRadius: '5px',
	  padding: '20px',
	  marginBottom: '20px',
	  backgroundColor: '#666', // Grey background for each event box
	},
	eventDetails: {
	  flex: 1,
	  color: '#fff', // White text color for event details
	},
	title: {
	  fontSize: '24px',
	  fontWeight: 'bold',
	  marginBottom: '10px',
	},
	description: {
	  color: '#fff', // White text color for event description
	},
	image: {
	  width: '200px',
	  height: '150px',
	  marginLeft: '20px', // Move the image to the right side
	  objectFit: 'cover',
	},
  };
  
  export default Promos;
  