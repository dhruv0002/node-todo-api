const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');


const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    Email: 'andrew@example.com',
    password: 'userOnePass',
    token: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    Email: 'jen@example.com',
    password: 'userTwoPass',
}];

const todos = [{
    _id: new ObjectID(),
    text: 'first test todo'
}, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333
}];

/*
beforeEach((done) => {
    Todo.remove({}).then(() => done());
});//'beforeEach' will run the code in it before every test is started so that you can make neccessary changes before your test runs.
*/

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
       Todo.insertMany(todos);//automatically returns a promise so no need of adding 'return'.
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};