import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Filter, Grid, List, Star, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { mockProducts, categories } from '@/data/mockData.js';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [showFilters, setShowFilters] = useState(false);

  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    let filtered = [...mockProducts];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.code.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: "Producto agregado",
      description: `${product.name} se agregó al carrito`,
    });
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setPriceRange([0, 200]);
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <>
      <Helmet>
        <title>Catálogo de Productos - Ferretería El Tornillo Feliz</title>
        <meta name="description" content="Explora nuestro amplio catálogo de herramientas, materiales de construcción, pinturas, electricidad y plomería. Los mejores precios y calidad garantizada." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Catálogo de Productos</h1>
                <p className="text-gray-600 mt-1">
                  {filteredProducts.length} productos encontrados
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1 lg:w-80">
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>

                {/* View Mode */}
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                {/* Filters Toggle */}
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <AnimatePresence>
              {(showFilters || window.innerWidth >= 1024) && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="lg:w-64 space-y-6"
                >
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-800">Filtros</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="text-orange-600 hover:text-orange-700"
                      >
                        Limpiar
                      </Button>
                    </div>

                    {/* Categories */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-700">Categorías</h4>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="category"
                            value=""
                            checked={selectedCategory === ''}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="text-orange-500"
                          />
                          <span className="text-sm">Todas</span>
                        </label>
                        {categories.map((category) => (
                          <label key={category.id} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="category"
                              value={category.id}
                              checked={selectedCategory === category.id}
                              onChange={(e) => setSelectedCategory(e.target.value)}
                              className="text-orange-500"
                            />
                            <span className="text-sm">{category.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="space-y-3 pt-6 border-t">
                      <h4 className="font-medium text-gray-700">Rango de Precio</h4>
                      <div className="space-y-2">
                        <input
                          type="range"
                          min="0"
                          max="200"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>$0</span>
                          <span>${priceRange[1]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Sort */}
                    <div className="space-y-3 pt-6 border-t">
                      <h4 className="font-medium text-gray-700">Ordenar por</h4>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="name">Nombre A-Z</option>
                        <option value="price-low">Precio: Menor a Mayor</option>
                        <option value="price-high">Precio: Mayor a Menor</option>
                        <option value="rating">Mejor Valorados</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No se encontraron productos
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Intenta ajustar los filtros o buscar con otros términos
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Limpiar Filtros
                  </Button>
                </div>
              ) : (
                <motion.div
                  layout
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                      : 'space-y-4'
                  }
                >
                  <AnimatePresence>
                    {filteredProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className={
                          viewMode === 'grid'
                            ? 'product-card bg-white rounded-xl p-6 hover-lift'
                            : 'bg-white rounded-xl p-6 flex flex-col md:flex-row gap-6 hover-lift'
                        }
                      >
                        <div className={viewMode === 'grid' ? 'relative mb-4' : 'relative md:w-48 flex-shrink-0'}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className={
                              viewMode === 'grid'
                                ? 'w-full h-48 object-cover rounded-lg'
                                : 'w-full h-48 md:h-32 object-cover rounded-lg'
                            }
                          />
                          {product.onSale && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                              Oferta
                            </div>
                          )}
                          <div className={`absolute top-2 right-2 stock-badge ${
                            product.stock > 20 ? 'stock-high' : 
                            product.stock > 10 ? 'stock-medium' : 'stock-low'
                          }`}>
                            Stock: {product.stock}
                          </div>
                        </div>

                        <div className={viewMode === 'grid' ? 'space-y-3' : 'flex-1 space-y-3'}>
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                            <p className="text-sm text-gray-600">Código: {product.code}</p>
                          </div>
                          
                          {viewMode === 'list' && (
                            <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                          )}

                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating || 0)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">({product.reviews || 0})</span>
                          </div>

                          <div className={`flex items-center ${viewMode === 'grid' ? 'justify-between' : 'justify-between md:justify-start md:space-x-8'}`}>
                            <div className="space-y-1">
                              <div className="price-tag">${product.price}</div>
                              {product.originalPrice && (
                                <div className="text-sm text-gray-500 line-through">
                                  ${product.originalPrice}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className={`flex ${viewMode === 'grid' ? 'space-x-2' : 'space-x-4'}`}>
                            <Button
                              onClick={() => handleAddToCart(product)}
                              className="flex-1 gradient-orange hover:opacity-90"
                              size="sm"
                            >
                              Agregar al Carrito
                            </Button>
                            <Button asChild variant="outline" size="sm">
                              <Link to={`/producto/${product.id}`}>Ver Detalles</Link>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;