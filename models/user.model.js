const mongoose = require('mongoose');

var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

// schema to create a user with username and password
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  signup_date: {
    type: Date,
    default: Date.now()
  }
});

var userModel = mongoose.model('userModel',userSchema);

module.exports = userModel;
