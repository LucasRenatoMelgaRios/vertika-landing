// Contenido propio de cada subpágina de público. Todo es ilustrativo: nombres y datos de ejemplo.
import type { AccItem } from '../components/sub/FeatureAccordion.astro';
import type { Tab } from '../components/sub/TabBand.astro';
import type { IconName } from '../components/Icon.astro';

export interface Producto {
  id: string;
  nombre: string;
  url: string;
  href: string;
  captura: string;
  color: string;
  tipo: string;
  resumen: string;
  como: { t: string; d: string }[];
  tecnologia: string[];
}

export const productos: Producto[] = [
  {
    id: 'vericerbiz',
    nombre: 'VeriCerBiz',
    url: 'vericerbiz.com',
    href: 'https://vericerbiz.com/por-que-vericerbiz',
    captura: '/fotos/prod-vericerbiz.webp',
    color: '#E8590C',
    tipo: 'Red social de negocios verificados',
    resumen: 'Conecta a personas con empresas verificadas para que comprar por internet sea confiable.',
    como: [
      { t: 'Descubrir', d: 'Un directorio y un mapa de negocios con verificación oficial y reseñas reales.' },
      { t: 'Pagar', d: 'Pagos con VeriTokens: el dinero queda en custodia hasta que el comprador confirma.' },
      { t: 'Garantizar', d: 'Si algo falla, un sistema de disputas devuelve el dinero.' },
    ],
    tecnologia: ['Verificación de empresas', 'Pagos en custodia', 'Feed y reseñas', 'Mapa de negocios', 'Panel para empresas'],
  },
  {
    id: 'pillket',
    nombre: 'Pillket',
    url: 'pillket.com',
    href: 'https://pillket.com/organizadores',
    captura: '/fotos/prod-pillket.webp',
    color: '#1C9A6C',
    tipo: 'Venta de entradas y control de acceso',
    resumen: 'Ayuda a organizadores, productoras y discotecas a vender entradas, validar QR en puerta y promocionar sus eventos.',
    como: [
      { t: 'Publicar', d: 'El organizador crea su evento con zonas, precios y flyer en minutos.' },
      { t: 'Vender', d: 'El público paga por Yape directo al organizador y recibe su entrada con QR.' },
      { t: 'Validar', d: 'En la puerta se escanea cada QR desde un celular; las entradas repetidas se detectan.' },
    ],
    tecnologia: ['QR único por entrada', 'Cobro directo por Yape', 'Dashboard en tiempo real', 'Control de aforo', 'Zonas y boxes VIP'],
  },
];

export const personasAreas: { icon: IconName; titulo: string; texto: string }[] = [
  { icon: 'user', titulo: 'Redes y comunidades', texto: 'Perfiles, feeds, seguidores y reseñas que generan confianza.' },
  { icon: 'key', titulo: 'Pagos y verificación', texto: 'Custodia de pagos, validación de identidad y control de fraude.' },
  { icon: 'calendar', titulo: 'Eventos y acceso', texto: 'Entradas, QR, aforo y validación en tiempo real.' },
  { icon: 'refresh', titulo: 'Automatizaciones', texto: 'Notificaciones, confirmaciones y procesos que corren solos.' },
  { icon: 'chart', titulo: 'Datos en tiempo real', texto: 'Paneles con ventas, uso y métricas de cada producto.' },
  { icon: 'globe', titulo: 'Mapas y descubrimiento', texto: 'Directorios y búsqueda por ciudad, categoría y cercanía.' },
];

export const empresasTabs: Tab[] = [
  { id: 'crm', label: 'CRM', icon: 'user', heading: 'Tus clientes y oportunidades, ordenados', text: 'Un CRM hecho con tu proceso comercial: cada prospecto, cada seguimiento y cada venta en un solo lugar.', points: ['Embudo de ventas por etapa', 'Recordatorios automáticos', 'Historial por cliente'] },
  { id: 'inventario', label: 'Inventario', icon: 'table', heading: 'Stock al día en todas tus sedes', text: 'Sabes qué tienes, dónde está y qué debes reponer, sin cruzar hojas de cálculo.', points: ['Alertas de reposición', 'Movimientos por almacén', 'Acceso por roles'] },
  { id: 'pedidos', label: 'Pedidos', icon: 'layers', heading: 'Todos los pedidos en un solo tablero', text: 'Los pedidos de tu web, WhatsApp y tienda llegan al mismo lugar y avanzan por estado.', points: ['Estados visibles para todo el equipo', 'Avisos al cliente', 'Historial por cliente'] },
  { id: 'facturacion', label: 'Facturación', icon: 'doc', heading: 'Comprobantes que se emiten solos', text: 'Conectamos tus ventas con tu facturación electrónica para no digitar dos veces.', points: ['Boletas y facturas automáticas', 'Estado de cada comprobante', 'Descarga para tus clientes'] },
  { id: 'reportes', label: 'Reportes', icon: 'chart', heading: 'Indicadores que llegan sin pedirlos', text: 'Paneles con tus propios datos y reportes que llegan a gerencia cuando los necesitas.', points: ['Ventas por sede y periodo', 'Envío programado', 'Exportar a Excel'] },
];

export const saludTabs: Tab[] = [
  { id: 'paciente', label: 'Paciente', icon: 'user', heading: 'Su información, en un espacio privado', text: 'Cada paciente ve sus citas, resultados e indicaciones desde el celular, sin llamar a la clínica.', points: ['Acceso con su propia cuenta', 'Resultados descargables', 'Recordatorios de cita'] },
  { id: 'recepcion', label: 'Recepción', icon: 'calendar', heading: 'La agenda de todos los consultorios', text: 'Recepción agenda, confirma y recuerda las citas de todos los consultorios desde un mismo lugar, y registra la admisión del paciente.', points: ['Agenda por consultorio', 'Recordatorios automáticos', 'Solo datos de contacto, no clínicos'] },
  { id: 'medico', label: 'Médico', icon: 'pen', heading: 'La historia clínica, ordenada', text: 'El médico tratante registra y consulta la historia, y cada acceso queda registrado.', points: ['Historia por paciente', 'Resultados de laboratorio integrados', 'Registro de actividad'] },
  { id: 'admin', label: 'Administración', icon: 'key', heading: 'Tú decides quién ve qué', text: 'Permisos por rol, caja, facturación electrónica e inventario de insumos, para que cada persona acceda solo a lo que necesita.', points: ['Roles configurables', 'Caja y facturación electrónica', 'Inventario de insumos'] },
];
