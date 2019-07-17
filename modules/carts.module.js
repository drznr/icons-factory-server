const Cart = require('../models/cart.model');

const cartsModule = {
    getCart: async (userId) => {
        let cart = await Cart.findOne({ userId: userId });
        if (!cart) {
            let newCartData = {
                userId: userId,
                items: []
            }
            let newCart = await new Cart(newCartData).save();
            return newCart;
        } else return cart;
    },
    addCartItem: async (cartId, item) => {
        let cart = await Cart.findOne({ _id: cartId });
        cart.items = [...cart.items, item];
        await Cart.findOneAndUpdate({ _id: cartId }, cart);
        let updatedCart = Cart.findOne({ _id: cartId });
        return updatedCart;
    },
    deleteCartItem: async (cartId, itemId) => {
        if (itemId) {
            let cart = await Cart.findOne({ _id: cartId });
            cart.items = cart.items.filter((i, index) => index !== parseInt(itemId));
            await Cart.findOneAndUpdate({ _id: cartId }, cart);
            let updatedCart = await Cart.findOne({ _id: cartId });
            return updatedCart;
        } else {
             let cart = await Cart.findOne({ _id: cartId });
            cart.items = [];
            await Cart.findOneAndUpdate({ _id: cartId }, cart);
            let updatedCart = await Cart.findOne({ _id: cartId });
            return updatedCart;
        }
    }
}

module.exports = cartsModule;