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
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5afbbcb203324ae0256378bf')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    */

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5afa610a7b422b258cd5f176')
    }, {
        $set: {
            name: 'Mayur Bhatt'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});
    
//Object Id is of 12 byte value, first 4 byte are time stamp, next 3 bytes are machine identifiers, next 2 byte is process id and next 3 bytes for random values. We can generate our own object id
//also by explicitly mentioning it.