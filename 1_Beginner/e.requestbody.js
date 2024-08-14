/* HTML Form (Client-Side):
   -----------------------

<form action="/users" method="POST">
  <input type="text" name="name">
  <input type="number" name="age">
  <button type="submit">Submit</button>
</form>


*/


// Server-Side:

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));    // Middleware to parse URL-encoded form data
app.use(express.json());    // Middleware to parse JSON-formatted data


app.post('/users', (req, res) => {

    // Accessing the request body
  const userName = req.body.name;
  const userAge = req.body.age;  
  console.log(`Name: ${userName}, Age: ${userAge}`);
  
  // Sending a response back to the client
  res.send(`Received user data - Name: ${userName}, Age: ${userAge}`);
});




/*  How It Works:
    -------------

- When the user submits the form, 
- The browser sends a POST request to /users with the data in the request body.
- The server uses express.urlencoded() to parse the form data and make it available in req.body.
- You can then access the form data in req.body.name and req.body.age and use it as needed (e.g., store it in a database, process it, etc.).

*/