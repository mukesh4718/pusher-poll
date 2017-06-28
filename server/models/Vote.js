const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  email: String
})

module.exports = mongoose.model('Vote', VoteSchema);