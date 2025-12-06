import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products, activeCategory } = useSelector((state) => state.products);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {activeCategory} Products
        </h2>
        <p className="text-gray-600">
          Showing {filteredProducts.length} products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;