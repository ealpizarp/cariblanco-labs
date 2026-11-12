import type { es } from './es';

/**
 * English for businesses and organizations in Costa Rica. Natural, not a calque.
 */
export const en = {
  meta: {
    siteShortDescription: 'Websites, automation, and monthly care in Costa Rica',
    siteDescription:
      'We build and look after your business’s website, with a Google profile, a store that takes SINPE Móvil, and AI automation when it is needed. For businesses and organizations in Costa Rica. The build is quoted, and third-party costs are billed to you directly.',
    ogImageAlt: 'Illustration of an online shop in a browser frame: an example of the craft, not a client site.',
    skipToContent: 'Skip to content',
    homeAria: '{name}, home',
    /** Fallback for a founder without a listed title. */
    founderJobTitle: 'Co-founder',
    /** Same order as `site.founders`. */
    founderJobTitles: ['Co-founder · Software engineer', 'Co-founder · Mechatronics engineer'],
    knowsAbout: [
      'Web development',
      'Process automation',
      'WhatsApp Business integration',
      'E-commerce',
      'Local SEO',
      'Optimization for AI search',
    ],
    servicesCatalogName: 'Cariblanco Labs services',
    whatsappMessage:
      'Hello, Cariblanco Labs. I would like to talk about a website and automation for my business.',
    emailSubject: 'Inquiry from the website',
  },
  footer: {
    write: 'Message us on WhatsApp',
  },
  nav: {
    primaryLabel: 'Primary',
    menuLabel: 'Menu',
    menuOpen: 'Menu',
    menuClose: 'Close',
    footerLabel: 'Footer',
    breadcrumb: 'Breadcrumb',
    language: 'Language',
    languageEs: 'Español',
    languageEn: 'English',
    home: 'Home',
    letsTalk: "Let's talk",
    /** Header and menu button: goes to the contact page. */
    contactCta: 'Contact',
    newWindow: ' (opens in a new window)',
    items: {
      servicios: {
        label: 'Services',
        summary: 'Website and Google, store, automation, email, custom systems, and more.',
      },
      automatizacion: {
        label: 'Automation',
        summary: 'Intelligent assistant, appointments, invoicing, billing, and more.',
      },
      proceso: {
        label: 'Process',
        summary: 'How we work, from the first conversation to month after month.',
      },
      nosotros: {
        label: 'About',
        summary: 'Why Cariblanco Labs exists, and how we work with you.',
      },
      contacto: {
        label: 'Contact',
        summary: 'A conversation about your operation.',
      },
    },
  },
  pages: {
    servicios: {
      title: 'Services: website, store, automation, and more',
      description:
        'A website with a Google profile, a store or bookings that take card and SINPE Móvil, an assistant and automation, redesign, professional email, custom systems, analytics, security, AI training, and monthly care. For companies and organizations in Costa Rica.',
      eyebrow: 'Services',
      heading: 'What we build, connect, and look after.',
      lede: 'The main services, the ones that build on them, and the care that keeps them going. For companies, businesses, and organizations; every job starts with a conversation and a written scope.',
    },
    automatizacion: {
      title: 'Automation and AI for your business',
      description:
        'Intelligent assistant, appointments and reminders, electronic invoicing, billing, orders, customer follow-up, reviews, and automatic reports. The scope is written before anything is turned on.',
      eyebrow: 'Automation',
      heading: 'What your business does by hand every day, done on its own.',
      lede: 'An intelligent assistant, appointments, invoicing, billing, orders, and reports. The scope is written before anything is turned on.',
      closeTitle: 'Tell us what takes up your time.',
      closeText: 'We look at what can be automated in your operation. If we continue, the scope goes in writing.',
    },
    proceso: {
      title: 'How we work',
      description:
        'A conversation, a written proposal, the build, launch, and month-to-month work. The domain, accounts, and code are in your name from day one.',
      eyebrow: 'Process',
      heading: 'No surprises: a conversation, a written proposal, and work every month.',
      lede: 'The build gets the site ready. Monthly care keeps it, improves it, and reports on it.',
    },
    nosotros: {
      title: 'About Cariblanco Labs',
      description:
        'Cariblanco Labs looks after websites for businesses in Costa Rica. The work is technical, and it stays in your name. We are not a marketing agency.',
      eyebrow: 'About',
      heading: "We look after your business's website.",
      lede: 'For businesses and organizations in Costa Rica. The site stays in your name.',
      closeTitle: "Let's talk about your business.",
    },
    contacto: {
      title: 'Contact',
      description:
        'Tell us how your operation works. The conversation has no cost and no commitment. If we continue, you receive a written proposal: the scope, the timing, and what is billed separately.',
      eyebrow: 'Contact',
      heading: 'Tell us how your operation works today.',
      lede: 'The conversation has no cost and no commitment. If we continue, you receive a written proposal: the scope, the timing, and what is billed separately.',
    },
  },
  notFound: {
    title: 'Page not found',
    description: 'The page you are looking for does not exist or has moved.',
    eyebrow: 'Page not found',
    heading: 'This address does not exist or has moved.',
    text: 'Our cariblanco has already searched for it from branch to branch. You can go back home, or write to us if you followed a link that should still work.',
    home: 'Back to home',
    contact: 'Contact',
  },
  hero: {
    place: 'Costa Rica',
    offer: 'Websites · Automation · Monthly care',
    title: 'We transform your business for a new era of',
    titleEm: 'artificial intelligence.',
    lede: 'A studio based in Costa Rica, with the mission of delivering modern digital infrastructure to businesses.',
    startConversation: "Let's talk",
    writeWhatsApp: "Let's talk",
    cueSite: 'Website',
    cueAuto: 'Automation',
    cueCare: 'Care',
  },
  /** The automation page's header: one example day, as a log. */
  automationLog: {
    label: 'An example day',
    title: 'Today’s log',
    status: 'Seven tasks, none by hand',
    caption: 'Each line is one of the automations below.',
    rows: [
      { id: 'reportes', time: '07:00', text: 'Weekly summary sent to your email' },
      { id: 'citas', time: '08:30', text: 'Reminder sent: Luis Vargas, appointment at 10:00' },
      { id: 'facturacion', time: '09:12', text: 'Electronic invoice issued and sent to the customer' },
      { id: 'cobros', time: '11:40', text: 'Payment received by link: ₡18,500' },
      { id: 'pedidos', time: '14:05', text: 'Order from the site logged; 3 left in stock' },
      { id: 'resenas', time: '17:30', text: 'Review requested from today’s customers' },
      { id: 'asistente', time: '21:47', text: 'The assistant booked an appointment: Ana Mora, tomorrow at 10:00' },
    ],
  },
  positioning: {
    eyebrow: 'Where we start',
    statement: 'Many businesses serve people on WhatsApp, with a loose catalog and a website that is not current.',
    statementEm: 'We put that in order.',
    p1: 'Hours, contact, and replies tend to live in different places.',
    p2: 'Payment gets settled by hand: a SINPE Móvil transfer and a screenshot in the chat.',
    p3: 'We are not a marketing agency, and we do not run your social media or work with influencers.',
    audienceTitle: 'A few examples',
    audiences: [
      'Businesses and organizations',
      'Shops and stores',
      'Restaurants and cafés',
      'Clinics and practices',
      'Professional services',
      'Workshops and technical trades',
    ],
    outcomesLabel: 'Concrete outcomes',
    outcomes: [
      'Reply to customers while you are busy or closed.',
      'Be findable: services, hours, and contact, clear on Google and on your site.',
      'Fewer missed appointments and less manual follow-up.',
      'Get paid online by card or SINPE Móvil, without chasing receipts.',
    ],
  },
  showcase: {
    label: 'On the phone',
    title: 'What your customer sees.',
    text: 'A clear, fast site on the phone: it shows up on Google, explains what you offer, and opens the conversation on WhatsApp.',
    example: 'Example',
    business: 'Clínica Valle Sereno',
    tagline: 'Cosmetic and general dentistry in Escazú.',
    open: 'Open · closes at 6 p.m.',
    servicesLabel: 'Services',
    services: ['Smile design', 'Dental implants', 'Clear aligners'],
    locationLabel: 'Location',
    location: 'Escazú, San José',
    directions: 'Directions',
    hoursLabel: 'Hours',
    hours: 'Monday to Friday, 8 a.m. to 6 p.m.',
    book: 'Book on WhatsApp',
    call: 'Call',
    callouts: [
      'Shows up on Google, with hours kept current',
      'Services, location, and hours, made clear',
      'One tap to message you on WhatsApp',
    ],
  },
  homeServices: {
    label: 'Services',
    title: 'What we do for your business.',
    seeAll: 'See the services',
    /** Technical tags on each lead card, by service id. */
    tags: {
      sitio: ['Local SEO', 'Google Business', 'Structured data'],
      tienda: ['SINPE Móvil', 'Card payments', 'Bookings'],
      asistente: ['AI', 'Appointments and invoicing', 'Billing and reports'],
    } as Record<string, string[]>,
  },
  homeProcess: {
    label: 'How we work',
    title: 'From the conversation to the work of each month.',
    seeProcess: 'See the process',
  },
  cta: {
    eyebrow: "Let's begin",
    title: 'The next step is a conversation.',
    text: 'We talk about your operation. If we continue, the proposal is in writing.',
    goContact: 'Go to contact',
    otherContact: 'Other ways to reach us',
    writeWhatsApp: 'Write to us on WhatsApp',
  },
  services: {
    talk: 'Let’s talk about this service.',
    automationLink: 'See every automation',
    includesLabel: 'Includes',
    separateLabel: 'Paid separately, in your name',
    baseLabel: 'The base',
    baseTitle: 'Everything we build continues with monthly care.',
    unsure: 'If you are not sure where to start yet.',
    moreLabel: 'More services',
    moreTitle: 'What else we do.',
    moreText: 'Services that build on the ones above or stand on their own. Each with its scope in writing.',
    startLabel: 'To begin',
    startText: 'Start with a check-up.',
    startCta: 'Ask for a check-up',
    faqLabel: 'Frequently asked questions',
    faqTitle: 'What people usually ask us.',
    faq: [
      {
        q: 'How much does it cost?',
        a: 'It depends on the scope. After we talk, we send you a written proposal with the price, the timeline, and what is paid separately. No surprises later.',
      },
      {
        q: 'How long does it take?',
        a: 'That also depends on what is built and what it connects to. The proposal gives the dates in writing, and along the way you see real progress, not mock-ups.',
      },
      {
        q: 'Can I start with one part?',
        a: 'Yes. Many clients start with the site and add the store or an automation later. Everything is built to connect.',
      },
      {
        q: 'What do I need to have ready?',
        a: 'Nothing technical. Knowing how your business works is enough; we go through the text, photos, and access together.',
      },
      {
        q: 'What if I want to leave one day?',
        a: 'Everything is in your name from day one: domain, accounts, code, and access. You take it all with you, without asking anyone.',
      },
    ],
    items: {
      sitio: {
        name: 'Website and Google profile',
        summary: 'A clear site on mobile and your business on Google Maps, with hours and contact kept current.',
        purpose: 'So people find you and write to you.',
        support:
          'For companies, businesses, and organizations whose services and hours live in messages or on a loose profile. People who look you up on Google or the map do not reach a current page.',
        includes: [
          'Design and build for mobile and desktop',
          'A verified Google Business Profile: hours, photos, services, and location',
          'A button and form that reach your WhatsApp or email',
          'Local SEO and copy an AI tool can read',
        ],
        separate: ['The .cr or .com domain, registered in your name'],
      },
      tienda: {
        name: 'Store, payments, and bookings',
        summary: 'To sell or take bookings online and get paid by card or SINPE Móvil.',
        purpose: 'So people can pay you without going through the chat.',
        support:
          'For businesses that take SINPE Móvil today and confirm it with a screenshot, or that handle orders, bookings, or stock by hand.',
        includes: [
          'An online store, catalog, or booking calendar',
          'Card and SINPE Móvil payments, in colones or dollars',
          'Orders and bookings that reach you organized',
          'Technical SEO: speed and structured data',
        ],
        separate: [
          'The payment gateway’s commission on each sale',
          'The platform plan, if the store runs on Shopify',
          'New photos or video, if you have no material',
        ],
      },
      asistente: {
        name: 'Assistant and automation',
        summary: 'It answers what you already answer and runs what repeats on its own, within a written scope.',
        purpose: 'What repeats, done on its own.',
        support:
          'For anyone who answers the same questions, chases payments, or retypes data by hand every day. Many start with an assistant on their site, WhatsApp, or social media, and add the rest. Always within what you approved, and alongside your site: it does not replace it.',
        includes: [
          'An intelligent assistant, after hours too, that hands off to a person when it does not know',
          'Appointments, reminders, and review requests',
          'Electronic invoicing and billing',
          'Orders, customer follow-up, and reports',
        ],
        separate: [
          'Per-message charges from each channel, such as WhatsApp, billed to your account',
          'The plan for any tool it connects to, such as your invoicing system, if it has a cost',
        ],
      },
      rediseno: {
        name: 'Redesign and migration',
        summary: 'Your current site, on Wix, WordPress, or anything else, moved to a new, fast one without losing what Google already knows about you.',
        purpose: '',
        support: '',
        includes: [
          'A new design with your existing content',
          'Redirects so you keep your Google rankings',
          'Domain and email untouched during the move',
        ],
        separate: [],
      },
      correo: {
        name: 'Professional email and tools',
        summary: 'Email on your own domain with Google Workspace or Microsoft 365, with your team, calendar, and files in order.',
        purpose: '',
        support: '',
        includes: [
          'An account on your domain for each person',
          'Shared calendars and files',
          'The email you already use, moved over without losing anything',
        ],
        separate: ['The Google Workspace or Microsoft 365 license, per user'],
      },
      medida: {
        name: 'Custom systems',
        summary: 'When no tool fits: a customer portal, a quote calculator, or an internal dashboard, built for how you operate.',
        purpose: '',
        support: '',
        includes: [
          'A customer portal or a dashboard for your team',
          'Quote calculators and forms that do the math',
          'Connected to your data and your tools',
        ],
        separate: [],
      },
      medicion: {
        name: 'Measurement and analytics',
        summary: 'Know where your customers come from and what works: measurement set up properly and a dashboard that makes sense.',
        purpose: '',
        support: '',
        includes: [
          'Google Analytics and Search Console',
          'WhatsApp clicks, calls, and forms measured',
          'A monthly dashboard in plain language',
        ],
        separate: [],
      },
      seguridad: {
        name: 'Account security',
        summary: 'Passwords, two-step verification, and backups, so one lost account does not stop your business.',
        purpose: '',
        support: '',
        includes: [
          'An access review: who gets into what',
          'Two-step verification on email, social media, and banking',
          'Backups of what you cannot afford to lose',
        ],
        separate: [],
      },
      capacitacion: {
        name: 'AI training',
        summary: 'Hands-on workshops so your team uses AI and its tools in everyday work, with good judgment.',
        purpose: '',
        support: '',
        includes: [
          'Workshops online or at your office',
          'Exercises built on your own business cases',
          'A written guide for afterwards',
        ],
        separate: [],
      },
      diagnostico: {
        name: 'Digital check-up',
        summary: 'We review your site, your Google profile, and how you serve people today, and tell you in writing what to do first.',
        purpose: '',
        support: '',
        includes: [
          'A review of your site, its speed, and your presence on Google',
          'What is done by hand today and could be automated',
          'A report with priorities and an estimate for each',
        ],
        separate: [],
      },
      cuidado: {
        name: 'Monthly care',
        summary: 'What we build does not sit still: we maintain it, update it, and report back every month.',
        purpose: '',
        support: '',
        includes: [
          'Hosting, security certificate, backups, and updates',
          'Changes to copy, hours, photos, or prices',
          'Google profile kept current',
          'Review and adjustment of your automations, if you have any',
          'A short written report and support by WhatsApp or email',
        ],
        separate: [] as string[],
      },
    },
  },
  automation: {
    doesNot: 'What no automation does',
    catalog: {
      label: 'Solutions',
      title: 'What we can automate.',
      text: 'We start with what takes up most of your time. Every automation is written before it is turned on, stays in your name, and is reviewed with use.',
      detail: 'See the assistant in detail',
      moreTitle: 'Have another task that repeats?',
      moreText: 'If it is done the same way every time, it can probably be automated. Tell us which one, and we will tell you in writing whether it is worth it.',
      moreLink: 'Tell us about the task',
      items: [
        {
          id: 'asistente',
          title: 'Intelligent assistant',
          text: 'Answers the usual questions, takes the details for an appointment or an order, and hands off to a person when it does not know.',
          tags: ['AI', 'Site, WhatsApp and social'],
        },
        {
          id: 'citas',
          title: 'Appointments and reminders',
          text: 'Your customer books online, the appointment lands in your calendar, and the reminder goes out on its own the day before.',
          tags: ['Online booking', 'Google Calendar'],
        },
        {
          id: 'facturacion',
          title: 'Electronic invoicing',
          text: 'Every sale or payment issues its electronic invoice in your invoicing system and sends it to the customer, with no retyping.',
          tags: ['Hacienda', 'E-invoices'],
        },
        {
          id: 'cobros',
          title: 'Billing and payments',
          text: 'Payment links, monthly charges that run on their own, and friendly reminders for anyone with a balance due.',
          tags: ['Card', 'Subscriptions'],
        },
        {
          id: 'pedidos',
          title: 'Orders and inventory',
          text: 'Orders from your site and WhatsApp arrive in one list, stock is deducted, and you get a heads-up when something runs low.',
          tags: ['One list', 'Alerts'],
        },
        {
          id: 'clientes',
          title: 'Customers and follow-up',
          text: 'Every contact from your site, WhatsApp, or social media is recorded, with a reminder to follow up with anyone who asked and did not come back.',
          tags: ['CRM', 'Forms'],
        },
        {
          id: 'resenas',
          title: 'Reviews and repeat customers',
          text: 'After each visit a Google review is requested, and on agreed dates a message goes out to anyone who opted in.',
          tags: ['Google', 'Email and WhatsApp'],
        },
        {
          id: 'reportes',
          title: 'Reports for you',
          text: 'Every Monday you get a summary of sales, appointments, messages, and what is pending, without opening five apps.',
          tags: ['Weekly summary', 'Dashboards'],
        },
        {
          id: 'documentos',
          title: 'Documents and data',
          text: 'Quotes and contracts from a template, and supplier invoices read with AI and passed on to your accounting.',
          tags: ['AI', 'Templates'],
        },
      ],
    },
    workLabel: 'How it comes together',
    workTitle: 'Four steps, for any of them.',
    work: [
      {
        title: 'Understand',
        text: 'We look at how you work today: what repeats, what gets lost, and what takes up your time.',
      },
      {
        title: 'Choose',
        text: 'We mark what is done by hand and could run on its own, and start with what weighs most.',
      },
      {
        title: 'Connect',
        text: 'We write it, connect it to your site and your tools, and turn it on.',
      },
      {
        title: 'Adjust',
        text: 'We review how it works day to day and refine what is written.',
      },
    ],
    hours: {
      label: 'The assistant, after hours',
      title: 'Your business closes. The conversation goes on.',
      text: 'You serve people during your hours. Outside them, the assistant answers what you approved and leaves everything noted for the morning.',
      open: 'Your hours',
      openValue: '9:00 to 18:00, for example',
      assistant: 'The assistant',
      assistantValue: 'The rest of the day, and weekends',
      arrival: 'A message arrives',
      arrivalValue: '21:47, like the example above',
    },
    flowLabel: 'What the assistant does',
    flowTitle: 'One message, inside what you approved.',
    /** One short exchange per capability, in the same order as stepTitles. */
    examples: [
      [
        { from: 'client', text: 'Do you take SINPE Móvil?' },
        { from: 'assistant', text: 'Yes. Card and cash at the shop, too.' },
      ],
      [
        { from: 'client', text: 'Are you still open?' },
        { from: 'assistant', text: 'We have closed for today. Your message is noted, and the team will reply at 9:00 tomorrow.' },
      ],
      [
        { from: 'client', text: 'Two casados to pick up at 12, please.' },
        { from: 'assistant', text: 'Noted: two casados at 12:00. We will confirm shortly.' },
      ],
      [
        { from: 'assistant', text: 'A reminder of your appointment tomorrow at 10:00. Can you confirm?' },
        { from: 'client', text: 'Confirmed, thank you.' },
      ],
    ] as Array<Array<{ from: 'client' | 'assistant'; text: string }>>,
    stepTitles: [
      'What it may say',
      'After hours',
      'Appointment or order',
      'Reminder and review',
    ],
    planTitle: 'Alongside your site.',
    planText: 'Every automation is written before it is turned on and stays in your name. It works alongside your site and your tools; it does not replace them.',
    planLink: 'See the service',
    doesItems: [
      'Answers frequent questions you define: hours, location, services, and ways to pay.',
      'Takes messages after hours, confirms to the customer they were received, and notifies you.',
      'Collects the details for an appointment or an order and organizes them for you to confirm.',
      'Sends appointment reminders and review requests at the agreed time.',
    ],
    doesNotItems: [
      'It does not invent answers or data beyond what you approved.',
      'It does not make decisions for you: what matters comes to you to confirm.',
      'It does not replace your team: when something falls outside the plan, it alerts a person.',
      'It is not installed and forgotten: it is reviewed and adjusted with use.',
    ],
  },
  process: {
    stepsTitle: 'Stages of the work',
    /** Decorative scenes beside each step, in step order. */
    scenes: {
      example: 'Example',
      chat: [
        { from: 'client', text: 'We run a dental clinic and appointments on WhatsApp keep getting lost.' },
        { from: 'us', text: 'Walk me through a normal day: who answers, and when?' },
      ] as Array<{ from: 'client' | 'us'; text: string }>,
      proposal: 'Proposal',
      proposalRows: ['Scope', 'Timing', 'Limits', 'Billed separately'],
      review: 'Can we swap this photo?',
      launch: [
        { label: 'Domain', optional: false },
        { label: 'Hosting', optional: false },
        { label: 'Google Business Profile', optional: false },
        { label: 'Online payments', optional: true },
        { label: 'WhatsApp Business', optional: true },
        { label: 'Session with your team', optional: false },
      ],
      optional: 'if it applies',
      live: 'Live',
      rings: 'Each month, one more ring.',
      monthly: ['Maintenance', 'Changes', 'SEO', 'Report'],
    },
    own: {
      label: 'From day one',
      stamp: 'In your name',
      items: ['Domain', 'Accounts', 'Code', 'Access'],
    },
    note: 'Everything we build is yours: the domain, the accounts, the code, and the access stay in your name from day one.',
    steps: [
      {
        title: 'Conversation',
        text: 'We meet virtually to talk about how your business works today and what is taking your time.',
      },
      {
        title: 'Written proposal',
        text: 'We send the scope, the timing, the limits, and what is billed separately: the domain, payment fees, or WhatsApp charges, when they apply.',
      },
      {
        title: 'Build',
        text: 'We build the site, the integrations, or the assistant, according to the proposal. You review real progress, not mockups.',
      },
      {
        title: 'Launch',
        text: 'Domain, hosting, Google Business Profile, and, if they apply, the payment gateway and WhatsApp Business. A session so your team knows how to use it. That is when monthly care starts.',
      },
      {
        title: 'Month to month',
        text: 'Maintenance, agreed changes, SEO and copy for AI tools, a report, and, if it applies, an assistant adjustment.',
      },
    ],
  },
  about: {
    statementTitle: 'Work done closely.',
    origin: 'Cariblanco Labs was founded by {name}, engineers who graduated from the Tecnológico de Costa Rica.',
    and: 'and',
    statement: 'We talk, we put the scope in writing, and you see real progress.',
    statementMore:
      'We prefer a few tools, well connected, made to last and for the people who use them every day.',
    /** Tag on each founder portrait until real photos are added. */
    portraitPending: 'Photo coming soon',
    cariblanco: {
      label: 'The name',
      title: 'Why a cariblanco?',
      text: "The cariblanco (white-faced capuchin) is from here: it moves branch to branch through Costa Rica's forests. Three things about it are how we work.",
      traits: [
        {
          title: 'Curious',
          text: 'We ask until we understand how your business works today, before proposing anything.',
        },
        {
          title: 'Uses tools',
          text: 'We pick the right tool for each job, and it stays in your name.',
        },
        {
          title: 'Moves in a troop',
          text: 'We work closely with you and your team, not as a remote job from a distance.',
        },
      ],
    },
    principlesLabel: 'Commitments',
    principlesTitle: 'This is the agreement.',
    principles: [
      {
        title: 'In your name',
        text: 'The domain, the accounts, the code, and the access stay in your name from day one.',
      },
      {
        title: 'Technical work',
        text: 'So people can find you, pay, and get an answer.',
      },
      {
        title: 'Costs in the open',
        text: 'What third parties charge (domain, payment fees, WhatsApp) is billed separately, in your name, with no markup.',
      },
      {
        title: 'Not marketing',
        text: 'We are not an agency, and we do not run your social networks or work with influencers.',
      },
    ],
  },
  contact: {
    methodsTitle: 'Ways to reach us',
    email: 'Email',
    hours: 'Hours',
    hoursValue: null as string | null,
    prepareTitle: 'What helps to have ready',
    prepareItems: [
      'How you serve people today: website, WhatsApp, appointments, or orders.',
      'What you want solved first: being found, being able to sell, or answering after hours.',
      'How you take payment today: SINPE Móvil, card, bank transfer, or in person.',
    ],
    openChat: 'Open a conversation',
    writeWhatsApp: 'Write to us on WhatsApp',
    formLabel: 'Or write to us from here',
    placeholder:
      'For example: I have a dental clinic, we take appointments on WhatsApp, and we lose messages after hours.',
    hint: 'Sending opens WhatsApp with your message ready. This site does not store what you write.',
    error: 'Tell us a little more: at least 20 characters.',
    submit: 'Send on WhatsApp',
  },
} satisfies typeof es;
