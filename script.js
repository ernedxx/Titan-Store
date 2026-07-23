// En cada producto puedes usar:
//  - shortDescription: texto breve para mostrar en el catálogo
//  - description: texto completo para mostrar solo en el modal de detalles
const products = [
  {
    id: 3,
    name: 'PikaBike Z6',
    shortDescription: 'Es una bicicleta eléctrica plegable compacta, que combina portabilidad con potencia.',
    description: 'Potencia: 1200W de rendimiento máximo, Velocidad máxima: 4.23Km/h (25mph), Alcanece: 35.41 - 64.37 Km por carga, Batería de 15Ah de alto rendimiento, Diseño: Ultra plegable, Neumáticos de 14 pulgadas de alta calidad, Sistema de freno de Disco trasero.',
    price: 650,
    weight: 60,
    image: 'img/pikabikez6uno.jpg',
    images: [
      'img/pikabikez6uno.jpg',
      'img/pikabikez6dos.jpg',
    ]
  },
  {
    id: 4,
    name: 'Equipo de música LG',
    shortDescription: 'Sistema de Audio diseñado para ofrecer potencia y claridad en la reproducción musical.',
    description: 'Sonido de Alta Potencia, Conectividad Bluetooth, Acceso a puertos USB, Radio FM.',
    price: 180,
    weight: 50,
    image: 'img/equipodesonido.png'
  },
  {
    id: 5,
    name: 'Estufa de Infrarrojo SACO',
    shortDescription: 'Electrodoméstico compacto y económico.',
    description: 'Tecnología infraroja para un calentamiento rápido y eficiente, compatibilidad universal: Funciona con todo tipo de utensilios de cocina (acero, hierro, cerámica). Alta Potencia: súper-potente de 2200W para cocinar rápido. Control táctil inteligente: Panel digital intuitivo con multiples funciones de cocción.',
    price: 31,
    weight: 60,
    image: 'img/infrarojouno.png',
    images: [
      'img/infrarojouno.png',
      'img/infrarojodos.jpg',
    ]
  },
  {
    id: 6,
    name: 'Lavadora Automatica LG 9Kg',
    shortDescription: 'Modelo de carga frontal con tecnología "AI Direct Drive".',
    description: 'Capacidad: 9kg, ideal para familias medianas. Velocidad de Centrifugado: hasta 1400 rpm, reduce el tiempo de secado. AI Direct Drive: detecta el tipo de tegido y ajusta el lavado para proteger la ropa. TUrboWash360: ciclo rápido de 39 minutos con media carga, ahorrando hasta un 29% de electricidad. Vapor Steam: Elimina el 99,9% de las bacterias y virus. Conectividad WiFi: control remoto mediante la app LGThinQ compatible con asistentes de voz. Dimensiones: aprox. 600 x 850 x 565 mm, diseño compacto.',
    price: 330,
    weight: 120,
    image: 'img/lavadora9kguno.jpg',
    images: [
      'img/lavadora9kguno.jpg',
      'img/lavadora9kgdos.jpg',
    ]
  },
  {
    id: 7,
    name: 'Lavadora 7kg EKO',
    shortDescription: 'Destaca por su sistema de secado rápido con Air Turbo.',
    description: 'Sistema Air Turbo para secado eficiente, Doble Tina (lavado y centrifugado simultáneo) Diseño compacto y ahorrador de espacio.',
    price: 150,
    weight: 125,
    image: 'img/lavadoraairuno.jpg',
    images: [
      'img/lavadoraairuno.jpg',
      'img/lavadoraairdos.jpg',
    ]
  },
  {
    id: 10,
    name: 'Lavadora y secadora a vapor de 11 kg',
    shortDescription: 'Electrodoméstico de gran capacidad que combina lavado profundo, secado eficiente y tecnoloogía de vapor.',
    description: 'Tecnología a Vapor: función avanzada que desinfecta las prendas a profundidad y alisa las arrugas, facilitando el planchado posterior. Capacidad de 11 kg: Volumen óptimo en formato de carga frontal, ideal para cubrir perfectamente las necesidades de familias grandes y cargas pesadas. Ahorro Energético: Sistema diseñado para ofrecer una mayor eficiencia operativa con un menor consumo de electricidad y agua.',
    price: 620,
    weight: 130,
    image: 'img/lavsecadorauno.jpg',
    images: [
      'img/lavsecadorauno.jpg',
      'img/lavsecadorados.png',
    ]
  },
  {
    id: 12,
    name: 'Motosierra SACO',
    shortDescription: 'Herramienta de Corte Potente y práctica, diseñada para trabajos de jardinería y tala lijera.',
    description: 'Potencia máxima: 2200W. Motor de alto rendimiento. Cadena de alta resistencia. Eficiencia de combustible optimizada. Mango ergonómico y seguro. Diseño robusto y duradero.',
    price: 150,
    weight: 30,
    image: 'img/motosierrauno.jpg',
    images: [
      'img/motosierrauno.jpg',
      'img/motosierrados.jpg',
      'img/motosierratres.jpg',
      'img/motosierracuatro.jpg',
    ]
  },
  {
    id: 13,
    name: 'Nevera Milexus de 7 pies',
    shortDescription: 'Ofrece buena capacidad de almacenamiento y eficiencia energética.',
    description: 'Sistema de enfriamiento: cuenta con tecnología Powerful Cooling y Fast Cooling para un enfriamiento rápido. Diseño: Arcón congelador chest freezer de tapa abatible. Eficiencia: Etiquetado con clasificación energética, lo que indica un compromiso con el ahorro de energía.',
    price: 270,
    weight: 180,
    image: 'img/neveramilexusg.png'
  },
  {
    id: 16,
    name: 'Lavadora automática Saco EasyLife',
    shortDescription: 'Modelo práctico, pensado para facilitar el lavado diario con buena capacidad.',
    description: 'Totalmente automática (Carga superior, lava, enjuaga y centrifuga). Gran Capacidad de 9kg. Panel de Control digital intuitivo con múltiples programas. Diseño: Comfort and Care para el cuidado de las telas.',
    price: 280,
    weight: 200,
    image: 'img/sacoeasylifeuno.jpg',
    images: [
      'img/sacoeasylifeuno.jpg',
      'img/sacoeasylifedos.jpg',
    ]
  },
  {
    id: 18,
    name: 'Smart TV 40 pulgadas JVC',
    shortDescription: 'Es un televisor moderno que combina buena calidad de imagen Full HD con funciones inteligentes.',
    description: 'Calidad Visual: Resolución Full HD 1080p para una visualización nítida, Funciones Inteligentes: Compatible con sistemas operativos como Roku o Android TV, Audio Inmersivo: Cuenta con tecnología de sonido Dolby Digital+, Conectividad Versátil: Dispone de múltiples entradas, incluyendo 3 puertos USB para diversos dispositivos.',
    price: 240,
    weight: 50,
    image: 'img/tvjvc40uno.png',
    images: [
      'img/tvjvc40uno.png',
      'img/tvjvc40dos.jpg',
    ]
  },
  {
    id: 19,
    name: 'Smart TV HOMESTAR de 55 pulgadas',
    shortDescription: 'Moderno y funcional, diseñado para ofrecer gran calidad de imagen y acceso a contenidos digitales en un formato elegante.',
    description: 'Incluye soporte de pared y 2 controles remotos. UHD, HDMI, USB, WIFI, ANDROID TV.',
    price: 410,
    weight: 60,
    image: 'img/homestartv.jpg'
  },
  {
    id: 20,
    name: 'Andes600 Pro',
    shortDescription: 'estación de energía portátil de alta eficiencia y durabilidad.',
    description: '600W. 1h Carga rápida en 1h. Soporte para -20 grados. Cuenta con Modo silencioso.',
    price: 420,
    weight: 60,
    image: 'img/andes600prouno.jpg',
    images: [
      'img/andes600prouno.jpg',
      'img/andes600prodos.jpg',
      'img/andes600prounotres.jpg'
    ]
  },
  {
    id: 21,
    name: 'Motorina Eléctrica N3',
    shortDescription: '.',
    description: '.',
    price: 420,
    weight: 60,
    image: 'img/motorinan3uno.jpg',
    images: [
      'img/motorinan3uno.jpg',
      'img/motorinan3dos.jpg',
      'img/motorinan3tres.jpg',
      'img/motorinan3cuatro.jpg',
      'img/motorinan3cinco.jpg'
    ]
  },
  {
    id: 22,
    name: 'Cafetera Marwa',
    shortDescription: 'La Cafetera Marwa ofrece una exeriencia de café más rápida, práctica y deliciosa.',
    description: 'Diseño Compacto que ahorra espacio sin sacrificar capacidad. Sistema de calentamiento rápido para disfrutar tu café en minutos. Materiales Resistentes que garantizan durabilidad y fácil limpieza.',
    price: 26,
    weight: 2,
    image: 'img/cafeteramarwauno.jpg',
    images: [
      'img/cafeteramarwauno.jpg',
      'img/cafeteramarwados.jpg',
    ]
  },
  {
    id: 25,
    name: 'TV Vision de 32 pulgadas Vision',
    shortDescription: 'Pensado para ofrecer buena calidad de imagen y funciones inteligentes en un tamaño práctico.',
    description: 'Diseño sin marcos: Pantalla más inmersiva. Resolución HD: imagenes nítidas. Tecnología LED: Colores vibrantes, ahorro de energía. Plataforma Smart TV: tus Apps favoritas en un solo lugar.',
    price: 185,
    weight: 58,
    image: 'img/tvsmarttech.png'
  },
  {
    id: 27,
    name: 'Caroma P7',
    shortDescription: 'Compacta y Potente, diseñada para ofrecer movilidad práctica en la ciudad.',
    description: 'Motor: Potencia de 750W. Autonomía: 48km, batería de litio de 48V. Llantas: 14 pulgadas. Velocidad Máxima: 40 km/h. Tiempo de Carga 5 horas.',
    price: 580,
    weight: 38,
    image: 'img/caromap.png'
  },
  {
    id: 28,
    name: 'Split Milexus 1 Tonelada 220V',
    shortDescription: 'Diseñado para enfriar espacios con bajo consumo eléctrico y un estilo moderno.',
    description: '1 T 220V Con Soporte para la pared incluido.',
    price: 290,
    weight: 54,
    image: 'img/splitmilexus.png'
  },
  {
    id: 29,
    name: 'Smart TV Vision 43 pulgadas',
    shortDescription: 'Moderno y elegante, diseñado para ofrecer gran calidad de imagen en un formato amplio.',
    description: '4K Ultra HD, Conectividad Completa (HDMIx3). Cajita Digital Interna Incluida. Control remoto avanzado incluido.',
    price: 280,
    weight: 42,
    image: 'img/tv55visionuno.png',
    images: [
      'img/tv55visionuno.png',
      'img/',
    ]
  },
  {
    id: 30,
    name: 'TV JVC 58 pulgadas ED GOOGLE',
    shortDescription: 'Televisor Inteligente de Gran Tamaño, diseñado para ofrecer excelente calidad de imagen.',
    description: '4K Ultra HD. Google TV Smart Experience. JVC OLED Panel Technology. Premium App (Netflix, You Tube, Max). JVC Bluetooth Audio. Hey Google Built-In. Conectividad HDMI.',
    price: 460,
    weight: 42,
    image: 'img/tvjvcguno.png',
    images: [
      'img/tvjvcguno.png',
      'img/tvjvcgdos.jpg',
    ]
  },
  {
    id: 32,
    name: 'Lavadora de 7kg Milexus',
    shortDescription: 'Ideal para hogares pequeños o medianos que buscan practicidad y buen rendimiento.',
    description: 'Diseñada para optimizar los tiempos de lavado en el Hogar, permitiendo procesar más ropa en menos ciclos. Sistema de dos tinas independientes: permite realizar las funciones de lavado y centrifugado de manera simultánea, maximizando la eficiencia y comodidad.',
    price: 160,
    weight: 125,
    image: 'img/lavadora7kgmilexuno.jpg',
    images: [
      'img/lavadora7kgmilexuno.jpg',
      'img/lavadora7kgmilexdos.jpg',
    ]
  },
  {
    id: 33,
    name: 'Olla a presión SACO',
    shortDescription: 'Utensilio de cocina resistente y funcional, diseñado para cocinar alimentos de manera rápida.',
    description: 'Dispositivo de límite de presión: control de seguridad avanzado. Diseño energéticamente eficiente: ahorra energía en cada comida. Gran capacidad de 7 litros: ideal para comidas familiares completas. Seguridad de tapa ON-OFF: Sistema de equilibrio de resorte antiespaldado.',
    price: 45,
    weight: 42,
    image: 'img/ollapresionsacouno.jpg',
    images: [
      'img/ollapresionsacouno.jpg',
      'img/ollapresionsacodos.jpg',
    ]
  },
  {
    id: 34,
    name: 'Refrigerador Milexus de 6.5 pies',
    shortDescription: 'Diseñado para conservar alimentos con eficiencia y estilo moderno.',
    description: 'Control Dual de Temperatura: Ajustes independientes para refrigerador y congelador. Almacenamiento Espacioso: Estantes ajustables y cajones para frutas y verduras. Eficiencia Energética: bajo consumo certificado. Manijas Integradas: Diseño Moderno y limpio.',
    price: 300,
    weight: 170,
    image: 'img/refrimilex6.5uno.png',
    images: [
      'img/refrimilex6.5uno.png',
      'img/refrimilex6.5dos.jpg',
    ]
  },
  {
    id: 35,
    name: 'Refrigerador Royal de 15 pies',
    shortDescription: 'Espacioso y Elegante, diseñado para conservar gran cantidad de alimentos con eficiencia y estilo moderno.',
    description: 'Un tamaño familiar, espacioso y versátil. Dispensador de agua integrado: Cuenta con un tanque interno en la contrapuerta con boquilla exterior de fácil acceso. Permite servir agua fría al instante sin necesidad de abrir el refrigerador, lo que ahorra energía.',
    price: 600,
    weight: 200,
    image: 'img/refrigeradorroyal15uno.jpg',
    images: [
      'img/refrigeradorroyal15uno.jpg',
      'img/refrigeradorroyal15dos.jpg',
    ]
  },
  {
    id: 36,
    name: 'Nevera Milexus de 6 pies',
    shortDescription: 'Ideal para conservar alimentos en hogares pequeños o espacios reducidos.',
    description: 'Es un congelador tipo Arcón (chest Freezer) con capacidad de conversión para refrigeración. Clasificación Energética (A). Dualidad: ofrece función de refrigerador y congelador. Compresor: equipado con un compresor potente. Enfriamiento: cuenta con tecnología de congelamiento rápido (Fast Freezing). Diseñado para el ahorro de energía.',
    price: 230,
    weight: 190,
    image: 'img/nevmilexus.png'
  },
  {
    id: 37,
    name: 'Colchón Milexus',
    shortDescription: 'Diseñado para brindar comodidad y soporte, ideal para un descanso reparador.',
    description: '160cm x 190 cm. Tecnología de comfort: muelles ensacados y esponja de alta densidad.',
    price: 200,
    weight: 100,
    image: 'img/colchonmilexus.png'
  },
  {
    id: 38,
    name: 'Colchón Valdatronik',
    shortDescription: 'Ideal para un descanso reparador con materiales resistentes y duraderos.',
    description: 'Zonas de descanso ergonómicas, soporte punto por punto. Capa de memory foam premium adaptabilidad y alivio de presión.',
    price: 170,
    weight: 80,
    image: 'img/colchonvaldatronik.jpg'
  },
  {
    id: 39,
    name: 'Split EKO',
    shortDescription: 'Diseñado para brindar un enfriamiento rápido y estable en espacios medianos.',
    description: 'Enfriamiento Potente y Eficiente. Bajo nivel de ruido. Ahorro de energía. Filtro de Aire lavable. Con soportes a la pared y regulador de voltaje.',
    price: 290,
    weight: 300,
    image: 'img/spliteko.png'
  },
  {
    id: 45,
    name: 'Multi-Olla G-STELECTRIC',
    shortDescription: 'Combina varias funciones cocción en un solo aparato.',
    description: 'Capacidad de Cocción a presión para resultados rápidos. Temporizador analógico versátil con guías de alimentos. Función: cálido para mantener la comida caliente. Olla interior antiadherente de fácil limpieza.',
    price: 45,
    weight: 10,
    image: 'img/olla.png',
    images: [
      'img/olla.png',
      'img/ollados.jpg',
    ]
  },
  {
    id: 46,
    name: 'Nevera Milexus de 16 pies',
    shortDescription: 'Espacioso y eficiente , ideal para familias medianas o grandes.',
    description: 'Capacidad Masiva. Congelado rápido. Doble Tapa Práctica. Refrigerante R600a.',
    price: 700,
    weight: 200,
    image: 'img/nevmilex16p.png'
  },
  {
    id: 47,
    name: 'Olla SACO',
    shortDescription: 'Herramienta esencial para quienes buscan preparar alimentos de manera más eficiente.',
    description: 'Cuerpo de acero resistente que garantiza durabilidad y distribución uniforme del calor. Válvula reguladora de presión para controlar el vapor de forma eficiente. La olla saco es perfeta para hogares que buscan rapidez sin perder calidad.',
    price: 25,
    weight: 20,
    image: 'img/ollasacouno.jpg',
    images: [
      'img/ollasacouno.jpg',
      'img/ollasacodos.jpg',
    ]
  },
  {
    id: 48,
    name: 'Microwave Milexus',
    shortDescription: '',
    description: '',
    price: 43,
    weight: 42,
    image: 'img/microwaveuno.jpg',
    images: [
      'img/microwaveuno.jpg',
      'img/microwavedos.jpg',
    ]
  },
  {
    id: 49,
    name: 'Lavadora 15Kg automática Samsung',
    shortDescription: 'Ideal para respaldo en el hogar, camping y uso fuera de la red.',
    description: 'Capacidad para cargas grandes: Diseñada con un espacio óptimo, ideal para familias, permitiendo lavar',
    price: 510,
    weight: 200,
    image: 'img/lavadora15kguno.jpg',
    images: [
      'img/lavadora15kguno.jpg',
      'img/lavadora15kgdos.jpg',
    ]
  },
  {
    id: 50,
    name: 'Freidora de aire EKO',
    shortDescription: 'Diseñada para quienes buscan preparar comidas deliciosas con menos grasa y más eficiencia.',
    description: 'Tecnología de aire rápido: que reduce hasta un 85% el uso de aceite. Control digital intuitivo: con programaspreestablecidos para papas, pollo, vegetales y más.,',
    price: 70,
    weight: 3,
    image: 'img/freidoradeaireuno.jpg',
    images: [
      'img/freidoradeaireuno.jpg',
      'img/freidoradeairedos.jpg',
    ]
  },
];

