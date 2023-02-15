import React, { useState, useEffect } from 'react';
import 'tachyons';

const Hotel = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/hotels');
        const data = await response.json();
        console.log(data);
        setHotels(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(hotels);
  }, [hotels]);

  return (
    <div class="pa4">
      <div class="overflow-auto">
        <table class="f6 w-100 mw8 " cellspacing="0">
          <thead>
            <tr>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Hotel No</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Hotel Name</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Hotel City</th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            {hotels.map((hotel, index) => (
              <tr key={index}>
                <td class="tl pv3 pr3 bb b--black-20">{hotel.hotel_no}</td>
                <td class="tl pv3 pr3 bb b--black-20">{hotel.hotel_name}</td>
                <td class="tl pv3 pr3 bb b--black-20">{hotel.hotel_city}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
    
  );
};

export default Hotel;
