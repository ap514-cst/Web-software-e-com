import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      category: "Electronics",
      quantity: 10,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      category: "Electronics",
      quantity: 15,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w-400",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 49.99,
      category: "Fashion",
      quantity: 20,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    },
    {
      id: 4,
      name: "Coffee Mug",
      price: 14.99,
      category: "Home",
      quantity: 50,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400",
    },
    {
      id: 5,
      name: "Fitness Tracker",
      price: 79.99,
      category: "Sports",
      quantity: 8,
      image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=400",
    },
    {
      id: 6,
      name: "Desk Lamp",
      price: 34.99,
      category: "Home",
      quantity: 25,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
    },
  ],
  categories: ["All", "Electronics", "Fashion", "Home", "Sports"],
  activeCategory: "All",
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find(p => p.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const { setActiveCategory, updateQuantity } = productSlice.actions;
export default productSlice.reducer;