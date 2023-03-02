import React, { useState } from 'react';
import './required.css';
import 'tachyons';

const AddFlight = () => {
  const [formData, setFormData] = useState({
    flight_no: '',
    dep_airport: '',
    arr_airport: '',
    seat_no: '',
    flight_price: '',
    departure_date: ''
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
      const response = await fetch('http://localhost:3000/flights', {
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
      <label className ="db fw6 lh-copy f6 required">Flight No (4 digits):</label>
      <input
          type="text"
          name="flight_no"
          value={formData.flight_no}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      /> 
      <label className ="db fw6 lh-copy f6 required">Departure Airport</label>
      <input
          type="text"
          name="dep_airport"
          value={formData.dep_airport}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6 required">Arrival Airport:</label>
      <input
          type="text"
          name="arr_airport"
          value={formData.arr_airport}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6 required">Seat NO (3 digits 1 character):</label>
      <input
          type="text"
          name="seat_no"
          value={formData.seat_no}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6 required">Flight Price:</label>
      <input
          type="text"
          name="flight_price"
          value={formData.flight_price}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6 required">Departure Date:</label>
      <input
          type="date"
          name="departure_date"
          value={formData.departure_date}
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
          Add Flight
      </button>
      </form>
    </div>
  );
};

export default AddFlight;
