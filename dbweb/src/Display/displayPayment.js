import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import AddPayment from '../Insert/AddPayment';
import 'tachyons';

const Payment = () => {
  const [payments, setPayments] = useState([]);
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/payments');
        const data = await response.json();
        console.log(data);
        setPayments(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/payments/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      const updated = payments.filter(c => c.payment_id !== id);
      setPayments(updated);
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
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Payment ID</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Payment Type</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Payment Date</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Reservation ID</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">User ID</th>
              <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white"></th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            {payments.map((pay, index) => (
              <tr key={index}>
                <td class="tl pv3 pr3 bb b--black-20">{pay.payment_id}</td>
                <td class="tl pv3 pr3 bb b--black-20">{pay.payment_type}</td>
                <td class="tl pv3 pr3 bb b--black-20">{pay.payment_date ? new Date(pay.payment_date).toLocaleDateString('en-CA') : ''}</td>
                <td class="tl pv3 pr3 bb b--black-20">{pay.reservation_id}</td>
                <td class="tl pv3 pr3 bb b--black-20">{pay.user_id}</td>
                <td class="tl pv3 pr3 bb b--black-20">
                  <button onClick={() => handleDelete(pay.payment_id)}>
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
                  {showForm ? 'Hide Form' : 'Add Payment'}
        </button>
        {showForm && <AddPayment />}
    </div>
    
  );
};

export default Payment;
