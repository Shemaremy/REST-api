const express = require('express');
const Joi = require('joi');
const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"}
];


app.get('/api/courses', (req, res) => {
    res.send(courses);
});


app.post('/api/courses', (req, res) => {

    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required()
    });
    const result = schema.validate(req.body);

    
    if (result.error) {
        res.status(400).send("Name must be valid and min chars must be 3");    
    }
    
    else {
        const course = {
            id: courses.length + 1,
            name: req.body.name
        };
    
        courses.push(course);
        res.send(courses);    

    }
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



