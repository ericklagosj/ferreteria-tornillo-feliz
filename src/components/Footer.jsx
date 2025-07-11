
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-pattern text-white relative">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🔧</span>
              </div>
              <div>
                <span className="text-xl font-bold">El Tornillo Feliz</span>
                <p className="text-sm text-gray-300">Tu ferretería de confianza</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Más de 20 años brindando las mejores herramientas y materiales de construcción. 
              Calidad, experiencia y confianza en cada proyecto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-orange-400">Enlaces Rápidos</span>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-orange-400">Categorías</span>
            <ul className="space-y-2">
              <li>
                <Link to="/catalogo?category=herramientas" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Herramientas
                </Link>
              </li>
              <li>
                <Link to="/catalogo?category=pinturas" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Pinturas
                </Link>
              </li>
              <li>
                <Link to="/catalogo?category=electricidad" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Electricidad
                </Link>
              </li>
              <li>
                <Link to="/catalogo?category=plomeria" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Plomería
                </Link>
              </li>
              <li>
                <Link to="/catalogo?category=construccion" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Construcción
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-orange-400">Contacto</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Av. Principal 123</p>
                  <p className="text-gray-300 text-sm">Ciudad, Estado 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+569 12345678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@tornillofeliz.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Lun - Sáb: 8:00 - 18:00</p>
                  <p className="text-gray-300 text-sm">Dom: 9:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-lg font-semibold text-orange-400 mb-4 block">Nuestra Ubicación</span>
              <p className="text-gray-300 text-sm mb-4">
                Visítanos en nuestra tienda física. Contamos con amplio estacionamiento y 
                fácil acceso para carga y descarga de materiales.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  🚚 Delivery disponible
                </div>
                <div className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  🏪 Retiro en tienda
                </div>
              </div>
            </div>
            <div className="h-64 bg-gray-600 rounded-lg overflow-hidden">
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-600 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ferretería El Tornillo Feliz. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
