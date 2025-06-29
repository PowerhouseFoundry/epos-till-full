import React from 'react';
import styles from '../styles/Receipt.module.css';

export default function Receipt({ orderItems, onFinish }) {
  const total = orderItems.reduce((sum, oi) => sum + oi.item.price + oi.modifiers.price, 0);
  return (
    <div className={styles.receipt}>
      <h2>Thank You!</h2>
      <ul>
        {orderItems.map((oi,i)=> <li key={i}>{oi.item.name} {oi.modifiers.label} - £{(oi.item.price+oi.modifiers.price).toFixed(2)}</li>)}
      </ul>
      <h3>Total Paid: £{total.toFixed(2)}</h3>
      <button onClick={onFinish}>New Order</button>
    </div>
  );
}
