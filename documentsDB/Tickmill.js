const brInfosCollection = require('../models/brokerInfo')

const Tickmill = new brInfosCollection ({
  _id: 3,
  brokerName: 'Tickmill',
  brBewertung: '90%',
  regulated: 'FCA UK | CySEC | FSA SC',
  hebel: '500:1',
  presse: 'Fachpresse',
})

// brInfosCollection.findOneAndUpdate({_id: 3}, Tickmill, {new: true}, function (err, Tickmill) {
//   console.log('Updated', Tickmill)
// })

Tickmill.remove()
 .then(res => {console.log('Object Removed', res)})
 .catch(err => {console.log(err)})
Tickmill.save()
 .then(res => {console.log('Object Saved', res)})
 .catch(err => {console.log(err)})


module.exports = Tickmill
