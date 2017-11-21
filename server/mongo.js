const mongoose = require('mongoose');
const Hero = require('./todo-model');

mongoose.Promise = global.Promise;



function connect() {
  mongoose.connect('mongodb://localhost/hero',{ useMongoClient: true });
}

module.exports = {
  connect,
  mongoose
};
