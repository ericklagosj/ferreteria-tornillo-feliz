import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { mockProducts } from '@/data/mockData.js';

const SearchResults = ({ query, onClose }) => {
  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.code.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);

  if (filteredProducts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute top-full left-0 right-0 mt-2 search-results rounded-lg p-4 z-50"
      >
        <p className="text-gray-500 text-sm">No se encontraron productos</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full left-0 right-0 mt-2 search-results rounded-lg p-2 z-50"
    >
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          to={`/producto/${product.id}`}
          onClick={onClose}
          className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-12 h-12 object-cover rounded-lg"
          />
          <div className="flex-1">
            <p className="font-medium text-gray-800 text-sm">{product.name}</p>
            <p className="text-gray-500 text-xs">{product.category}</p>
            <p className="text-orange-600 font-semibold text-sm">${product.price}</p>
          </div>
        </Link>
      ))}
      {filteredProducts.length === 5 && (
        <Link
          to={`/catalogo?search=${encodeURIComponent(query)}`}
          onClick={onClose}
          className="block text-center py-2 text-orange-600 hover:text-orange-700 font-medium text-sm border-t"
        >
          Ver todos los resultados
        </Link>
      )}
    </motion.div>
  );
};

export default SearchResults;