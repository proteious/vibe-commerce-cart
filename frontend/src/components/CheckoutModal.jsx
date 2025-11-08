import React, { useState } from 'react';

const CheckoutModal = ({ cartItems, total, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onSubmit({ name, email, cartItems });
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Checkout</h2>
        
        <div style={styles.summary}>
          <p>Total Items: {cartItems.length}</p>
          <p style={styles.totalAmount}>Total Amount: ₹{total}</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
              placeholder="Enter your name"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
              placeholder="Enter your email"
            />
          </div>

          <div style={styles.buttons}>
            <button type="button" onClick={onClose} style={styles.cancelBtn}>
              Cancel
            </button>
            <button type="submit" style={styles.submitBtn}>
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(4px)',
  },
  modal: {
    backgroundColor: '#1a1a1a',
    padding: '40px',
    borderRadius: '16px',
    width: '90%',
    maxWidth: '500px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
    border: '1px solid #2a2a2a',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '28px',
    color: '#ffffff',
    letterSpacing: '-0.5px',
  },
  summary: {
    backgroundColor: '#0a0a0a',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '28px',
    border: '1px solid #2a2a2a',
    color: '#a0a0a0',
  },
  totalAmount: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: '10px',
    letterSpacing: '-0.3px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: '0.3px',
  },
  input: {
    padding: '14px',
    border: '1px solid #3a3a3a',
    borderRadius: '8px',
    fontSize: '15px',
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    transition: 'border-color 0.2s ease',
  },
  buttons: {
    display: 'flex',
    gap: '16px',
    marginTop: '20px',
  },
  cancelBtn: {
    flex: 1,
    padding: '14px',
    backgroundColor: '#2a2a2a',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    transition: 'all 0.2s ease',
  },
  submitBtn: {
    flex: 1,
    padding: '14px',
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '700',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 12px rgba(255,255,255,0.2)',
  },
};

export default CheckoutModal;
