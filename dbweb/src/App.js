import React, { useState } from 'react';
import DisplayCustomer from './Display/displayCustomer.js';
import DisplayHotel from './Display/displayHotel.js';
import DisplayRoom from './Display/displayRoom.js';
import DisplayFlight from './Display/displayFlight.js';
import DisplayCar from './Display/displayCar.js';
import DisplayBooking from './Display/displayBooking.js';
import DisplayReservation from './Display/displayReservation';
import DisplayPayment from './Display/displayPayment';
import table from './table.png';
import insert from './insert.png';
import success from './success.png';
import newdata from './newdata.png';
import './App.css';
import 'tachyons';

function App() {
  const [selectedTable, setSelectedTable] = useState('eachTable');

  return (
    <div className="App">
      <div className="left-navbar">
        <div className="header">
          <h4>Database Tables</h4>
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
          <div className="intro pa3">
          <h1>Welcome to the travel application database management page!</h1>
          <h2>Here is the user guideline for you to manage the database:</h2>
          <h3>Display:</h3>
          <p>On the left navigation menu, there are all essential tables in the travel application databases.</p>
          <p>When you click on the button on the menu, it will display the whole table with attributes and data.</p>
          <p>Here is an example of displaying customer table:</p>
          <img src={table} alt="customer table"  width="1000" height="500" />
          <h3>Insert:</h3>
          <p>You can also add new data by clicking on the ADD button on the button left and fill out the insertion form.</p>
          <p>Here is an example of inserting customer table:</p>
          <img src={insert} alt="insert table" width="1000" height="500"/>
          <p>When you insert the data successfully, there will be an alert message:</p>
          <img src={success} alt="alert" width="500" height="200"/>
          <p>The page will then be refreshed, and you can see the new data on the page:</p>
          <img src={newdata} alt="newdata" width="1000" height="500"/>
          <h3>Remove:</h3>
          <p>You can remove any of the data by clicking the cross button on the right side.</p>
          <h2>Feel free to play around with this database demo!</h2>
        </div>
        
        )}
      </div>

    </div>
  );
}

export default App;
