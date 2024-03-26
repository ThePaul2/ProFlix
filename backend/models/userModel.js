import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  firstName: {
      required: true,
      type: String,
  },
  lastName: {
      required: true,
      type: String,
  },
  email:{
      type: String,
      required: true,
  },
  password: {
      type: String,
      required: true,
      minlength: 6,
  },
  country: {
      type: String,
      trim: true,
  },
  street1: {
      type: String,
      trim: true,
  },
  street2: {
      type: String,
      trim: true,
  },
  city: {
      type: String,
      trim: true,
  },
  state: {
      type: String,
      trim: true,
  },
  cardNumber: {
      type: String,
      trim: true,
      minlength: 16,
  },
  exp: {
      type: Number,
      trim: true,
  },
  status: {
      type: Number,
      trim: true,
  },
  CVN: {
      type: String,
      trim: true,
  }, 
  cardFirst: {
      type: String,
      trim: true,
  },
  cardLast: {
      type: String,
      trim: true,
  },
});

export const User = mongoose.model('User', userSchema);
