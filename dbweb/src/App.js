import React, { useState } from 'react';
import DisplayCustomer from './Display/displayCustomer.js';
import DisplayHotel from './Display/displayHotel.js';
import DisplayRoom from './Display/displayRoom.js';
import DisplayFlight from './Display/displayFlight.js';
import DisplayCar from './Display/displayCar.js';
import DisplayBooking from './Display/displayBooking.js';
import DisplayReservation from './Display/displayReservation';
import DisplayPayment from './Display/displayPayment';
import './App.css';
import 'tachyons';

function App() {
  const [selectedTable, setSelectedTable] = useState('eachTable');

  // const handleClick = (event) => {
  //   console.log(event.target.innerText, ' clicked');
  // };

  // useEffect(() => {
  //   fetch('http://localhost:3000/customers')
  //     .then(res => res.json())
  //     .then(data => Array.isArray(data) ? setSelectedTable(data) : setSelectedTable([]))
  //     .catch(err => console.error(err));

  //   fetch('http://localhost:3000/hotels')
  //     .then(res => res.json())
  //     .then(data => Array.isArray(data) ? setSelectedTable(data) : setSelectedTable([]))
  //     .catch(err => console.error(err));
  // }, []);

  return (
    <div className="App">
      <div className="left-navbar">
        <div className="header">
          <h4>Menu</h4>
        </div>
        <div className="menu">
          <button className="menu-item" onClick={() => setSelectedTable('customer')} >Customer</button>
          <button className="menu-item" onClick={() => setSelectedTable('hotel')} >Hotel</button>
          <button className="menu-item" onClick={() => setSelectedTable('room')} >Hotel Room</button>
          <button className="menu-item" onClick={() => setSelectedTable('flight')} >Flight</button>
          <button className="menu-item" onClick={() => setSelectedTable('car')} >Car Rental</button>
          <button className="menu-item" onClick={() => setSelectedTable('booking')} >Booking</button>
          <button className="menu-item" onClick={() => setSelectedTable('reservation')} >Reservation</button>
          <button className="menu-item" onClick={() => setSelectedTable('payment')} >Payment</button>
        </div>
      </div>

      <div className="content">
        {selectedTable === 'customer' && <DisplayCustomer />}
        {selectedTable === 'hotel' && <DisplayHotel />}
        {selectedTable === 'room' && <DisplayRoom />}
        {selectedTable === 'flight' && <DisplayFlight />}
        {selectedTable === 'car' && <DisplayCar />}
        {selectedTable === 'booking' && <DisplayBooking />}
        {selectedTable === 'reservation' && <DisplayReservation />}
        {selectedTable === 'payment' && <DisplayPayment />}
        {selectedTable === 'eachTable' && (
          <div className="intro">
            <h2>Welcome to the travel application database center!</h2>
            <p>
              Please click on the button of the navigation bar on the left to display the database data.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
