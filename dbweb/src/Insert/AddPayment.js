import React, { useState } from 'react';
import './required.css';
import 'tachyons';

const AddPayment = () => {
  const [formData, setFormData] = useState({
    payment_id: '',
    payment_type: '',
    payment_date: '',
    reservation_id: '',
    user_id: '',
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
      const response = await fetch('http://localhost:3000/payments', {
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
      <label className ="db fw6 lh-copy f6 required">Payment ID (6 digits):</label>
      <input
          type="text"
          name="payment_id"
          value={formData.payment_id}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Payment Type:</label>
      <input
          type="text"
          name="payment_type"
          value={formData.payment_type}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Payment Date:</label>
      <input
          type="date"
          name="payment_date"
          value={formData.payment_date}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6 required">Reservation ID (9 digits):</label>
      <input
          type="text"
          name="reservation_id"
          value={formData.reservation_id}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6 required">User ID (9 digits):</label>
      <input
          type="text"
          name="user_id"
          value={formData.user_id}
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
          Add Payment
      </button>
      </form>
    </div>
  );
};

export default AddPayment;
