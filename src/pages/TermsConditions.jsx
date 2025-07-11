
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FileText, Scale, ShoppingCart, Truck } from 'lucide-react';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones - Ferretería El Tornillo Feliz</title>
        <meta name="description" content="Lee nuestros términos y condiciones de uso para conocer las reglas y políticas que rigen el uso de nuestros servicios." />
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
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Términos y Condiciones
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Conoce las reglas y políticas que rigen el uso de nuestros servicios 
                y la compra de productos en Ferretería El Tornillo Feliz.
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
                  Bienvenido a Ferretería El Tornillo Feliz. Estos términos y condiciones ("Términos") 
                  rigen el uso de nuestro sitio web y servicios. Al acceder o utilizar nuestros servicios, 
                  usted acepta estar sujeto a estos Términos. Si no está de acuerdo con alguna parte de 
                  estos términos, no debe utilizar nuestros servicios.
                </p>
              </div>

              {/* Definitions */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Definiciones</h2>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">"Empresa", "nosotros", "nuestro"</h4>
                    <p className="text-gray-600">Se refiere a Ferretería El Tornillo Feliz</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">"Usuario", "usted", "cliente"</h4>
                    <p className="text-gray-600">Se refiere a cualquier persona que utilice nuestros servicios</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">"Servicios"</h4>
                    <p className="text-gray-600">Se refiere a nuestro sitio web, productos y servicios relacionados</p>
                  </div>
                </div>
              </div>

              {/* Use of Services */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Scale className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Uso de Nuestros Servicios</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Elegibilidad</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Debe ser mayor de 18 años para utilizar nuestros servicios. Al utilizar nuestros 
                      servicios, declara y garantiza que tiene al menos 18 años de edad.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Cuenta de Usuario</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Es responsable de mantener la confidencialidad de su cuenta</li>
                      <li>Debe proporcionar información precisa y actualizada</li>
                      <li>Es responsable de todas las actividades que ocurran bajo su cuenta</li>
                      <li>Debe notificarnos inmediatamente sobre cualquier uso no autorizado</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Uso Prohibido</h3>
                    <p className="text-gray-600 mb-2">No puede utilizar nuestros servicios para:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Actividades ilegales o fraudulentas</li>
                      <li>Violar derechos de propiedad intelectual</li>
                      <li>Transmitir virus o código malicioso</li>
                      <li>Interferir con el funcionamiento de nuestros servicios</li>
                      <li>Recopilar información de otros usuarios sin consentimiento</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Products and Orders */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="h-5 w-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Productos y Pedidos</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Información de Productos</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nos esforzamos por proporcionar información precisa sobre nuestros productos, 
                      incluyendo descripciones, precios y disponibilidad. Sin embargo, no garantizamos 
                      que toda la información sea completamente precisa o esté libre de errores.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Precios y Disponibilidad</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Los precios están sujetos a cambios sin previo aviso</li>
                      <li>Los precios incluyen impuestos aplicables</li>
                      <li>La disponibilidad de productos puede variar</li>
                      <li>Nos reservamos el derecho de limitar cantidades</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Proceso de Pedido</h3>
                    <ol className="list-decimal list-inside text-gray-600 space-y-1">
                      <li>Seleccione los productos y agréguelos al carrito</li>
                      <li>Revise su pedido y proporcione información de entrega</li>
                      <li>Seleccione el método de pago y complete la transacción</li>
                      <li>Recibirá una confirmación por correo electrónico</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Aceptación de Pedidos</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nos reservamos el derecho de aceptar o rechazar cualquier pedido. Podemos 
                      cancelar pedidos por razones que incluyen, pero no se limitan a: disponibilidad 
                      de productos, errores en la información del producto o precios, o problemas 
                      identificados por nuestro departamento de prevención de fraude.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment and Billing */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Pago y Facturación</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Métodos de Pago</h3>
                    <p className="text-gray-600 leading-relaxed mb-2">Aceptamos los siguientes métodos de pago:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Tarjetas de crédito y débito (Visa, Mastercard, American Express)</li>
                      <li>Efectivo (solo para retiro en tienda)</li>
                      <li>Transferencias bancarias (para pedidos grandes)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Autorización de Pago</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Al proporcionar información de pago, autoriza a la empresa a cargar el monto 
                      total de su pedido al método de pago seleccionado. Garantiza que tiene 
                      autorización para usar el método de pago proporcionado.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Facturación</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Se emitirá una factura por cada compra realizada. Las facturas se enviarán 
                      por correo electrónico y estarán disponibles en su cuenta de usuario.
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping and Delivery */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Truck className="h-5 w-5 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Envío y Entrega</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Opciones de Entrega</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li><strong>Entrega a domicilio:</strong> 24-48 horas hábiles</li>
                      <li><strong>Retiro en tienda:</strong> Disponible el mismo día</li>
                      <li><strong>Envío express:</strong> Entrega en 24 horas (costo adicional)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Costos de Envío</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Envío gratuito para pedidos superiores a $50</li>
                      <li>Costo de envío estándar: $5.99</li>
                      <li>Los costos se calculan según el peso y destino</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsabilidad de Entrega</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Una vez que el producto sea entregado en la dirección proporcionada, 
                      la responsabilidad se transfiere al cliente. Recomendamos estar presente 
                      durante la entrega o proporcionar instrucciones específicas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Returns and Refunds */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Devoluciones y Reembolsos</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Política de Devolución</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Período de devolución: 30 días desde la fecha de compra</li>
                      <li>Los productos deben estar en condición original y sin usar</li>
                      <li>Se requiere comprobante de compra</li>
                      <li>Algunos productos pueden tener restricciones especiales</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Proceso de Devolución</h3>
                    <ol className="list-decimal list-inside text-gray-600 space-y-1">
                      <li>Contacte nuestro servicio al cliente</li>
                      <li>Obtenga un número de autorización de devolución</li>
                      <li>Empaque el producto de forma segura</li>
                      <li>Envíe o entregue el producto en nuestra tienda</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Reembolsos</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Los reembolsos se procesarán al método de pago original dentro de 
                      5-10 días hábiles después de recibir y procesar la devolución.
                    </p>
                  </div>
                </div>
              </div>

              {/* Warranties */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Garantías</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Garantía del Fabricante</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Los productos están cubiertos por las garantías del fabricante. 
                      Los términos y condiciones específicos varían según el producto y fabricante.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Limitación de Garantía</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Excepto por las garantías expresas del fabricante, no ofrecemos garantías 
                      adicionales. No somos responsables por daños indirectos, incidentales o 
                      consecuentes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Propiedad Intelectual</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Todo el contenido de nuestro sitio web, incluyendo texto, gráficos, logos, 
                  imágenes y software, es propiedad de Ferretería El Tornillo Feliz o sus 
                  licenciantes y está protegido por las leyes de derechos de autor y otras 
                  leyes de propiedad intelectual.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>No puede reproducir, distribuir o modificar nuestro contenido sin permiso</li>
                  <li>Puede usar nuestro sitio web solo para fines personales y no comerciales</li>
                  <li>Cualquier uso no autorizado puede resultar en acciones legales</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitación de Responsabilidad</h2>
                <p className="text-gray-600 leading-relaxed">
                  En la máxima medida permitida por la ley, Ferretería El Tornillo Feliz no será 
                  responsable por daños indirectos, incidentales, especiales, consecuentes o 
                  punitivos, incluyendo pero no limitado a pérdida de beneficios, datos o uso, 
                  independientemente de la teoría de responsabilidad.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Ley Aplicable</h2>
                <p className="text-gray-600 leading-relaxed">
                  Estos Términos se rigen por las leyes del país/estado donde opera la empresa, 
                  sin tener en cuenta los principios de conflicto de leyes. Cualquier disputa 
                  se resolverá en los tribunales competentes de nuestra jurisdicción.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Modificaciones a los Términos</h2>
                <p className="text-gray-600 leading-relaxed">
                  Nos reservamos el derecho de modificar estos Términos en cualquier momento. 
                  Los cambios entrarán en vigor inmediatamente después de su publicación en 
                  nuestro sitio web. Su uso continuado de nuestros servicios constituye 
                  aceptación de los términos modificados.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contacto</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> legal@tornillofeliz.com</p>
                  <p><strong>Teléfono:</strong> +569 12345678</p>
                  <p><strong>Dirección:</strong> Av. Principal 123, Ciudad, Estado 12345</p>
                  <p><strong>Horario de atención:</strong> Lun-Sáb: 8:00-18:00</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsConditions;
