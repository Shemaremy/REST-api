
# First web server with expressjs






1. Basic structure

- Initialise an import of the express module which makes it easier to manage and set up a web server.
- Create an instance of an Express application used to define the server's behavior, like handling requests and sending responses.
- Define the port where you want your server to run on
- Then do everything below this. I mean the body
- So basic structure: 
    -> Import
    -> Body (mostly routes)
    -> Start server


- Then start the server. We use app, PORT and listen() function











2. How to run it
- We run/start the server by node flacko.js supposing flacko is the name of the js server file
- Strucure to run : app.listen(PORT, () => {})
- listen() : Function that starts the server
- PORT : Contains the port the server will run on












3. Terminal output
- For the file a.structure.js, we view the output in the terminal 
- If we search the url: http://localhost:5000  we get message 'Cannot GET /'







4. Browser output

- We use Routes to get the output in the browser
- A route is like a specific address that a user or a browser can go to on your website
- It tells your server what to do when someone visits that certain URL.
- It tells server what to do through http methods (post, get, put, delete)

- Structure : app.post('/', (req, res) => {});

- post() : http method
- / : endpoint to do a post method on
- req : request
- res : response 

- Visit b.routes.js for more













5. Validation with Joi package (Help us validate objects or data from fields like form fields)

- Installation : npm install joi
- Structure:
    -> Import package
    -> Define schema to contain body as an object and give it rules
    -> Define a variable that validates that schema

- Then check c.joi.js for more












6. Params
- "params" (short for "parameters") are used to capture dynamic values from the URL in your routes.
- They are parts of a url path
- In exercise1, you will see sth like: app.get('/api/courses/:id')
- /api/courses/:id is a route where :id is a param or a parameter
- So req.params.id is a way to access an id param we named id










7. Request (req)

- It is an object
- It represents the HTTP request that the client (like a web browser or a mobile app) makes to your server.
- It contains information about the requst such as: url, method, params, query strings, body, headers. Ex:

- req.url : The path the client is trying to access (e.g., /users/123).
- req.method: The type of request (GET, POST, PUT, DELETE, etc.).
- Parameters: Any dynamic parts of the URL (e.g., req.params.id for /users/:id).
- Query Strings: Data appended to the URL (e.g., req.query.name for ?name=John).
- Body Data: Data sent in the body of the request, typically in POST or PUT requests (e.g., req.body).
- Headers: Metadata about the request, like content type, authentication tokens, etc. (e.g., req.headers).
- For more about req, check  d.requests.js







8. Response (res)

- It is an object
- Represents the HTTP response that your server sends back to the client.
- It contains methods to send data back to the client, such as:

- res.send() : to send a response (e.g., text, JSON, HTML) to the client.
- res.json() : to send a JSON response.
- res.status() : to set the HTTP status code (e.g., 200 for success, 404 for not found).
- res.redirect() : to redirect the client to a different URL.
- res.end() : to end the response without sending any data.






















9. Request body in express js

- refers to the data that is sent from the client to the server as part of an HTTP request. 
- This data is typically included in the body of the request, especially in POST, PUT, PATCH, or DELETE requests
- where the client needs to send information to the server (like form data, JSON, or files).
- The data in the request body can be in different formats, such as:
- JSON: { "name": "John", "age": 30 }
- Form Data: name=John&age=30
- XML: <user><name>John</name><age>30</age></user>
- To access and work with the request body in Express.js, you need to use middleware to parse/convert the body data. Common middleware includes:

- express.json(): Parses JSON-formatted request bodies.
- express.urlencoded(): Parses URL-encoded form data.
- Once parsed, the data is available in req.body.
- Imagine you have a form on a website where a user submits their name and age, 
- The form sends this data to your server when submitted,
- Now check e.requestbody.js to see how req body works here






10. Middleware

- Middleware refers to functions that run during the processing of an HTTP request, 
- Before it reaches the final route handler. 
- Middleware functions have access to the request object (req), 
- The response object (res), and the next middleware function in the application’s request-response cycle.
- For example, app.use(express.json()); is a middleware to parse JSON request bodies
- This middleware above parses incoming JSON request bodies and makes them accessible via req.body.














11. Schema in express js

- A schema is not something native to Express itself 
- But is often used in conjunction with a database like MongoDB when working with 
- an Object Data Modeling (ODM) library like Mongoose. 
- A schema defines the structure and rules for the data stored in the database, 
- ensuring consistency and providing how the data should be stored and retrieved.
- Schemas are very necessary when you need to validate data from the client to the server.
- Visit f.schema.js