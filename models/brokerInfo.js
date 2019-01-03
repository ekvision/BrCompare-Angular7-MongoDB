const mongoose = require('mongoose')

const brInfoSchema = new mongoose.Schema({
  _id:  Number,
  brokerName:String,
  brBewertung: String,
  regulated: String,
  hebel: String,
  presse: String,
  linkGoToBroker: String,
})


module.exports = mongoose.model('brInfos', brInfoSchema)

