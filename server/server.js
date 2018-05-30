require('./config/config.js');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

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
const port = process.env.PORT;

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

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id))
    {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo)
        {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(404).send();
    });
});

//patch is used to update the database
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);//it will only pick text and completed property from the body object, as we cant allow user to manipulate any values other than that.

    if(!ObjectID.isValid(id))
    {
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed)
    {
        body.completedAt = new Date().getTime();//it will return number of milliseconds after 1st jan 1970 midnight. If its in negetive its before 1st jan 1970 midnight and if positive its after 1st jan 1970 midnight.

    }
    else
    {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo)
        {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });

});

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['Email', 'password']);
    var user = new User(body);

    //User.findByToken//model method, works like 'findById' method, takes jwt token and returns the requested user to the caller
    //user.generateAuthToken//instance method, applied to every user, it will generste the token, add it to the document and save it and return it to the user
    
    /*
    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
    */

    user.save().then(() => {
        return user.generateAuthToken();
        //res.send(doc);
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });

});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};