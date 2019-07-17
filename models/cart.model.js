const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var cartSchema = new Schema({
    userId: String,
    items: [{type: Object}]
});
  
var Cart = mongoose.model('Cart', cartSchema);
  
module.exports= Cart;