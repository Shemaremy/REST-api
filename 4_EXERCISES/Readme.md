# Some Exercises


1. (HANDLING get REQUESTS) Define an array of courses each with id and name attribute. The first route will display them all. The second route, a user will make a request using an id of a certain course in the browser url endpoint, and then respond with a course matching the id that a user sent a request with. If he puts 1 at an endpoint, respond with the element with an id 1. If the id doesnt exist, respond with the status code and the error message for the user.



2. (HANDLING post REQUESTS) Define the same array of courses you defined above. The first route will display them all. The second one will accept a new course with id and name and add it to the courses array we had before. Where the next id will be the current one + 1. For example if the last course's id was 4, the one you post will take 5. And after allat, respond with the pushed element. How do we add the element to our container? use postman.
Conditions to check :
- Client must enter a name value and min characters must be 3 (joi package)



3. (HANDLING put REQUESTS) Have an array elements like the one above. The program will
- Check the id requested in the params, if it doesnt exist throe an error. If that id exists,
- Look up the course corresponing to that id. 
- Then receives a new course name. If the name is invalid throw a 400 bad request.
- But if it is valid, update the course then respond with the updated course array




4. (HANDLING delete REQUESTS) Have the same as we have above. Now I want the server to remove / delete an element with the id same as the one in the route parameter
- If that id is not found, throw an error.
- If it was found delete and resend the new array
