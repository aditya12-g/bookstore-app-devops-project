import React from 'react';
import axios from 'axios';

const Orders = () => {
  const handleOrder = async () => {
    await axios.post('http://localhost:3003/order', { bookId: 1 });
    alert('Order placed!');
  };

  return <button onClick={handleOrder}>Place Order</button>;
};

export default Orders;
