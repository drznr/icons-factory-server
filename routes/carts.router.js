const express = require('express');
const router = express.Router();
const cartsModule = require('../modules/carts.module');

router.get('/:id', async (req, res, next) => {
  try {
    res.json(await cartsModule.getCart(req.params.id));
  } catch (err) {
    res.json(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    res.json(await cartsModule.addCartItem(req.params.id, req.body));
  } catch (err) {
    res.json(err);
  }
});

router.delete('/:id/:index', async (req, res, next) => {
  try {
    res.json(await cartsModule.deleteCartItem(req.params.id, req.params.index));
  } catch (err) {
    res.json(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    res.json(await cartsModule.deleteCartItem(req.params.id));
  } catch (err) {
    res.json(err);
  }
});


module.exports = router;