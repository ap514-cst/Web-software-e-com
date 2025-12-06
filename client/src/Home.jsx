import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';



const Home =()=> {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState('dashboard');
  const { activeCategory } = useSelector((state) => state.products);

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <ProductList />;
       

      default:
        return <Dashboard />;
    }
  };

  

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg"
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'lg:ml-64' : ''} transition-all duration-300`}>
        <Header />
        
        <main className="pt-20">
          {/* Navigation Tabs */}
          <div className="px-6 pt-6">
            <div className="flex space-x-4 border-b">
              <button
                onClick={() => setActiveView('dashboard')}
                className={`px-4 py-2 font-medium ${
                  activeView === 'dashboard'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <span className="flex items-center">
                  Dashboard
                </span>
              </button>
              
              <button
                onClick={() => setActiveView('products')}
                className={`px-4 py-2 font-medium ${
                  activeView === 'products'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <span className="flex items-center">
                  Products
                  {activeCategory !== "All" && (
                    <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {activeCategory}
                    </span>
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            <div className="lg:col-span-2">
              {renderContent()}
            </div>
           
            {/* Cart Sidebar */}
            <div className="lg:col-span-1">
              <Cart />
              
            </div>
          </div>
          
        </main>
      </div>
      <Outlet/>
      
    </div>
  );
}

export default Home;