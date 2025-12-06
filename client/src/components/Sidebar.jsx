import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../features/productSlice';
import { 
  FaHome, 
  FaShoppingCart, 
  FaProductHunt, 
  FaSearch,
  FaCog,
  FaAd,
  FaChartBar 
} from 'react-icons/fa';
import { TbLayoutSidebar } from 'react-icons/tb';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { categories, activeCategory } = useSelector((state) => state.products);
  
  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-y-auto">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="font-bold text-xl">sam</span>
          </div>
          <div>
            <h1 className="text-xl font-bold"></h1>
            <p className="text-gray-400 text-sm"></p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4">
        <div className="mb-8">
          <h2 className="text-gray-400 text-xs font-semibold uppercase mb-4">Main</h2>
          <ul className="space-y-2">
            <li>
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition">
                <FaHome />
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition">
                <TbLayoutSidebar />
                <span>Layout</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition">
                <FaSearch />
                <span>Search</span>
                <span className="ml-auto bg-blue-500 text-xs px-2 py-1 rounded">Beta</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition">
                <FaChartBar />
                <span>Analytics</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Product Section */}
        <div className="mb-8">
          <h2 className="text-gray-400 text-xs font-semibold uppercase mb-4">Products</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => dispatch(setActiveCategory(category))}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-gray-800'
                }`}
              >
                <FaProductHunt />
                <span>{category}</span>
                {category === "All" && (
                  <span className="ml-auto bg-gray-700 text-xs px-2 py-1 rounded">
                    {useSelector((state) => state.products.products.length)}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Other Sections */}
        <div className="space-y-2">
          <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition">
            <FaAd />
            <span>Advent</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition">
            <FaShoppingCart />
            <span>Commerce</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition">
            <FaCog />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;