// Mapeo de URLs de detalles para cada producto
const productDetailsUrls = {
  1: 'https://ernedxprogramer.github.io/bryderknewedition/',
  2: 'https://ernedxprogramer.github.io/bicicletabluvall/',
  3: 'https://ernedxprogramer.github.io/pikabike/',
  4: 'https://ernedxprogramer.github.io/ouxi/',
  5: 'https://ernedxprogramer.github.io/riverpro/',
  6: 'https://ernedxprogramer.github.io/equipodemusica/',
  7: 'https://ernedxprogramer.github.io/estufadeinfrarojo/',
  8: 'https://ernedxprogramer.github.io/freidorajmd/',
  9: 'https://ernedxprogramer.github.io/freidoradeairejvc/',
  10: 'https://ernedxprogramer.github.io/lavadoraautomatica9klg/',
  11: 'https://ernedxprogramer.github.io/lavadora7kgeko/',
  12: 'https://ernedxprogramer.github.io/lavadoradobletina/',
  13: 'https://ernedxprogramer.github.io/lavadoraysecadoraavapor/',
  14: 'https://ernedxprogramer.github.io/licuadoraeko/',
  15: 'https://ernedxprogramer.github.io/motosierrasako/',
  16: 'https://ernedxprogramer.github.io/neveramilexus7pies/',
  17: 'https://ernedxprogramer.github.io/cajitahdatec/',
  18: 'https://ernedxprogramer.github.io/refrigerador13pies/',
  19: 'https://ernedxprogramer.github.io/lavadorasacoeasylife/',
  20: 'https://ernedxprogramer.github.io/smarttv55vision/',
  21: 'https://ernedxprogramer.github.io/fresastrawberry/',
  22: 'https://ernedxprogramer.github.io/smarttv40jvc/',
  23: 'https://ernedxprogramer.github.io/smarttvlg65/',
  24: 'https://ernedxprogramer.github.io/smarttvsamsung55/',
  25: 'https://ernedxprogramer.github.io/smarttvvisiontechnology43/',
  26: 'https://ernedxprogramer.github.io/ventiladorrecargapie/',
  27: 'https://ernedxprogramer.github.io/caromap7/',
  28: 'https://ernedxprogramer.github.io/splitmilexus1t220v/',
  29: 'https://ernedxprogramer.github.io/smarttvvision55/',
  30: 'https://ernedxprogramer.github.io/tvjvc58edgoogle/',
  31: 'https://ernedxprogramer.github.io/turbina/',
  32: 'https://ernedxprogramer.github.io/lavadora7kgmilexus/',
  33: 'https://ernedxprogramer.github.io/ollaapresionsaco/',
  34: 'https://ernedxprogramer.github.io/refrigeradormilexus6.5pies/',
  35: 'https://ernedxprogramer.github.io/refrigeradorroyaldispen15pies/',
  36: 'https://ernedxprogramer.github.io/neveramilexus6pies/',
  37: 'https://ernedxprogramer.github.io/colchonmilexus/',
  38: 'https://ernedxprogramer.github.io/colchonvaldatronik/',
  39: 'https://ernedxprogramer.github.io/spliteko/',
  40: 'https://ernedxprogramer.github.io/bicicletaunuzuki/',
  41: 'https://ernedxprogramer.github.io/mangopowerunion/',
  42: 'https://ernedxprogramer.github.io/refrigerador16milexus/',
  43: 'https://ernedxprogramer.github.io/ampaceandes1500/',
  44: 'https://ernedxprogramer.github.io/olla1.8ltsaco/',
  45: 'https://ernedxprogramer.github.io/multiollagstelectric/',
  46: 'https://ernedxprogramer.github.io/neveramilexus16pies/',
};

