const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//To remove everything from Todo collection
/*
Todo.remove({}).then((result) => {
    console.log(result);
});
*/

//findOneAndRemove
/*
Todo.findOneAndRemove({_id : '5b0631a703324ae02563ae12'}). then((doc) => {
    console.log(doc);
});
*/

//findOneByIdAndRemove

Todo.findByIdAndRemove('5b0631a703324ae02563ae12').then((doc) => {
    console.log(doc);
});
