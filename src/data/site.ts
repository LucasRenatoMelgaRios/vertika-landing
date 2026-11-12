// Contenido y datos del sitio. Cambia aquí los datos de contacto y el equipo.

export const site = {
  name: 'Vertika Platforms',
  shortName: 'Vertika',
  url: 'https://vertikaplatforms.com',
  locale: 'es_PE',
  lang: 'es-PE',
  description:
    'Agencia de software a medida en Perú: apps, sistemas web e integraciones para personas, empresas y salud, con un proceso claro y datos protegidos.',
  // PENDIENTE: reemplazar por el número real (código de país + número, sin + ni espacios).
  whatsapp: '51900000000',
  // PENDIENTE: confirmar el correo real.
  email: 'hola@vertikaplatforms.com',
  country: 'PE',
  countryName: 'Perú',
  ogImage: '/og-vertika.jpg',
  social: [] as string[], // URLs de perfiles (LinkedIn, Instagram...) cuando existan
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type AudienceId = 'personas' | 'empresas' | 'salud';

export type Mini = 'web' | 'app' | 'proto' | 'auto' | 'tabla' | 'insumos' | 'crm' | 'erp' | 'api' | 'portal' | 'panel' | 'agenda' | 'roles' | 'paciente';

export interface Service {
  name: string;
  text: string;
  example: string;
  mini: Mini;
  /** 'producto' = listo para usar, con planes; 'medida' = desarrollo a medida, con cotización */
  group?: 'producto' | 'medida';
  /** subruta o ancla de destino */
  href?: string;
  /** etiqueta corta en el menú */
  badge?: string;
  /** ancla propia en la página */
  anchor?: string;
  wide?: boolean;
}

export interface Audience {
  id: AudienceId;
  label: string;
  tab: string;
  path: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  pitch: string;
  lead: string;
  knots: [string, string, string];
  intro: string;
  waMessage: string;
  services: Service[];
  expediente: { proyecto: string; pasos: [boolean, string][]; filas: [string, string][] };
  faq: { q: string; a: string }[];
}

export const audiences: Audience[] = [
  {
    id: 'personas',
    label: 'Personas',
    tab: 'Personas',
    path: '/personas/',
    seoTitle: 'Plataformas propias para personas: VeriCerBiz y Pillket',
    seoDescription:
      'En Vertika creamos y operamos nuestras propias plataformas para personas: VeriCerBiz, red de negocios verificados, y Pillket, venta de entradas con QR. Tecnología propia hecha en Perú.',
    h1: 'Plataformas propias para personas',
    pitch:
      'Además de construir para nuestros clientes, creamos y operamos nuestros propios productos: redes, herramientas y automatizaciones que la gente usa todos los días.',
    lead: 'Tecnología propia, diseñada, desarrollada y operada por nuestro equipo.',
    knots: ['Redes', 'Herramientas', 'Automatización'],
    intro:
      'Construimos productos completos, no solo pantallas: verificación, pagos, códigos QR, paneles en tiempo real y la operación diaria detrás de cada uno. Esa misma experiencia la llevamos a cada proyecto de nuestros clientes.',
    waMessage: 'Hola Vertika, vi sus plataformas propias y quiero conversar sobre un proyecto.',
    services: [
      {
        name: 'Redes y comunidades',
        text: 'Plataformas donde personas y negocios se encuentran, se siguen y se recomiendan.',
        example: 'VeriCerBiz: una red social de negocios verificados.',
        mini: 'portal',
      },
      {
        name: 'Pagos y confianza',
        text: 'Sistemas que protegen cada transacción, con custodia del pago y resolución de disputas.',
        example: 'VeriTokens en VeriCerBiz: el pago se libera cuando el comprador confirma.',
        mini: 'roles',
      },
      {
        name: 'Herramientas para eventos',
        text: 'Venta de entradas, códigos QR únicos y control de aforo desde el celular.',
        example: 'Pillket: entradas con QR y cobro directo por Yape.',
        mini: 'app',
      },
      {
        name: 'Automatizaciones y paneles',
        text: 'Procesos que se hacen solos y datos en tiempo real para decidir mejor.',
        example: 'Dashboard de ventas y aforo de Pillket.',
        mini: 'panel',
      },
    ],
    expediente: {
      proyecto: 'Pillket · venta de entradas con QR',
      pasos: [
        [true, 'Publicar evento · zonas y precios'],
        [true, 'Cobro por Yape directo al organizador'],
        [true, 'Entrada con QR único por correo'],
        [true, 'Validación en puerta desde el celular'],
        [false, 'Nuevas funciones · en desarrollo'],
      ],
      filas: [
        ['producto', 'propio'],
        ['operado por', 'Vertika'],
        ['hecho en', 'Huánuco, Perú'],
      ],
    },
    faq: [
      {
        q: '¿Por qué una agencia tiene productos propios?',
        a: 'Porque construir y operar nuestras propias plataformas nos obliga a resolver problemas reales: pagos, verificación, seguridad y crecimiento. Esa experiencia es la que aplicamos en los proyectos de nuestros clientes.',
      },
      {
        q: '¿Pueden construir algo parecido para mí?',
        a: 'Sí. Si tienes una idea de plataforma, red o herramienta, conversemos. Te contamos qué aprendimos con nuestros productos y cómo aplicarlo al tuyo.',
      },
    ],
  },
  {
    id: 'empresas',
    label: 'Empresas',
    tab: 'Empresas',
    path: '/empresas/',
    seoTitle: 'Software empresarial a medida en Perú',
    seoDescription:
      'Sistemas internos, integraciones, portales y automatización de procesos hechos a la medida de tu empresa. Desarrollo de software empresarial en Perú.',
    h1: 'Software a medida para empresas',
    pitch:
      'Sistemas internos, integraciones y automatizaciones hechas para cómo trabaja tu empresa, no al revés.',
    lead: 'Para pymes y empresas en Perú que quieren ordenar, conectar y automatizar su operación.',
    knots: ['Sistemas', 'Integraciones', 'Automatización'],
    intro:
      'Desarrollamos CRMs, ERPs y automatizaciones con n8n. Cuando las hojas de cálculo y las herramientas genéricas ya no alcanzan, construimos el sistema que tu operación necesita y lo conectamos con lo que ya usas.',
    waMessage: 'Hola Vertika, quiero conversar sobre un proyecto de software para mi empresa.',
    services: [
      {
        name: 'CRM para WhatsApp Business',
        text: 'Tu WhatsApp Business conectado a un CRM: bandeja para tu equipo, bot con IA, campañas y embudo. Se configura una sola vez.',
        example: 'Un bot que agenda citas y toma pedidos, y pasa a una persona cuando hace falta.',
        mini: 'portal',
        group: 'producto',
        href: '/empresas/crm-whatsapp/',
        badge: 'desde S/ 99/mes',
      },
      {
        name: 'ERP y sistemas de gestión',
        text: 'Compras, inventario, ventas, facturación, reportes y personal integrados, diseñados alrededor de tus procesos reales.',
        example: 'Un ERP para una distribuidora con tres almacenes y facturación electrónica.',
        mini: 'erp',
        group: 'medida',
        href: '/empresas/erp-a-medida/',
        wide: true,
      },
      {
        name: 'Automatización e integraciones',
        text: 'Flujos con n8n que conectan tus herramientas y trabajan solos, con agentes de IA que derivan a tu equipo los temas delicados.',
        example: 'Un pedido web que crea la factura, avisa por WhatsApp y actualiza el stock.',
        mini: 'api',
        group: 'medida',
        href: '/empresas/automatizacion-n8n/',
        wide: true,
      },
      {
        name: 'CRM a medida',
        text: 'Cuando un plan no alcanza: tus clientes, oportunidades y seguimientos con el proceso comercial exacto de tu empresa.',
        example: 'Un embudo por sede con comisiones y recordatorios para cada vendedor.',
        mini: 'crm',
        group: 'medida',
        href: '/empresas/#crm-a-medida',
        anchor: 'crm-a-medida',
      },
      {
        name: 'Portales para clientes y proveedores',
        text: 'Espacios web seguros donde tus clientes consultan pedidos, documentos o el estado de sus trámites.',
        example: 'Un portal donde tus clientes descargan sus comprobantes.',
        mini: 'portal',
        group: 'medida',
        href: '/empresas/#soluciones',
      },
      {
        name: 'Paneles y apps móviles',
        text: 'Indicadores con tus propios datos y apps para tu equipo en campo o para tus clientes, conectadas a tus sistemas.',
        example: 'Una app para registrar visitas y fotos en campo, con su panel para gerencia.',
        mini: 'panel',
        group: 'medida',
        href: '/empresas/#soluciones',
      },
    ],
    expediente: {
      proyecto: 'Sistema de inventario para una distribuidora',
      pasos: [
        [true, 'Procesos actuales mapeados'],
        [true, 'Integración con facturación electrónica'],
        [true, 'Prototipo validado con el almacén'],
        [false, 'Desarrollo · etapa 4 de 6'],
        [true, 'Demo con datos de prueba'],
      ],
      filas: [
        ['hojas de cálculo', '6 → 1 sistema'],
        ['acceso', 'por roles'],
        ['tus aprobaciones', '2 de 4'],
      ],
    },
    faq: [
      {
        q: '¿Pueden trabajar con los sistemas que ya tenemos?',
        a: 'Sí. Primero revisamos lo que ya usas y proponemos integrarlo o reemplazarlo solo donde tenga sentido.',
      },
      {
        q: '¿Cómo controlamos el avance?',
        a: 'Trabajamos por etapas con demostraciones periódicas. En cada punto de aprobación revisas lo construido antes de seguir.',
      },
    ],
  },
  {
    id: 'salud',
    label: 'Salud',
    tab: 'Salud',
    path: '/salud/',
    seoTitle: 'Software para clínicas y consultorios en Perú',
    seoDescription:
      'Desarrollamos software a medida para clínicas, consultorios y centros de salud en Perú, con protección de datos personales de salud desde el diseño.',
    h1: 'Software a medida para el sector salud',
    pitch:
      'Software para clínicas y consultorios que protege los datos de tus pacientes desde el diseño.',
    lead: 'Para clínicas, consultorios, laboratorios y centros de salud en Perú.',
    knots: ['Citas', 'Historia clínica', 'Pacientes'],
    intro:
      'Los datos de salud son datos personales sensibles. Por eso diseñamos cada sistema con acceso por roles, registro de actividad y el mínimo de datos necesario, pensando en la Ley N.° 29733 de Protección de Datos Personales.',
    waMessage: 'Hola Vertika, quiero conversar sobre un proyecto de software para mi centro de salud.',
    services: [
      {
        name: 'Agenda y citas en línea',
        text: 'Reservas, confirmaciones y recordatorios automáticos para reducir las citas perdidas.',
        example: 'Pacientes que reservan y reciben un recordatorio el día anterior.',
        mini: 'agenda',
      },
      {
        name: 'Historia clínica electrónica',
        text: 'Registro clínico ordenado, con permisos por rol y trazabilidad de quién consultó o modificó cada dato.',
        example: 'Historias clínicas accesibles solo para el personal autorizado.',
        mini: 'roles',
      },
      {
        name: 'Portal y app del paciente',
        text: 'Resultados, indicaciones y próximas citas en un espacio privado para cada paciente.',
        example: 'Un paciente que descarga sus resultados sin acudir a la clínica.',
        mini: 'paciente',
      },
      {
        name: 'Gestión del consultorio',
        text: 'Admisión, caja, facturación electrónica e inventario de insumos en un solo sistema.',
        example: 'Recepción, caja y consultorio trabajando sobre los mismos datos.',
        mini: 'insumos',
      },
      {
        name: 'Integraciones clínicas',
        text: 'Conexión con laboratorios, equipos y otros sistemas para evitar la doble digitación.',
        example: 'Resultados de laboratorio que llegan directo a la historia del paciente.',
        mini: 'api',
      },
    ],
    expediente: {
      proyecto: 'Agenda e historia clínica para un consultorio',
      pasos: [
        [true, 'Datos sensibles identificados'],
        [true, 'Roles: médico · recepción · caja'],
        [true, 'Prototipo aprobado por el equipo'],
        [false, 'Desarrollo · etapa 4 de 6'],
        [true, 'Recordatorios de cita funcionando'],
      ],
      filas: [
        ['datos de salud', 'cifrados'],
        ['registro de actividad', 'activo'],
        ['Ley N.° 29733', 'desde el diseño'],
      ],
    },
    faq: [
      {
        q: '¿Cómo protegen los datos de salud?',
        a: 'Aplicamos cifrado, acceso por roles, registro de actividad, copias de seguridad y entornos separados para pruebas, y firmamos acuerdos de confidencialidad. Puedes ver el detalle en nuestra página de seguridad y datos.',
      },
      {
        q: '¿El sistema cumplirá la ley de protección de datos?',
        a: 'Diseñamos el sistema para que tu organización pueda cumplir la Ley N.° 29733 y su reglamento. El cumplimiento también depende de tus procesos internos; te ayudamos a identificar qué te corresponde.',
      },
    ],
  },
];

export const processSteps = [
  {
    name: 'Conversación inicial',
    text: 'Nos cuentas qué necesitas y qué problema quieres resolver.',
    receive: 'Preguntas claras y una primera idea de alcance.',
    approval: false,
  },
  {
    name: 'Propuesta',
    text: 'Definimos alcance, etapas, plazos y presupuesto por escrito.',
    receive: 'Una propuesta que puedes revisar con calma.',
    approval: true,
  },
  {
    name: 'Diseño y prototipo',
    text: 'Diseñamos las pantallas y el recorrido antes de programar.',
    receive: 'Un prototipo navegable para probar y corregir.',
    approval: true,
  },
  {
    name: 'Desarrollo por etapas',
    text: 'Construimos en partes y te mostramos avances funcionando.',
    receive: 'Demostraciones periódicas que puedes usar.',
    approval: true,
  },
  {
    name: 'Pruebas y lanzamiento',
    text: 'Probamos, corregimos y publicamos junto a tu equipo.',
    receive: 'Tu sistema en producción y una guía de uso.',
    approval: true,
  },
  {
    name: 'Acompañamiento',
    text: 'Seguimos contigo para soporte, mejoras y nuevas etapas.',
    receive: 'Un canal directo con el equipo.',
    approval: false,
  },
];

export const dataPractices = [
  {
    name: 'Cifrado',
    text: 'La información viaja y se guarda cifrada.',
  },
  {
    name: 'Acceso por roles',
    text: 'Cada persona ve solo lo que necesita para su trabajo.',
  },
  {
    name: 'Registro de actividad',
    text: 'Queda constancia de quién consultó o modificó datos sensibles.',
  },
  {
    name: 'Mínimo necesario',
    text: 'Pedimos y guardamos solo los datos que el sistema realmente usa.',
  },
  {
    name: 'Copias de seguridad',
    text: 'Respaldos periódicos y un plan para recuperar la información.',
  },
  {
    name: 'Confidencialidad',
    text: 'Acuerdos de confidencialidad y entornos de prueba sin datos reales.',
  },
];

// PENDIENTE: confirmar con el equipo las tecnologías que realmente usan.
export const technologies = [
  { group: 'Web', items: ['Astro', 'React', 'Next.js', 'TypeScript'] },
  { group: 'Móvil', items: ['Flutter', 'React Native'] },
  { group: 'Servidor', items: ['Node.js', 'Python', 'PostgreSQL'] },
  { group: 'Nube', items: ['AWS', 'Google Cloud', 'Docker'] },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  area: string;
  photo?: string; // ruta en /public, por ejemplo '/equipo/nombre.webp'
  /** true mientras la foto sea de stock: muestra el aviso "Foto de muestra" */
  muestra?: boolean;
  /** índices (desde 0) de processSteps en los que acompaña al cliente */
  etapas: number[];
  /** de qué se encarga en un proyecto (borrador: revisar con cada integrante) */
  tareas: string[];
  linkedin?: string;
}

// PENDIENTE: reemplazar las fotos de muestra por las reales y revisar etapas y tareas con cada integrante.
export const team: TeamMember[] = [
  {
    id: 'lucas',
    name: 'Lucas Melgar Ríos',
    role: 'Ingeniero de software y fundador',
    area: 'Ingeniería',
    photo: '/equipo/lucas.webp',
    muestra: true,
    etapas: [0, 1, 3, 5],
    tareas: ['Tu contacto principal durante el proyecto', 'Propuesta técnica, alcance y estimación', 'Arquitectura y desarrollo del software'],
  },
  {
    id: 'alessandro',
    name: 'Alessandro Pazos',
    role: 'Ingeniero de software y cofundador',
    area: 'Ingeniería',
    photo: '/equipo/alessandro.webp',
    muestra: true,
    etapas: [2, 3, 4, 5],
    tareas: ['Desarrollo y calidad del código', 'Integraciones y puesta en producción', 'Pruebas y seguridad técnica'],
  },
  {
    id: 'adys',
    name: 'Adys Silva',
    role: 'Marketing y socia de marca',
    area: 'Marketing',
    photo: '/equipo/adys.webp',
    muestra: true,
    etapas: [0, 2, 4],
    tareas: ['Que tu producto se entienda y se encuentre', 'Mensajes claros para tus usuarios', 'Lanzamiento y crecimiento'],
  },
  {
    id: 'cory',
    name: 'Cory Matteo',
    role: 'Identidad de marca y legal',
    area: 'Marca y legal',
    photo: '/equipo/cory.webp',
    muestra: true,
    etapas: [1, 2, 4],
    tareas: ['Identidad visual de tu producto', 'Contratos y acuerdos de confidencialidad', 'Protección de datos y cumplimiento'],
  },
];

export const generalFaq = [
  {
    q: '¿Cómo empezamos?',
    a: 'Escríbenos por WhatsApp o correo y agendamos una conversación inicial para entender tu proyecto.',
  },
  {
    q: '¿Cuánto cuesta un proyecto?',
    a: 'Depende del alcance. Después de la conversación inicial te enviamos una propuesta escrita con etapas, plazos y presupuesto.',
  },
  {
    q: '¿Cuánto tiempo toma?',
    a: 'Cada proyecto es distinto. En la propuesta verás un cronograma por etapas, con fechas para cada entrega.',
  },
  {
    q: '¿Qué pasa después del lanzamiento?',
    a: 'Seguimos acompañándote con soporte, mejoras y nuevas etapas según lo que tu proyecto necesite.',
  },
];
