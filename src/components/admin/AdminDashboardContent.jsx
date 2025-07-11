import React from 'react';
import { motion } from 'framer-motion';
import { Package, ShoppingCart, MessageSquare, DollarSign } from 'lucide-react';
import { getStatusColor, getStatusLabel } from '@/components/admin/adminUtils';

const AdminDashboardContent = ({ products, orders, contacts }) => {
  const stats = [
    {
      title: 'Total Productos',
      value: products.length,
      icon: Package,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      title: 'Pedidos Totales',
      value: orders.length,
      icon: ShoppingCart,
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      title: 'Ventas del Mes',
      value: `$${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}`,
      icon: DollarSign,
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    },
    {
      title: 'Contactos',
      value: contacts.length,
      icon: MessageSquare,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Resumen general del negocio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Pedidos Recientes</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">ID</th>
                <th className="text-left py-2">Cliente</th>
                <th className="text-left py-2">Total</th>
                <th className="text-left py-2">Estado</th>
                <th className="text-left py-2">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-2 font-medium">{order.id}</td>
                  <td className="py-2">{order.customer}</td>
                  <td className="py-2">${order.total.toFixed(2)}</td>
                  <td className="py-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusLabel(order.status)}
                    </span>
                  </td>
                  <td className="py-2">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboardContent;