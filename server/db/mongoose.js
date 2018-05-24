const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');//'process.env.MONGODB_URI' help us connect to 'mLab' mongodb database, which we addded on to the heroku. heroku geenerate 'MONGODB_URI' for the genersted add-on.

module.exports = {mongoose};