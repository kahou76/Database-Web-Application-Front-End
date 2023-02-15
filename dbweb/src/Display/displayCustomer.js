import React, { useState, useEffect } from 'react';
import AddCustomerForm from '../Insert/AddCustomerForm';
import SampleForm from '../Insert/sampleForm';
import 'tachyons';
const Customer = () => {
  const [customers, setCustomers] = useState([]);
  //hello
  //Display
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

  // useEffect(() => {
  //   console.log(customers);
  // }, [customers]);

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
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <h3>Insert Table: </h3>
        <AddCustomerForm />
        <SampleForm/>
    </div> 
  );
};

export default Customer;
