const express = require('express')
const db = express()
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/brokers', {
  useNewUrlParser: true
}).then(() => console.log('Mongo gestartet'))
  .catch((error) => console.log(error))


require('./documentsDB/fxpro')
require('./documentsDB/admiralMarkets')
require('./documentsDB/Tickmill')

db.use(require('cors')())
db.use('/brokerdetail', require('./routes/brokerInfo'))


module.exports = db