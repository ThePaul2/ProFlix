import React from 'react';
import { useParams } from 'react-router-dom';

const Info = () => {
  const { imageUrl, title, rating, date, description } = useParams();
  console.log('Params:', imageUrl, title, rating, date, description);

  return (
    <div>
      <h2>Movie Information:</h2>
      <p>Image URL: {decodeURIComponent(imageUrl)}</p>
      <p>Title: {decodeURIComponent(title)}</p>
      <p>Rating: {rating}</p>
      <p>Date: {decodeURIComponent(date)}</p>
      <p>Description: {decodeURIComponent(description)}</p>
    </div>
  );
};

export default Info;
