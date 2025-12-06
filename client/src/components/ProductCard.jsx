import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-4">
        <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        
        <div className="mb-3">
          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-600">Category: {product.category}</span>
            <span className={`text-sm px-2 py-1 rounded ${
              product.quantity > 5 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              Stock: {product.quantity}
            </span>
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          disabled={product.quantity === 0}
          className={`w-full py-2 rounded-lg font-medium transition ${
            product.quantity === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {product.quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;