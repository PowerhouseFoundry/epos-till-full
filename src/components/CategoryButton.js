import React from 'react';
import styles from '../styles/CategoryButton.module.css';

export default function CategoryButton({ category, onClick }) {
  return (
    <button className={styles.button} style={{ backgroundColor: category.color }} onClick={() => onClick(category.id)}>
      {category.name}
    </button>
  );
}
