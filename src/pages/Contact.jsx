
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Save contact to localStorage
    const contact = {
      id: Date.now(),
      date: new Date().toISOString(),
      ...formData,
      status: 'new'
    };

    const existingContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    existingContacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(existingContacts));

    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Dirección",
      details: ["Av. Principal 123", "Ciudad, Estado 12345"],
      color: "text-blue-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      details: ["+569 12345678", "WhatsApp: +1 234 567 8901"],
      color: "text-green-600"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@tornillofeliz.com", "ventas@tornillofeliz.com"],
      color: "text-orange-600"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horario",
      details: ["Lun-Sáb: 8:00 - 18:00", "Dom: 9:00 - 14:00"],
      color: "text-purple-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contacto - Ferretería El Tornillo Feliz</title>
        <meta name="description" content="Contáctanos para consultas, cotizaciones o cualquier información sobre nuestros productos y servicios. Estamos aquí para ayudarte." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="hero-pattern bg-gradient-to-br from-orange-50 to-gray-100 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Contáctanos
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Estamos aquí para ayudarte con todas tus necesidades de ferretería. 
                No dudes en contactarnos para consultas, cotizaciones o cualquier información.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border hover-lift text-center"
                >
                  <div className={`w-12 h-12 ${info.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <div className={info.color}>
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm border"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Envíanos un Mensaje</h2>
                  <p className="text-gray-600">
                    Completa el formulario y te responderemos lo antes posible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
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
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Seleccionar asunto</option>
                        <option value="consulta">Consulta General</option>
                        <option value="cotizacion">Solicitar Cotización</option>
                        <option value="producto">Información de Producto</option>
                        <option value="entrega">Consulta de Entrega</option>
                        <option value="reclamo">Reclamo o Sugerencia</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-orange hover:opacity-90"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="loading-spinner"></div>
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      onClick={() => toast({
                        title: "🚧 Esta función no está implementada aún—¡pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
                      })}
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </Button>
                    <Button
                      onClick={() => toast({
                        title: "🚧 Esta función no está implementada aún—¡pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
                      })}
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Llamar</span>
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Map & Store Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Map */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestra Ubicación</h3>
                  <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0059%2C40.7128%2C-74.0059%2C40.7128&layer=mapnik&marker=40.7128%2C-74.0059"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de Ferretería El Tornillo Feliz"
                    ></iframe>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="font-medium">Av. Principal 123, Ciudad, Estado 12345</p>
                    <p>Fácil acceso y amplio estacionamiento disponible</p>
                  </div>
                </div>

                {/* Store Features */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">¿Por qué Elegirnos?</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: "🏆",
                        title: "Más de 20 años de experiencia",
                        description: "Conocimiento y confianza en cada proyecto"
                      },
                      {
                        icon: "🚚",
                        title: "Entrega rápida",
                        description: "Servicio de delivery en 24-48 horas"
                      },
                      {
                        icon: "💰",
                        title: "Mejores precios",
                        description: "Precios competitivos y ofertas especiales"
                      },
                      {
                        icon: "🔧",
                        title: "Asesoría especializada",
                        description: "Te ayudamos a encontrar lo que necesitas"
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-2xl">{feature.icon}</span>
                        <div>
                          <h4 className="font-medium text-gray-800">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">
                    ¿Necesitas ayuda urgente?
                  </h3>
                  <p className="text-orange-700 text-sm mb-4">
                    Para emergencias o consultas urgentes, contáctanos directamente:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-orange-700">
                      <Phone className="h-4 w-4" />
                      <span className="font-medium">+569 12345678</span>
                    </div>
                    <div className="flex items-center space-x-2 text-orange-700">
                      <MessageCircle className="h-4 w-4" />
                      <span className="font-medium">WhatsApp: +1 234 567 8901</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
