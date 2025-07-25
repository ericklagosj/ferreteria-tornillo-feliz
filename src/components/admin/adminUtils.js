export const getStatusColor = (status) => {
  switch (status) {
    case 'pending': return 'bg-yellow-100 text-yellow-800';
    case 'completed': return 'bg-green-100 text-green-800';
    case 'cancelled': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const getStatusLabel = (status) => {
  switch (status) {
    case 'pending': return 'Pendiente';
    case 'completed': return 'Completado';
    case 'cancelled': return 'Cancelado';
    default: return status;
  }
};