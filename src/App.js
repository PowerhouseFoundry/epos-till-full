// src/App.js

import React, { useState, useEffect } from 'react';
import MainPage     from './components/MainPage';
import PaymentModal from './components/PaymentModal';
import Receipt      from './components/Receipt';
import LockScreen   from './components/LockScreen';
import './styles/index.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [view, setView] = useState({ type: 'categories' });
  const [orderItems, setOrderItems] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  // lock after 20s of no interaction
  useEffect(() => {
    if (!loggedIn) return;
    let timer = setTimeout(() => setLoggedIn(false), 20000);
    const reset = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setLoggedIn(false), 20000);
    };
    window.addEventListener('mousemove', reset);
    window.addEventListener('keydown', reset);
    window.addEventListener('touchstart', reset);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', reset);
      window.removeEventListener('keydown', reset);
      window.removeEventListener('touchstart', reset);
    };
  }, [loggedIn]);

  // Handlers
  const handleUnlock     = () => setLoggedIn(true);
  const handleBack       = () => setView({ type: 'categories' });
  const handleSelectCat  = id => setView({ type: 'items', categoryId: id });
  const handleAddItem    = (item, mods) => setOrderItems([...orderItems, { item, mods }]);
  const handleVoidLast   = () => setOrderItems(orderItems.slice(0, -1));
  const handleClearAll   = () => setOrderItems([]);
  const handlePay        = () => setShowPayment(true);
  const handlePayDone    = () => { setShowPayment(false); setShowReceipt(true); };
  const handleFinish     = () => {
    setShowReceipt(false);
    setOrderItems([]);
    setView({ type: 'categories' });
  };

  if (!loggedIn) {
    return <LockScreen onUnlock={handleUnlock} />;
  }

  return (
    <>
      {!showPayment && !showReceipt && (
        <MainPage
          view={view}
          onBack={handleBack}
          onSelectCategory={handleSelectCat}
          onAddItem={handleAddItem}
          orderItems={orderItems}
          onVoidLast={handleVoidLast}
          onClearAll={handleClearAll}
          onPay={handlePay}
        />
      )}
      {showPayment && (
        <PaymentModal onCancel={() => setShowPayment(false)} onComplete={handlePayDone} />
      )}
      {showReceipt && <Receipt orderItems={orderItems} onFinish={handleFinish} />}
    </>
  );
}

export default App;
