export type Language = 'en' | 'es';

export interface FAQEntry {
    q: string;
    a: string;
}

export interface ArticleEntry {
    id: string;
    title: string;
    description: string;
    content: string;
    date: string;
    readTime: string;
}

export interface I18nContent {
    nav: {
        home: string;
        faq: string;
        articles: string;
        blueprint: string; // We keep this key name to prevent breaking component imports
        privacy: string;
        terms: string;
        strategy: string;
    };
    success: {
        title: string;
        titleItalic: string;
        description: string;
        founder: string;
        cta: string;
    };
    hero: {
        title: string;
        subtitle: string;
        cta: string;
        audit: string;
        badge1: string;
        badge2: string;
        badge3: string;
    };
    pageTitles: {
        faq: { main: string; accent: string };
        articles: { main: string; accent: string };
    };
    calculator: {
        title: string;
        titleItalic: string;
        subtitle: string;
        efficiencyInput: string;
        totalPeople: string;
        manualHours: string;
        projectedGain: string;
        manualRecovery: string;
        totalHoursRecovered: string;
        capacityImpact: string;
        scaleMonitor: string;
        growthPotential: string;
        summaryTemplate: string;
        bookStrategy: string;
        successTitle: string;
        successSub: string;
        operationalStress: string;
    };
    intake: {
        title: string;
        titleItalic: string;
        titleAccent: string;
        subtitle: string;
        fullName: string;
        email: string;
        companyName: string;
        companyWebsite: string;
        industry: string;
        industryPlaceholder: string;
        bottleneck: string;
        bottleneckPlaceholder: string;
        consent: string;
        consentPrivacy: string;
        submit: string;
        submitting: string;
    };
    privacyPolicy: {
        title: string;
        titleMain: string;
        titleAccent: string;
        lastUpdated: string;
        sections: { title: string; content: string }[];
    };
    termsOfService: {
        title: string;
        titleMain: string;
        titleAccent: string;
        lastUpdated: string;
        sections: { title: string; content: string }[];
    };
    faqs: FAQEntry[];
    articles: ArticleEntry[];
    articleLabels: {
        abstract: string;
        technicalSpecs: string;
        integrity: string;
        integrityValue: string;
        protocol: string;
        protocolValue: string;
        latency: string;
        latencyValue: string;
        downloadPdf: string;
        shareEntry: string;
        backToArchive: string;
    };
}

