var env = process.env.NODE_ENV || 'development';//this can be equal to  'test' or 'development' or 'production', so it is used to diffrentiate code and database for all three uses.
//console.log('env ******', env);

if(env === 'development' || env === 'test')
{
    var config = require('./config.json');//when you require a json file, it automatically parses it to a javascript object
    //console.log(config);
    var envConfig = config[env];//when you have to acess a property use bracket notation.

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });//Object.keys takes an object, it takes all the keys and return them as array
}

/*
if(env === 'development')
{
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}
else if(env === 'test')
{
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}
*/
