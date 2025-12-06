import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { removeFromCart, updateCartQuantity, clearCart } from '../features/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, change) => {
    const item = items.find(item => item.id === id);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        dispatch(updateCartQuantity({ id, quantity: newQuantity }));
      } else {
        dispatch(removeFromCart(id));
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
        {items.length > 0 && (
          <button
            onClick={() => dispatch(clearCart())}
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🛒</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
          <p className="text-gray-500">Add some products from the store</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex items-center border-b pb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-600">Category: {item.category}</p>
                  <p className="text-lg font-bold text-blue-600">${item.price}</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                  >
                    <FaMinus size={12} />
                  </button>
                  
                  <span className="w-10 text-center font-medium">{item.quantity}</span>
                  
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                  >
                    <FaPlus size={12} />
                  </button>
                  
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-xl font-bold text-gray-800">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600">Tax (10%)</span>
              <span className="text-lg font-medium text-gray-800">${(total * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-6 text-lg font-bold">
              <span>Total</span>
              <span className="text-2xl text-blue-600">${(total * 1.1).toFixed(2)}</span>
            </div>
            
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
              Checkout Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;