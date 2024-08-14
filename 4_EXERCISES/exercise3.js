const express = require('express');
const app = express();
const PORT = process.env.port || 5000;
const Joi = require('joi');

app.use(express.json());

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"}
];


app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.put('/api/courses/:id', (req, res) => {

    const course = courses.find(flacko => {
        const booValue = flacko.id === parseInt(req.params.id);
        return booValue
    });

    if (!course) {
        res.status(404).send("The id of the item you want to update was not found in the library");
    }

    else {
        const schema = Joi.object({
            name: Joi.string().min(3).max(30).required()
        });
        const validname = schema.validate(req.body);
    
        if (validname.error) {
            res.status(400).send("Please, try to enter a name with more than 3 characters long");
        } else {
            course.name = req.body.name;
            res.send(courses);
        }

    }
});




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


