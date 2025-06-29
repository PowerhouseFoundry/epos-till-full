import React from 'react';
import styles from '../styles/ModifierRow.module.css';

export default function ModifierRow({ options, onSelect }) {
  return (
    <div className={styles.row}>
      {options.map(opt => <button key={opt.label} onClick={() => onSelect(opt)}>{opt.label}</button>)}
    </div>
  );
}
