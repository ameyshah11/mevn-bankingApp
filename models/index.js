const dbConfig = require('../config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {}

db.mongoose = mongoose;
db.mongoURL = dbConfig.mongoURL;

// Database name
db.banking = require("./banking.model")(mongoose) // Functional Call

module.exports = db
