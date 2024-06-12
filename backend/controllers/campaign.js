const { publishData } = require('../pubsub/publisher');

exports.createCampaign = async (req, res) => {
  const data = req.body;
  await publishData(data);
  res.status(202).json({ message: 'Campaign data queued for processing' });
};
