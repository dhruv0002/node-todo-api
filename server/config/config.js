var env = process.env.NODE_ENV || 'development';//this can be equal to  'test' or 'development' or 'production', so it is used to diffrentiate code and database for all three uses.
//console.log('env ******', env);
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

