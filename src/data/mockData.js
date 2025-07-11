
export const mockProducts = [
  {
    id: 1,
    name: "Taladro Inalámbrico 18V",
    code: "TAL-001",
    category: "herramientas",
    price: 89000,
    originalPrice: 109000,
    stock: 15,
    description: "Taladro inalámbrico profesional con batería de litio de 18V. Incluye 2 baterías, cargador y maletín.",
    features: [
      "Motor sin escobillas",
      "2 velocidades",
      "Mandril de 13mm",
      "Luz LED integrada",
      "Batería de litio 18V"
    ],
    specifications: {
      "Voltaje": "18V",
      "Velocidades": "2",
      "Mandril": "13mm",
      "Peso": "1.8kg",
      "Garantía": "2 años"
    },
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=500&fit=crop"
    ],
    rating: 4.8,
    reviews: 24,
    featured: true,
    onSale: true
  },
  {
    id: 2,
    name: "Martillo de Carpintero 16oz",
    code: "MAR-002",
    category: "herramientas",
    price: 24000,
    stock: 32,
    description: "Martillo de carpintero con mango de fibra de vidrio y cabeza forjada. Diseño ergonómico para mayor comodidad.",
    features: [
      "Mango de fibra de vidrio",
      "Cabeza forjada",
      "Diseño ergonómico",
      "Peso balanceado"
    ],
    specifications: {
      "Peso": "16oz",
      "Material mango": "Fibra de vidrio",
      "Material cabeza": "Acero forjado",
      "Longitud": "33cm"
    },
    image: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=500&h=500&fit=crop"
    ],
    rating: 4.6,
    reviews: 18,
    featured: false
  },
  {
    id: 3,
    name: "Pintura Látex Interior Blanco 4L",
    code: "PIN-003",
    category: "pinturas",
    price: 34000,
    stock: 28,
    description: "Pintura látex de alta calidad para interiores. Excelente cobertura y durabilidad. Fácil aplicación y limpieza.",
    features: [
      "Base agua",
      "Secado rápido",
      "Fácil limpieza",
      "Excelente cobertura",
      "Bajo olor"
    ],
    specifications: {
      "Contenido": "4 litros",
      "Tipo": "Látex",
      "Acabado": "Mate",
      "Rendimiento": "40-50 m²",
      "Tiempo secado": "2-4 horas"
    },
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&h=500&fit=crop"
    ],
    rating: 4.4,
    reviews: 12,
    featured: true
  },
  {
    id: 4,
    name: "Cable Eléctrico 12 AWG x 100m",
    code: "ELE-004",
    category: "electricidad",
    price: 78000,
    stock: 8,
    description: "Cable eléctrico de cobre calibre 12 AWG. Ideal para instalaciones residenciales y comerciales.",
    features: [
      "Conductor de cobre",
      "Aislamiento THHN",
      "Resistente a la humedad",
      "Certificado UL"
    ],
    specifications: {
      "Calibre": "12 AWG",
      "Material": "Cobre",
      "Longitud": "100 metros",
      "Aislamiento": "THHN",
      "Voltaje": "600V"
    },
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&h=500&fit=crop"
    ],
    rating: 4.7,
    reviews: 9,
    featured: false
  },
  {
    id: 5,
    name: "Tubería PVC 4\" x 6m",
    code: "PLO-005",
    category: "plomeria",
    price: 18000,
    stock: 45,
    description: "Tubería de PVC sanitario de 4 pulgadas. Ideal para desagües y sistemas de drenaje.",
    features: [
      "Material PVC",
      "Resistente a químicos",
      "Fácil instalación",
      "Larga durabilidad"
    ],
    specifications: {
      "Diámetro": "4 pulgadas",
      "Longitud": "6 metros",
      "Material": "PVC",
      "Presión": "Sanitario",
      "Norma": "ASTM D3034"
    },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop"
    ],
    rating: 4.3,
    reviews: 15,
    featured: false
  },
  {
    id: 6,
    name: "Cemento Portland 50kg",
    code: "CON-006",
    category: "construccion",
    price: 12000,
    stock: 120,
    description: "Cemento Portland tipo I de alta calidad. Ideal para construcción general y trabajos de albañilería.",
    features: [
      "Tipo I",
      "Alta resistencia",
      "Fraguado normal",
      "Calidad premium"
    ],
    specifications: {
      "Peso": "50 kg",
      "Tipo": "Portland I",
      "Resistencia": "42.5 MPa",
      "Fraguado": "Normal",
      "Norma": "ASTM C150"
    },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=500&fit=crop"
    ],
    rating: 4.5,
    reviews: 31,
    featured: true
  },
  {
    id: 7,
    name: "Sierra Circular 7-1/4\"",
    code: "TAL-007",
    category: "herramientas",
    price: 125000,
    originalPrice: 149000,
    stock: 6,
    description: "Sierra circular profesional de 7-1/4\" con motor de 15 amperios. Incluye hoja de carburo y guía láser.",
    features: [
      "Motor 15 amperios",
      "Hoja de carburo incluida",
      "Guía láser",
      "Base de magnesio",
      "Freno eléctrico"
    ],
    specifications: {
      "Diámetro hoja": "7-1/4 pulgadas",
      "Motor": "15 amperios",
      "RPM": "5,300",
      "Corte a 90°": "2-9/16\"",
      "Peso": "4.1 kg"
    },
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop"
    ],
    rating: 4.9,
    reviews: 16,
    featured: true,
    onSale: true
  },
  {
    id: 8,
    name: "Destornillador Set 6 Piezas",
    code: "TAL-008",
    category: "herramientas",
    price: 19000,
    stock: 25,
    description: "Set de destornilladores con puntas Phillips y planas. Mangos ergonómicos con grip antideslizante.",
    features: [
      "6 piezas incluidas",
      "Puntas Phillips y planas",
      "Mango ergonómico",
      "Grip antideslizante",
      "Acero endurecido"
    ],
    specifications: {
      "Piezas": "6",
      "Tipos": "Phillips y plana",
      "Material": "Acero endurecido",
      "Mango": "Ergonómico",
      "Garantía": "1 año"
    },
    image: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=500&h=500&fit=crop"
    ],
    rating: 4.2,
    reviews: 22,
    featured: false
  }
];

