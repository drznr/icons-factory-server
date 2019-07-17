const mongoose = require('mongoose');

const env = process.env.NODE_ENV || 'development';

const config = require('./config/mongo')[env];

module.exports = () => {

    const envUrl = process.env[config.use_env_variable];

    const localUrl = 'mongodb://localhost/icon-factory';

    const mongoUrl = envUrl ? envUrl : localUrl;

    return mongoose.connect(mongoUrl, { useNewUrlParser: true, useFindAndModify: false });
}