import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import AddHotel from '../Insert/AddHotel';
import 'tachyons';

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [showForm, setShowForm] = useState(false);

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

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/hotels/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      const updated = hotels.filter(c => c.hotel_no !== id);
      setHotels(updated);
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
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Hotel No</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Hotel Name</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Hotel City</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
              
            </tr>
          </thead>
          <tbody class="lh-copy">
            {hotels.map((hotel, index) => (
              <tr key={index}>
                <td class="tl pv3 pr3 bb b--black-20">{hotel.hotel_no}</td>
                <td class="tl pv3 pr3 bb b--black-20">{hotel.hotel_name}</td>
                <td class="tl pv3 pr3 bb b--black-20">{hotel.hotel_city}</td>
                <td class="tl pv3 pr3 bb b--black-20">
                  <button onClick={() => handleDelete(hotel.hotel_no)}>
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
                  {showForm ? 'Hide Form' : 'Add Hotel'}
        </button>
        {showForm && <AddHotel />}
    </div>
    
  );
};

export default Hotel;
