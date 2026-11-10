/**
 * Costa Rican Spanish. Formal usted, spoken and professional — not Castilian
 * bureaucracy and not marketing English calques.
 */
export const es = {
  meta: {
    siteShortDescription: 'Sitio, cuidado mensual y asistente de WhatsApp en Costa Rica',
    siteDescription:
      'Construimos y cuidamos el sitio de su negocio, con perfil de Google, tienda con SINPE Móvil y un asistente de WhatsApp cuando hace falta. Para empresas y organizaciones en Costa Rica.',
    ogImageAlt:
      'Ilustración de una tienda en línea en un marco de navegador: ejemplo de oficio, no el sitio de un cliente.',
    skipToContent: 'Saltar al contenido',
    homeAria: '{name}, inicio',
    /** Fallback for a founder without a listed title. */
    founderJobTitle: 'Cofundador',
    /** Same order as `site.founders`. */
    founderJobTitles: ['Cofundador y desarrollador full-stack', 'Cofundador'],
    knowsAbout: [
      'Desarrollo web',
      'Automatización de procesos',
      'Integración de WhatsApp Business',
      'Comercio electrónico',
      'SEO local',
      'Optimización para búsqueda con IA',
    ],
    servicesCatalogName: 'Servicios de Foresta Works',
    whatsappMessage:
      'Hola, Foresta Works. Me interesa conversar sobre un sitio web y automatización para mi negocio.',
    emailSubject: 'Consulta desde el sitio web',
  },
  nav: {
    primaryLabel: 'Principal',
    menuLabel: 'Menú',
    menuOpen: 'Menú',
    menuClose: 'Cerrar',
    footerLabel: 'Pie de página',
    relatedPages: 'Páginas relacionadas',
    breadcrumb: 'Migas de pan',
    language: 'Idioma',
    languageEs: 'Español',
    languageEn: 'English',
    home: 'Inicio',
    previous: 'Anterior',
    next: 'Siguiente',
    letsTalk: 'Conversemos',
    newWindow: ' (abre en una ventana nueva)',
    items: {
      servicios: {
        label: 'Servicios',
        summary: 'Sitio y Google, tienda y pagos, asistente de WhatsApp y cuidado.',
      },
      automatizacion: {
        label: 'Automatización',
        summary: 'Un asistente de WhatsApp para lo que usted ya responde.',
      },
      proceso: {
        label: 'Proceso',
        summary: 'Cómo trabajamos, de la conversación al mes a mes.',
      },
      nosotros: {
        label: 'Nosotros',
        summary: 'Por qué existe Foresta y cómo trabaja con usted.',
      },
      contacto: {
        label: 'Contacto',
        summary: 'Una conversación sobre su operación.',
      },
    },
  },
  pages: {
    servicios: {
      title: 'Servicios: sitio web y Google, tienda y pagos, asistente de WhatsApp',
      description:
        'Sitio web con perfil de Google, tienda o reservas con tarjeta y SINPE Móvil, asistente de WhatsApp y cuidado mensual. Para empresas y organizaciones en Costa Rica.',
      eyebrow: 'Servicios',
      heading: 'El sitio, lo que vende y lo que responde.',
      lede: 'Para empresas, negocios y organizaciones. Cada trabajo empieza con una conversación y un alcance por escrito.',
    },
    automatizacion: {
      title: 'Automatización de WhatsApp para lo que usted ya responde',
      description:
        'Un asistente de WhatsApp para preguntas, fuera de horario, citas o pedidos, recordatorios y reseñas. El alcance se escribe antes de encenderlo.',
      eyebrow: 'Automatización',
      heading: 'Un asistente de WhatsApp para lo que usted ya responde.',
      lede: 'El alcance se escribe antes de encenderlo.',
      closeTitle: 'Cuéntenos cómo atiende hoy.',
      closeText: 'Vemos si el asistente cabe en su operación. Si seguimos, el alcance va por escrito.',
    },
    proceso: {
      title: 'Cómo trabajamos',
      description:
        'Conversación, propuesta por escrito, construcción, puesta en marcha y trabajo mes a mes. El dominio, las cuentas y el código quedan a su nombre desde el primer día.',
      eyebrow: 'Proceso',
      heading: 'Sin sorpresas: una conversación, una propuesta por escrito y trabajo mes a mes.',
      lede: 'La construcción deja el sitio listo. El cuidado mensual lo mantiene, lo mejora y le reporta.',
    },
    nosotros: {
      title: 'Sobre Foresta',
      description:
        'Foresta cuida el sitio de negocios en Costa Rica. El trabajo es técnico y queda a su nombre. No somos una agencia de mercadeo.',
      eyebrow: 'Nosotros',
      heading: 'Cuidamos el sitio de su negocio.',
      lede: 'Para empresas y organizaciones en Costa Rica. El sitio queda a su nombre.',
      closeTitle: 'Conversemos sobre su negocio.',
    },
    contacto: {
      title: 'Contacto',
      description:
        'Cuéntenos cómo funciona su operación. La conversación no tiene costo ni compromiso. Si seguimos, recibe una propuesta por escrito: el alcance, los tiempos y lo que se paga aparte.',
      eyebrow: 'Contacto',
      heading: 'Cuéntenos cómo funciona su operación hoy.',
      lede: 'La conversación no tiene costo ni compromiso. Si seguimos, recibe una propuesta por escrito: el alcance, los tiempos y lo que se paga aparte.',
    },
  },
  notFound: {
    title: 'Página no encontrada',
    description: 'La página que busca no existe o cambió de dirección.',
    eyebrow: 'Página no encontrada',
    heading: 'Esta dirección no existe o cambió de lugar.',
    text: 'Puede volver al inicio o escribirnos si llegó aquí desde un enlace que debería funcionar.',
    home: 'Volver al inicio',
    contact: 'Contacto',
  },
  hero: {
    place: 'Costa Rica · 9,75° N  83,75° O',
    offer: 'Sitios web · Cuidado mensual · Asistente de WhatsApp',
    title: 'Transformamos su negocio para una nueva era de',
    titleEm: 'inteligencia artificial',
    lede: 'Un estudio basado en Costa Rica con la misión de entregar infraestructura digital moderna a negocios.',
    startConversation: 'Conversemos',
    writeWhatsApp: 'Conversemos',
    cueSite: 'Sitio web',
    cueAuto: 'Automatización',
    cueCare: 'Cuidado',
  },
  chatExample: {
    label: 'Ejemplo de conversación',
    business: 'Salón de belleza',
    status: 'Fuera de horario · asistente',
    typing: 'escribiendo…',
    messages: [
      { from: 'client', time: '21:47', text: 'Hola, ¿mañana abren? ¿Tienen campo para un corte a las 10?' },
      { from: 'assistant', time: '21:47', text: 'Hola. Mañana abrimos de 9:00 a 18:00 y a las 10:00 hay espacio. ¿A nombre de quién lo apartamos?' },
      { from: 'client', time: '21:48', text: 'Ana Mora' },
      { from: 'assistant', time: '21:48', text: 'Listo, Ana. Queda apartado para mañana a las 10:00. El salón se lo confirma a primera hora.' },
    ],
    caption: 'Responde con lo que usted aprobó y le deja la cita para confirmar.',
  },
  positioning: {
    eyebrow: 'El punto de partida',
    statement:
      'Muchos negocios atienden por WhatsApp, con un catálogo suelto y sin un sitio al día.',
    statementEm: 'Nosotros lo ordenamos.',
    p1: 'El horario, el contacto y la respuesta suelen vivir en lugares distintos.',
    p2: 'El cobro se resuelve a mano: un SINPE Móvil y una captura de pantalla en el chat.',
    p3: 'No somos una agencia de mercadeo, ni llevamos sus redes ni trabajamos con influencers.',
    audienceTitle: 'Algunos ejemplos',
    audiences: [
      'Empresas y organizaciones',
      'Comercios y tiendas',
      'Restaurantes y cafeterías',
      'Clínicas y consultorios',
      'Servicios profesionales',
      'Talleres y servicios técnicos',
    ],
    outcomesLabel: 'Resultados concretos',
    outcomes: [
      'Responda a sus clientes mientras está ocupado o cerrado.',
      'Que lo encuentren: servicios, horario y contacto claros en Google y en su sitio.',
      'Menos citas perdidas y menos seguimiento manual.',
      'Cobre en línea con tarjeta o SINPE Móvil, sin perseguir comprobantes.',
    ],
  },
  homeServices: {
    label: 'Servicios',
    title: 'Lo que hacemos por su negocio.',
    seeAll: 'Ver los servicios',
  },
  homeProcess: {
    label: 'Cómo trabajamos',
    title: 'De la conversación al trabajo de cada mes.',
    seeProcess: 'Ver el proceso',
  },
  cta: {
    eyebrow: 'Empecemos',
    title: 'El siguiente paso es una conversación.',
    text: 'Hablamos de su operación. Si seguimos, la propuesta va por escrito.',
    goContact: 'Ir a contacto',
    otherContact: 'Otras formas de contacto',
    writeWhatsApp: 'Escríbanos por WhatsApp',
  },
  services: {
    overviewTitle: 'Tres servicios sobre una misma base.',
    talk: 'Conversemos sobre este servicio.',
    includesLabel: 'Incluye',
    separateLabel: 'Se paga aparte, a su nombre',
    baseLabel: 'La base',
    baseTitle: 'Todo lo que construimos sigue con cuidado mensual.',
    unsure: 'Si todavía no sabe por dónde empezar.',
    items: {
      sitio: {
        name: 'Sitio web y perfil de Google',
        summary: 'Un sitio claro en el celular y su negocio en Google Maps, con horario y contacto al día.',
        purpose: 'Que lo encuentren y le escriban.',
        support:
          'Para empresas, negocios y organizaciones cuyos servicios y horario viven en mensajes o en un perfil suelto. Quien lo busca en Google o en el mapa no llega a una página al día.',
        includes: [
          'Diseño y construcción para celular y computadora',
          'Perfil de Google Business verificado: horario, fotos, servicios y ubicación',
          'Botón y formulario que llegan a su WhatsApp o a su correo',
          'SEO local y un texto que una herramienta de IA puede leer',
        ],
        separate: ['El dominio .cr o .com, registrado a su nombre'],
      },
      tienda: {
        name: 'Tienda, pagos y reservas',
        summary: 'Para vender o reservar en línea y cobrar con tarjeta o SINPE Móvil.',
        purpose: 'Que le puedan pagar sin pasar por el chat.',
        support:
          'Para negocios que hoy cobran por SINPE Móvil y confirman con una captura de pantalla, o que llevan pedidos, reservas o inventario a mano.',
        includes: [
          'Tienda en línea, catálogo o agenda de reservas',
          'Cobro con tarjeta y SINPE Móvil, en colones o dólares',
          'Pedidos y reservas que le llegan ordenados',
          'SEO técnico: velocidad y datos estructurados',
        ],
        separate: [
          'La comisión de la pasarela de pago en cada venta',
          'El plan de la plataforma, si la tienda va en Shopify',
          'Fotos o video nuevos, si no tiene material',
        ],
      },
      asistente: {
        name: 'Asistente de WhatsApp',
        summary: 'Responde lo que usted ya responde, dentro de un alcance escrito.',
        purpose: 'WhatsApp, solo con lo que usted aprobó.',
        support:
          'Para quienes contestan las mismas preguntas por WhatsApp, también con la operación cerrada. Funciona junto a su sitio; no lo reemplaza.',
        includes: [
          'Preguntas frecuentes que usted define',
          'Mensajes fuera de horario, con aviso para usted',
          'Datos para citas o pedidos, que usted confirma',
          'Recordatorios y solicitudes de reseña',
        ],
        separate: ['Los cargos de WhatsApp por mensaje, que Meta factura a su cuenta'],
      },
      cuidado: {
        name: 'Cuidado mensual',
        summary: 'Lo que construimos no se queda quieto: lo mantenemos, lo actualizamos y le reportamos cada mes.',
        purpose: '',
        support: '',
        includes: [
          'Hosting, certificado de seguridad, respaldos y actualizaciones',
          'Cambios de textos, horario, fotos o precios',
          'Perfil de Google al día',
          'Revisión y ajuste del asistente, si lo tiene',
          'Reporte breve por escrito y soporte por WhatsApp o correo',
        ],
        separate: [] as string[],
      },
    },
  },
  automation: {
    doesNot: 'Lo que no hace',
    workLabel: 'Cómo se arma',
    workTitle: 'De su operación al mensaje.',
    work: [
      {
        title: 'Entender',
        text: 'Vemos cómo atiende hoy: preguntas, horario, citas y pedidos.',
      },
      {
        title: 'Elegir',
        text: 'Marcamos lo que ya responde a mano y puede pasar al asistente.',
      },
      {
        title: 'Conectar',
        text: 'Lo escribimos, lo unimos a su sitio y lo encendemos.',
      },
      {
        title: 'Ajustar',
        text: 'Revisamos lo que no pudo resolver y afinamos lo escrito.',
      },
    ],
    hours: {
      label: 'Fuera de horario',
      title: 'Su negocio cierra. La conversación sigue.',
      text: 'Usted atiende en su horario. Fuera de él, el asistente responde lo que usted aprobó y le deja todo anotado para la mañana.',
      open: 'Su horario',
      openValue: '9:00 a 18:00, por ejemplo',
      assistant: 'El asistente',
      assistantValue: 'El resto del día y los fines de semana',
      arrival: 'Llega un mensaje',
      arrivalValue: '21:47, como el del ejemplo de arriba',
    },
    flowLabel: 'Lo que hace',
    flowTitle: 'Un mensaje, dentro de lo que usted aprobó.',
    /** One short exchange per capability, in the same order as stepTitles. */
    examples: [
      [
        { from: 'client', text: '¿Aceptan SINPE Móvil?' },
        { from: 'assistant', text: 'Sí. También tarjeta y efectivo en el local.' },
      ],
      [
        { from: 'client', text: '¿Todavía están abiertos?' },
        { from: 'assistant', text: 'Ya cerramos. Su mensaje quedó anotado y mañana a las 9:00 le responde el equipo.' },
      ],
      [
        { from: 'client', text: 'Quiero dos casados para recoger a las 12.' },
        { from: 'assistant', text: 'Anotado: dos casados a las 12:00. Ya le confirmamos.' },
      ],
      [
        { from: 'assistant', text: 'Le recordamos su cita de mañana a las 10:00. ¿Nos confirma?' },
        { from: 'client', text: 'Confirmado, gracias.' },
      ],
    ] as Array<Array<{ from: 'client' | 'assistant'; text: string }>>,
    stepTitles: [
      'Lo que puede decir',
      'Fuera de horario',
      'Cita o pedido',
      'Recordatorio y reseña',
    ],
    planTitle: 'Junto a su sitio.',
    planText: 'El asistente se escribe antes de encenderse. Funciona junto a su sitio; no lo reemplaza.',
    planLink: 'Ver el servicio',
    doesItems: [
      'Responde preguntas frecuentes que usted define: horario, ubicación, servicios y formas de pago.',
      'Recibe mensajes fuera de horario, confirma al cliente que fueron recibidos y se los notifica a usted.',
      'Toma los datos para una cita o un pedido y los organiza para que usted confirme.',
      'Envía recordatorios de cita y solicitudes de reseña en el momento acordado.',
    ],
    doesNotItems: [
      'No inventa respuestas fuera de lo que usted aprobó.',
      'No cierra ventas ni toma decisiones por usted.',
      'No reemplaza la atención humana: cuando no sabe, deriva a una persona.',
      'No se instala y se olvida: se revisa y se ajusta con el uso.',
    ],
  },
  process: {
    stepsTitle: 'Etapas del trabajo',
    /** Decorative scenes beside each step, in step order. */
    scenes: {
      example: 'Ejemplo',
      chat: [
        { from: 'client', text: 'Tenemos una panadería y los pedidos por WhatsApp se nos pierden.' },
        { from: 'us', text: 'Cuénteme un día normal: ¿quién responde y a qué hora?' },
      ] as Array<{ from: 'client' | 'us'; text: string }>,
      proposal: 'Propuesta',
      proposalRows: ['Alcance', 'Tiempos', 'Límites', 'Se paga aparte'],
      review: '¿Podemos cambiar esta foto?',
      launch: [
        { label: 'Dominio', optional: false },
        { label: 'Hosting', optional: false },
        { label: 'Perfil de Google Business', optional: false },
        { label: 'Pagos en línea', optional: true },
        { label: 'WhatsApp Business', optional: true },
        { label: 'Sesión con su equipo', optional: false },
      ],
      optional: 'si aplica',
      live: 'En línea',
      rings: 'Cada mes, un anillo más.',
      monthly: ['Mantenimiento', 'Cambios', 'SEO', 'Reporte'],
    },
    own: {
      label: 'Desde el primer día',
      stamp: 'A su nombre',
      items: ['Dominio', 'Cuentas', 'Código', 'Accesos'],
    },
    note: 'Todo lo que construimos es suyo: el dominio, las cuentas, el código y los accesos quedan a su nombre desde el primer día.',
    steps: [
      {
        title: 'Conversación',
        text: 'Hablamos por WhatsApp o en una llamada corta sobre cómo funciona su negocio hoy y qué le quita tiempo.',
      },
      {
        title: 'Propuesta por escrito',
        text: 'Le enviamos el alcance, los tiempos, los límites y lo que se paga aparte: el dominio, la comisión de pagos o los cargos de WhatsApp, cuando aplican.',
      },
      {
        title: 'Construcción',
        text: 'Construimos el sitio, las integraciones o el asistente, según la propuesta. Usted revisa avances reales, no maquetas.',
      },
      {
        title: 'Puesta en marcha',
        text: 'Dominio, hosting, Perfil de Google Business y, si aplica, la pasarela de pago y WhatsApp Business. Una sesión para que su equipo sepa usarlo. Ahí empieza el cuidado mensual.',
      },
      {
        title: 'Mes a mes',
        text: 'Mantenimiento, cambios acordados, SEO y el texto para herramientas de IA, un reporte y, si aplica, el ajuste del asistente.',
      },
    ],
  },
  about: {
    statementTitle: 'Un trabajo de cerca.',
    origin: 'Foresta Works fue fundada por {name}.',
    and: 'y',
    statement: 'Conversamos, dejamos el alcance por escrito y usted ve avances reales.',
    statementMore:
      'Preferimos pocas herramientas, bien conectadas, hechas para durar y para quien las usa cada día.',
    photoAlt:
      'Esquina de una casa: muro de piedra apilada junto a una pared de repello claro, bajo un techo de lámina oscura y árboles al fondo.',
    principlesLabel: 'Compromisos',
    principlesTitle: 'Así queda el acuerdo.',
    principles: [
      {
        title: 'A su nombre',
        text: 'El dominio, las cuentas, el código y los accesos quedan a su nombre desde el primer día.',
      },
      {
        title: 'Trabajo técnico',
        text: 'Que lo encuentren, que puedan pagar y que reciban respuesta.',
      },
      {
        title: 'Costos a la vista',
        text: 'Lo que se paga a terceros (dominio, comisión de pagos, WhatsApp) va aparte, a su nombre y sin recargo.',
      },
      {
        title: 'No es mercadeo',
        text: 'No somos una agencia, ni llevamos sus redes ni trabajamos con influencers.',
      },
    ],
    togetherLabel: 'Con usted',
    togetherTitle: 'El alcance se ajusta. El avance se ve.',
    together: 'Trabajamos de cerca y con claridad. El alcance se escribe para su negocio.',
  },
  contact: {
    methodsTitle: 'Formas de contacto',
    email: 'Correo',
    hours: 'Horario',
    hoursValue: null as string | null,
    comingSoon: 'Se publicará próximamente.',
    prepareTitle: 'Qué conviene contar',
    prepareItems: [
      'Cómo atiende hoy: sitio, WhatsApp, citas o pedidos.',
      'Qué quiere resolver primero: que lo encuentren, que pueda vender o que respondan fuera de horario.',
      'Cómo cobra hoy: SINPE Móvil, tarjeta, transferencia o en el local.',
    ],
    openChat: 'Abrir conversación',
    writeWhatsApp: 'Escríbanos por WhatsApp',
    formLabel: 'O escríbanos desde aquí',
    placeholder:
      'Por ejemplo: tengo una clínica dental, atendemos citas por WhatsApp y se nos pierden mensajes fuera de horario.',
    hint: 'Al enviar se abre WhatsApp con su mensaje listo. Este sitio no guarda lo que escribe.',
    error: 'Cuéntenos un poco más: al menos 20 caracteres.',
    submit: 'Enviar por WhatsApp',
  },
};
