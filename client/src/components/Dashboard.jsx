import React from 'react';
import { useSelector } from 'react-redux';
import { FaBox, FaShoppingCart, FaDollarSign, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  const { products } = useSelector((state) => state.products);
  const { items, total } = useSelector((state) => state.cart);
  
  const totalProducts = products.length;
  const totalOrders = items.reduce((sum, item) => sum + item.quantity, 0);
  const revenue = total;

  const stats = [
    {
      title: "Total Products",
      value: totalProducts,
      icon: <FaBox className="text-blue-500 text-2xl" />,
      bgColor: "bg-blue-50",
      change: "+12%",
    },
    {
      title: "Total Orders",
      value: totalOrders,
      icon: <FaShoppingCart className="text-green-500 text-2xl" />,
      bgColor: "bg-green-50",
      change: "+8%",
    },
    {
      title: "Revenue",
      value: `$${revenue.toFixed(2)}`,
      icon: <FaDollarSign className="text-purple-500 text-2xl" />,
      bgColor: "bg-purple-50",
      change: "+23%",
    },
    {
      title: "Customers",
      value: "1,234",
      icon: <FaUsers className="text-orange-500 text-2xl" />,
      bgColor: "bg-orange-50",
      change: "+5%",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bgColor} rounded-xl p-6 shadow-sm`}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-600 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
                <p className="text-green-600 text-sm mt-1">{stat.change} from last month</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {items.slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.quantity} × ${item.price}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-blue-600">${(item.quantity * item.price).toFixed(2)}</p>
                <p className="text-sm text-gray-600">Added to cart</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;