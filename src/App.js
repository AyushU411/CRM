import React from 'react';
import CustomerForm from './components/CustomerForm';
import OrderForm from './components/OrderForm';

const App = () => {
  return (
    <div>
      <h1>Mini CRM</h1>
      <CustomerForm />
      <br></br>
      <OrderForm />
    </div>
  );
};

export default App;
