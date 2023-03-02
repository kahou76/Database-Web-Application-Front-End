import React, { useState } from 'react';
import './required.css';
import 'tachyons';

const AddCustomerForm = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    fname: '',
    minit: '',
    lname: '',
    email: '',
    address: '',
    phoneno: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      // TODO: handle successful form submission
    } catch (error) {
      console.error(error);
      // TODO: handle form submission error
    }
  };

  return (
    
    <div className=" ba">
      <form onSubmit={handleSubmit} class="pa4">
      <label className ="db fw6 lh-copy f6 required">User ID (9 digits):</label>
      <input
          type="text"
          name="user_id"
          value={formData.user_id}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6 required">First Name:</label>
      <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Middle Initial:</label>
      <input
          type="text"
          name="minit"
          value={formData.minit}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6 required">Last Name:</label>
      <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Email:</label>
      <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Address:</label>
      <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6 required">Phone Number (11 digits):</label>
      <input
          type="tel"
          name="phoneno"
          value={formData.phoneno}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <br/>
      <br/>
      <button className="db ph3 pv2 input-reset ba b--black grow pointer f6 pa2 input-reset ba bg-transparent w-100 measure reload-button" 
              type="submit" 
              onClick={() => { alert("Insert successfully!"); 
                                window.location.reload(); 
                              }}
      >
          Add Customer
      </button>
      </form>
    </div>
  );
};

export default AddCustomerForm;
