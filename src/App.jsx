
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/contexts/CartContext';
import { AuthProvider } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Catalog from '@/pages/Catalog';
import ProductDetail from '@/pages/ProductDetail';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import Contact from '@/pages/Contact';
import AdminLogin from '@/pages/AdminLogin';
import AdminDashboard from '@/pages/AdminDashboard';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsConditions from '@/pages/TermsConditions';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Helmet>
              <title>Ferretería El Tornillo Feliz - Tu ferretería de confianza</title>
              <meta name="description" content="Ferretería El Tornillo Feliz - Herramientas, materiales de construcción, pinturas, electricidad y plomería. Calidad y experiencia a tu servicio." />
              <meta name="keywords" content="ferretería, herramientas, construcción, pinturas, electricidad, plomería, materiales" />
              <meta name="author" content="Ferretería El Tornillo Feliz" />
              <meta property="og:title" content="Ferretería El Tornillo Feliz" />
              <meta property="og:description" content="Tu ferretería de confianza con los mejores productos y precios" />
              <meta property="og:type" content="website" />
              <link rel="canonical" href="https://ferreteriaeltornillofeliz.com" />
            </Helmet>
            
            <Header />
            
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalog />} />
                <Route path="/producto/:id" element={<ProductDetail />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/privacidad" element={<PrivacyPolicy />} />
                <Route path="/terminos" element={<TermsConditions />} />
              </Routes>
            </main>
            
            <Footer />
            <Toaster />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