// Small utilities and caches to improve performance
function debounce(fn, wait = 200) {
  let t = null;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Map products by id for O(1) lookup instead of repeated .find
const productMap = new Map((products || []).map(p => [p.id, p]));

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const cartCount = document.getElementById('cartCount');
const cartItemsContainer = document.getElementById('cartItems') || document.getElementById('topCartItems');
const cartTotalElement = document.getElementById('cartTotal') || document.getElementById('topCartTotal');
const cartDiscountElement = document.getElementById('cartDiscount') || document.getElementById('topCartDiscount');
const cartButton = document.getElementById('cartButton');
const topCartPanel = document.getElementById('topCartPanel');
const topCartItems = document.getElementById('topCartItems');
const topCartTotal = document.getElementById('topCartTotal');
const closeCartPanel = document.getElementById('closeCartPanel');
const buyModal = document.getElementById('buyModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const buyForm = document.getElementById('buyForm');
const openOrderTab = document.getElementById('openOrderTab');
const productDetailModal = document.getElementById('productDetailModal');
const closeProductDetailBtn = document.getElementById('closeProductDetailBtn');
const productDetailContent = document.getElementById('productDetailContent');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const loginModal = document.getElementById('loginModal');
const closeLoginModalBtn = document.getElementById('closeLoginModalBtn');
const loginForm = document.getElementById('loginForm');
const discountNotice = document.getElementById('discountNotice');
const discountAmountLine = document.getElementById('discountAmountLine');
const loginStatus = document.getElementById('loginStatus');
const WHATSAPP_NUMBER = '5350396095';
const DISCOUNT_RATE = 0.03;
const LOGIN_STORAGE_KEY = 'titanStoreUser';
let currentUser = null;

const distanceLine = document.getElementById('distanceLine');
const distanceCostLine = document.getElementById('distanceCostLine');
const distanceNote = document.getElementById('distanceNote');

let cart = [];
let detailImageState = { images: [], index: 0 };

// ======================
// Distancia + tarifa Express
// ======================
const LAS_TUNAS_COORDS = { lat: 20.965114305088818, lon: -76.9482580073434 };
const DISTANCE_COST_PER_KM = 5;
const DISTANCE_ROAD_MULTIPLIER = 1.3;

window.__distanceEstimateForExpress = null;

function setDistanceUI(state) {
  if (!distanceLine || !distanceCostLine || !distanceNote) return;

  if (state.status === 'loading') {
    distanceLine.textContent = 'Distancia estimada: Calculando...';
    distanceCostLine.textContent = 'Costo estimado (5 USD/km): Calculando...';
    distanceNote.textContent = 'Esperando respuesta del geocodificador...';
    return;
  }

  if (state.status === 'error') {
    distanceLine.textContent = 'Distancia estimada: —';
    distanceCostLine.textContent = 'Costo estimado (10 USD/km): —';
    distanceNote.textContent = 'No se pudo calcular con esa dirección. Intenta con ciudad/municipio y calle.';
    window.__distanceEstimateForExpress = null;
    return;
  }

  if (state.status === 'ok') {
    const distKm = state.distanceKm;
    const cost = state.cost;
    distanceLine.textContent = `Distancia estimada: ${distKm.toFixed(2)} km`;
    distanceCostLine.textContent = `Costo estimado (5 USD/km): $${cost.toFixed(2)}`;
    distanceNote.textContent = 'Se aplica cuando elijas Express.';
    window.__distanceEstimateForExpress = { distanceKm: distKm, cost: cost };
  }
}

async function geocodeNominatim(query, signal) {
  const q = (query || '').trim();
  if (!q) return null;

  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&addressdetails=0&q=${encodeURIComponent(q)}`;
  const res = await fetch(url, {
    headers: {
      'Accept-Language': 'es',
    },
    signal
  });

  if (!res.ok) return null;
  const data = await res.json();
  if (!Array.isArray(data) || data.length === 0) return null;

  const item = data[0];
  const lat = Number(item.lat);
  const lon = Number(item.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  return { lat, lon };
}

function haversineDistanceKm(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

async function estimateDistanceAndCostFromAddress(address) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const dest = await geocodeNominatim(address, controller.signal);
    if (!dest) return null;

    const directKm = haversineDistanceKm(LAS_TUNAS_COORDS.lat, LAS_TUNAS_COORDS.lon, dest.lat, dest.lon);
    const roadKm = Math.max(0, directKm * DISTANCE_ROAD_MULTIPLIER);
    const cost = roadKm * DISTANCE_COST_PER_KM;

    return { distanceKm: roadKm, cost };
  } finally {
    clearTimeout(timeout);
  }
}

let addressDebounceTimer = null;
function bindDistanceEstimator() {
  if (!buyForm) return;
  const addressTextarea = buyForm.querySelector('textarea[name="direccion"]');
  if (!addressTextarea) return;

  addressTextarea.addEventListener('input', () => {
    clearTimeout(addressDebounceTimer);

    const value = addressTextarea.value;
    if (!value || value.trim().length < 6) {
      setDistanceUI({ status: 'error' });
      return;
    }

    setDistanceUI({ status: 'loading' });

    addressDebounceTimer = setTimeout(async () => {
      try {
        const estimate = await estimateDistanceAndCostFromAddress(value);
        if (!estimate) {
          setDistanceUI({ status: 'error' });
          return;
        }
        setDistanceUI({ status: 'ok', distanceKm: estimate.distanceKm, cost: estimate.cost });
      } catch (e) {
        setDistanceUI({ status: 'error' });
      }
    }, 700);
  });
}

// ======================
// Modal + Carrito
// ======================

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (productDetailModal?.classList.contains('is-open')) {
      closeProductDetailModal();
    } else {
      closeModal();
    }
  }
});

function updateProductDetailImage() {
  const imageElement = productDetailContent.querySelector('.product-detail-image');
  const positionElement = productDetailContent.querySelector('.image-position');
  if (!imageElement) return;
  imageElement.src = detailImageState.images[detailImageState.index] || imageElement.dataset.originalSrc || imageElement.src;
  if (positionElement) positionElement.textContent = `${detailImageState.index + 1}/${detailImageState.images.length}`;
}

function openModal() {
  if (!buyModal) return;
  buyModal.classList.add('is-open');
  buyModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  updateDiscountUI();
}

function closeModal() {
  if (!buyModal) return;
  buyModal.classList.remove('is-open');
  buyModal.setAttribute('aria-hidden', 'true');
  if (!productDetailModal?.classList.contains('is-open')) document.body.classList.remove('modal-open');
}

function openProductDetailModal(product) {
  if (!productDetailModal || !productDetailContent) return;

  const description = product.description?.trim() ? product.description.trim() : '';
  detailImageState.images = Array.isArray(product.images) && product.images.length > 0 ? product.images : [product.image].filter(Boolean);
  detailImageState.index = 0;
  const currentImage = detailImageState.images[0] || product.image || '';

  productDetailContent.innerHTML = `
    <div class="product-detail-media">
      <div class="product-detail-image-wrapper">
        <img class="product-detail-image" src="${currentImage}" alt="${product.name}" data-original-src="${currentImage}" />
        ${detailImageState.images.length > 1 ? `
          <button type="button" class="image-nav-button image-nav-button--prev" aria-label="Imagen anterior">‹</button>
          <button type="button" class="image-nav-button image-nav-button--next" aria-label="Siguiente imagen">›</button>
          <span class="image-position">1/${detailImageState.images.length}</span>
        ` : ''}
      </div>
    </div>
    <div class="product-detail-info">
      <p class="product-detail-category">Producto destacado</p>
      <h2 id="productDetailTitle">${product.name}</h2>
      <p class="product-detail-description">${description}</p>
      <div class="product-detail-price-row">
        <span class="product-detail-price">${formatCurrency(product.price)}</span>
        <button class="button product-detail-buy-button" type="button" data-id="${product.id}">Comprar</button>
      </div>
    </div>
  `;

  productDetailModal.classList.add('is-open');
  productDetailModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  const detailBuyButton = productDetailContent.querySelector('.product-detail-buy-button');
  detailBuyButton?.addEventListener('click', () => {
    addToCart(product.id);
    closeProductDetailModal();
    openModal();
  });

  const prevButton = productDetailContent.querySelector('.image-nav-button--prev');
  const nextButton = productDetailContent.querySelector('.image-nav-button--next');

  prevButton?.addEventListener('click', (event) => {
    event.stopPropagation();
    detailImageState.index = (detailImageState.index - 1 + detailImageState.images.length) % detailImageState.images.length;
    updateProductDetailImage();
  });

  nextButton?.addEventListener('click', (event) => {
    event.stopPropagation();
    detailImageState.index = (detailImageState.index + 1) % detailImageState.images.length;
    updateProductDetailImage();
  });
}

function closeProductDetailModal() {
  if (!productDetailModal) return;
  productDetailModal.classList.remove('is-open');
  productDetailModal.setAttribute('aria-hidden', 'true');
  if (!buyModal?.classList.contains('is-open')) document.body.classList.remove('modal-open');
}

function getShippingCost(type, weight) {
  type = type?.toString().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
  if (type === 'maritimo' || type === 'marítimo') return weight * 1.99;
  if (type === 'aereo' || type === 'aéreo') return weight * 2.99;
  if (type === 'express') return 0;
  return 0;
}

// ======================
// Tarifa fija para Express por municipio (según texto en Dirección)
// ======================
const MUNICIPIOS_TARIFA_EXPRESS = {
  'Omaja': 10,
  'Vasquez': 10,
  'Maniabon': 15,
  'Calixto': 5,
  'Vivienda': 10,
  'Baltre': 10,
  'Jobabo': 20,
  'Chaparra': 30,
  'Delicias': 25,
  'Puerto Padre': 25,
  'Buenaventura': 20,
  'Guáimaro': 25,
  'Las Tunas': 5,
};

function normalizeTextForMatch(input) {
  return (input || '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function findMunicipioTarifaInAddress(address) {
  const text = normalizeTextForMatch(address);
  if (!text) return null;

  // Busca por “contiene” para cubrir variaciones en el texto.
  for (const [key, tariff] of Object.entries(MUNICIPIOS_TARIFA_EXPRESS)) {
    const k = normalizeTextForMatch(key);
    if (!k) continue;

    // Para evitar falsos negativos por espacios, puntuación o tildes raras,
    // usamos búsqueda “normalizada” incluyendo variantes con espacio.
    if (text.includes(k) || text.replace(/\s+/g, ' ').includes(k.replace(/\s+/g, ' '))) {
      return { municipio: key, tarifa: Number(tariff) };
    }
  }
  return null;
}

function updateMunicipioTarifaLine(address) {
  const municipioTarifaLine = document.getElementById('municipioTarifaLine');
  if (!municipioTarifaLine) return;

  const match = findMunicipioTarifaInAddress(address);
  if (match) {
    municipioTarifaLine.textContent = `Precio único por municipio: $${match.tarifa.toFixed(2)} (${match.municipio})`;
  } else {
    municipioTarifaLine.textContent = 'Precio del envío (según municipio): —';
  }
}

function bindMunicipioTarifaWatcher() {
  if (!buyForm) return;
  const addressTextarea = buyForm.querySelector('textarea[name="direccion"]');
  if (!addressTextarea) return;

  addressTextarea.addEventListener('input', () => {
    updateMunicipioTarifaLine(addressTextarea.value);
  });
}

function loadCurrentUser() {
  try {
    const raw = localStorage.getItem(LOGIN_STORAGE_KEY);
    if (!raw) return null;
    const user = JSON.parse(raw);
    return user && user.nombre ? user : null;
  } catch (error) {
    return null;
  }
}

function saveCurrentUser(user) {
  if (!user) return;
  localStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify(user));
}

function clearCurrentUser() {
  currentUser = null;
  localStorage.removeItem(LOGIN_STORAGE_KEY);
  updateLoginUI();
}

function updateLoginUI() {
  if (!loginStatus || !loginButton || !logoutButton) return;
  if (currentUser) {
    loginStatus.textContent = `Bienvenido, ${currentUser.nombre}`;
    loginButton.classList.add('hidden');
    logoutButton.classList.remove('hidden');
    if (discountNotice) discountNotice.textContent = `¡Hola ${currentUser.nombre}! Tienes 3% de descuento en el primer producto del carrito.`;
  } else {
    loginStatus.textContent = 'Invitado';
    loginButton.classList.remove('hidden');
    logoutButton.classList.add('hidden');
    if (discountNotice) discountNotice.textContent = 'Inicia sesión y recibe 3% de descuento en el primer producto del carrito.';
  }
  if (discountAmountLine) discountAmountLine.textContent = '';
}

function getDiscountForSubtotal(subtotal) {
  if (!currentUser || cart.length === 0) return 0;

  const firstItem = cart[0];
  const firstProduct = productMap.get(firstItem.id) || products.find(p => p.id === firstItem.id);
  if (!firstProduct) return 0;

  // Aplicar 3% sobre una unidad del primer producto del carrito
  return (firstProduct.price || 0) * DISCOUNT_RATE;
}

function updateDiscountUI() {
  if (!discountAmountLine || !buyForm) return;
  const discountValue = getDiscountForSubtotal(0);
  discountAmountLine.textContent = discountValue > 0 ? `Descuento 3% aplicado a un producto: -${formatCurrency(discountValue)}` : '';
}

function openLoginModal() {
  if (!loginModal) return;
  loginModal.classList.add('is-open');
  loginModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeLoginModal() {
  if (!loginModal) return;
  loginModal.classList.remove('is-open');
  loginModal.setAttribute('aria-hidden', 'true');
  if (!buyModal?.classList.contains('is-open') && !productDetailModal?.classList.contains('is-open')) {
    document.body.classList.remove('modal-open');
  }
}

function handleLoginSubmit(event) {
  event.preventDefault();
  if (!loginForm) return;
  const formData = new FormData(loginForm);
  const nombreUsuario = formData.get('nombreUsuario')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  if (!nombreUsuario || !email) {
    alert('Completa tu nombre y correo electrónico para iniciar sesión.');
    return;
  }

  currentUser = { nombre: nombreUsuario, email };
  saveCurrentUser(currentUser);
  updateLoginUI();

  const orderMessage = `Nuevo inicio de sesión en Titan Store:\nNombre: ${nombreUsuario}\nCorreo: ${email}\nFecha: ${new Date().toLocaleString('es-ES')}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderMessage)}`;
  window.open(whatsappUrl, '_blank');

  closeLoginModal();
  loginForm.reset();
}

function getServiceMultiplier(type) {
  type = type?.toString().toLowerCase();
  return 1;
}

function handleOpenOrderTab() {
  if (cart.length === 0) {
    alert('Agrega productos al carrito antes de hacer el pedido.');
    return;
  }
  openModal();
}

function handleCartOrder(event) {
  event.preventDefault();
  if (cart.length === 0) {
    alert('Agrega productos al carrito antes de hacer el pedido.');
    return;
  }

  const formData = new FormData(buyForm);
  const name = formData.get('nombre')?.toString().trim();
  const phone = formData.get('telefono')?.toString().trim();
  const address = formData.get('direccion')?.toString().trim();
  const reference = formData.get('referencia')?.toString().trim();
  const shippingType = formData.get('envio')?.toString().trim() || 'Marítimo';

  if (!name || !phone || !address || !reference) {
    alert('Completa todos los datos del pedido antes de enviar.');
    return;
  }

  const subtotal = cart.reduce((sum, item) => {
    const product = productMap.get(item.id) || products.find(p => p.id === item.id);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  const discountValue = getDiscountForSubtotal(subtotal);
  const subtotalAfterDiscount = subtotal - discountValue;

  const totalWeight = cart.reduce((sum, item) => {
    const product = productMap.get(item.id) || products.find(p => p.id === item.id);
    return sum + (product?.weight || 0) * item.quantity;
  }, 0);

  const shippingCost = getShippingCost(shippingType.toLowerCase(), totalWeight);

  // Express: tarifa fija SOLO por municipio (NO usar cálculo por distancia)
  let expressMunicipioTarifa = null;
  if (shippingType.toLowerCase() === 'express') {
    expressMunicipioTarifa = findMunicipioTarifaInAddress(address);
  }

  const municipioTarifaLine = document.getElementById('municipioTarifaLine');
  if (municipioTarifaLine) {
    if (shippingType.toLowerCase() === 'express' && expressMunicipioTarifa) {
      municipioTarifaLine.textContent = `Precio del envío (según municipio): $${expressMunicipioTarifa.tarifa.toFixed(2)}`;
    } else if (shippingType.toLowerCase() === 'express') {
      municipioTarifaLine.textContent = 'Precio del envío (según municipio): —';
    } else {
      municipioTarifaLine.textContent = 'Precio del envío (según municipio): —';
    }
  }

  const expressCost = expressMunicipioTarifa ? expressMunicipioTarifa.tarifa : 0;
  const total = subtotalAfterDiscount + shippingCost + (shippingType.toLowerCase() === 'express' ? expressCost : 0);

  const orderNumber = `ORD-${Date.now()}`;

  let mensajeWhatsApp = `🛍️ *NUEVO PEDIDO RECIBIDO*\n\n`;
  mensajeWhatsApp += `📋 *Número de Pedido:* ${orderNumber}\n`;
  mensajeWhatsApp += `👤 *Nombre:* ${name}\n`;
  mensajeWhatsApp += `📞 *Teléfono de entrega:* ${phone}\n`;
  mensajeWhatsApp += `📍 *Dirección:* ${address}\n`;
  mensajeWhatsApp += `📌 *Referencia:* ${reference}\n`;
  mensajeWhatsApp += `🚚 *Tipo de envío:* ${shippingType}\n`;

  if (shippingType.toLowerCase() === 'marítimo' || shippingType.toLowerCase() === 'maritimo') {
    mensajeWhatsApp += `⚖️ *Peso total:* ${totalWeight.toFixed(2)} lb\n`;
    mensajeWhatsApp += `💲 *Costo marítimo:* $${shippingCost.toFixed(2)}\n`;
  }

  if (shippingType.toLowerCase() === 'express') {
    mensajeWhatsApp += `💲 *Envío Express:* $${expressCost.toFixed(2)}\n`;
  }

  if (discountValue > 0) {
    mensajeWhatsApp += `💸 *Descuento 3%:* -$${discountValue.toFixed(2)}\n`;
  }

  mensajeWhatsApp += `\n*PRODUCTOS:*\n`;

  cart.forEach((item, idx) => {
    const product = productMap.get(item.id) || products.find(p => p.id === item.id);
    let subtotalItem = (product?.price || 0) * item.quantity;
    if (idx === 0 && discountValue > 0) {
      const discountedUnitPrice = (product.price || 0) * (1 - DISCOUNT_RATE);
      subtotalItem = discountedUnitPrice + (product.price || 0) * Math.max(0, item.quantity - 1);
    }
    mensajeWhatsApp += `• ${product.name}\n`;
    mensajeWhatsApp += `  Cantidad: ${item.quantity} x $${product.price.toFixed(2)}\n`;
    mensajeWhatsApp += `  Subtotal: $${subtotalItem.toFixed(2)}\n`;
  });

  mensajeWhatsApp += `\n💰 *Monto total a pagar:* $${total.toFixed(2)}\n`;
  mensajeWhatsApp += `⏰ *Fecha:* ${new Date().toLocaleString('es-ES')}`;

  const mensajeFormato = encodeURIComponent(mensajeWhatsApp);
  const linkWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeFormato}`;

  alert(`¡Gracias ${name}!\nTu pedido se enviará a WhatsApp.`);
  window.open(linkWhatsApp, '_blank');

  cart = [];
  updateCartDisplay();
  buyForm?.reset();
  closeModal();
}

