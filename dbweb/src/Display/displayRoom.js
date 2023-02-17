import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import AddRoom from '../Insert/AddRoom';
import 'tachyons';

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/rooms');
        const data = await response.json();
        console.log(data);
        setRooms(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/rooms/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      const updated = rooms.filter(c => c.room_no !== id);
      setRooms(updated);
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
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Room No</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Hotel No</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Room Type</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Room Price</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            {rooms.map((room, index) => (
              <tr key={index}>
                <td class="tl pv3 pr3 bb b--black-20">{room.room_no}</td>
                <td class="tl pv3 pr3 bb b--black-20">{room.hotel_no}</td>
                <td class="tl pv3 pr3 bb b--black-20">{room.room_type}</td>
                <td class="tl pv3 pr3 bb b--black-20">{room.room_price}</td>
                <td class="tl pv3 pr3 bb b--black-20">
                  <button onClick={() => handleDelete(room.room_no)}>
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
                  {showForm ? 'Hide Form' : 'Add Room'}
        </button>
        {showForm && <AddRoom />}
    </div>
    
  );
};

export default Room;
