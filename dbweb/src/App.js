import React, { useState, useEffect } from 'react';
import Display from './display.js';

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/customers')
      .then(res => res.json())
      .then(data => Array.isArray(data) ? setCustomers(data) : setCustomers([]))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Customers</h1>
      {customers && customers.length > 0 ? (
        <Display customers={customers} />
      ) : (
        <p>No customers found</p>
      )}
    </div>
  );
}

export default App;
