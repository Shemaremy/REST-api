const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`I'm listening to port: ${PORT}`)
});





/* SHORT NOTE
   ----------
   - When we said const app = express();
   - We created an instance of an express application.
   - This means that now app will be able to call various built in functions found in express framework
   - Like listen(), post(), put(), get(), and many more...

   - process.env.PORT : The app takes the default port provided by the hosting service, if it doesnt exist uses the 5000

*/