if (openOrderTab) openOrderTab.addEventListener('click', handleOpenOrderTab);
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (closeProductDetailBtn) closeProductDetailBtn.addEventListener('click', closeProductDetailModal);
if (buyModal) {
  buyModal.addEventListener('click', (event) => {
    if (event.target === buyModal) closeModal();
  });
}
if (productDetailModal) {
  productDetailModal.addEventListener('click', (event) => {
    if (event.target === productDetailModal) closeProductDetailModal();
  });
}
if (buyForm) {
  buyForm.addEventListener('submit', handleCartOrder);
  bindMunicipioTarifaWatcher();
}
if (loginButton) loginButton.addEventListener('click', openLoginModal);
if (logoutButton) logoutButton.addEventListener('click', clearCurrentUser);
if (closeLoginModalBtn) closeLoginModalBtn.addEventListener('click', closeLoginModal);
if (loginModal) {
  loginModal.addEventListener('click', (event) => {
    if (event.target === loginModal) closeLoginModal();
  });
}
if (loginForm) loginForm.addEventListener('submit', handleLoginSubmit);

function formatCurrency(value) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(value);
}

function getProductShortDescription(product) {
  if (product.shortDescription?.trim()) return product.shortDescription.trim();
  return 'Descripción breve no disponible. Agrega shortDescription al producto.';
}

