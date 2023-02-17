import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import AddReservation from '../Insert/AddReservation';
import 'tachyons';

const Reservation = () => {
  const [reservations, setreservations] = useState([]);
  const [showForm, setShowForm] = useState(false);

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

  const handleDelete = (Id) => {
    fetch(`http://localhost:3000/reservations/${Id}`, {
      method: 'DELETE'
    })
    .then(() => {
      const updatedReservations = reservations.filter(r => r.reservation_id !== Id);
      setreservations(updatedReservations);
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
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Reservation ID</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Reservation Date</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">User ID</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
              
            </tr>
          </thead>
          <tbody class="lh-copy">
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td class="tl pv3 pr3 bb b--black-20">{reservation.reservation_id}</td>
                <td class="tl pv3 pr3 bb b--black-20">{reservation.reservation_date ? new Date(reservation.reservation_date).toLocaleDateString('en-CA') : ''}</td>
                <td class="tl pv3 pr3 bb b--black-20">{reservation.user_id}</td>
                <td class="tl pv3 pr3 bb b--black-20">
                  <button onClick={() => handleDelete(reservation.reservation_id)}>
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
                  {showForm ? 'Hide Form' : 'Add Reservation'}
        </button>
        {showForm && <AddReservation />}
    </div>
    
  );
};

export default Reservation;
