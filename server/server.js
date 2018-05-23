var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

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

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});//passing in array in an object give you more flexibility for future, so that you can define more propertise with it.
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;//It is used to grab id from the url 'localhost:3000/todos/5b04ca909b0dad40d0a1d8db'
    
    if(!ObjectID.isValid(id))
    {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo)
        {
            return res.status(404).send();
        }
        
        res.send({todo});
    }, (e) => {
        res.status(404).send();
    });
    
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};

