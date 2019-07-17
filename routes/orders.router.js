const express = require('express');
const router = express.Router();
const ordersModule = require('../modules/orders.module');

router.post('/', async (req, res, next) => {
    try {
        let sameDayOrders = await ordersModule.getByDate(req.body.deliveryDate);
        if (sameDayOrders.length >= 3) res.json({ success: false });
        else {
            res.json({ success: true, order: await ordersModule.save(req.body) });
        }
    } catch (err) {
        res.json(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
      res.json(await ordersModule.getByUserId(req.params.id));
    } catch (err) {
        res.json(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
      res.json(await ordersModule.getAllOrders());
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;