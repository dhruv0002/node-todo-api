//const MongoClient = require('mongodb').MongoClient;

/*
//Object destructuring, it us used to convert the properties of an object to a variable itself, where the value in the variable will be same as the value stored in the property of the onject.
var user = {name: 'dhruv', age: 25};
var {name} = user;
console.log(name);
*/

const {MongoClient, ObjectId} = require('mongodb');

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
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err)
        {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    */

    /*
    db.collection('Users').insertOne({
        _id: 123, //explicitely mentioning the id
        name: 'Janush P',
        age: 23,
        location: 'Coimbatore'
    }, (err, result) => {
        if (err)
        {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    */

    /*
    db.collection('Users').insertOne({
        name: 'Janush P',
        age: 23,
        location: 'Coimbatore'
    }, (err, result) => {
        if (err)
        {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id. getTimestamp());//To extract timestamp out of object id
    });
    */

        db.close();
    });
    
//Object Id is of 12 byte value, first 4 byte are time stamp, next 3 bytes are machine identifiers, next 2 byte is process id and next 3 bytes for random values. We can generate our own object id
//also by explicitly mentioning it.