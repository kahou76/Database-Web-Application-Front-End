import React, { useState, useEffect } from 'react';
import 'tachyons';

const Room = () => {
  const [rooms, setRooms] = useState([]);

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

  useEffect(() => {
    console.log(rooms);
  }, [rooms]);

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
            </tr>
          </thead>
          <tbody class="lh-copy">
            {rooms.map((room, index) => (
              <tr key={index}>
                <td class="tl pv3 pr3 bb b--black-20">{room.room_no}</td>
                <td class="tl pv3 pr3 bb b--black-20">{room.hotel_no}</td>
                <td class="tl pv3 pr3 bb b--black-20">{room.room_type}</td>
                <td class="tl pv3 pr3 bb b--black-20">{room.room_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
    
  );
};

export default Room;
