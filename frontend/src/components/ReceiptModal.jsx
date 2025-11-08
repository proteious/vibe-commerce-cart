import React from 'react';

const ReceiptModal = ({ receipt, onClose }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.successIcon}>✓</div>
        <h2 style={styles.title}>Order Successful!</h2>
        
        <div style={styles.receiptDetails}>
          <div style={styles.row}>
            <span style={styles.label}>Order ID:</span>
            <span style={styles.value}>{receipt.orderId}</span>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Customer:</span>
            <span style={styles.value}>{receipt.customerName}</span>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Email:</span>
            <span style={styles.value}>{receipt.customerEmail}</span>
          </div>
          <div style={styles.row}>
            <span style={styles.label}>Date:</span>
            <span style={styles.value}>
              {new Date(receipt.timestamp).toLocaleString()}
            </span>
          </div>
          <div style={styles.divider} />
          <div style={styles.row}>
            <span style={styles.label}>Items:</span>
            <span style={styles.value}>{receipt.items.length}</span>
          </div>
          <div style={styles.row}>
            <span style={styles.totalLabel}>Total Amount:</span>
            <span style={styles.totalValue}>₹{receipt.total}</span>
          </div>
        </div>

        <button onClick={onClose} style={styles.closeBtn}>
          Close
        </button>
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
    textAlign: 'center',
    boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
    border: '1px solid #2a2a2a',
  },
  successIcon: {
    width: '72px',
    height: '72px',
    backgroundColor: '#00ff88',
    color: '#000000',
    fontSize: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 28px',
    fontWeight: 'bold',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '28px',
    letterSpacing: '-0.5px',
  },
  receiptDetails: {
    backgroundColor: '#0a0a0a',
    padding: '28px',
    borderRadius: '12px',
    marginBottom: '28px',
    textAlign: 'left',
    border: '1px solid #2a2a2a',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '14px',
  },
  label: {
    color: '#a0a0a0',
    fontSize: '14px',
    fontWeight: '500',
  },
  value: {
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '600',
  },
  divider: {
    height: '1px',
    backgroundColor: '#2a2a2a',
    margin: '20px 0',
  },
  totalLabel: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '-0.3px',
  },
  totalValue: {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '-0.5px',
  },
  closeBtn: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '700',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 12px rgba(255,255,255,0.2)',
  },
};

export default ReceiptModal;
