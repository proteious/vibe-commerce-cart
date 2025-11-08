import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Product APIs
export const getAllProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const seedProducts = async () => {
  const response = await axios.post(`${API_BASE_URL}/products/seed`);
  return response.data;
};

// Cart APIs
export const getCart = async () => {
  const response = await axios.get(`${API_BASE_URL}/cart`);
  return response.data;
};

export const addToCart = async (productData) => {
  const response = await axios.post(`${API_BASE_URL}/cart`, productData);
  return response.data;
};

export const removeFromCart = async (itemId) => {
  const response = await axios.delete(`${API_BASE_URL}/cart/${itemId}`);
  return response.data;
};

export const updateCartItem = async (itemId, quantity) => {
  const response = await axios.put(`${API_BASE_URL}/cart/${itemId}`, { quantity });
  return response.data;
};

// Checkout API
export const checkout = async (checkoutData) => {
  const response = await axios.post(`${API_BASE_URL}/checkout`, checkoutData);
  return response.data;
};
