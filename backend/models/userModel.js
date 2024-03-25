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
      type: Number,
      trim: true,
      minlength: 16,
  },
  month: {
      type: Number,
      trim: true,
  },
  year: {
      type: Number,
      trim: true,
  },
  CVN: {
      type: Number,
      trim: true,
  }, 
  cardFirst: {
      type: Number,
      trim: true,
  },
  cardLast: {
      type: Number,
      trim: true,
  },
});

export const User = mongoose.model('User', userSchema);
