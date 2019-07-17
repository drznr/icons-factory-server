const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var iconSchema = new Schema({
    name: String,
    category: String,
    image: String
  });
  
var Icon = mongoose.model('Icon', iconSchema);
  
module.exports= Icon;