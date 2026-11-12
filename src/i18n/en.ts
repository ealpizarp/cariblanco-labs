import type { es } from './es';

/**
 * English for businesses and organizations in Costa Rica. Natural, not a calque.
 */
export const en = {
  meta: {
    siteShortDescription: 'Website, monthly care, and an intelligent assistant in Costa Rica',
    siteDescription:
      'We build and look after your business’s website, with a Google profile, a store that takes SINPE Móvil, and an intelligent assistant when it is needed. For businesses and organizations in Costa Rica. The build is quoted, and third-party costs are billed to you directly.',
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
    servicesCatalogName: 'Pizote Labs services',
    whatsappMessage:
      'Hello, Pizote Labs. I would like to talk about a website and automation for my business.',
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
        summary: 'Website and Google, store and payments, an intelligent assistant, and care.',
      },
      automatizacion: {
        label: 'Automation',
        summary: 'An intelligent assistant for what you already answer.',
      },
      proceso: {
        label: 'Process',
        summary: 'How we work, from the first conversation to month after month.',
      },
      nosotros: {
        label: 'About',
        summary: 'Why Pizote Labs exists, and how we work with you.',
      },
      contacto: {
        label: 'Contact',
        summary: 'A conversation about your operation.',
      },
    },
  },
  pages: {
    servicios: {
      title: 'Services: website and Google, store and payments, intelligent assistant',
      description:
        'A website with a Google profile, a store or bookings that take card and SINPE Móvil, an intelligent assistant, and monthly care. For companies and organizations in Costa Rica.',
      eyebrow: 'Services',
      heading: 'The site, what sells, and what answers.',
      lede: 'For companies, businesses, and organizations. Every job starts with a conversation and a written scope.',
    },
    automatizacion: {
      title: 'An intelligent assistant for what you already answer',
      description:
        'An intelligent assistant for questions, after hours, appointments or orders, reminders, and reviews. The scope is written before it is turned on.',
      eyebrow: 'Automation',
      heading: 'An intelligent assistant for what you already answer.',
      lede: 'The scope is written before it is turned on.',
      closeTitle: 'Tell us how you serve people today.',
      closeText: 'We look at whether the assistant fits your operation. If we continue, the scope goes in writing.',
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
      title: 'About Pizote Labs',
      description:
        'Pizote Labs looks after websites for businesses in Costa Rica. The work is technical, and it stays in your name. We are not a marketing agency.',
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
    text: 'Our pizote has already sniffed everywhere for it. You can go back home, or write to us if you followed a link that should still work.',
    home: 'Back to home',
    contact: 'Contact',
  },
  hero: {
    place: 'Costa Rica',
    offer: 'Websites · Monthly care · Intelligent assistant',
    title: 'We transform your business for a new era of',
    titleEm: 'artificial intelligence.',
    lede: 'A studio based in Costa Rica, with the mission of delivering modern digital infrastructure to businesses.',
    startConversation: "Let's talk",
    writeWhatsApp: "Let's talk",
    cueSite: 'Website',
    cueAuto: 'Automation',
    cueCare: 'Care',
  },
  chatExample: {
    label: 'Example conversation',
    business: 'Hair salon',
    status: 'After hours · assistant',
    typing: 'typing…',
    messages: [
      { from: 'client', time: '21:47', text: 'Hi, are you open tomorrow? Do you have a slot for a haircut at 10?' },
      { from: 'assistant', time: '21:47', text: 'Hi. Tomorrow we are open 9:00 to 18:00, and 10:00 is free. What name should we hold it under?' },
      { from: 'client', time: '21:48', text: 'Ana Mora' },
      { from: 'assistant', time: '21:48', text: 'Done, Ana. It is held for tomorrow at 10:00. The salon will confirm first thing in the morning.' },
    ],
    caption: 'It answers with what you approved and leaves the booking for you to confirm.',
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
      asistente: ['AI', 'Site, WhatsApp and social', 'Handoff to a person'],
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
    includesLabel: 'Includes',
    separateLabel: 'Paid separately, in your name',
    baseLabel: 'The base',
    baseTitle: 'Everything we build continues with monthly care.',
    unsure: 'If you are not sure where to start yet.',
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
        name: 'Intelligent assistant',
        summary: 'It answers what you already answer, within a written scope.',
        purpose: 'It serves people for you, only with what you approved.',
        support:
          'For anyone who answers the same questions every day, including when the business is closed. It can work on your site, WhatsApp or social media. It works alongside your site; it does not replace it.',
        includes: [
          'Frequent questions that you define',
          'After-hours messages, with a heads-up for you',
          'Details for appointments or orders, which you confirm',
          'Reminders and review requests',
        ],
        separate: ['Per-message charges from each channel, such as WhatsApp, billed to your account'],
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
          'Review and adjustment of the assistant, if you have one',
          'A short written report and support by WhatsApp or email',
        ],
        separate: [] as string[],
      },
    },
  },
  automation: {
    doesNot: 'What it does not do',
    workLabel: 'How it comes together',
    workTitle: 'From your operation to the message.',
    work: [
      {
        title: 'Understand',
        text: 'We look at how you serve people today: questions, hours, appointments, and orders.',
      },
      {
        title: 'Choose',
        text: 'We mark what you already answer by hand and what can move to the assistant.',
      },
      {
        title: 'Connect',
        text: 'We write it, join it to your site, and turn it on.',
      },
      {
        title: 'Adjust',
        text: 'We review what it could not resolve and refine what is written.',
      },
    ],
    hours: {
      label: 'After hours',
      title: 'Your business closes. The conversation goes on.',
      text: 'You serve people during your hours. Outside them, the assistant answers what you approved and leaves everything noted for the morning.',
      open: 'Your hours',
      openValue: '9:00 to 18:00, for example',
      assistant: 'The assistant',
      assistantValue: 'The rest of the day, and weekends',
      arrival: 'A message arrives',
      arrivalValue: '21:47, like the example above',
    },
    flowLabel: 'What it does',
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
    planText: 'The assistant is written before it is turned on. It works alongside your site; it does not replace it.',
    planLink: 'See the service',
    doesItems: [
      'Answers frequent questions you define: hours, location, services, and ways to pay.',
      'Takes messages after hours, confirms to the customer they were received, and notifies you.',
      'Collects the details for an appointment or an order and organizes them for you to confirm.',
      'Sends appointment reminders and review requests at the agreed time.',
    ],
    doesNotItems: [
      'It does not invent answers beyond what you approved.',
      'It does not close sales or make decisions for you.',
      'It does not replace a person: when it does not know, it hands off to someone.',
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
    origin: 'Pizote Labs was founded by {name}, engineers who graduated from the Tecnológico de Costa Rica.',
    and: 'and',
    statement: 'We talk, we put the scope in writing, and you see real progress.',
    statementMore:
      'We prefer a few tools, well connected, made to last and for the people who use them every day.',
    /** Tag on each founder portrait until real photos are added. */
    portraitPending: 'Photo coming soon',
    pizote: {
      label: 'The name',
      title: 'Why a pizote?',
      text: 'The pizote (white-nosed coati) is from here: on the beach, in the forest, by the side of the road. Three things about it are how we work.',
      traits: [
        {
          title: 'Curious',
          text: 'We ask until we understand how your business works today, before proposing anything.',
        },
        {
          title: 'Nose in everything',
          text: 'We check every detail: hours, payments, messages, and what shows up on Google.',
        },
        {
          title: 'Moves in a band',
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
