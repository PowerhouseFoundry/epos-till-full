// src/components/OrderSidebar.js
import React from 'react';
import styles from '../styles/OrderSidebar.module.css';

export default function OrderSidebar({ orderItems, onVoidLast, onClearAll }) {
  const total = orderItems.reduce((sum, entry) => {
    const itemPrice = entry.item?.price || 0;
    const modPrice = entry.modifiers?.price ?? entry.mods?.price ?? 0;
    return sum + itemPrice + modPrice;
  }, 0);

  return (
    <div className={styles.sidebar}>
      <h2>Order</h2>
      <ul className={styles.list}>
        {orderItems.map((entry, idx) => {
          const item = entry.item || {};
          const mod  = entry.modifiers ?? entry.mods ?? { label: '', price: 0 };
          return (
            <li key={idx} className={styles.line}>
              <span>
                {item.name}
                {mod.label ? ` (${mod.label})` : ''}
              </span>
              <span>£{( (item.price||0) + (mod.price||0) ).toFixed(2)}</span>
            </li>
          );
        })}
      </ul>
      <div className={styles.total}>
        Total: £{total.toFixed(2)}
      </div>
      <div className={styles.buttons}>
        <button onClick={onVoidLast}>Void Last</button>
        <button onClick={onClearAll}>Clear All</button>
      </div>
    </div>
  );
}
