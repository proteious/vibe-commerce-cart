const express = require('express');
const router = express.Router();
const CartItem = require('../models/Cart');

// POST - Process checkout
router.post('/', async (req, res) => {
  try {
    const { name, email, cartItems } = req.body;
    
    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Create mock receipt
    const receipt = {
      orderId: 'ORD-' + Date.now(),
      customerName: name,
      customerEmail: email,
      items: cartItems,
      total: total,
      timestamp: new Date().toISOString(),
      status: 'success'
    };
    
    // Clear cart after checkout
    await CartItem.deleteMany({});
    
    res.status(200).json({
      message: 'Checkout successful',
      receipt
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
