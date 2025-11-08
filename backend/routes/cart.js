const express = require('express');
const router = express.Router();
const CartItem = require('../models/Cart');

// GET all cart items
router.get('/', async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    res.json({ cartItems, total });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST - Add item to cart
router.post('/', async (req, res) => {
  try {
    const { productId, name, price, quantity, image } = req.body;
    
    // Check if item already exists in cart
    const existingItem = await CartItem.findOne({ productId });
    
    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      res.json(existingItem);
    } else {
      const cartItem = new CartItem({
        productId,
        name,
        price,
        quantity,
        image
      });
      const savedItem = await cartItem.save();
      res.status(201).json(savedItem);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE - Remove item from cart
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await CartItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    res.json({ message: 'Item removed from cart', deletedItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT - Update cart item quantity
router.put('/:id', async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartItem = await CartItem.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    res.json(cartItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
