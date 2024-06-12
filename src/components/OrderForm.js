import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = { customerId, amount, date };
    await axios.post('http://localhost:5000/api/orders', order);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={customerId} onChange={(e) => setCustomerId(e.target.value)} placeholder="Customer ID" />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderForm;
