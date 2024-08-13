# Some Exercises


1. (HANDLING get REQUESTS) Define an array of courses each with id and name attribute. The first route will display them all. The second route, a user will make a request using an id of a certain course in the browser url endpoint, and then respond with a course matching the id that a user sent a request with. If he puts 1 at an endpoint, respond with the element with an id 1. If the id doesnt exist, respond with the status code and the error message for the user.



2. (HANDLING post REQUESTS) Define the same array of courses you defined above. The first route will display them all. The second one will accept a new course with id and name and add it to the courses array we had before. Where the next id will be the current one + 1. For example if the last course's id was 4, the one you post will take 5. And after allat, respond with the pushed element. How do we add the element to our container? use postman.
Conditions to check :
- Client must enter a name value and min characters must be 3 (joi package)



3. (HANDLING put REQUESTS) Have an array elements like the one above. The program will
- Look up the course. If doesnt exist, throw a 401 not found error
- If it exists, validate it. If its invalid, throw a 400 bad request 
- Then update the course


