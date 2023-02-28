import React, { useState, useEffect } from 'react';
import AddCustomerForm from '../Insert/AddCustomerForm';
import '@fortawesome/fontawesome-free/css/all.css';
// import SampleForm from '../Insert/sampleForm';
import 'tachyons';

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/customers');
        const data = await response.json();
        console.log(data);
        setCustomers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (userId) => {
    fetch(`http://localhost:3000/customers/${userId}`, {
      method: 'DELETE'
    })
    .then(() => {
      const updatedCustomers = customers.filter(c => c.user_id !== userId);
      setCustomers(updatedCustomers);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div class="pa4">
      <div class="overflow-auto">
        <table class="f6 w-100 mw8 " cellspacing="0">
          <thead>
            <tr>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">User ID</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">First Name</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Middle Initial</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Last Name</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Email</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Address</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Phone Number</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            {customers.map((customer, index) => (
              <tr key={index}>
                <td class="tl pv3 pr3 bb b--black-20">{customer.user_id}</td>
                <td class="tl pv3 pr3 bb b--black-20">{customer.fname}</td>
                <td class="tl pv3 pr3 bb b--black-20">{customer.minit}</td>
                <td class="tl pv3 pr3 bb b--black-20">{customer.lname}</td>
                <td class="tl pv3 pr3 bb b--black-20">{customer.email}</td>
                <td class="tl pv3 pr3 bb b--black-20">{customer.address}</td>
                <td class="tl pv3 pr3 bb b--black-20">{customer.phoneno}</td>
                <td class="tl pv3 pr3 bb b--black-20">
                  <button onClick={() => handleDelete(customer.user_id)}>
                    <i className="fas fa-times"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <br/>
        <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                onClick={() => setShowForm(!showForm)}>
                  {showForm ? 'Hide Form' : 'Add Customer'}
        </button>
        {showForm && <AddCustomerForm />}
    </div> 
  );
};

export default Customer;
