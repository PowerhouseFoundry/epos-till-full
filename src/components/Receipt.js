// src/components/Receipt.js
import React from 'react';
import styles from '../styles/Receipt.module.css';

export default function Receipt({ orderItems, onFinish }) {
  const total = orderItems.reduce((sum, entry) => {
    const itemPrice = entry.item?.price || 0;
    const modPrice  = entry.modifiers?.price || 0;
    return sum + itemPrice + modPrice;
  }, 0);

  return (
    <div className={styles.container}>
      <h2>Receipt</h2>
      <ul className={styles.list}>
        {orderItems.map((entry, idx) => {
          const name       = entry.item?.name || '';
          const price      = entry.item?.price  || 0;
          const modLabel   = entry.modifiers?.label || '';
          const modPrice   = entry.modifiers?.price || 0;
          return (
            <li key={idx} className={styles.line}>
              <span>
                {name}{modLabel && ` (${modLabel})`}
              </span>
              <span>
                £{(price + modPrice).toFixed(2)}
              </span>
            </li>
          );
        })}
      </ul>
      <div className={styles.total}>
        Total: £{total.toFixed(2)}
      </div>
      <button onClick={onFinish} className={styles.button}>
        Finish
      </button>
    </div>
  );
}
