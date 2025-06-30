// src/components/MainPage.js
import React from 'react';
import CategoryGrid from './CategoryGrid';
import ItemGrid     from './ItemGrid';
import OrderSidebar from './OrderSidebar';
import ActionBar    from './ActionBar';
import styles       from '../styles/MainPage.module.css';

export default function MainPage({
  view,
  onBack,
  onSelectCategory,
  onAddItem,
  orderItems,
  onVoidLast,
  onClearAll,
  onPay,
}) {
  return (
    <div className={styles.container}>
      {view.type === 'items' && (
        <button onClick={onBack} className={styles.backButton}>
          ← Back
        </button>
      )}
      <div className={styles.mainArea}>
        <div className={styles.itemsArea}>
          {view.type === 'categories'
            ? <CategoryGrid onSelectCategory={onSelectCategory} />
            : <ItemGrid categoryId={view.categoryId} onAddItem={onAddItem} />
          }
        </div>
        <div className={styles.sidebarArea}>
          <OrderSidebar
            orderItems={orderItems}
            onVoidLast={onVoidLast}
            onClearAll={onClearAll}
          />
        </div>
      </div>
      <ActionBar
        onVoidLast={onVoidLast}
        onClearAll={onClearAll}
        onPay={onPay}
      />
    </div>
  );
}
