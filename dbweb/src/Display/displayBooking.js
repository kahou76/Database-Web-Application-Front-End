import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import AddBooking from '../Insert/AddBooking';
import 'tachyons';

const Booking = () => {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/books');
        const data = await response.json();
        console.log(data);
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (Id) => {
    fetch(`http://localhost:3000/books/${Id}`, {
      method: 'DELETE'
    })
    .then(() => {
      const updated = books.filter(b => b.reservation_id !== Id);
      setBooks(updated);
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
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Date From</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Date To</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Time From</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Time To</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Reservation ID</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">User ID</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Hotel No</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Room No</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Flight No</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Seat No</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Departure Date</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Car Plate No</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            {books.map((book, index) => (
              <tr key={index}>
                <td class="tl pv3 pr3 bb b--black-20">{book.date_from ? new Date(book.date_from).toLocaleDateString('en-CA') : ''}</td>
                <td class="tl pv3 pr3 bb b--black-20">{book.date_to ? new Date(book.date_to).toLocaleDateString('en-CA') : ''}</td>
                <td class="tl pv3 pr3 bb b--black-20">{book.time_from}</td>
                <td class="tl pv3 pr3 bb b--black-20">{book.time_to}</td>
                <td class="tl pv3 pr3 bb b--black-20">{book.reservation_id}</td>
                <td class="tl pv3 pr3 bb b--black-20">{book.user_id}</td>
                <td class="tl pv3 pr3 bb b--black-20">{book.hotel_no}</td>
                <td class="tl pv3 pr3 bb b--black-20">{book.room_no}</td>
                <td class="tl pv3 pr3 bb b--black-20">{book.flight_no}</td>
                <td class="tl pv3 pr3 bb b--black-20">{book.seat_no}</td>
                <td class="tl pv3 pr3 bb b--black-20">{book.departure_date ? new Date(book.departure_date).toLocaleDateString('en-CA') : ''}</td>
                <td class="tl pv3 pr3 bb b--black-20">{book.car_plate_no}</td>
                <td class="tl pv3 pr3 bb b--black-20">
                  <button onClick={() => handleDelete(book.reservation_id)}>
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
                  {showForm ? 'Hide Form' : 'Add Booking'}
        </button>
        {showForm && <AddBooking />}
    </div>
    
  );  
};

export default Booking;
