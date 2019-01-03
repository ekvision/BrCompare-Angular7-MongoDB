const brokerInfo = require('./../models/brokerInfo')

module.exports.getBrokerId = async (req, res) => {
  const brokerinfo = await brokerInfo.find({
    _id: req.params.brokerid
  })
  res.status(200).json(brokerinfo)
}




