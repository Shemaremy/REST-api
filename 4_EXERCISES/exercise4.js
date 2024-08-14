const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/api/courses', (req, res) => {
    res.send(courses);
});


app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find( flacko => {
        const boolValue = flacko.id === parseInt(req.params.id);
        return boolValue;
    });

    if(!course) {
        res.status(404).send("The course with the id you entered was not found");
    } else {
        courses.splice(course, 1);
        res.send(courses);
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

