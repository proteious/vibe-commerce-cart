const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST - Add mock products (for initial setup)
router.post('/seed', async (req, res) => {
  try {
    await Product.deleteMany({}); // Clear existing products
    
    const products = [
      {
        name: 'Wireless Headphones',
        price: 2999,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
        description: 'High-quality wireless headphones with noise cancellation',
        category: 'Electronics'
      },
      {
        name: 'Smart Watch',
        price: 4999,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
        description: 'Fitness tracking smart watch with heart rate monitor',
        category: 'Electronics'
      },
      {
        name: 'Running Shoes',
        price: 3499,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
        description: 'Comfortable running shoes for daily workouts',
        category: 'Sports'
      },
      {
        name: 'Coffee Maker',
        price: 2499,
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500',
        description: 'Automatic coffee maker with programmable timer',
        category: 'Home'
      },
      {
        name: 'Backpack',
        price: 1999,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
        description: 'Durable backpack with laptop compartment',
        category: 'Accessories'
      },
      {
        name: 'Desk Lamp',
        price: 1499,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
        description: 'LED desk lamp with adjustable brightness',
        category: 'Home'
      },
      {
        name: 'Water Bottle',
        price: 599,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
        description: 'Insulated water bottle keeps drinks cold for 24 hours',
        category: 'Sports'
      },
      {
        name: 'Bluetooth Speaker',
        price: 1899,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
        description: 'Portable bluetooth speaker with 10-hour battery life',
        category: 'Electronics'
      }
    ];

    const createdProducts = await Product.insertMany(products);
    res.status(201).json({ 
      message: 'Products seeded successfully', 
      count: createdProducts.length,
      products: createdProducts 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