export const categories = [
  {
    id: 'herramientas',
    name: 'Herramientas',
    description: 'Herramientas manuales y eléctricas',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop'
  },
  {
    id: 'pinturas',
    name: 'Pinturas',
    description: 'Pinturas y accesorios',
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop'
  },
  {
    id: 'electricidad',
    name: 'Electricidad',
    description: 'Materiales eléctricos',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop'
  },
  {
    id: 'plomeria',
    name: 'Plomería',
    description: 'Tuberías y accesorios',
    icon: '🚿',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
  },
  {
    id: 'construccion',
    name: 'Construcción',
    description: 'Materiales de construcción',
    icon: '🏗️',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop'
  },
  {
    id: 'jardineria',
    name: 'Jardinería',
    description: 'Herramientas de jardín',
    icon: '🌱',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop'
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "Contratista",
    content: "Excelente servicio y productos de calidad. Siempre encuentro lo que necesito para mis proyectos.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "María González",
    role: "Arquitecta",
    content: "La atención al cliente es excepcional. Me ayudan a encontrar exactamente lo que busco.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "José Martínez",
    role: "Propietario",
    content: "Precios justos y entrega rápida. Recomiendo esta ferretería a todos mis conocidos.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
];

export const orders = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    customer: 'Juan Pérez',
    email: 'juan@email.com',
    phone: '+1 234 567 8901',
    total: 156.48,
    status: 'pending',
    deliveryType: 'delivery',
    address: 'Calle 123, Ciudad',
    items: [
      { id: 1, name: 'Taladro Inalámbrico 18V', quantity: 1, price: 89.99 },
      { id: 2, name: 'Martillo de Carpintero 16oz', quantity: 2, price: 24.99 }
    ]
  },
  {
    id: 'ORD-002',
    date: '2024-01-14',
    customer: 'Ana García',
    email: 'ana@email.com',
    phone: '+1 234 567 8902',
    total: 78.50,
    status: 'completed',
    deliveryType: 'pickup',
    items: [
      { id: 4, name: 'Cable Eléctrico 12 AWG x 100m', quantity: 1, price: 78.50 }
    ]
  }
];
