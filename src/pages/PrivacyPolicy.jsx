
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad - Ferretería El Tornillo Feliz</title>
        <meta name="description" content="Conoce cómo protegemos tu información personal y respetamos tu privacidad en Ferretería El Tornillo Feliz." />
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
              <div className="w-16 h-16 gradient-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Política de Privacidad
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                En Ferretería El Tornillo Feliz, tu privacidad es nuestra prioridad. 
                Conoce cómo protegemos y utilizamos tu información personal.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm border space-y-8"
            >
              {/* Last Updated */}
              <div className="text-center pb-6 border-b">
                <p className="text-gray-600">
                  <strong>Última actualización:</strong> 15 de enero de 2024
                </p>
              </div>

              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Introducción</h2>
                <p className="text-gray-600 leading-relaxed">
                  Esta Política de Privacidad describe cómo Ferretería El Tornillo Feliz ("nosotros", "nuestro" o "la empresa") 
                  recopila, utiliza y protege su información cuando utiliza nuestro sitio web y servicios. 
                  Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta política.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Eye className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Información que Recopilamos</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Información Personal</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Nombre completo y datos de contacto</li>
                      <li>Dirección de correo electrónico</li>
                      <li>Número de teléfono</li>
                      <li>Dirección de entrega y facturación</li>
                      <li>Información de pago (procesada de forma segura)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Información de Uso</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Páginas visitadas y tiempo de navegación</li>
                      <li>Productos visualizados y comprados</li>
                      <li>Dirección IP y tipo de navegador</li>
                      <li>Cookies y tecnologías similares</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Cómo Utilizamos su Información</h2>
                </div>
                
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Procesar y completar sus pedidos</li>
                  <li>Proporcionar atención al cliente y soporte técnico</li>
                  <li>Enviar confirmaciones de pedidos y actualizaciones de entrega</li>
                  <li>Mejorar nuestros productos y servicios</li>
                  <li>Personalizar su experiencia de compra</li>
                  <li>Enviar ofertas promocionales (con su consentimiento)</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                </ul>
              </div>

              {/* Information Protection */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Lock className="h-5 w-5 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Protección de la Información</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger 
                    su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Seguridad Técnica</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Encriptación SSL/TLS</li>
                        <li>• Firewalls y sistemas de detección</li>
                        <li>• Acceso restringido a datos</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Políticas Internas</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Capacitación del personal</li>
                        <li>• Auditorías regulares</li>
                        <li>• Políticas de acceso estrictas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Compartir Información</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  No vendemos, alquilamos ni compartimos su información personal con terceros, 
                  excepto en las siguientes circunstancias:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                  <li>Para cumplir con requisitos legales o órdenes judiciales</li>
                  <li>Para proteger nuestros derechos, propiedad o seguridad</li>
                  <li>Con su consentimiento explícito</li>
                </ul>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies y Tecnologías Similares</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">Cookies Esenciales</h4>
                    <p className="text-sm text-gray-600">Necesarias para el funcionamiento básico del sitio</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Cookies de Rendimiento</h4>
                    <p className="text-sm text-gray-600">Nos ayudan a entender cómo los usuarios interactúan con el sitio</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Cookies de Funcionalidad</h4>
                    <p className="text-sm text-gray-600">Permiten recordar sus preferencias y personalizar su experiencia</p>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Sus Derechos</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Usted tiene los siguientes derechos respecto a su información personal:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Acceso y Portabilidad</h4>
                    <p className="text-sm text-gray-600">Solicitar una copia de su información personal</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Rectificación</h4>
                    <p className="text-sm text-gray-600">Corregir información inexacta o incompleta</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Eliminación</h4>
                    <p className="text-sm text-gray-600">Solicitar la eliminación de su información</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Oposición</h4>
                    <p className="text-sm text-gray-600">Oponerse al procesamiento de sus datos</p>
                  </div>
                </div>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Retención de Datos</h2>
                <p className="text-gray-600 leading-relaxed">
                  Conservamos su información personal solo durante el tiempo necesario para cumplir con los 
                  propósitos descritos en esta política, a menos que la ley requiera o permita un período 
                  de retención más largo. Los datos de transacciones se conservan según los requisitos 
                  contables y fiscales aplicables.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Privacidad de Menores</h2>
                <p className="text-gray-600 leading-relaxed">
                  Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos 
                  intencionalmente información personal de menores. Si descubrimos que hemos 
                  recopilado información de un menor, la eliminaremos inmediatamente.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Cambios a esta Política</h2>
                <p className="text-gray-600 leading-relaxed">
                  Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos 
                  sobre cambios significativos publicando la nueva política en nuestro sitio web 
                  y actualizando la fecha de "última actualización". Le recomendamos revisar 
                  esta política periódicamente.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contacto</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, 
                  puede contactarnos:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacidad@tornillofeliz.com</p>
                  <p><strong>Teléfono:</strong> +569 12345678</p>
                  <p><strong>Dirección:</strong> Av. Principal 123, Ciudad, Estado 12345</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
