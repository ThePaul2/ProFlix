import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import usersRoute from './routes/usersRoute.js';
import cors from 'cors';

const app = express();

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

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('Connected to database');
    console.log('Status for user: 0 if active,');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
  });




