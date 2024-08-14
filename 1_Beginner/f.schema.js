/* Lets take Mongoose for example
   ------------------------------
   - npm install mongoose


Here's how you define a schema using Mongoose:
*/


const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // This field is mandatory
    unique: true, // This field must be unique
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], // Custom validation
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Password must be at least 6 characters long
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the date when the document is created
  },
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);




