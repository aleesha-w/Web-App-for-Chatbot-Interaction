const mongoose = require('mongoose');

const metricsDbUri = 'mongodb+srv://l201177:fypdb@cluster0.twszj4d.mongodb.net/metrics';
const usersDbUri = 'mongodb+srv://l201177:fypdb@cluster0.twszj4d.mongodb.net/users';
const metricsDbConnection = mongoose.createConnection(metricsDbUri);
const usersDbConnection = mongoose.createConnection(usersDbUri);

module.exports = { metricsDbConnection, usersDbConnection };
