
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Check, CreditCard, Truck, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Customer Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Delivery Info
    deliveryType: 'delivery',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    // Payment Info
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const { items, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const subtotal = getCartTotal();
  const shipping = formData.deliveryType === 'pickup' ? 0 : (subtotal >= 50 ? 0 : 5.99);
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        if (formData.deliveryType === 'pickup') return true;
        return formData.address && formData.city && formData.state && formData.zipCode;
      case 3:
        if (formData.paymentMethod === 'cash') return true;
        return formData.cardNumber && formData.expiryDate && formData.cvv && formData.cardName;
      default:
        return false;
    }
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    } else {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive"
      });
    }
  };

  const handleSubmitOrder = async () => {
    if (!validateStep(3)) {
      toast({
        title: "Información incompleta",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Save order to localStorage
    const order = {
      id: `ORD-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      customer: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      total: total,
      status: 'pending',
      deliveryType: formData.deliveryType,
      address: formData.deliveryType === 'delivery' ? `${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}` : null,
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price
      }))
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    clearCart();
    setIsProcessing(false);

    toast({
      title: "¡Pedido confirmado!",
      description: `Tu pedido ${order.id} ha sido procesado exitosamente`,
    });

    navigate('/', { replace: true });
  };

  const steps = [
    { number: 1, title: 'Información Personal', icon: '👤' },
    { number: 2, title: 'Entrega', icon: '🚚' },
    { number: 3, title: 'Pago', icon: '💳' },
    { number: 4, title: 'Confirmación', icon: '✅' }
  ];

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Tu carrito está vacío</h1>
          <Button asChild>
            <Link to="/catalogo">Ir al Catálogo</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Checkout - Ferretería El Tornillo Feliz</title>
        <meta name="description" content="Completa tu compra de forma segura y rápida. Múltiples opciones de pago y entrega disponibles." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
                <p className="text-gray-600 mt-1">Completa tu pedido</p>
              </div>
              <Button asChild variant="ghost">
                <Link to="/carrito">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Carrito
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 md:space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`checkout-step flex items-center space-x-2 ${
                    currentStep >= step.number ? 'active' : ''
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step.number
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep > step.number ? <Check className="h-5 w-5" /> : step.number}
                    </div>
                    <span className={`hidden md:block text-sm font-medium ${
                      currentStep >= step.number ? 'text-orange-600' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl p-6 shadow-sm border"
              >
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800">Información Personal</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Apellido *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>

                    <Button
                      onClick={handleNextStep}
                      className="w-full gradient-orange hover:opacity-90"
                      size="lg"
                    >
                      Continuar
                    </Button>
                  </div>
                )}

                {/* Step 2: Delivery Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800">Información de Entrega</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Tipo de Entrega
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <label className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                            formData.deliveryType === 'delivery'
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}>
                            <input
                              type="radio"
                              name="deliveryType"
                              value="delivery"
                              checked={formData.deliveryType === 'delivery'}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className="flex items-center space-x-3">
                              <Truck className="h-6 w-6 text-orange-500" />
                              <div>
                                <div className="font-medium">Entrega a Domicilio</div>
                                <div className="text-sm text-gray-600">
                                  {subtotal >= 50 ? 'Gratis' : '$5.99'}
                                </div>
                              </div>
                            </div>
                          </label>

                          <label className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                            formData.deliveryType === 'pickup'
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}>
                            <input
                              type="radio"
                              name="deliveryType"
                              value="pickup"
                              checked={formData.deliveryType === 'pickup'}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className="flex items-center space-x-3">
                              <MapPin className="h-6 w-6 text-orange-500" />
                              <div>
                                <div className="font-medium">Retiro en Tienda</div>
                                <div className="text-sm text-gray-600">Gratis</div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>

                      {formData.deliveryType === 'delivery' && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Dirección *
                            </label>
                            <input
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                              required
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Ciudad *
                              </label>
                              <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Estado *
                              </label>
                              <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Código Postal *
                              </label>
                              <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {formData.deliveryType === 'pickup' && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-medium text-blue-800 mb-2">Información de Retiro</h4>
                          <p className="text-blue-700 text-sm mb-2">
                            <strong>Dirección:</strong> Av. Principal 123, Ciudad, Estado 12345
                          </p>
                          <p className="text-blue-700 text-sm mb-2">
                            <strong>Horario:</strong> Lun-Sáb: 8:00-18:00, Dom: 9:00-14:00
                          </p>
                          <p className="text-blue-700 text-sm">
                            Te enviaremos un email cuando tu pedido esté listo para recoger.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        onClick={() => setCurrentStep(1)}
                        variant="outline"
                        className="flex-1"
                      >
                        Anterior
                      </Button>
                      <Button
                        onClick={handleNextStep}
                        className="flex-1 gradient-orange hover:opacity-90"
                      >
                        Continuar
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800">Información de Pago</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Método de Pago
                        </label>
                        <div className="space-y-3">
                          <label className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                            formData.paymentMethod === 'card'
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}>
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="card"
                              checked={formData.paymentMethod === 'card'}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className="flex items-center space-x-3">
                              <CreditCard className="h-6 w-6 text-orange-500" />
                              <div>
                                <div className="font-medium">Tarjeta de Crédito/Débito</div>
                                <div className="text-sm text-gray-600">Visa, Mastercard, American Express</div>
                              </div>
                            </div>
                          </label>

                          {formData.deliveryType === 'pickup' && (
                            <label className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                              formData.paymentMethod === 'cash'
                                ? 'border-orange-500 bg-orange-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}>
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="cash"
                                checked={formData.paymentMethod === 'cash'}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <div className="flex items-center space-x-3">
                                <span className="text-2xl">💵</span>
                                <div>
                                  <div className="font-medium">Pago en Efectivo</div>
                                  <div className="text-sm text-gray-600">Pagar al recoger en tienda</div>
                                </div>
                              </div>
                            </label>
                          )}
                        </div>
                      </div>

                      {formData.paymentMethod === 'card' && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Número de Tarjeta *
                            </label>
                            <input
                              type="text"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              placeholder="1234 5678 9012 3456"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                              required
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Fecha de Vencimiento *
                              </label>
                              <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleInputChange}
                                placeholder="MM/AA"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                CVV *
                              </label>
                              <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                placeholder="123"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Nombre en la Tarjeta *
                            </label>
                            <input
                              type="text"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleInputChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                              required
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        onClick={() => setCurrentStep(2)}
                        variant="outline"
                        className="flex-1"
                      >
                        Anterior
                      </Button>
                      <Button
                        onClick={handleSubmitOrder}
                        disabled={isProcessing}
                        className="flex-1 gradient-orange hover:opacity-90"
                      >
                        {isProcessing ? (
                          <div className="flex items-center space-x-2">
                            <div className="loading-spinner"></div>
                            <span>Procesando...</span>
                          </div>
                        ) : (
                          'Confirmar Pedido'
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm border sticky top-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Resumen del Pedido</h2>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm">{item.name}</h4>
                        <p className="text-gray-600 text-sm">Cantidad: {item.quantity}</p>
                      </div>
                      <div className="text-sm font-medium text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío:</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-green-600">GRATIS</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Impuestos:</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span className="text-orange-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <span>🔒</span>
                      <span>Pago Seguro</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>✅</span>
                      <span>Garantizado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
