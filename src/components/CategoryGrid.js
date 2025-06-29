import React from 'react';
import menuData from '../data/menu';
import CategoryButton from './CategoryButton';
import styles from '../styles/CategoryGrid.module.css';

export default function CategoryGrid({ onSelectCategory }) {
  return (
    <div className={styles.grid}>
      {menuData.categories.map(cat => (
        <CategoryButton key={cat.id} category={cat} onClick={onSelectCategory} />
      ))}
    </div>
  );
}
