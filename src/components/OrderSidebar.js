import React from 'react';
import styles from '../styles/OrderSidebar.module.css';

export default function OrderSidebar({ orderItems, onVoidLast, onClearAll }) {
  const total = orderItems.reduce((sum, oi) => sum + oi.item.price + oi.modifiers.price, 0);
  return (
    <div className={styles.sidebar}>
      <h2>Order</h2> <ul>
        {orderItems.map((oi, i) => <li key={i}>{oi.item.name} {oi.modifiers.label} - £{(oi.item.price+oi.modifiers.price).toFixed(2)}</li>)}
      </ul>
      <h3>Total: £{total.toFixed(2)}</h3>
      <button onClick={onVoidLast}>Void Last</button>
      <button onClick={onClearAll}>Clear All</button>
    </div>
  );
}
