import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.description}>{product.description}</p>
        <p style={styles.category}>{product.category}</p>
        <div style={styles.footer}>
          <span style={styles.price}>₹{product.price}</span>
          <button 
            onClick={() => onAddToCart(product)} 
            style={styles.button}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #2a2a2a',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    backgroundColor: '#1a1a1a',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  image: {
    width: '100%',
    height: '240px',
    objectFit: 'cover',
  },
  content: {
    padding: '20px',
  },
  name: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#ffffff',
    letterSpacing: '-0.3px',
  },
  description: {
    fontSize: '14px',
    color: '#a0a0a0',
    marginBottom: '10px',
    lineHeight: '1.5',
  },
  category: {
    fontSize: '12px',
    color: '#666',
    textTransform: 'uppercase',
    marginBottom: '16px',
    letterSpacing: '1px',
    fontWeight: '600',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '16px',
  },
  price: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: '-0.5px',
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.2s ease',
    letterSpacing: '0.3px',
  },
};

export default ProductCard;
