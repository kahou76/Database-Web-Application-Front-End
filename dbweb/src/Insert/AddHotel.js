import React, { useState } from 'react';
import './required.css';
import 'tachyons';

const AddHotel = () => {
  const [formData, setFormData] = useState({
    hotel_no: '',
    hotel_name: '',
    hotel_city: '',
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
      const response = await fetch('http://localhost:3000/hotels', {
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
      <label className ="db fw6 lh-copy f6 required">Hotel NO (5 digits):</label>
      <input
          type="text"
          name="hotel_no"
          value={formData.hotel_no}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6 required">Hotel Name:</label>
      <input
          type="text"
          name="hotel_name"
          value={formData.hotel_name}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Hotel City:</label>
      <input
          type="text"
          name="hotel_city"
          value={formData.hotel_city}
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
          Add Hotel
      </button>
      </form>
    </div>
  );
};

export default AddHotel;
