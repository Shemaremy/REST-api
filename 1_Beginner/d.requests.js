// 1. URL
// What it is: The path the client is trying to access.

app.get('/users/:id', (req, res) => {
  console.log(req.url); // Outputs: /users/123 if the URL is /users/123
});











// 2. HTTP Method
// What it is: The type of HTTP request (like GET, POST, PUT, DELETE) that the client is making.

app.post('/users', (req, res) => {
  console.log(req.method); // Outputs: POST
});











// 3. Parameters
// What it is: Dynamic parts of the URL captured as route parameters.

app.get('/users/:id', (req, res) => {
  console.log(req.params.id); // Outputs: 123 if the URL is /users/123
});












// 4. Query Strings
// What it is: Data appended to the URL after a question mark (?) as key-value pairs.

app.get('/search', (req, res) => {
  console.log(req.query.name); // Outputs: John if the URL is /search?name=John
});












// 5. Body Data
// What it is: Data sent in the body of the request, often used in POST or PUT requests.

app.post('/users', (req, res) => {
  console.log(req.body); // Outputs: { name: "John", age: 30 } if the body contains this JSON
});

// Note: To access req.body, you need middleware like express.json():
app.use(express.json());












// 6. Headers
// What it is: Metadata about the request, such as content type, authentication tokens, etc.

app.get('/users', (req, res) => {
  console.log(req.headers['content-type']); // Outputs: application/json if the request has this content type
});



