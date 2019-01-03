const brInfosCollection = require('../models/brokerInfo')

const admiralMarkets = new brInfosCollection ({
  _id: 2,
  brokerName: 'Admiral Markets',
  brBewertung: '92%',
  regulated: 'International',
  hebel: '500:1',
  presse: 'Fachpresse',
  linkGoToBroker: 'http://www.avatraderussia.ru/join-ava/real-account?tradingplatform=2&dealtype=1&mtsrv=mt1&tag=88228&tag2=~profile_default'
})

// brInfosCollection.findOneAndUpdate({_id: 2}, admiralMarkets, {new: true}, function (err, AdmiralMarkets) {
//   console.log('Updated', AdmiralMarkets)
// })

 admiralMarkets.remove()
  .then(res => {console.log('Object Removed', res)})
  .catch(err => {console.log(err)})
admiralMarkets.save()
  .then(res => {console.log('Object Saved', res)})
  .catch(err => {console.log(err)})


module.exports = admiralMarkets
