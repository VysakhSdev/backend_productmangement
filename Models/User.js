const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your Name'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
 
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model('User', schema);
