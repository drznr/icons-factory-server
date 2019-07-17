const express = require('express');
const router = express.Router();
const nodemailerModule = require('../modules/nodemailer.module');

router.post('/', async (req, res, next) => {
    try {
        res.json(await nodemailerModule.sendMail(req.body));
    } catch (err) {
      res.json(err);
    }
 });

module.exports = router;