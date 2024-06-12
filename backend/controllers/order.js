// const Order = require('../models/Order');

// exports.createOrder = async (req, res) => {
//   const { customerId, amount, date } = req.body;
//   const newOrder = new Order({ customerId, amount, date });
//   await newOrder.save();
//   res.status(201).json(newOrder);
// };

// exports.getOrders = async (req, res) => {
//   const orders = await Order.find();
//   res.status(200).json(orders);
// };

const { publishData } = require('../pubsub/publisher');

exports.createOrder = async (req, res) => {
  const data = req.body;
  await publishData(data);
  res.status(202).json({ message: 'Order data queued for processing' });
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find();
  res.status(200).json(orders);
};

