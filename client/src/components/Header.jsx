import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaBell, FaUser } from 'react-icons/fa';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const user=JSON.parse(localStorage.getItem("users"));
  return (
    <header className="bg-white shadow-sm fixed top-0 right-0 left-64 z-10">
      <div className="px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Deskboard</h1>
          <p className="text-gray-600">Welcome to your dashboard</p>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="relative">
            <FaBell className="text-gray-600 text-xl cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
          
          <div className="relative">
            <FaShoppingCart className="text-gray-600 text-xl cursor-pointer" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <FaUser className="text-gray-600" />
            </div>
            <div>
              <p className="font-medium">Welcome</p>
              <p className="text-sm text-gray-500">{user.name}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;