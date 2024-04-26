import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import usersRoute from './routes/usersRoute.js';
import paymentsRoute from './routes/paymentsRoute.js';

import bookingRoute from './routes/bookingRoute.js';
import movieRoute from './routes/movieRoute.js';
import promoRoute from './routes/promoRoute.js';
import roomRoute from './routes/roomRoute.js';
import theatreRoute from './routes/theatreRoute.js';
import showtimeRoute from './routes/showtimeRoute.js';
import ticketRoute from './routes/ticketRoute.js';

import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();

app.use(express.json());

app.use(cors());

// Define routes
app.get('/', async (request, response, next) => {
  try {
    console.log(request);
    response.status(200).send('Ecinema');
  } catch (error) {
    next(error); 
  }
});

app.use('/users', usersRoute);
app.use('/payments', paymentsRoute);

app.use('/showtime', showtimeRoute);
app.use('/booking', bookingRoute);
app.use('/movie', movieRoute);
app.use('/promo', promoRoute);
app.use('/room', roomRoute);
app.use('/theatre', theatreRoute);
app.use('/ticket', ticketRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('Connected to database');
    console.log('Status for user: 0 if active, 1 if inactive, 2 if admin');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
  });




