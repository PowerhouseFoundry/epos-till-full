import React from 'react';
import styles from '../styles/ActionBar.module.css';

export default function ActionBar({ onVoidLast, onClearAll, onPay }) {
  return (
    <div className={styles.bar}>
      <button onClick={onVoidLast}>Void</button>
      <button onClick={onClearAll}>Clear</button>
      <button onClick={onPay}>Pay</button>
    </div>
  );
}
