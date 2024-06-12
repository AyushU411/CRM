import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [totalSpends, setTotalSpends] = useState(0);
  const [visits, setVisits] = useState(0);
  const [lastVisit, setLastVisit] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customer = { name, email, totalSpends, visits, lastVisit };
    await axios.post('http://localhost:5000/api/customers', customer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="number" value={totalSpends} onChange={(e) => setTotalSpends(e.target.value)} placeholder="Total Spends" />
      <input type="number" value={visits} onChange={(e) => setVisits(e.target.value)} placeholder="Visits" />
      <input type="date" value={lastVisit} onChange={(e) => setLastVisit(e.target.value)} />
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default CustomerForm;
