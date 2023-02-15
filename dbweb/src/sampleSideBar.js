import React, { useState } from 'react';
import Display from './Display/displayCustomer.js';
import DisplayHotel from './displayHotel.js';
import DisplayCar from './displayCar.js';

function App() {
  const [selectedTable, setSelectedTable] = useState('customer');

  return (
    <div className="App">
      <div className="sidebar">
        <button
          onClick={() => setSelectedTable('customer')}
          className={selectedTable === 'customer' ? 'selected' : ''}
        >
          Customer
        </button>
        <button
          onClick={() => setSelectedTable('hotel')}
          className={selectedTable === 'hotel' ? 'selected' : ''}
        >
          Hotel
        </button>
        <button
          onClick={() => setSelectedTable('car')}
          className={selectedTable === 'car' ? 'selected' : ''}
        >
          Rental Car
        </button>
      </div>
      <div className="content">
        {selectedTable === 'customer' && <Display />}
        {selectedTable === 'hotel' && <DisplayHotel />}
        {selectedTable === 'car' && <DisplayCar />}
      </div>
    </div>
  );
}

export default App;
