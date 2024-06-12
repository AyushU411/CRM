// const Customer = require('../models/Customer');

// exports.createCustomer = async (req, res) => {
//   const { name, email, totalSpends, visits, lastVisit } = req.body;
//   const newCustomer = new Customer({ name, email, totalSpends, visits, lastVisit });
//   await newCustomer.save();
//   res.status(201).json(newCustomer);
// };

// exports.getCustomers = async (req, res) => {
//   const customers = await Customer.find();
//   res.status(200).json(customers);
// };
const { publishData } = require('../pubsub/publisher');

exports.createCustomer = async (req, res) => {
  const data = req.body;
  await publishData(data);
  res.status(202).json({ message: 'Customer data queued for processing' });
};

exports.getCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.status(200).json(customers);
};
