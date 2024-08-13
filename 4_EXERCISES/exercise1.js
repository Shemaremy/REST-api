const express = require('express');
const app = express();
const PORT = process.env.port || 5000;


const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];


app.get('/api/courses', (req, res) => {
    res.send(courses);
});


app.get('/api/courses/:id', (req, res) => {

    const course = courses.find(flacko => {
        const boolValue = flacko.id === parseInt(req.params.id);
        return boolValue;
    });

    
    if (!course) {
        res.status(404).send("The course with the given id was not found!")
    } else {
        res.send(course);
    }
    
});


app.listen(PORT, () => {
    console.log(`I'm listening to port ${PORT}`);
});
























/* COURSE VARIABLE EXPLANATION:
-------------------------------


That line of code is used to search the courses array for a course object that has 
an id matching the id provided in the request URL. Here's a detailed breakdown:



1) /:id 
    -----

- /:id is a placeholder for any value provided in that segment of the URL
- When a request is made to a URL like /api/courses/2, :id captures the value 2 from the URL path.
- In your route handler, req.params.id will be 2 (as a string by default).


2) courses.find(...):
   ------------------

- The .find() method iterates over the courses array,
- flacko is like an object that will help to access the course id
- Checking if flacko.id === req.params.id, where:
- flacko.id : will contain the current course id, and
- req.params.id : will contain the id appended by the user in the url endpoint

- It will be received as a sting, that's why we made it an int
- If the contition is true, course = to the array value we found corresponding to the id
- If false, course will be undefined cause its value has not been found

*/