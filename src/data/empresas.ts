// Subrutas de /empresas/. Contenido propio por página, sin cifras ni casos inventados.
import type { IconName } from '../components/Icon.astro';
import type { Tab } from '../components/sub/TabBand.astro';
import { empresasTabs } from './subpaginas';

export type Slug = 'crm-whatsapp' | 'automatizacion-n8n' | 'erp-a-medida';

export interface SubPage {
  slug: Slug;
  path: string;
  short: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  h1em: string;
  lead: string;
  forma: 'burbuja' | 'empresas' | 'cuerda';
  kind: 'producto' | 'servicio';
  serviceType: string;
  wa: string;
  points: string[];
  faq: { q: string; a: string }[];
}

export const subpages: SubPage[] = [
  {
    slug: 'crm-whatsapp',
    path: '/empresas/crm-whatsapp/',
    short: 'CRM para WhatsApp Business',
    seoTitle: 'CRM para WhatsApp Business en Perú',
    seoDescription:
      'Conecta tu WhatsApp Business a un CRM con bandeja compartida, chatbot con IA, campañas masivas y embudo de ventas. Se configura una sola vez. Planes desde S/ 99 al mes.',
    h1: 'CRM para',
    h1em: 'WhatsApp Business',
    lead: 'Tu número de siempre, conectado a un CRM: bandeja para tu equipo, bot con IA, campañas y embudo de ventas. Lo configuramos una sola vez y los flujos ya están hechos.',
    forma: 'burbuja',
    kind: 'producto',
    serviceType: 'CRM para WhatsApp Business',
    wa: 'Hola Vertika, quiero conectar mi WhatsApp Business a un CRM con bot y campañas.',
    points: ['API oficial de Meta', 'Sin cobro por usuario', 'Bot con IA por cada línea'],
    faq: [
      { q: '¿Pierdo el acceso a WhatsApp desde mi celular?', a: 'No. Conectamos tu número con la API oficial de Meta y sigues pudiendo usarlo desde tu celular.' },
      { q: '¿Qué necesito para empezar?', a: 'Tu número de WhatsApp Business y acceso a la cuenta de Facebook que administra tu negocio. Nosotros te guiamos en la conexión.' },
      { q: '¿Los precios incluyen las tarifas de Meta?', a: 'Meta cobra aparte ciertos mensajes y plantillas según su tarifa vigente. Te explicamos cuánto aplica a tu caso antes de contratar.' },
      { q: '¿Puedo cambiar de plan?', a: 'Sí. Puedes subir o bajar de plan según el número de líneas, bots y usuarios que necesites.' },
      { q: '¿Y si necesito algo que ningún plan cubre?', a: 'Construimos un CRM a medida o lo conectamos con tus sistemas mediante automatizaciones.' },
    ],
  },
  {
    slug: 'automatizacion-n8n',
    path: '/empresas/automatizacion-n8n/',
    short: 'Automatización e integraciones',
    seoTitle: 'Automatización de procesos con n8n en Perú',
    seoDescription:
      'Automatizamos procesos de tu empresa con n8n e integraciones: pedidos, facturación electrónica, WhatsApp, CRM y ERP conectados, con agentes de IA que derivan a tu equipo los temas delicados.',
    h1: 'Automatización',
    h1em: 'con n8n',
    lead: 'Flujos que conectan tus herramientas y trabajan solos: pedidos, comprobantes, avisos y reportes sin copiar datos a mano. Con IA que sabe cuándo pasarle el tema a una persona.',
    forma: 'cuerda',
    kind: 'servicio',
    serviceType: 'Automatización de procesos e integración de sistemas',
    wa: 'Hola Vertika, quiero automatizar procesos de mi empresa con n8n.',
    points: ['Flujos con n8n', 'Integraciones y APIs', 'IA con derivación a personas'],
    faq: [
      { q: '¿Qué es n8n?', a: 'Es una herramienta para crear flujos automáticos que conectan aplicaciones: cuando pasa algo en un sistema, otro reacciona solo. Nosotros diseñamos, construimos y mantenemos esos flujos.' },
      { q: '¿Necesito cambiar los sistemas que ya uso?', a: 'No. Partimos de lo que ya tienes y lo conectamos. Solo proponemos reemplazar algo cuando tiene sentido.' },
      { q: '¿Dónde funciona la automatización y cuánto cuesta mantenerla?', a: 'Depende de tu caso. En la propuesta te explicamos dónde corre, qué licencias o servicios implica y el costo de mantenimiento.' },
      { q: '¿Qué pasa si la IA no sabe responder?', a: 'No improvisa: deriva la conversación a una persona de tu equipo con todo el contexto. Tú defines qué temas pasan siempre por una persona.' },
    ],
  },
  {
    slug: 'erp-a-medida',
    path: '/empresas/erp-a-medida/',
    short: 'ERP y sistemas de gestión',
    seoTitle: 'ERP y sistemas de gestión a medida en Perú',
    seoDescription:
      'Desarrollamos ERP y sistemas de gestión a medida: inventario, pedidos, facturación electrónica, reportes y roles, diseñados alrededor de cómo trabaja tu empresa.',
    h1: 'ERP y sistemas',
    h1em: 'de gestión a medida',
    lead: 'Inventario, pedidos, facturación y reportes en un solo sistema, hecho para tus procesos reales y sin pagar módulos que no usas.',
    forma: 'empresas',
    kind: 'servicio',
    serviceType: 'Desarrollo de ERP y sistemas de gestión a medida',
    wa: 'Hola Vertika, quiero conversar sobre un ERP o sistema de gestión para mi empresa.',
    points: ['Módulos a tu medida', 'Facturación electrónica', 'Acceso por roles'],
    faq: [
      { q: '¿Cuánto cuesta un ERP a medida?', a: 'Depende de los módulos, el número de sedes y usuarios, las integraciones y la migración de datos. Después de la conversación inicial te enviamos una propuesta escrita por etapas.' },
      { q: '¿Pueden migrar lo que tengo en Excel?', a: 'Sí. Revisamos tus hojas de cálculo, limpiamos los datos y los importamos al sistema antes de empezar a usarlo.' },
      { q: '¿Se puede empezar por un solo módulo?', a: 'Sí. Muchas empresas empiezan por inventario o pedidos y suman módulos por etapas.' },
      { q: '¿Quién es dueño del sistema?', a: 'Lo definimos por escrito en la propuesta, incluyendo el código, los datos y el soporte posterior.' },
    ],
  },
];

