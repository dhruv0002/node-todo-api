//const MongoClient = require('mongodb').MongoClient;

/*
//Object destructuring, it us used to convert the properties of an object to a variable itself, where the value in the variable will be same as the value stored in the property of the onject.
var user = {name: 'dhruv', age: 25};
var {name} = user;
console.log(name);
*/

const {MongoClient, ObjectID} = require('mongodb');

/*
var obj = new ObjectId();
console.log(obj);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err)
    {
        return console.log('Unable to connect to MongoDb server');
    }

    console.log('Connected to MongoDb server');
    
    /*
    //'find()' returns a curser or a pointer to the docs in the collection, and 'toArray()' convert the pointer to the array of docs and returns a promise, then the promise is handled by the 'then' function.
    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    /*
    //To only fetch docs who have completed feild as true.
    db.collection('Todos').find({completed: true}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    /*
    //Copy the object id to 'new ObjectID(<here>)', because normally putting id to '_id' property wont work.
    db.collection('Todos').find({
        _id: new ObjectID('5afb9f5003324ae025636e4f')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    /*
    //'count()' another cursor function for counting number of docs returned by 'find()' function.
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    /*
    db.collection('Users').find({
        name: 'Janush P'
    }).count().then((count) => {
        console.log(`Users with name Janush are, count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch users', err);
    });
    */

    db.collection('Users').find({
        name: 'Janush P'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });
    //db.close();
    });
    
//Object Id is of 12 byte value, first 4 byte are time stamp, next 3 bytes are machine identifiers, next 2 byte is process id and next 3 bytes for random values. We can generate our own object id
//also by explicitly mentioning it.