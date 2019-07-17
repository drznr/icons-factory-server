const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var orderSchema = new Schema({
  userId: String,
  contactName: String,
  contactMail: String,
  price: Number,
  orderDate: Date,
  deliveryDate: Date,
  city: String,
  adress: String
});

var Order = mongoose.model('Order', orderSchema);
  
module.exports= Order;