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
      {/* Show a back button when viewing items */}
      {view.type === 'items' && (
        <button
          onClick={onBack}
          style={{
            background: '#444',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            margin: '1rem',
            cursor: 'pointer',
          }}
        >
          ← Back to Categories
        </button>
      )}

      <div className={styles.mainArea}>
        {/* Either show the category grid or the item grid */}
        {view.type === 'categories' ? (
          <CategoryGrid onSelectCategory={onSelectCategory} />
        ) : (
          <ItemGrid categoryId={view.categoryId} onAddItem={onAddItem} />
        )}

        {/* Always show the running order */}
        <OrderSidebar
          orderItems={orderItems}
          onVoidLast={onVoidLast}
          onClearAll={onClearAll}
        />
      </div>

      {/* Bottom action bar */}
      <ActionBar
        onVoidLast={onVoidLast}
        onClearAll={onClearAll}
        onPay={onPay}
      />
    </div>
  );
}
