const express = require('express');
const router = express.Router();
const shirtsModule = require('../modules/shirt.module');
const iconsModule = require('../modules/icons.module');

router.get('/', async (req, res, next) => {
  try {
    let shirts = await shirtsModule.get();
    let icons = await iconsModule.get();
    res.json({shirts: shirts, icons: icons});
  } catch (err) {
    res.json(err);
  }
});

router.post('/shirts', async (req, res, next) => {
  try {
    res.json(await shirtsModule.save(req.body));
  } catch (err) {
    res.json(err);
  }
});

router.post('/icons', async (req, res, next) => {
  try {
    res.json(await iconsModule.save(req.body));         
  } catch (err) {
    res.json(err);
  }
});

router.delete('/shirts/:id', async (req, res, next) => {
  try {
    res.json(await shirtsModule.delete(req.params.id));
  } catch (err) {
    res.json(err);
  }
});

router.delete('/icons/:id', async (req, res, next) => {
  try {
    res.json(await iconsModule.delete(req.params.id));
  } catch (err) {
    res.json(err);
  }
});

router.put('/icons/:id', async (req, res, next) => {
  try {
    res.json(await iconsModule.update(req.params.id, req.body));
  } catch (err) {
    res.json(err);
  }
});

router.put('/shirts/:id', async (req, res, next) => {
  try {
    res.json(await shirtsModule.update(req.params.id, req.body));
  } catch (err) {
    res.json(err);
  }
});


module.exports = router;