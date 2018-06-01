const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/*
var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
    id: 4
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()//Here 'somesecret' is our salt so that hacker is tricked
};

//Making attack
token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();//the hacker will not be knowing the salt which is generated in the server, so he will be tricked

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
if (resultHash === token.hash)
{
    console.log('Data was not changed');
}
else
{
    console.log('Data was changed. Do not trust!!');
}    
*/

//jwt.io is the website to play with jwt
/*
var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');//it takes the data object and sign it, ie, it create its hash and returns the token
console.log(token);

var decoded = jwt.verify(token, '123abc');//it does the opposite, it take the token and secret and ensure that data is not manipulated 
console.log(decoded);
*/

var password = '123abc';

/*
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});
*/

var hashedPassword = '$2a$10$fI/xWe2kWBm0Iv/yeYiqReq5DLPUemOXeQ7/eaK.HlwRlWn3DY6LC';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});