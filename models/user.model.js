const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    role: String
  });
  
var User = mongoose.model('User', userSchema);
  
module.exports= User;