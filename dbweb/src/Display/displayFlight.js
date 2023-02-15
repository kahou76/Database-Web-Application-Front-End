import React, { useState, useEffect } from 'react';
import 'tachyons';

const Flight = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/flights');
        const data = await response.json();
        console.log(data);
        setFlights(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(flights);
  }, [flights]);

  return (
    <div class="pa4">
      <div class="overflow-auto">
        <table class="f6 w-100 mw8 " cellspacing="0">
          <thead>
            <tr>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Flight No</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Departure Airport</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Arrival Airport</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Seat No</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Flight Price</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Departure Date</th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            {flights.map((flight, index) => (
              <tr key={index}>
                <td class="tl pv3 pr3 bb b--black-20">{flight.flight_no}</td>
                <td class="tl pv3 pr3 bb b--black-20">{flight.dep_airport}</td>
                <td class="tl pv3 pr3 bb b--black-20">{flight.arr_airport}</td>
                <td class="tl pv3 pr3 bb b--black-20">{flight.seat_no}</td>
                <td class="tl pv3 pr3 bb b--black-20">{flight.flight_price}</td>
                <td class="tl pv3 pr3 bb b--black-20">{flight.departure_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
    
  );
};

export default Flight;
