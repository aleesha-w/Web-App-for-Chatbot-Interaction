const { usersDbConnection } = require('../db.js');
const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
      },
      email: {
        type: email,
        required: true
      },
      password: {
        type: password,
        required: true
      }
    });

module.exports = usersDbConnection.model('Users', UsersSchema);