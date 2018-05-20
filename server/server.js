var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/todo.js');

/*
var newTodo = new Todo({
    text: 'Cook dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved Todo ',doc);
}, (e) => {
    console.log('Unable to save Todo');
});

var newTodo = new Todo({
    text: 'Edit this text', //If you provide text with some other data type other than strings then it will covert it to string by encapsulating it in double quotes.
});

newTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save todo');
});

var newUser = new User({
    Email: 'dhruv0002@gmail.com'
})

newUser.save().then((doc) => {
    console.log(JSON.stringify(newUser, undefined, 2));
}, (e) => {
    console.log('Unable to add new user')
});
*/

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});



