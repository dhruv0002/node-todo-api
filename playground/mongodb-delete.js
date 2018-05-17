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
    
    //deleteMany: it delete all the docs that matches the criteria.
    /*
    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });
    */

    //deleteOne: it deletes the first docs it sees that is matching the criteria and then stops.
    /*
    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });
    */

    //findOneAndDelete
    /*
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });
    */

    //challange
    /*
    db.collection('Users').deleteMany({name: 'Janush P'}).then((result) => {
        console.log(result);
    });
    */

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5afb973346f4d835ac5556f4')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //db.close();
});
    
//Object Id is of 12 byte value, first 4 byte are time stamp, next 3 bytes are machine identifiers, next 2 byte is process id and next 3 bytes for random values. We can generate our own object id
//also by explicitly mentioning it.