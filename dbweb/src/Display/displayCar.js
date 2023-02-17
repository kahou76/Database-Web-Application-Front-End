import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import AddCar from '../Insert/AddCar';
import 'tachyons';

const Car = () => {
  const [cars, setCars] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/cars');
        const data = await response.json();
        console.log(data);
        setCars(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/cars/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      const updated = cars.filter(c => c.car_plate_no !== id);
      setCars(updated);
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
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Car Model</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Car Year</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Car Plate No</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Rental Agency</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Car Price</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            {cars.map((car, index) => (
              <tr key={index}>
                <td class="tl pv3 pr3 bb b--black-20">{car.car_model}</td>
                <td class="tl pv3 pr3 bb b--black-20">{car.car_year}</td>
                <td class="tl pv3 pr3 bb b--black-20">{car.car_plate_no}</td>
                <td class="tl pv3 pr3 bb b--black-20">{car.rental_agency}</td>
                <td class="tl pv3 pr3 bb b--black-20">{car.car_price}</td>
                <td class="tl pv3 pr3 bb b--black-20">
                  <button onClick={() => handleDelete(car.car_plate_no)}>
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
                  {showForm ? 'Hide Form' : 'Add Car'}
        </button>
        {showForm && <AddCar />}
    </div>
    
  );
};

export default Car;
