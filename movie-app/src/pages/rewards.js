import React from 'react';
import Navbar from "../components/Navbar";

const RewardPage = () => {
  // Sample rewards data (you can replace it with your actual data)
  const rewards = [
    { id: 1, image: 'https://static.vecteezy.com/system/resources/thumbnails/006/390/344/small/award-ribbon-icon-for-race-reward-isolated-simple-shape-free-vector.jpg', text: 'Free Movie!' },
    { id: 2, image: 'https://static.vecteezy.com/system/resources/thumbnails/006/390/344/small/award-ribbon-icon-for-race-reward-isolated-simple-shape-free-vector.jpg', text: 'Free Popcorn!' },
    { id: 3, image: 'https://static.vecteezy.com/system/resources/thumbnails/006/390/344/small/award-ribbon-icon-for-race-reward-isolated-simple-shape-free-vector.jpg', text: 'Buy one get 1' },
    { id: 4, image: 'https://static.vecteezy.com/system/resources/thumbnails/006/390/344/small/award-ribbon-icon-for-race-reward-isolated-simple-shape-free-vector.jpg', text: '500 Points' },
    { id: 5, image: 'https://static.vecteezy.com/system/resources/thumbnails/006/390/344/small/award-ribbon-icon-for-race-reward-isolated-simple-shape-free-vector.jpg', text: '1000 Points' },
    { id: 6, image: 'https://static.vecteezy.com/system/resources/thumbnails/006/390/344/small/award-ribbon-icon-for-race-reward-isolated-simple-shape-free-vector.jpg', text: '2000 Points' },
    { id: 7, image: 'https://static.vecteezy.com/system/resources/thumbnails/006/390/344/small/award-ribbon-icon-for-race-reward-isolated-simple-shape-free-vector.jpg', text: '3000 Points' },
    { id: 8, image: 'https://static.vecteezy.com/system/resources/thumbnails/006/390/344/small/award-ribbon-icon-for-race-reward-isolated-simple-shape-free-vector.jpg', text: '900 Points' },
    { id: 9, image: 'https://static.vecteezy.com/system/resources/thumbnails/006/390/344/small/award-ribbon-icon-for-race-reward-isolated-simple-shape-free-vector.jpg', text: '5000 Points' },
    { id: `0`, image: 'https://static.vecteezy.com/system/resources/thumbnails/006/390/344/small/award-ribbon-icon-for-race-reward-isolated-simple-shape-free-vector.jpg', text: '10000 Points' },

    // Add more rewards as needed
  ];

  return (
    <div style={styles.background}>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Rewards</h1>
        <div style={styles.rewardGrid}>
          {rewards.map(reward => (
            <div key={reward.id} style={styles.rewardBox}>
              <img src={reward.image} alt="Reward" style={styles.image} />
              <div style={styles.rewardText}>{reward.text}</div>
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
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '0 20px',
  },
  heading: {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '20px',
    color: '#fff', // Add white color for heading
  },
  rewardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  rewardBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '200px',
    display: 'block',
    margin: '0 auto',
  },
  rewardText: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#ff5050',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '18px',
  },
};

export default RewardPage;