function getProductBadge(product) {
  if (product.badge) return product.badge;
  const badges = ['Top seller', 'Destacado', 'Más valorado'];
  return badges[Math.floor(Math.random() * badges.length)];
}

function getProductRating(product) {
  const value = product.rating ?? Number((4.2 + Math.random() * 0.8).toFixed(1));
  const fullStars = Math.min(5, Math.round(value));
  const emptyStars = 5 - fullStars;
  return {
    value,
    stars: `${'★'.repeat(fullStars)}${'☆'.repeat(emptyStars)}`
  };
}

function renderProducts(items) {
  // use a DocumentFragment to minimize reflows while rendering
  productGrid.innerHTML = '';
  const frag = document.createDocumentFragment();
  items.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';
    const description = getProductShortDescription(product);
    const badgeLabel = getProductBadge(product);
    const rating = getProductRating(product);

    const isFirstInCart = !!(currentUser && cart.length > 0 && cart[0].id === product.id);
    const priceHtml = isFirstInCart
      ? `<span class="product-price"><span style="text-decoration:line-through;color:#777">${formatCurrency(product.price)}</span> <strong style="color:#b33">${formatCurrency((product.price || 0) * (1 - DISCOUNT_RATE))}</strong></span>`
      : `<span class="product-price">${formatCurrency(product.price)}</span>`;
    const discountBadgeHtml = isFirstInCart ? `<span class="product-discount-badge" style="background:#b33;color:#fff;padding:2px 6px;border-radius:4px;font-size:0.75rem;margin-left:6px">3% OFF 1ª</span>` : '';

    card.innerHTML = `
      <div class="product-image">
        <span class="product-badge">${badgeLabel}</span>
        ${discountBadgeHtml}
        <button class="product-link" type="button" data-id="${product.id}" aria-label="Ver detalles de ${product.name}">
          <img src="${product.image}" alt="${product.name}" loading="lazy" referrerpolicy="no-referrer" />
        </button>
      </div>

      <div class="product-meta">
        <span class="product-category">Catálogo</span>
        <span class="product-rating">${rating.stars} ${rating.value.toFixed(1)}</span>
      </div>

      <div>
        <h3>${product.name}</h3>
        <p>${description}</p>
      </div>

      <div class="product-footer">
        <div class="product-price-block">
          ${priceHtml}
          <small>Envío y pago seguros</small>
        </div>
        <div class="product-buttons">
          <button class="button primary product-buy-button" data-id="${product.id}" data-action="buy">Comprar</button>
          <button class="button product-cart-button" data-id="${product.id}" data-action="add" aria-label="Agregar al carrito">🛒</button>
        </div>
      </div>
    `;

    const productLinkButton = card.querySelector('.product-link');
    productLinkButton?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openProductDetailModal(product);
    });

    const buttons = card.querySelectorAll('.product-buttons button');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        if (button.dataset.action === 'buy') {
          addToCart(product.id);
          openModal();
        } else {
          addToCart(product.id);
        }
      });
    });

    card.addEventListener('click', (event) => {
      if (event.target.closest('button')) return;
      openProductDetailModal(product);
    });

    frag.appendChild(card);
  });
  productGrid.appendChild(frag);
}

