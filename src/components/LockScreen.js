import React, { useState } from 'react';
import styles from '../styles/LockScreen.module.css';

export default function LockScreen({ onUnlock }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (code === '0001') {
      setError(false);
      setCode('');
      onUnlock();
    } else {
      setError(true);
      setCode('');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Enter Code</h2>
        <input
          type="password"
          value={code}
          onChange={e => setCode(e.target.value)}
          className={styles.input}
          autoFocus
        />
        <button type="submit" className={styles.button}>Unlock</button>
        {error && <div className={styles.error}>Invalid code</div>}
      </form>
    </div>
  );
}