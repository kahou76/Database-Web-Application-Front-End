import React, { useState } from 'react';
import './required.css';
import 'tachyons';

const AddRoom = () => {
  const [formData, setFormData] = useState({
    room_no: '',
    hotel_no: '',
    room_type: '',
    room_price: ''
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
      const response = await fetch('http://localhost:3000/rooms', {
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
      <label className ="db fw6 lh-copy f6 required">Room NO (3 digits):</label>
      <input
          type="text"
          name="room_no"
          value={formData.room_no}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6 required">Hotel NO (5 digits):</label>
      <input
          type="text"
          name="hotel_no"
          value={formData.hotel_no}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Room Type (Standard, Suite, Deluxe):</label>
      <input
          type="text"
          name="room_type"
          value={formData.room_type}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Room Price:</label>
      <input
          type="text"
          name="room_price"
          value={formData.room_price}
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
          Add Room
      </button>
      </form>
    </div>
  );
};

export default AddRoom;
