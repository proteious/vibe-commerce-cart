import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';
import ReceiptModal from './components/ReceiptModal';
import { getAllProducts, getCart, addToCart, removeFromCart, updateCartItem, checkout } from './api/api';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [view, setView] = useState('products');

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCart = async () => {
    try {
      const data = await getCart();
      setCartItems(data.cartItems);
      setCartTotal(data.total);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  const handleAddToCart = async (product) => {
    try {
      await addToCart({
        productId: product._id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image
      });
      fetchCart();
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleRemoveFromCart = async (itemId) => {
    try {
      await removeFromCart(itemId);
      fetchCart();
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const handleUpdateQuantity = async (itemId, quantity) => {
    try {
      await updateCartItem(itemId, quantity);
      fetchCart();
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const handleCheckoutSubmit = async (formData) => {
    try {
      const result = await checkout(formData);
      setReceipt(result.receipt);
      setShowCheckout(false);
      fetchCart();
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.logo}>🛒 Vibe Commerce</h1>
        <nav style={styles.nav}>
          <button 
            onClick={() => setView('products')} 
            style={{...styles.navBtn, ...(view === 'products' ? styles.activeNavBtn : {})}}
          >
            Products
          </button>
          <button 
            onClick={() => setView('cart')} 
            style={{...styles.navBtn, ...(view === 'cart' ? styles.activeNavBtn : {})}}
          >
            Cart ({cartItems.length})
          </button>
        </nav>
      </header>

      <main style={styles.main}>
        {view === 'products' ? (
          <>
            <h2 style={styles.pageTitle}>Our Products</h2>
            <div style={styles.productsGrid}>
              {products.map((product) => (
                <ProductCard 
                  key={product._id} 
                  product={product} 
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </>
        ) : (
          <Cart
            cartItems={cartItems}
            total={cartTotal}
            onRemove={handleRemoveFromCart}
            onUpdateQuantity={handleUpdateQuantity}
            onCheckout={() => setShowCheckout(true)}
          />
        )}
      </main>

      {showCheckout && (
        <CheckoutModal
          cartItems={cartItems}
          total={cartTotal}
          onClose={() => setShowCheckout(false)}
          onSubmit={handleCheckoutSubmit}
        />
      )}

      {receipt && (
        <ReceiptModal
          receipt={receipt}
          onClose={() => setReceipt(null)}
        />
      )}
    </div>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  header: {
    background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
    color: 'white',
    padding: '20px 48px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
    borderBottom: '1px solid #2a2a2a',
  },
  logo: {
    fontSize: '28px',
    fontWeight: '700',
    margin: 0,
    letterSpacing: '-0.5px',
    background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  nav: {
    display: 'flex',
    gap: '16px',
  },
  navBtn: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '1px solid #3a3a3a',
    padding: '10px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    letterSpacing: '0.3px',
  },
  activeNavBtn: {
    backgroundColor: '#ffffff',
    color: '#000000',
    border: '1px solid #ffffff',
    boxShadow: '0 4px 12px rgba(255,255,255,0.2)',
  },
  main: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '48px 32px',
  },
  pageTitle: {
    fontSize: '42px',
    fontWeight: '700',
    marginBottom: '40px',
    color: '#ffffff',
    letterSpacing: '-1px',
    textAlign: 'left',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '28px',
  },
};

export default App;
