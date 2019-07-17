var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var authRouter = require('./routes/auth.router');
var productsRouter = require('./routes/products.router');
var cartsRouter = require('./routes/carts.router');
var ordersRouter = require('./routes/orders.router');
var mailsRouter = require('./routes/mails.router');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/icon-factory', { useNewUrlParser: true, useFindAndModify: false });

var app = express();

app.set('trust proxy', 1);
app.use(session({
  secret: 'dr dre',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', authRouter);
app.use('/api/prods', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/mails', mailsRouter);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

module.exports = app;
