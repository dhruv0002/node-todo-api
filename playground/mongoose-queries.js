const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5b039696d505f509dc92f57b';
var id = '5afe342b5f6f202eb011bfd011';

/*
if(!ObjectID.isValid(id))
{
    console.log('ID not valid');
}
*/

/*
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos',todos);
});//here we didnt need to convert 'id' string to object id using 'ObjectId' constructer as mongoose do it automatically.

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo',todo);
});//if you need to query only one doc it is then advisable to use 'findOne' instead of find, as 'findOne' will return null instead of empty array in case of 'find' and you can use that anywhere.
*/

/*
Todo.findById(id).then((todo) => {
    if(!todo)
    {
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));//if you need to query only one doc by Id it is then advisable to use 'findByID' instead of 'findOne', and for any other parameter you can use 'findOne'.
*/

User.findById(id).then((user) => {
    if(!user)
    {
        return console.log('User not found');
    }

    console.log('User By Id', user);
}).catch((e) => console.log(e));

