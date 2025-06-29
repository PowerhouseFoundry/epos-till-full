import React from 'react';
import styles from '../styles/PaymentModal.module.css';

export default function PaymentModal({ onCancel, onComplete }) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <h2>Select Payment Method</h2>
        <button onClick={onComplete}>Cash</button>
        <button onClick={onComplete}>Card</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}
