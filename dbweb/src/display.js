import React, { useState, useEffect } from 'react';

const Customer = () => {
  const [customers, setCustomers] = useState([]);

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

  useEffect(() => {
    console.log(customers);
  }, [customers]);

  return (
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Middle Initial</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr key={index}>
            <td>{customer.user_id}</td>
            <td>{customer.fname}</td>
            <td>{customer.minit}</td>
            <td>{customer.lname}</td>
            <td>{customer.email}</td>
            <td>{customer.address}</td>
            <td>{customer.phoneno}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Customer;
