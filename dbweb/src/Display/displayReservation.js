import React, { useState, useEffect } from 'react';
import 'tachyons';

const Reservation = () => {
  const [reservations, setreservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/reservations');
        const data = await response.json();
        console.log(data);
        setreservations(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(reservations);
  }, [reservations]);

  return (
    <div class="pa4">
      <div class="overflow-auto">
        <table class="f6 w-100 mw8 " cellspacing="0">
          <thead>
            <tr>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Reservation ID</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Reservation Date</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">User ID</th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td class="tl pv3 pr3 bb b--black-20">{reservation.reservation_id}</td>
                <td class="tl pv3 pr3 bb b--black-20">{reservation.reservation_date ? new Date(reservation.reservation_date).toLocaleDateString('en-CA') : ''}</td>
                <td class="tl pv3 pr3 bb b--black-20">{reservation.user_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
    
  );
};

export default Reservation;
