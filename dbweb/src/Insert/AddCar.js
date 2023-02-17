import React, { useState } from 'react';
import 'tachyons';

const AddCar = () => {
  const [formData, setFormData] = useState({
    car_model: '',
    car_year: '',
    car_plate_no: '',
    rental_agency: '',
    car_price: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      // TODO: handle successful form submission
    } catch (error) {
      console.error(error);
      // TODO: handle form submission error
    }
  };

  return (
    
    <div className=" ba">
      <form onSubmit={handleSubmit} class="pa4">
      <label className ="db fw6 lh-copy f6">Car Model:</label>
      <input
          type="text"
          name="car_model"
          value={formData.car_model}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Car Year:</label>
      <input
          type="text"
          name="car_year"
          value={formData.car_year}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Car Plate No:</label>
      <input
          type="text"
          name="car_plate_no"
          value={formData.car_plate_no}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Rental Agency:</label>
      <input
          type="text"
          name="rental_agency"
          value={formData.rental_agency}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <label className ="db fw6 lh-copy f6">Car Price:</label>
      <input
          type="text"
          name="car_price"
          value={formData.car_price}
          onChange={handleChange}
          class="pa2 input-reset ba bg-transparent w-100 measure"
      />
      <br/>
      <br/>
      <button className="db ph3 pv2 input-reset ba b--black grow pointer f6 pa2 input-reset ba bg-transparent w-100 measure reload-button" 
              type="submit" 
              onClick={() => { alert("Insert successfully!"); 
                                window.location.reload(); 
                              }}
      >
          Add Car
      </button>
      </form>
    </div>
  );
};

export default AddCar;
