// src/App.js

import React, { useState } from 'react';
import MainPage     from './components/MainPage';
import PaymentModal from './components/PaymentModal';
import Receipt      from './components/Receipt';
import './styles/index.css';

function App() {
  // View state: either show categories or show items for a category
  const [view, setView] = useState({ type: 'categories' });
  // Basket state: list of { item, modifiers }
  const [orderItems, setOrderItems] = useState([]);
  // Payment / receipt toggles
  const [showPayment, setShowPayment] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  // NEW: go back to the category list
  const handleBack = () => {
    setView({ type: 'categories' });
  };

  // Handlers for navigation and basket operations
  const handleSelectCategory = categoryId => {
    setView({ type: 'items', categoryId });
  };
  const handleAddItem = (item, modifiers) => {
    setOrderItems([...orderItems, { item, modifiers }]);
  };
  const handleVoidLast = () => {
    setOrderItems(orderItems.slice(0, -1));
  };
  const handleClearAll = () => {
    setOrderItems([]);
  };
  const handlePay = () => {
    setShowPayment(true);
  };
  const handlePaymentComplete = () => {
    setShowPayment(false);
    setShowReceipt(true);
  };
  const handleFinish = () => {
    setShowReceipt(false);
    setOrderItems([]);
    setView({ type: 'categories' });
  };

  return (
    <>
      {!showPayment && !showReceipt && (
        <MainPage
          view={view}
          onBack={handleBack}
          onSelectCategory={handleSelectCategory}
          onAddItem={handleAddItem}
          orderItems={orderItems}
          onVoidLast={handleVoidLast}
          onClearAll={handleClearAll}
          onPay={handlePay}
        />
      )}
      {showPayment && (
        <PaymentModal
          onCancel={() => setShowPayment(false)}
          onComplete={handlePaymentComplete}
        />
      )}
      {showReceipt && (
        <Receipt
          orderItems={orderItems}
          onFinish={handleFinish}
        />
      )}
    </>
  );
}

export default App;
