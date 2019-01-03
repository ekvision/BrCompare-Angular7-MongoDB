const brInfosCollection = require('../models/brokerInfo')

const fxPro = new brInfosCollection ({
  _id: 1,
  brokerName: 'FxPro',
  brBewertung: '81%',
  regulated: 'Australia',
  hebel: '500:1',
  presse: 'Fachpresse',
})

// brInfosCollection.findOneAndUpdate({_id: 1}, fxPro, {new: true}, function (err, fxPro) {
//   console.log('Updated', fxPro)
// })

fxPro.remove()
 .then(res => {console.log('Object Removed', res)})
 .catch(err => {console.log(err)})
fxPro.save()
 .then(res => {console.log('Object Saved', res)})
 .catch(err => {console.log(err)})


module.exports = fxPro
