import React from 'react';
import styles from '../styles/ItemButton.module.css';

export default function ItemButton({ item, onClick }) {
  return (
    <button className={styles.button} onClick={() => onClick(item)}>
      <div>{item.name}</div>
      <div>£{item.price.toFixed(2)}</div>
    </button>
  );
}
