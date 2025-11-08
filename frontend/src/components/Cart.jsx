import React from 'react';

const Cart = ({ cartItems, total, onRemove, onUpdateQuantity, onCheckout }) => {
  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyCart}>
        <h2>Your Cart is Empty</h2>
        <p>Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div style={styles.cart}>
      <h2 style={styles.title}>Shopping Cart ({cartItems.length} items)</h2>
      
      {cartItems.map((item) => (
        <div key={item._id} style={styles.cartItem}>
          <img src={item.image} alt={item.name} style={styles.image} />
          <div style={styles.details}>
            <h3 style={styles.itemName}>{item.name}</h3>
            <p style={styles.price}>₹{item.price}</p>
          </div>
          <div style={styles.quantityControl}>
            <button 
              onClick={() => onUpdateQuantity(item._id, Math.max(1, item.quantity - 1))}
              style={styles.quantityBtn}
            >
              -
            </button>
            <span style={styles.quantity}>{item.quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(item._id, item.quantity + 1)}
              style={styles.quantityBtn}
            >
              +
            </button>
          </div>
          <div style={styles.itemTotal}>
            <p style={styles.totalPrice}>₹{item.price * item.quantity}</p>
            <button 
              onClick={() => onRemove(item._id)} 
              style={styles.removeBtn}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      
      <div style={styles.cartFooter}>
        <h3 style={styles.totalLabel}>Total: ₹{total}</h3>
        <button onClick={onCheckout} style={styles.checkoutBtn}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

const styles = {
  cart: {
    backgroundColor: '#1a1a1a',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
    border: '1px solid #2a2a2a',
  },
  emptyCart: {
    textAlign: 'center',
    padding: '64px',
    backgroundColor: '#1a1a1a',
    borderRadius: '16px',
    border: '1px solid #2a2a2a',
    color: '#ffffff',
  },
  title: {
    marginBottom: '32px',
    color: '#ffffff',
    fontSize: '32px',
    fontWeight: '700',
    letterSpacing: '-0.5px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '1px solid #2a2a2a',
    gap: '20px',
    transition: 'background-color 0.2s ease',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '10px',
    border: '1px solid #2a2a2a',
  },
  details: {
    flex: 1,
  },
  itemName: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '6px',
    color: '#ffffff',
    letterSpacing: '-0.3px',
  },
  price: {
    color: '#a0a0a0',
    fontSize: '15px',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  quantityBtn: {
    width: '36px',
    height: '36px',
    border: '1px solid #3a3a3a',
    backgroundColor: '#0a0a0a',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#ffffff',
    transition: 'all 0.2s ease',
  },
  quantity: {
    fontSize: '18px',
    fontWeight: '600',
    minWidth: '32px',
    textAlign: 'center',
    color: '#ffffff',
  },
  itemTotal: {
    textAlign: 'right',
  },
  totalPrice: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '12px',
    letterSpacing: '-0.3px',
  },
  removeBtn: {
    backgroundColor: '#ff3333',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    transition: 'all 0.2s ease',
  },
  cartFooter: {
    marginTop: '32px',
    paddingTop: '32px',
    borderTop: '2px solid #2a2a2a',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: '-0.5px',
  },
  checkoutBtn: {
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    padding: '14px 36px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '700',
    transition: 'all 0.2s ease',
    letterSpacing: '0.3px',
    boxShadow: '0 4px 12px rgba(255,255,255,0.2)',
  },
};

export default Cart;
