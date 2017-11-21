const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const heroSchema = new Schema({
      name: String,   
    date: Date,
    completed:{type: Boolean,default:false}
});

const Hero = mongoose.model('Hero', heroSchema);
module.exports = Hero;