export const erpSignals: { icon: IconName; t: string }[] = [
  { icon: 'table', t: 'Tu operación vive en varias hojas de cálculo que nadie quiere tocar.' },
  { icon: 'refresh', t: 'Digitas la misma información en dos o tres sistemas distintos.' },
  { icon: 'eye', t: 'No sabes con exactitud cuánto stock tienes ni dónde está.' },
  { icon: 'chart', t: 'Armar un reporte para gerencia toma horas o días.' },
  { icon: 'layers', t: 'El software genérico te obliga a trabajar como él quiere.' },
  { icon: 'key', t: 'Cualquiera ve toda la información, sin permisos por rol.' },
];

export const erpVs: [string, string, string][] = [
  ['Procesos', 'Se adapta a cómo trabajas', 'Te adaptas al sistema'],
  ['Módulos', 'Solo los que usas', 'Paquetes completos'],
  ['Integraciones', 'Con lo que ya tienes', 'Limitadas a las del proveedor'],
  ['Crecimiento', 'Sumas módulos por etapas', 'Cambias de plan o de proveedor'],
  ['Inicio', 'Toma más tiempo construirlo', 'Más rápido de activar'],
];

export const erpTabs: Tab[] = empresasTabs.filter((t) => t.id !== 'crm');

export const crmVs: [string, string, string][] = [
  ['Ideal para', 'Vender y atender por WhatsApp desde ya', 'Procesos comerciales propios o complejos'],
  ['Puesta en marcha', 'Se configura una sola vez', 'Proyecto por etapas'],
  ['Precio', 'Plan mensual', 'Propuesta escrita'],
  ['Funciones', 'Bandeja, bot con IA, campañas y embudo', 'Las que tu proceso necesite'],
  ['Integraciones', 'Webhook por línea (n8n, Make, Zapier)', 'Con cualquier sistema que uses'],
];

export const n8nUpkeep: { icon: IconName; t: string; d: string }[] = [
  { icon: 'eye', t: 'Monitoreo', d: 'Revisamos que cada flujo se ejecute y te avisamos si algo falla.' },
  { icon: 'refresh', t: 'Mejoras', d: 'Ajustamos los flujos cuando cambian tus procesos o tus herramientas.' },
  { icon: 'doc', t: 'Documentación', d: 'Te entregamos qué hace cada flujo, en lenguaje claro.' },
  { icon: 'lock', t: 'Accesos', d: 'Cada integración usa credenciales propias y el mínimo de permisos.' },
];
