import React, { useState } from 'react';
import './required.css'
import 'tachyons';

const AddBooking = () => {
  const [formData, setFormData] = useState({
    date_from: '',
    date_to: '',
    time_from: '',
    time_to: '',
    reservation_id: '',
    user_id: '',
    hotel_no: '',
    room_no: '',
    flight_no: '',
    seat_no: '',
    departure_date: '',
    car_plate_no: ''
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
      const response = await fetch('http://localhost:3000/books', {
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
      <label className ="db fw6 lh-copy f6 required">Date From:</label>
      <input
          type="date"
          name="date_from"
          value={formData.date_from}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6 required">Date To:</label>
      <input
          type="date"
          name="date_to"
          value={formData.date_to}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6 required">Time From:</label>
      <input
          type="time"
          name="time_from"
          value={formData.time_from}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6 required">Time To:</label>
      <input
          type="time"
          name="time_to"
          value={formData.time_to}
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
      <label className ="db fw6 lh-copy f6">Hotel NO (5 digits):</label>
      <input
          type="text"
          name="hotel_no"
          value={formData.hotel_no}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Room NO (3 digits):</label>
      <input
          type="text"
          name="room_no"
          value={formData.room_no}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Flight NO (4 digits):</label>
      <input
          type="text"
          name="flight_no"
          value={formData.flight_no}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Seat NO (4 digits):</label>
      <input
          type="text"
          name="seat_no"
          value={formData.seat_no}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Departure Date:</label>
      <input
          type="date"
          name="departure_date"
          value={formData.departure_date}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Car Plate NO (7 digits):</label>
      <input
          type="text"
          name="car_plate_no"
          value={formData.car_plate_no}
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
          Add Booking
      </button>
      </form>
    </div>
  );
};

export default AddBooking;
