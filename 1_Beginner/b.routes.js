const express = require('express');
const app = express();
const PORT = process.env.port || 5000;


app.get('/getusers', (req, res) => {
   res.send({ message: "I'm in get method that reads" }); 
});


app.listen(PORT, () => {
    console.log(`I'm listening to port: ${PORT}`)
});





/* ABOVE IS AN EXAMPLE OF A ROUTE


 - /getusers is an endpoint
 - req and res are arguments in a callback function
 - get is an http method for reading or retrieving 
 - message is property whose value is that prompt
 - Send send that in a JSON format

*/