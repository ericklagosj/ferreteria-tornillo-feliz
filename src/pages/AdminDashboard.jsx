import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminDashboardContent from '@/components/admin/AdminDashboardContent';
import AdminProductsContent from '@/components/admin/AdminProductsContent';
import AdminOrdersContent from '@/components/admin/AdminOrdersContent';
import AdminContactsContent from '@/components/admin/AdminContactsContent';
import AdminSettingsContent from '@/components/admin/AdminSettingsContent';
import { mockProducts, orders as mockOrders } from '@/data/mockData.js';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products, setProducts] = useState(mockProducts);
  const [orders, setOrders] = useState([]);
  const [contacts, setContacts] = useState([]);
  
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }

    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const savedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    setOrders([...mockOrders, ...savedOrders].sort((a, b) => new Date(b.date) - new Date(a.date)));
    setContacts(savedContacts.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, [isAuthenticated, navigate]);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboardContent products={products} orders={orders} contacts={contacts} />;
      case 'products':
        return <AdminProductsContent products={products} setProducts={setProducts} />;
      case 'orders':
        return <AdminOrdersContent orders={orders} setOrders={setOrders} />;
      case 'contacts':
        return <AdminContactsContent contacts={contacts} />;
      case 'settings':
        return <AdminSettingsContent />;
      default:
        return <AdminDashboardContent products={products} orders={orders} contacts={contacts} />;
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Panel Administrativo - Ferretería El Tornillo Feliz</title>
        <meta name="description" content="Panel de administración para gestionar productos, pedidos y configuraciones." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-8 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;