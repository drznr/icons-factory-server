const Order = require('../models/order.model');

const ordersModule = {
    getByDate: (date) => {
        return Order.find({deliveryDate: date});
    },
    save: (details) => {
        return new Order(details).save();
    },
    getByUserId: (id) => {
        return Order.find({userId: id});
    },
   getAllOrders: () => {
       return Order.find();
   }
}

module.exports = ordersModule;