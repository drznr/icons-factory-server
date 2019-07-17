const express = require('express');
const router = express.Router();
const authModule = require('../modules/auth.module');


router.get('/', async (req, res, next) => {
   try {
    if (req.session.user) res.json({auth: true, user: req.session.user});
    else res.json({auth: false});
   } catch (err) {
     res.json(err);
   }
});

router.post('/register', async (req, res, next) => {
  try {
    let data = await authModule.save(req.body);
    if (data.auth) req.session.user = data.user;
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    let data = await authModule.login(req.body);
    if (data.auth) req.session.user = data.user;
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

router.get('/logout', (req, res, next) => {
  try {
    req.session.destroy((err) => {
      res.json({ auth: false });
    });
  } catch (err) {
    res.json({ err: err });
  }
});

module.exports = router;
