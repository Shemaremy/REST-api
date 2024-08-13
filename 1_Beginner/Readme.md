
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




