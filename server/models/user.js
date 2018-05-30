const mongoose = require('mongoose');
var validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,//email should be unique
        validate: {
            /*
            validator: (value) =>{
                return validator.isEmail(value);//it will return truw if email is valid and false if email is false
            }*/
            
            validator: validator.isEmail,//explanation same as above
            message: '{VALUE} is not valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6   
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type:String,
            required: true
        }
    }]
}); //it will create a schema of the user which will have all the property of the user, we require schema to generate custom methods because by using mongoose.model we cannot to that

UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();
    
    return _.pick(userObject,['_id', 'Email']);
};

UserSchema.methods.generateAuthToken = function () {
    var user = this;//we used normal function to use binding functionality, now when we are going to call this instance method as 'user.generateAuthToken' then out user variable will point to that user.
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens.push({access, token});

    return user.save().then(() => {
        return token;
    });
};//it is an object and on this object we can add any custom method(instanced method), instance method have access to indivisual document.


var User = mongoose.model('User', UserSchema);

// var User = mongoose.model('User', {
//     Email: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1,
//         unique: true,//email should be unique
//         validate: {
//             /*
//             validator: (value) =>{
//                 return validator.isEmail(value);//it will return truw if email is valid and false if email is false
//             }*/
            
//             validator: validator.isEmail,//explanation same as above
//             message: '{VALUE} is not valid email'
//         }
//     },
//     password: {
//         type: String,
//         require: true,
//         minlength: 6   
//     },
//     tokens: [{
//         access: {
//             type: String,
//             required: true
//         },
//         token: {
//             type:String,
//             required: true
//         }
//     }]
// });


module.exports = {User};