export const i18nData: Record<Language, I18nContent> = {
    en: {
        nav: {
            home: "Home",
            faq: "FAQ",
            articles: "Resources",
            blueprint: "GET STARTED",
            privacy: "Privacy",
            terms: "Terms",
            strategy: "Book a Call"
        },
        success: {
            title: "Request ",
            titleItalic: "Received.",
            description: "We'll review your details and get back to you within 24 hours.",
            founder: "- Nico Carrillo",
            cta: "Return to Home"
        },
        pageTitles: {
            faq: { main: "Frequently Asked", accent: "Questions" },
            articles: { main: "Our", accent: "Resources" }
        },
        hero: {
            title: "Stop losing clients to",
            subtitle: "We build the engines that help service businesses scale. Get more jobs. Automate the busywork. Cut the headaches.",
            cta: "Test our engines",
            audit: "Book a Call",
            badge1: "TRUSTED LOCALLY",
            badge2: "FAST & RELIABLE",
            badge3: "MOBILE FRIENDLY"
        },
        calculator: {
            title: "Reclaim ",
            titleItalic: "Every Hour.",
            subtitle: "Automating your manual tasks has a direct impact on your bottom line. We calculate your potential ROI before we write a single line of code.",
            efficiencyInput: "Efficiency Input",
            totalPeople: "Total People",
            manualHours: "Manual Hours / Wk",
            projectedGain: "Projected Gain",
            manualRecovery: "Manual Recovery",
            totalHoursRecovered: "Total Hours Recovered",
            capacityImpact: "Capacity Impact",
            scaleMonitor: "Scalability Monitor",
            growthPotential: "Growth Potential",
            summaryTemplate: "Reclaiming {ftu} FTU means winning back the actual capacity of over {wholeFtu} additional full-time operator(s). We don't just save time; we recover your team's productive capacity without adding a single dollar to your payroll.",
            bookStrategy: "Strategy Session",
            successTitle: "Analysis Complete.",
            successSub: "Your custom ROI breakdown has been engineered. Download the PDF and book your session below.",
            operationalStress: "Operational Stress"
        },
        intake: {
            title: "Get your ",
            titleItalic: "Free ",
            titleAccent: "Automation Diagnostic.",
            subtitle: "Tell us where your manual bottlenecks are. In 24 hours, we'll send you a personalized video analysis and automation diagnostic.",
            fullName: "Full Name",
            email: "Business Email",
            companyName: "Company Name",
            companyWebsite: "Company Website",
            industry: "Industry",
            industryPlaceholder: "Select your industry",
            bottleneck: "Primary Bottleneck",
            bottleneckPlaceholder: "Select bottleneck",
            consent: "I consent to the Diagnostic Analysis and occasional strategy updates.",
            consentPrivacy: "Data is processed in accordance with our Privacy Governance Standards.",
            submit: "Get Diagnostic",
            submitting: "Initiating_"
        },
        privacyPolicy: {
            title: "Privacy Policy",
            titleMain: "Privacy",
            titleAccent: "Policy",
            lastUpdated: "Last updated: September 25, 2026",
            sections: [
                {
                    title: "01. Who we are",
                    content: "Carrillo Dynamics LLC (\"Carrillo Dynamics,\" \"we,\" \"us\") builds websites and automation systems for local service businesses. We are based in Chicago, Illinois. Contact: engineering@carrillodynamics.com."
                },
                {
                    title: "02. What we collect",
                    content: "We collect information you choose to share: name, email, company details, and notes you send by email or through our booking calendar (Calendly). If you browse our sites, standard technical data such as IP address, browser type, and pages viewed may be collected by our hosting providers for security and performance."
                },
                {
                    title: "03. How we use information",
                    content: "We use your information to respond to inquiries, schedule strategy calls, deliver project work, improve our sites, and meet legal obligations. We do not sell your personal information."
                },
                {
                    title: "04. Sharing",
                    content: "We use trusted processors to operate the business (for example hosting, email, and Calendly). They only process data as needed to provide those services. We may disclose information if required by law."
                },
                {
                    title: "05. Demo and portfolio sites",
                    content: "The trade sites hosted on subdomains such as hvac.carrillodynamics.com, plumbing.carrillodynamics.com, and related demo URLs are demonstration and portfolio engines built by Carrillo Dynamics. They are not live customer businesses. Phone numbers shown on those demos are fictional (for example 555 numbers). Booking links and engineering@carrillodynamics.com contact Carrillo Dynamics, not an independent trade company."
                },
                {
                    title: "06. Cookies and analytics",
                    content: "Our sites may use essential cookies to function. If we use analytics tools, they help us understand aggregate traffic. You can control cookies through your browser settings."
                },
                {
                    title: "07. Retention and security",
                    content: "We keep project and inquiry records as long as needed for the relationship and legal requirements, then delete or anonymize them when no longer needed. We take reasonable steps to protect data, but no online system is perfectly secure."
                },
                {
                    title: "08. Your choices",
                    content: "Email engineering@carrillodynamics.com to request access, correction, or deletion of personal information we hold about you, subject to applicable law. If you booked a call through Calendly, you can also manage that booking in Calendly."
                },
                {
                    title: "09. Children",
                    content: "Our services are directed to businesses and adults. We do not knowingly collect personal information from children under 13."
                },
                {
                    title: "10. Changes",
                    content: "We may update this policy from time to time. The \"Last updated\" date at the top will change when we do. Continued use of the sites after updates means you accept the revised policy."
                },
                {
                    title: "11. Contact",
                    content: "Questions about privacy: engineering@carrillodynamics.com. Carrillo Dynamics LLC, Chicago, IL, United States."
                }
            ]
        },
        termsOfService: {
            title: "Terms of Service",
            titleMain: "Terms of",
            titleAccent: "Service",
            lastUpdated: "Last updated: September 25, 2026",
            sections: [
                {
                    title: "01. Agreement",
                    content: "By using carrillodynamics.com, demo.carrillodynamics.com, related trade demo subdomains, or booking a call with us, you agree to these Terms. If you do not agree, do not use the sites or services."
                },
                {
                    title: "02. What we do",
                    content: "Carrillo Dynamics LLC designs and builds websites and automation systems for service businesses. Project scope, fees, and timelines are set in a separate proposal or agreement for each engagement. A free strategy call does not create a paid project until both parties agree in writing (including email)."
                },
                {
                    title: "03. Demo and portfolio sites",
                    content: "Trade demo sites (including but not limited to HVAC, plumbing, electrical, waste, roofing, towing, and landscaping subdomains under carrillodynamics.com) are samples of engines we can build. They are not websites of independent operating companies unless we expressly say otherwise. Fictional business names, reviews, addresses, and 555 phone numbers are for demonstration only. Do not rely on demo content as real service offerings, licensing, or insurance claims."
                },
                {
                    title: "04. No professional advice on demos",
                    content: "Demo forms, chat widgets, and booking UIs may simulate shop workflows. Submitting a demo form does not create a service contract with a trade company and does not guarantee a response from a field technician."
                },
                {
                    title: "05. Intellectual property",
                    content: "Unless a signed project agreement says otherwise: (a) Carrillo Dynamics owns the demos, branding, and pre-existing tools we bring to a project; (b) after full payment for custom work delivered to you, you own the custom deliverables described in that agreement; (c) you may not copy, resell, or republish our demos or marketing site content without written permission."
                },
                {
                    title: "06. Acceptable use",
                    content: "You may not misuse the sites (including attempts to break security, scrape at abusive scale, spam forms, or use the sites for unlawful purposes)."
                },
                {
                    title: "07. Disclaimers",
                    content: "Sites and demos are provided \"as is.\" We do not warrant uninterrupted or error-free operation. Results from automation projects vary by business and are not guaranteed."
                },
                {
                    title: "08. Limitation of liability",
                    content: "To the maximum extent allowed by Illinois law, Carrillo Dynamics LLC is not liable for indirect, incidental, special, consequential, or lost-profit damages arising from use of the sites or services. Our total liability for any claim related to the sites is limited to one hundred U.S. dollars (USD $100), and for paid project work is limited to the fees you paid us for that project in the three months before the claim."
                },
                {
                    title: "09. Indemnity",
                    content: "You agree to indemnify and hold Carrillo Dynamics LLC harmless from claims arising out of your misuse of the sites or your breach of these Terms."
                },
                {
                    title: "10. Governing law",
                    content: "These Terms are governed by the laws of the State of Illinois, without regard to conflict-of-law rules. Disputes will be resolved in state or federal courts located in Illinois, unless a project agreement specifies otherwise."
                },
                {
                    title: "11. Changes and contact",
                    content: "We may update these Terms; the \"Last updated\" date will change when we do. Questions: engineering@carrillodynamics.com."
                }
            ]
        },
        faqs: [
            {
                q: "What is the real cost of missed leads?",
                a: "For busy shops, even a small leak - after-hours calls, slow follow-up, jobs that never get booked - can cost tens of thousands a year. We build engines that catch those jobs before they go to a competitor."
            },
            {
                q: "How does the \"60-Second Rule\" impact ROI?",
                a: "A lead contacted in under 60 seconds is far more likely to book. We set up automated response so your shop is often the first call back - day or night - without someone living on the phone."
            },
            {
                q: "Can we take more jobs without hiring more office staff?",
                a: "Yes. When intake, dispatch, and follow-ups stop living in sticky notes and text threads, your current crew can handle more volume with less chaos."
            },
            {
                q: "Do you replace our CRM or existing tools?",
                a: "Usually no. We connect and automate around what you already use so the tools finally match how your shop actually runs - not just a pretty website bolted on top."
            },
            {
                q: "How soon will we see results?",
                a: "First wins often show within a couple of weeks. We start with the highest-friction spots - missed calls, slow intake, follow-ups that die - so you feel the difference fast."
            },
            {
                q: "What does Carrillo Dynamics actually do?",
                a: "We're ops and automation engineers for local service businesses. We don't just advise - we build and ship the systems. Book a 15-minute strategy call and we'll map what an engine for your trade would look like."
            },
            {
                q: "Do you work in English and Spanish?",
                a: "Yes. Sites, flows, and conversations can run in English, Spanish, or both - a real advantage for many local trade markets."
            }
        ],
        articles: [
            {
                id: "60-second-lead-rule",
                title: "The 60-Second Rule",
                description: "In high-volume service, response velocity is the single most critical variable for your bottom line.",
                content: `### Operational Velocity

In the service industry, seconds are dollars. A lead contacted in under 60 seconds closes at a rate higher than one contacted even five minutes later. Most firms suffer from what we call Human Latency, which is the costly gap between a lead arriving and your team actually noticing it. We replace this inconsistent gap with automated workflows designed to respond immediately.

### The Math of Friction

Manual dispatch is inherently slow and prone to failure. By the time a dispatcher dials, the customer has often already called two competitors. Our engineered approach minimizes this friction by injecting lead data directly into your communication pipeline in under 200ms, positioning your team to respond ahead of competitors.

### Industrial Execution

We implement immediate connect protocols to maintain this speed. This includes instant CRM injection to automate manual typing, real-time priority alerts for your best leads, and automated engagement touch-points that hit the customer's phone the moment they hit submit.`,
                date: "2026-04-01",
                readTime: "4 min"
            },
            {
                id: "scaling-without-hiring",
                title: "Scaling Without Hiring",
                description: "Increase your service volume without adding to your administrative overhead.",
                content: `### The Staffing Trap

Traditional growth usually leads to heavy overhead. Historically, every new technician requires a corresponding increase in office staff to manage the resulting paperwork. This linear growth model effectively kills your margins over time. We help firms shift to an exponential logic model where your infrastructure does the heavy lifting.

### Digital Infrastructure

To scale without reducing your profitability, you must automate low-value repetitive tasks. We replace manual data entry, quote follow-ups, and scheduling verification with automated flows built to eliminate repetitive manual steps and minimize human error. This allows your team to focus on high-value strategy rather than data management.

### Operational Integrity

Manual errors are the hidden tax on your ROI. Our systems ensure total data integrity from the initial intake all the way to the final invoice. This operational efficiency allows your team to handle significantly higher job volume without proportionally increasing office overhead.`,
                date: "2026-04-07",
                readTime: "5 min"
            },
            {
                id: "stop-losing-leads",
                title: "Stop Losing Leads",
                description: "Fix the invisible revenue loss between the first call and a booked job.",
                content: `### Identifying the Void

Is your marketing budget leaking through cracks in your process? Most busy shops have blind spots where leads quietly die before they ever reach a truck. On a strategy call we walk the path of a lead through your shop and find where jobs fall off.

### What We Build

We tighten intake, speed up response, and make sure follow-ups actually happen - so leads get captured and routed before they go cold. Not just a pretty website: an engine that helps you keep the jobs you already paid to attract.`,
                date: "2026-04-07",
                readTime: "6 min"
            },
            {
                id: "true-cost-manual-entry",
                title: "The True Cost of Manual Data Entry",
                description: "Why paying a human to copy-paste data is destroying your margins.",
                content: `### The Hidden Tax

Every time an employee copies a customer's address from an email into your CRM, you are bleeding money. It's not just the 30 seconds of labor: it's the context switching, the inevitable typos, and the compounding delay across hundreds of tickets a week.

### Error Propagation

A single typo in an address or phone number doesn't just waste office time; it sends a $150/hr field crew to the wrong location. Manual data re-entry introduces risk and unnecessary delay into every ticket. 

### Clean Data Flow

By bypassing manual data entry, we build direct API connections that eliminate transcription errors. Lead info flows straight from your web form into your CRM and onto your technician's phone instantly. The result: faster dispatching, zero data loss, and higher field efficiency.`,
                date: "2026-04-12",
                readTime: "5 min"
            },
            {
                id: "audit-your-operations",
                title: "How to Audit Your Own Operations for Leaks",
                description: "A framework for identifying the bottlenecks in your service business.",
                content: `### Map the Flow

The first step in any engineering audit is mapping the existing state. You must document the exact lifecycle of a lead, from the moment they click your ad to the moment the final invoice is paid. Most business owners are shocked to realize how many manual steps are actually involved in a single job.

### Identify the Friction

Look for "Swivel Chair Integration": moments where an employee has to look at one screen and manually type the information into another. Look for instances where a technician has to call the office for details that should already be on their device. These are your friction points.

### Calculate the Latency

Measure the time it takes for a new lead to receive a response. Measure the time it takes to generate and send a quote after a site visit. If these metrics rely on a human remembering to do them, you have an operational leak. The solution is automating routine triggers so your team can focus on execution rather than administration.`,
                date: "2026-04-18",
                readTime: "7 min"
            },
            {
                id: "engineering-philosophy",
                title: "The Engineering Philosophy",
                description: "Why I built Carrillo Dynamics: deterministic logic for service businesses.",
                content: `### Real World Operations

I didn't start my career sitting behind a desk. My background is in the field, from landscaping and automotive work, to managing high-rise tenant improvement projects. I know what physical work actually entails. I also know how chaotic the back-office gets when you're juggling dispatch, inventory, and demanding clients all at once.

### Systems Thinking

While earning my Engineering degree at Illinois Tech, I learned how to build reliable systems out of chaos. Whether you're rebuilding an engine or managing a complex project, guesswork doesn't cut it. You need exact tolerances and disciplined execution. Too many local service businesses are running on manual effort and sticky notes when they should be running like a well-tuned machine.

### Building What Works

That's why I started Carrillo Dynamics. I'm not here to sell you just a "pretty website" or pitch abstract tech buzzwords. I'm here to build engines - websites and systems - that help trade businesses run cleaner and take more work without the headaches.

### The Bottom Line

Technology shouldn't complicate your life; it should amplify the hard work you've already put into your business. When we streamline your operations, we aren't changing who you are, we're just freeing you and your team up to do the real work that pays the bills.

 -  Nico Carrillo, Owner/Engineer`,
                date: "2026-04-24",
                readTime: "6 min"
            }
        ],
        articleLabels: {
            abstract: "Summary",
            technicalSpecs: "Key Takeaways",
            integrity: "FOCUS",
            integrityValue: "GROWTH",
            protocol: "APPROACH",
            protocolValue: "SYSTEMATIC",
            latency: "RESULT",
            latencyValue: "EFFICIENCY",
            downloadPdf: "Download PDF",
            shareEntry: "Share Resource",
            backToArchive: "BACK TO RESOURCES"
        }
    },
    es: {
        nav: {
            home: "Inicio",
            faq: "FAQ",
            articles: "Recursos",
            blueprint: "EMPIEZA AHORA",
            privacy: "Privacidad",
            terms: "Términos",
            strategy: "Sesión de Estrategia"
        },
        success: {
            title: "Solicitud ",
            titleItalic: "Recibida.",
            description: "Estamos revisando su solicitud. Esté atento a un correo - le respondemos pronto.",
            founder: "- Nico Carrillo (Carrillo Dynamics)",
            cta: "Volver al Inicio"
        },
        pageTitles: {
            faq: { main: "Operaciones", accent: "FAQ" },
            articles: { main: "Nuestros", accent: "Recursos" }
        },
        hero: {
            title: "Su negocio está perdiendo clientes por",
            subtitle: "Construimos los motores que ayudan a las empresas de servicios a escalar. Consiga más trabajos. Automatice el trabajo manual. Reduzca los dolores de cabeza.",
            cta: "Prueba nuestros motores",
            audit: "Sesión de Estrategia",
            badge1: "INGENIERÍA BASADA EN CHICAGO",
            badge2: "SIN RETRASOS DE CARGA",
            badge3: "OPTIMIZADO PARA MÓVILES"
        },
        calculator: {
            title: "Recupere ",
            titleItalic: "Cada Hora.",
            subtitle: "Automatizar sus tareas manuales tiene un impacto directo en sus resultados. Calculamos su ROI potencial antes de escribir una sola línea de código.",
            efficiencyInput: "Entrada de Eficiencia",
            totalPeople: "Personas Totales",
            manualHours: "Horas Manuales / Sem",
            projectedGain: "Ganancia Proyectada",
            manualRecovery: "Recuperación Manual",
            totalHoursRecovered: "Total de Horas Recuperadas",
            capacityImpact: "Impacto de Capacidad",
            scaleMonitor: "Monitor de Escalabilidad",
            growthPotential: "Potencial de Crecimiento",
            summaryTemplate: "Recuperar {ftu} FTU significa liberar la capacidad real de más de {wholeFtu} operador(es) adicional(es) a tiempo completo. No solo ahorramos tiempo; recuperamos la capacidad productiva de su equipo sin añadir un solo dólara su nómina.",
            bookStrategy: "Sesión de Estrategia",
            successTitle: "Análisis Completado.",
            successSub: "Su desglose de ROI personalizado ha sido diseñado. Descargue el PDF y reserve su sesión a continuación.",
            operationalStress: "Estrés Operativo"
        },
        intake: {
            title: "Obtenga su ",
            titleAccent: "Diagnóstico de Automatización ",
            titleItalic: "Gratis.",
            subtitle: "Díganos dónde están sus mayores obstáculos operativos. En 24 horas, le enviaremos un análisis en video personalizado y un diagnóstico de automatización.",
            fullName: "Nombre Completo",
            email: "Email de Negocios",
            companyName: "Nombre de la Empresa",
            companyWebsite: "Sitio Web de la Empresa",
            industry: "Industria",
            industryPlaceholder: "Seleccione su industria",
            bottleneck: "Mayor Obstáculo Operativo",
            bottleneckPlaceholder: "Seleccione su obstáculo principal",
            consent: "Doy mi consentimiento para el Análisis de Diagnóstico y actualizaciones ocasionales de estrategia.",
            consentPrivacy: "Los datos se procesan de acuerdo con nuestros Estándares de Gobernanza de Privacidad.",
            submit: "Obtenga su Diagnóstico",
            submitting: "Iniciando_"
        },
        privacyPolicy: {
            title: "Política de Privacidad",
            titleMain: "Política de",
            titleAccent: "Privacidad",
            lastUpdated: "Última actualización: 25 de septiembre de 2026",
            sections: [
                {
                    title: "01. Quiénes somos",
                    content: "Carrillo Dynamics LLC (\"Carrillo Dynamics,\" \"nosotros\") construye sitios web y sistemas de automatización para negocios de servicios locales. Estamos en Chicago, Illinois. Contacto: engineering@carrillodynamics.com."
                },
                {
                    title: "02. Qué recopilamos",
                    content: "Recopilamos la información que usted elige compartir: nombre, correo, datos de empresa y notas que envía por email o al agendar en nuestro calendario (Calendly). Si navega nuestros sitios, nuestros proveedores de hosting pueden recopilar datos técnicos estándar (IP, navegador, páginas vistas) por seguridad y rendimiento."
                },
                {
                    title: "03. Cómo usamos la información",
                    content: "Usamos su información para responder consultas, agendar llamadas de estrategia, entregar proyectos, mejorar los sitios y cumplir obligaciones legales. No vendemos su información personal."
                },
                {
                    title: "04. Compartir datos",
                    content: "Usamos procesadores de confianza para operar el negocio (por ejemplo hosting, correo y Calendly). Solo procesan datos según sea necesario. Podemos divulgar información si la ley lo exige."
                },
                {
                    title: "05. Sitios demo y de portafolio",
                    content: "Los sitios de oficios en subdominios como hvac.carrillodynamics.com, plumbing.carrillodynamics.com y demos relacionados son motores de demostración y portafolio hechos por Carrillo Dynamics. No son negocios de clientes en operación. Los teléfonos en esos demos son ficticios (por ejemplo números 555). Los enlaces de reserva y engineering@carrillodynamics.com contactan a Carrillo Dynamics, no a una empresa de oficio independiente."
                },
                {
                    title: "06. Cookies y analítica",
                    content: "Los sitios pueden usar cookies esenciales. Si usamos herramientas de analítica, sirven para entender tráfico agregado. Puede controlar cookies en su navegador."
                },
                {
                    title: "07. Conservación y seguridad",
                    content: "Conservamos registros de proyectos y consultas el tiempo necesario para la relación y requisitos legales; luego los eliminamos o anonimizamos. Tomamos medidas razonables de seguridad, pero ningún sistema en línea es perfecto."
                },
                {
                    title: "08. Sus opciones",
                    content: "Escriba a engineering@carrillodynamics.com para solicitar acceso, corrección o eliminación de datos personales, según la ley aplicable. Si agendó por Calendly, también puede gestionar esa reserva allí."
                },
                {
                    title: "09. Menores",
                    content: "Nuestros servicios están dirigidos a negocios y adultos. No recopilamos a sabiendas información de menores de 13 años."
                },
                {
                    title: "10. Cambios",
                    content: "Podemos actualizar esta política. La fecha de \"Última actualización\" cambiará cuando lo hagamos. Seguir usando los sitios implica aceptar la política revisada."
                },
                {
                    title: "11. Contacto",
                    content: "Preguntas de privacidad: engineering@carrillodynamics.com. Carrillo Dynamics LLC, Chicago, IL, Estados Unidos."
                }
            ]
        },
        termsOfService: {
            title: "Términos de Servicio",
            titleMain: "Términos de",
            titleAccent: "Servicio",
            lastUpdated: "Última actualización: 25 de septiembre de 2026",
            sections: [
                {
                    title: "01. Acuerdo",
                    content: "Al usar carrillodynamics.com, demo.carrillodynamics.com, subdominios demo de oficios relacionados, o al agendar una llamada, usted acepta estos Términos. Si no está de acuerdo, no use los sitios ni los servicios."
                },
                {
                    title: "02. Qué hacemos",
                    content: "Carrillo Dynamics LLC diseña y construye sitios web y sistemas de automatización para negocios de servicios. El alcance, honorarios y plazos se definen en una propuesta o acuerdo por proyecto. Una llamada de estrategia gratuita no crea un proyecto de pago hasta que ambas partes acuerden por escrito (incluido el correo)."
                },
                {
                    title: "03. Sitios demo y de portafolio",
                    content: "Los sitios demo de oficios (incluyendo HVAC, plomería, eléctrico, residuos, techado, grúas y paisajismo bajo carrillodynamics.com) son ejemplos de motores que podemos construir. No son sitios de empresas independientes en operación, salvo que indiquemos lo contrario. Nombres, reseñas, direcciones y teléfonos 555 son solo para demostración. No confíe en ese contenido como oferta real de servicio, licencias o seguros."
                },
                {
                    title: "04. Sin servicio real en demos",
                    content: "Formularios, chats y reservas en demos pueden simular flujos de un taller. Enviar un formulario demo no crea un contrato con una empresa de oficio ni garantiza respuesta de un técnico de campo."
                },
                {
                    title: "05. Propiedad intelectual",
                    content: "Salvo que un acuerdo de proyecto firmado diga lo contrario: (a) Carrillo Dynamics es dueño de los demos, marca y herramientas previas; (b) tras el pago completo del trabajo a medida entregado, usted es dueño de los entregables descritos en ese acuerdo; (c) no puede copiar, revender ni republicar nuestros demos o contenido de marketing sin permiso escrito."
                },
                {
                    title: "06. Uso aceptable",
                    content: "No puede hacer mal uso de los sitios (seguridad, scraping abusivo, spam en formularios o fines ilegales)."
                },
                {
                    title: "07. Descargos",
                    content: "Los sitios y demos se ofrecen \"tal cual\". No garantizamos operación ininterrumpida ni sin errores. Los resultados de proyectos de automatización varían y no están garantizados."
                },
                {
                    title: "08. Límite de responsabilidad",
                    content: "En la máxima medida permitida por la ley de Illinois, Carrillo Dynamics LLC no responde por daños indirectos, incidentales, especiales, consecuentes o lucro cesante por el uso de los sitios o servicios. La responsabilidad total por reclamos relacionados con los sitios se limita a cien dólares estadounidenses (USD $100), y por trabajo de proyecto pagado a los honorarios que nos pagó por ese proyecto en los tres meses previos al reclamo."
                },
                {
                    title: "09. Indemnización",
                    content: "Usted acepta indemnizar y mantener indemne a Carrillo Dynamics LLC frente a reclamos por mal uso de los sitios o incumplimiento de estos Términos."
                },
                {
                    title: "10. Ley aplicable",
                    content: "Estos Términos se rigen por las leyes del Estado de Illinois. Las disputas se resolverán en tribunales estatales o federales de Illinois, salvo que un acuerdo de proyecto diga otra cosa."
                },
                {
                    title: "11. Cambios y contacto",
                    content: "Podemos actualizar estos Términos; la fecha de \"Última actualización\" cambiará. Preguntas: engineering@carrillodynamics.com."
                }
            ]
        },
        faqs: [
            {
                q: "¿Cuál es el costo real de perder leads?",
                a: "Para talleres ocupados, incluso una fuga pequeña - llamadas fuera de horario, seguimiento lento, trabajos que nunca se agendan - puede costar decenas de miles al año. Construimos motores que atrapan esos trabajos antes de que se vayan con la competencia."
            },
            {
                q: "¿Cómo impacta la \"Regla de los 60 Segundos\" en el ROI?",
                a: "Un lead contactado en menos de 60 segundos tiene muchas más probabilidades de agendar. Configuramos respuestas automáticas para que su taller suela ser el primero en devolver la llamada - de día o de noche - sin que alguien viva pegado al teléfono."
            },
            {
                q: "¿Podemos tomar más trabajos sin contratar más personal de oficina?",
                a: "Sí. Cuando el intake, el despacho y el seguimiento dejan de vivir en notas adhesivas y mensajes de texto, su equipo actual puede manejar más volumen con menos caos."
            },
            {
                q: "¿Reemplazan nuestro CRM o herramientas actuales?",
                a: "Por lo general no. Conectamos y automatizamos alrededor de lo que ya usa para que las herramientas coincidan con cómo opera su taller - no solo un sitio bonito encima."
            },
            {
                q: "¿Qué tan pronto veremos resultados?",
                a: "Las primeras victorias suelen verse en un par de semanas. Empezamos por los puntos de mayor fricción - llamadas perdidas, intake lento, seguimientos que mueren - para que sienta la diferencia rápido."
            },
            {
                q: "¿Qué hace realmente Carrillo Dynamics?",
                a: "Somos ingenieros de operaciones y automatización para negocios de servicios locales. No solo aconsejamos - construimos y entregamos los sistemas. Reserve una llamada de estrategia de 15 minutos y mapeamos cómo se vería un motor para su oficio."
            },
            {
                q: "¿Trabajan en inglés y español?",
                a: "Sí. Sitios, flujos y conversaciones pueden ir en inglés, español o ambos - una ventaja real en muchos mercados de oficios locales."
            }
        ],
        articles: [
            {
                id: "60-second-lead-rule",
                title: "La Regla de los 60 Segundos",
                description: "La velocidad de respuesta es la variable más crítica para su rentabilidad.",
                content: `### Velocidad Operativa

En la industria de servicios, los segundos se traducen en dólares. Un cliente potencial contactado en menos de 60 segundos tiene una tasa de cierre superior a la de uno contactado cinco minutos después. La mayoría de las empresas sufren de lo que llamamos Latencia Humana, el costoso lapso entre la llegada de un prospecto y el momento en que su equipo lo detecta. Reemplazamos este lapso inconsistente con flujos de trabajo automatizados diseñados para responder de inmediato.

### La Matemática de la Fricción

El despacho manual es intrínsecamente lento y propenso a errores. Para cuando un despachador marca, el cliente a menudo ya ha llamado a dos competidores. Nuestro enfoque de ingeniería minimiza esta fricción inyectando los datos del prospecto directamente en su flujo de comunicación en menos de 200 ms, posicionando a su equipo para responder antes que la competencia.

### Ejecución Industrial

Implementamos protocolos de conexión inmediata para mantener esta velocidad. Esto incluye la inyección instantánea en el CRM para automatizar la escritura manual, alertas de prioridad en tiempo real para sus mejores leads y puntos de contacto automatizados que llegan al teléfono del cliente en el momento en que envía su solicitud.`,
                date: "2026-04-01",
                readTime: "4 min"
            },
            {
                id: "scaling-without-hiring",
                title: "Escalar sin Contratar",
                description: "Aumente su volumen de servicios sin añadir carga administrativa.",
                content: `### La Trampa del Personal

El crecimiento tradicional suele conllevar grandes gastos generales. Históricamente, cada nuevo técnico requiere un aumento correspondiente en el personal de oficina para gestionar el papeleo resultante. Este modelo de crecimiento lineal termina erosionando sus márgenes con el tiempo. Ayudamos a las empresas a cambiar a un modelo de lógica exponencial donde su infraestructura hace el trabajo pesado.

### Infraestructura Digital

Para escalar sin reducir su rentabilidad, debe automatizar las tareas repetitivas de bajo valor. Reemplazamos la entrada manual de datos, el seguimiento de cotizaciones y la verificación de programación con flujos automatizados diseñados para eliminar pasos manuales repetitivos y minimizar el error humano. Esto permite que su equipo se concentre en la estrategia de alto valor en lugar de en la gestión de datos.

### Integridad Operativa

Los errores manuales son el impuesto oculto en su ROI. Nuestros sistemas aseguran una integridad de datos total desde la admisión inicial hasta la factura final. Esta eficiencia operativa le permite a su equipo gestionar un volumen de trabajo significativamente mayor sin aumentar proporcionalmente la carga administrativa.`,
                date: "2026-04-07",
                readTime: "5 min"
            },
            {
                id: "stop-losing-leads",
                title: "Deje de Perder Clientes",
                description: "Detenga la pérdida invisible de ingresos entre la primera llamada y el trabajo agendado.",
                content: `### Identificando el Vacío

¿Se está fugando su presupuesto de marketing a través de grietas en su proceso? La mayoría de los talleres tienen puntos ciegos donde los prospectos mueren antes de llegar a un camión. En una llamada de estrategia recorremos el camino de un lead por su taller y encontramos dónde se caen los trabajos.

### Lo Que Construimos

Ajustamos el intake, aceleramos la respuesta y hacemos que los seguimientos realmente ocurran - para capturar y enrutar leads antes de que se enfríen. No solo un sitio bonito: un motor que le ayuda a conservar los trabajos que ya pagó por atraer.`,
                date: "2026-04-07",
                readTime: "6 min"
            },
            {
                id: "true-cost-manual-entry",
                title: "El Verdadero Costo del Ingreso Manual de Datos",
                description: "Por qué pagar a un humano para copiar y pegar datos está destruyendo sus márgenes.",
                content: `### El Impuesto Oculto

Cada vez que un empleado copia la dirección de un cliente de un correo electrónico a su CRM, usted está perdiendo dinero. No son solo los 30 segundos de trabajo: es el cambio de contexto, los errores tipográficos inevitables y el retraso compuesto en cientos de tickets a la semana.

### Propagación de Errores

Un solo error en una dirección o número de teléfono no solo hace perder tiempo en la oficina; envía a un equipo de campo de $150/hr a la ubicación equivocada. El reingreso manual de datos introduce riesgos y retrasos innecesarios en cada ticket.

### Datos limpios

Al evitar la entrada manual de datos, construimos conexiones API directas que eliminan los errores de transcripción. La información del lead fluye directamente desde su formulario web hacia su CRM y al teléfono de su técnico al instante. El resultado: un despacho más rápido, cero pérdida de datos y mayor eficiencia en el campo.`,
                date: "2026-04-12",
                readTime: "5 min"
            },
            {
                id: "audit-your-operations",
                title: "Cómo Auditar sus Propias Operaciones",
                description: "Un marco para identificar los cuellos de botella en su empresa de servicios.",
                content: `### Mapear el Flujo

El primer paso en cualquier auditoría de ingeniería es mapear el estado actual. Debe documentar el ciclo de vida exacto de un lead, desde el momento en que hace clic en su anuncio hasta el momento en que se paga la factura final. A la mayoría de los dueños de negocios les sorprende darse cuenta de cuántos pasos manuales están realmente involucrados en un solo trabajo.

### Identificar la Fricción

Busque "Integraciones de Silla Giratoria": momentos en los que un empleado tiene que mirar una pantalla y escribir manualmente la información en otra. Busque casos en los que un técnico tenga que llamar a la oficina para obtener detalles que ya deberían estar en su dispositivo. Estos son sus puntos de fricción.

### Calcular la Latencia

Mida el tiempo que tarda un nuevo lead en recibir una respuesta. Mida el tiempo que tarda en generar y enviar una cotización después de una visita al sitio. Si estas métricas dependen de que un humano recuerde hacerlas, tiene una fuga operativa. La solución es automatizar los disparadores rutinarios para que su equipo pueda enfocarse en la ejecución en lugar de la administración.`,
                date: "2026-04-18",
                readTime: "7 min"
            },
            {
                id: "engineering-philosophy",
                title: "Por Qué Construí Carrillo Dynamics",
                description: "Desde desarmar motores y lanzar béisbol universitario hasta diseñar sistemas empresariales.",
                content: `### Operaciones en el Mundo Real

No comencé mi carrera detrás de un escritorio. Mi experiencia está en el campo: desde paisajismo y mecánica automotriz, hasta la gestión de proyectos en rascacielos. Sé lo que realmente implica el trabajo físico. También sé lo caótica que se vuelve la oficina cuando estás haciendo malabarismos con despachos, inventario y clientes exigentes al mismo tiempo.

### Pensamiento Sistémico

Mientras obtenía mi título de Ingeniería en Illinois Tech, aprendí a construir sistemas confiables a partir del caos. Ya sea que estés reconstruyendo un motor o gestionando un proyecto complejo, adivinar no sirve. Necesitas tolerancias exactas y una ejecución disciplinada. Demasiadas empresas de servicios locales funcionan con esfuerzo manual y notas adhesivas cuando deberían funcionar como una máquina bien afinada.

### Construyendo lo que Funciona

Por eso comencé Carrillo Dynamics. No estoy aquí para venderle solo un "sitio bonito" ni palabras de moda. Estoy aquí para construir motores - sitios y sistemas - que ayuden a los oficios a operar más limpio y tomar más trabajo sin los dolores de cabeza.

### En Conclusión

La tecnología no debería complicar tu vida; debería amplificar el arduo trabajo que ya has puesto en tu negocio. Cuando optimizamos tus operaciones, no estamos cambiando quién eres, solo te estamos liberando a ti y a tu equipo para hacer el trabajo real que paga las cuentas.

 -  Nico Carrillo, Owner/Engineer`,
                date: "2026-04-24",
                readTime: "6 min"
            }
        ],
        articleLabels: {
            abstract: "Resumen",
            technicalSpecs: "Puntos Clave",
            integrity: "ENFOQUE",
            integrityValue: "CRECIMIENTO",
            protocol: "MÉTODO",
            protocolValue: "SISTEMÁTICO",
            latency: "RESULTADO",
            latencyValue: "EFICIENCIA",
            downloadPdf: "Descargar PDF",
            shareEntry: "Compartir",
            backToArchive: "VOLVER A RECURSOS"
        }
    }
};
