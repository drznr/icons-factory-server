const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var shirtSchema = new Schema({
    type: String,
    price: Number,
    images: [{type: String}],
    colors: [{type: String}]
  });
  
var Shirt = mongoose.model('Shirt', shirtSchema);
  
module.exports= Shirt;