function updateCartDisplay() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">El carrito está vacío.</p>';
    cartTotalElement.textContent = formatCurrency(0);
    if (topCartItems) topCartItems.innerHTML = cartItemsContainer.innerHTML;
    if (topCartTotal) topCartTotal.textContent = cartTotalElement.textContent;
    return;
  }

  cart.forEach((item, idx) => {
    const product = productMap.get(item.id) || products.find(p => p.id === item.id);
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    const isFirst = idx === 0 && !!currentUser;
    let unitPriceHtml = `<small>${formatCurrency(product.price)} c/u</small>`;
    let subtotalItem = (product?.price || 0) * item.quantity;

    if (isFirst) {
      const discountedUnitPrice = (product.price || 0) * (1 - DISCOUNT_RATE);
      unitPriceHtml = `<small><span style="text-decoration:line-through; color:#777;">${formatCurrency(product.price)}</span> <strong style="color:#b33">${formatCurrency(discountedUnitPrice)} c/u</strong></small>`;
      // El descuento aplica solo a una unidad del primer producto
      subtotalItem = discountedUnitPrice + (product.price || 0) * Math.max(0, item.quantity - 1);
    }

    cartItem.innerHTML = `
      <div>
        <strong>${product.name}</strong>
        ${unitPriceHtml}
      </div>
      <div class="quantity-controls">
        <button aria-label="Restar" data-action="decrease" data-id="${item.id}">-</button>
        <span>${item.quantity}</span>
        <button aria-label="Sumar" data-action="increase" data-id="${item.id}">+</button>
        <button class="button secondary small-button" aria-label="Eliminar" data-action="remove" data-id="${item.id}">Eliminar</button>
      </div>
      <div class="cart-item-subtotal"><small>Subtotal: ${formatCurrency(subtotalItem)}</small></div>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  const subtotal = cart.reduce((sum, item) => {
    const product = productMap.get(item.id) || products.find(p => p.id === item.id);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);
  const discountValue = getDiscountForSubtotal(subtotal);
  const subtotalAfterDiscount = Math.max(0, subtotal - discountValue);

  cartTotalElement.textContent = formatCurrency(subtotalAfterDiscount);
  if (cartDiscountElement) cartDiscountElement.textContent = discountValue > 0 ? `Descuento 3% (1er producto): -${formatCurrency(discountValue)}` : '';
  if (topCartItems) topCartItems.innerHTML = cartItemsContainer.innerHTML;
  if (topCartTotal) topCartTotal.textContent = cartTotalElement.textContent;
  // Re-render product grid so catalog shows which product has the 1ª unidad con descuento
  try { renderProducts(products); } catch (e) { /* ignore */ }
}

function chooseRecommendation(excludeId) {
  const candidates = products.filter(p => p.id !== excludeId);
  if (candidates.length === 0) return null;
  // Prefer products not already in cart
  const notInCart = candidates.filter(p => !cart.some(c => c.id === p.id));
  const pool = notInCart.length > 0 ? notInCart : candidates;
  return pool[Math.floor(Math.random() * pool.length)];
}

function showRecommendation(product) {
  if (!product) return;
  let container = document.getElementById('recommendationPrompt');
  if (!container) {
    container = document.createElement('div');
    container.id = 'recommendationPrompt';
    document.body.appendChild(container);
  }

  container.innerHTML = `
    <div class="recommendation-card">
      <img src="${product.image}" alt="${product.name}" class="recommendation-image" />
      <div class="recommendation-body">
        <strong class="recommendation-title">Te puede interesar</strong>
        <div class="recommendation-name">${product.name}</div>
        <div class="recommendation-price">${formatCurrency(product.price)}</div>
        <div class="recommendation-actions">
          <button class="button primary rec-accept" data-id="${product.id}">Agregar recomendado</button>
          <button class="button secondary rec-decline">No, gracias</button>
        </div>
      </div>
    </div>
  `;

  container.classList.add('is-visible');

  const acceptBtn = container.querySelector('.rec-accept');
  const declineBtn = container.querySelector('.rec-decline');

  function cleanup() {
    acceptBtn?.removeEventListener('click', onAccept);
    declineBtn?.removeEventListener('click', onDecline);
    setTimeout(() => container?.classList.remove('is-visible'), 160);
  }

  function onAccept(e) {
    const id = Number(e.currentTarget.dataset.id);
    addToCart(id, { suppressRecommendation: true });
    cleanup();
  }

  function onDecline() {
    cleanup();
  }

  acceptBtn?.addEventListener('click', onAccept);
  declineBtn?.addEventListener('click', onDecline);
}

function hideRecommendation() {
  const container = document.getElementById('recommendationPrompt');
  if (container) container.classList.remove('is-visible');
}

function addToCart(productId, options = {}) {
  const { suppressRecommendation = false } = options || {};
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) cartItem.quantity += 1;
  else cart.push({ id: productId, quantity: 1 });
  updateCartDisplay();

  if (suppressRecommendation) return;

  // Show a recommended product after adding
  const recommended = chooseRecommendation(productId);
  if (recommended) {
    // Small delay so UI updates before showing prompt
    setTimeout(() => showRecommendation(recommended), 180);
  }
}

function changeQuantity(productId, action) {
  const cartItem = cart.find(item => item.id === productId);
  if (!cartItem) return;
  if (action === 'increase') cartItem.quantity += 1;
  else if (action === 'decrease') {
    cartItem.quantity -= 1;
    if (cartItem.quantity <= 0) cart = cart.filter(item => item.id !== productId);
  }
  updateCartDisplay();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartDisplay();
}

function handleCartButtons(event) {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  const id = Number(button.dataset.id);
  if (action && !Number.isNaN(id)) {
    event.stopPropagation();
    if (action === 'remove') removeFromCart(id);
    else changeQuantity(id, action);
    event.preventDefault();
  }
}

function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(query) ||
    (product.shortDescription || '').toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );
  renderProducts(filtered);
}

const debouncedHandleSearch = debounce(handleSearch, 220);
searchInput.addEventListener('input', debouncedHandleSearch);
cartItemsContainer.addEventListener('click', handleCartButtons);
if (topCartItems) topCartItems.addEventListener('click', handleCartButtons);
currentUser = loadCurrentUser();
updateLoginUI();
renderProducts(products);
updateCartDisplay();

function toggleCartPanel(show) {
  if (!topCartPanel) return;
  if (show) {
    topCartPanel.classList.remove('collapsed');
    topCartPanel.setAttribute('aria-hidden', 'false');
  } else {
    topCartPanel.classList.add('collapsed');
    topCartPanel.setAttribute('aria-hidden', 'true');
  }
}

if (cartButton) {
  cartButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleCartPanel(true);
  });
}

if (closeCartPanel) {
  closeCartPanel.addEventListener('click', () => toggleCartPanel(false));
}

const siteHeader = document.querySelector('.site-header');
let lastScrollPosition = window.scrollY;
let scrollTicking = false;
const HEADER_HIDE_THRESHOLD = 80;
const HEADER_SCROLL_DELTA = 15;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;
  if (!scrollTicking) {
    window.requestAnimationFrame(() => {
      if (siteHeader) {
        const distance = Math.abs(currentScrollPosition - lastScrollPosition);
        if (distance > HEADER_SCROLL_DELTA) {
          if (currentScrollPosition > lastScrollPosition && currentScrollPosition > HEADER_HIDE_THRESHOLD) {
            siteHeader.classList.add('hidden');
          } else if (currentScrollPosition < lastScrollPosition || currentScrollPosition <= HEADER_HIDE_THRESHOLD) {
            siteHeader.classList.remove('hidden');
          }
        }
      }
      lastScrollPosition = currentScrollPosition;
      scrollTicking = false;
    });
    scrollTicking = true;
  }
});

document.addEventListener('click', (e) => {
  if (!topCartPanel) return;
  if (topCartPanel.classList.contains('collapsed')) return;
  const inside = e.target.closest('#topCartPanel');
  const onButton = e.target.closest('#cartButton');
  const onProductGrid = e.target.closest('#productGrid') || e.target.closest('.product-card');
  if (!inside && !onButton && !onProductGrid) toggleCartPanel(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') toggleCartPanel(false);
});

// ======================
// Estimador live (ELIMINADO)
// ======================
//bindDistanceEstimator();


