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
        blueprint: string;
        privacy: string;
        terms: string;
        strategy: string;
    };
    hero: {
        title: string;
        subtitle: string;
        cta: string;
        audit: string;
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
    };
    intake: {
        title: string;
        titleItalic: string;
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
        lastUpdated: string;
        sections: { title: string; content: string }[];
    };
    termsOfService: {
        title: string;
        lastUpdated: string;
        sections: { title: string; content: string }[];
    };
    faqs: FAQEntry[];
    articles: ArticleEntry[];
}

export const i18nData: Record<Language, I18nContent> = {
    en: {
        nav: {
            home: "Home",
            faq: "FAQ",
            articles: "Articles",
            blueprint: "GET FREE BLUEPRINT",
            privacy: "Privacy",
            terms: "Terms",
            strategy: "Book Strategy Session"
        },
        pageTitles: {
            faq: { main: "Operations", accent: "FAQ" },
            articles: { main: "The", accent: "Articles" }
        },
        hero: {
            title: "Engineer Flow. Eliminate Friction.",
            subtitle: "We build deterministic operating systems for high-volume trade firms.",
            cta: "Get Started",
            audit: "Book Strategy Session"
        },
        calculator: {
            title: "Reclaim ",
            titleItalic: "Every Hour.",
            subtitle: "Automating your current manual tasks has a direct impact on your bottom line. We calculate your potential ROI before we write a single line of code.",
            efficiencyInput: "Efficiency Input",
            totalPeople: "Total People",
            manualHours: "Manual Hours / Wk",
            projectedGain: "Projected Gain",
            manualRecovery: "Manual Recovery",
            totalHoursRecovered: "Total Hours Recovered",
            capacityImpact: "Capacity Impact",
            scaleMonitor: "Scale Monitor",
            growthPotential: "Growth Potential",
            summaryTemplate: "Reclaiming {ftu} FTU means recovering the actual bandwidth of over {wholeFtu} additional full-time operator(s). We do not just save time; we recover the productive capacity of your team without adding a single dollar to your payroll."
        },
        intake: {
            title: "Get Your ",
            titleItalic: "Free Custom Blueprint.",
            subtitle: "Tell me where your manual bottlenecks are. Within 24 hours, I'll send you a custom video analysis and automation blueprint.",
            fullName: "Full Name",
            email: "Business Email",
            companyName: "Company Name",
            companyWebsite: "Company Website",
            industry: "Industry",
            industryPlaceholder: "Select your industry",
            bottleneck: "Primary Bottleneck",
            bottleneckPlaceholder: "Select bottleneck",
            consent: "I consent to the Blueprint Analysis and occasional automation strategy updates.",
            consentPrivacy: "Data is processed in accordance with our Privacy Governance Standards.",
            submit: "Get In Touch",
            submitting: "Initializing_"
        },
        privacyPolicy: {
            title: "Privacy Governance Standards",
            lastUpdated: "Revision: 04.07.2026",
            sections: [
                {
                    title: "01. Data Governance",
                    content: "We uphold strict deterministic data protocols. Any information submitted via the Carrillo Dynamics portal is utilized exclusively for the generation of your custom Automation Blueprint and Forensic Audit."
                },
                {
                    title: "02. Encryption & Integrity",
                    content: "All data pipelines utilize industry-standard encryption. We do not store sensitive operational data longer than necessary for active engineering cycles."
                },
                {
                    title: "03. Third-Party Non-Disclosure",
                    content: "Carrillo Dynamics does not engage in the sale or distribution of client meta-data. Your operational bottlenecks are treated as proprietary intellectual secrets."
                }
            ]
        },
        termsOfService: {
            title: "Engineering Terms of Engagement",
            lastUpdated: "Revision: 04.07.2026",
            sections: [
                {
                    title: "01. Service Scope",
                    content: "Carrillo Dynamics provides Fractional Operations Engineering and custom automation logic. We act as technical executors, not generic business consultants."
                },
                {
                    title: "02. Intellectual Property",
                    content: "Upon full settlement of project cycles, the client retains 100% ownership of the specific automation logic and middleware engineered for their environment."
                },
                {
                    title: "03. Liability & Governing Law",
                    content: "Engineering services are governed by the laws of the State of Illinois. Liability is limited to the value of the active engineering sprint."
                }
            ]
        },
        faqs: [
            {
                q: "What is the true cost of 'Lead Leakage'?",
                a: "For high-volume firms, even a 5% leak in the intake funnel can cost $50k-$100k in annual top-line revenue. Our Forensic Audit identifies these 'silent kills'—where leads vanish between your CRM and the field tech."
            },
            {
                q: "How does the '60-Second Lead Rule' impact ROI?",
                a: "A lead contacted in <60 seconds is 8x more likely to book. We engineer automated response logic that bypasses human bottlenecks, ensuring you are the first firm the homeowner hears from, 24/7."
            },
            {
                q: "Can we double our service volume without hiring more dispatchers?",
                a: "Yes. By removing manual data entry and replacing probabilistic dispatch with deterministic logic, your current office staff can manage 3x the territory volume with significantly less stress."
            },
            {
                q: "Does your logic replace my CRM (ServiceTitan, Jobber, Housecall Pro)?",
                a: "No. We act as a 'Force Multiplier' for your CRM. We bridge the gaps where generic software fails, building custom middleware that makes your existing tools work the way your business actually runs."
            },
            {
                q: "How soon can we see measurable results?",
                a: "Initial operational wins are usually live within 14 days. We focus on high-impact bottlenecks first—typically intake flow and automated follow-ups—to secure immediate ROI for your firm."
            },
            {
                q: "Why do you call it a 'Forensic' Lead Audit?",
                a: "Because we don't just guess. We dive into your raw data logs to find exactly where timestamps lag and leads drop. It's an engineering autopsy of your current operation."
            },
            {
                q: "Is my customer data secure during these automations?",
                a: "Security is non-negotiable. We build secure, encrypted pipelines within your existing ecosystem. Your customer data remains under your control at all times; we just optimize how it flows."
            },
            {
                q: "What is a 'Fractional Operations Engineer'?",
                a: "Unlike a 'consultant' who just gives advice, we are engineers who build. We act as your on-call CTO/COO, managing your technical infrastructure so you can focus on scaling the business."
            },
            {
                q: "What happens if we have a sudden spike in volume?",
                a: "Our systems are built for 'Elastic Scale.' While human dispatchers break under chaos, our logic manages the surge—prioritizing high-value jobs and automating standard inquiries automatically."
            },
            {
                q: "Do I own the automation logic once it is built?",
                a: "100%. You own the intellectual property of the systems we build for you. We provide the engineering and the blueprints; you own the engine."
            }
        ],
        articles: [
            {
                id: "60-second-lead-rule",
                title: "The 60-Second Lead Rule",
                description: "Why speed-to-lead is the only variable that matters for home service profitability.",
                content: "# The 60-Second Lead Rule\n\nIn home services, seconds are dollars. A lead contacted within 60 seconds is 8x more likely to close than one contacted later. Most firms rely on 'Best Effort'; we engineer 'Deterministic Speed.'\n\n### The Math of Friction\n\nTraditional dispatch involves manual triage. By the time a human dials, the homeowner has already called a competitor. We bridge this via instant VoIP triggers and automated CRM injection.\n\n### Industrial Solution\n\nWe implement 'Instant-Connect' logic. The second a form is sent:\n1. Lead data hits your CRM.\n2. Your dispatch line is pinged.\n3. The prospect receives a personalized SMS.",
                date: "2026-04-01",
                readTime: "3 min"
            },
            {
                id: "scaling-without-hiring",
                title: "Scaling without Hiring",
                description: "How to increase service volume without industrial-grade administrative drag.",
                content: "# Scaling without Hiring\n\nGrowth usually adds office drag. Every new tech adds management complexity. We argue it requires more 'logic,' not more 'bodies.'\n\n### Breaking the Ceiling\n\nTo hit higher revenue without shrinking margins, you must automate high-volume, low-value tasks. We replace manual data entry with secure pipelines.\n\n### Precision Integrity\n\nHuman error in address entry or follow-ups kills ROI. Our systems ensure 100% data integrity from intake to invoice, allowing your current team to handle 3x the volume with less stress.",
                date: "2026-04-07",
                readTime: "3 min"
            },
            {
                id: "forensic-lead-audit",
                title: "The Forensic Lead Audit",
                description: "Detecting and eliminating operational leaks in your intake funnel.",
                content: "# The Forensic Lead Audit\n\nIs your marketing budget leaking? Most firms have 'blind spots' where leads vanish between the website and the field.\n\n### The Engineering Autopsy\n\nWe track every millisecond of the journey:\n* **Form Friction:** Why they drop off before clicking submit.\n* **Triage Speed:** The actual delay before a tech is notified.\n\n### The Blueprint\n\n[LOOM_VIDEO_PLACEHOLDER]\n\nAfter auditing your raw data, we provide a Technical Blueprint to plug every leak. No more guessing; just engineered performance.",
                date: "2026-04-07",
                readTime: "3 min"
            },
            {
                id: "chicagoland-automation-edge",
                title: "The Chicagoland Edge",
                description: "Leveraging automation in the competitive Midwest trade landscape.",
                content: "# The Chicagoland Edge\n\nIn the competitive Midwest market, operational speed is a strategic weapon. Chicago trade firms must differentiate or compete on price alone.\n\n### Local Friction\n\nFrom extreme weather surges to urban logistics, local firms face unique pressure. Automation allows you to absorb these spikes without operational collapse.\n\n### Scaling the City\n\nWhether managing fleets in the Loop or the suburbs, a unified digital operating system provides the top-down visibility required for market dominance.",
                date: "2026-04-08",
                readTime: "3 min"
            },
            {
                id: "deterministic-vs-ai",
                title: "Deterministic vs AI",
                description: "Why trade firms need precision logic, not generative hype.",
                content: "# Deterministic vs AI\n\nEveryone is selling AI. We sell Precision. For trade firms, a 'maybe' in your dispatch logic is unacceptable.\n\n### The Failure of Hype\n\nGenerative AI is probabilistic; it guesses. In plumbing or HVAC dispatch, you need deterministic logic—fixed rules that work every single time without exception.\n\n### Engineered Certainty\n\nWe build systems that follow your exact business rules. No hallucinations. No guesses. Just logic that ensures every job is handled according to your highest standards.",
                date: "2026-04-08",
                readTime: "3 min"
            }
        ]
    },
    es: {
        nav: {
            home: "Inicio",
            faq: "FAQ",
            articles: "ARTÍCULOS",
            blueprint: "OBTENER BLUEPRINT GRATIS",
            privacy: "Privacidad",
            terms: "Términos",
            strategy: "Sesión de Estrategia"
        },
        pageTitles: {
            faq: { main: "Operaciones", accent: "FAQ" },
            articles: { main: "Los", accent: "Artículos" }
        },
        hero: {
            title: "Ingeniería de Flujo. Eliminación de Fricción.",
            subtitle: "Construimos sistemas operativos deterministas para empresas de servicios de alto volumen.",
            cta: "Comenzar",
            audit: "Sesión de Estrategia"
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
            scaleMonitor: "Monitor de Escala",
            growthPotential: "Potencial de Crecimiento",
            summaryTemplate: "Recuperar {ftu} FTU significa recuperar la capacidad real de más de {wholeFtu} operador(es) adicional(es) a tiempo completo. No solo ahorramos tiempo; recuperamos la capacidad productiva de su equipo sin añadir un solo dólar a su nómina."
        },
        intake: {
            title: "Obtenga su ",
            titleItalic: "Blueprint Personalizado Gratis.",
            subtitle: "Dígame dónde están sus cuellos de botella manuales. En 24 horas, le enviaré un análisis de video personalizado y un blueprint de automatización.",
            fullName: "Nombre Completo",
            email: "Email de Negocios",
            companyName: "Nombre de la Empresa",
            companyWebsite: "Sitio Web de la Empresa",
            industry: "Industria",
            industryPlaceholder: "Seleccione su industria",
            bottleneck: "Cuello de Botella Principal",
            bottleneckPlaceholder: "Seleccionar cuello de botella",
            consent: "Doy mi consentimiento para el Análisis del Blueprint y actualizaciones ocasionales de estrategia.",
            consentPrivacy: "Los datos se procesan de acuerdo con nuestros Estándares de Gobernanza de Privacidad.",
            submit: "Contactar",
            submitting: "Iniciando_"
        },
        privacyPolicy: {
            title: "Estándares de Gobernanza de Privacidad",
            lastUpdated: "Revisión: 04.07.2026",
            sections: [
                {
                    title: "01. Gobernanza de Datos",
                    content: "Mantenemos protocolos de datos deterministas estrictos. Cualquier información enviada a través del portal de Carrillo Dynamics se utiliza exclusivamente para la generación de su Blueprint de Automatización y Auditoría Forense."
                },
                {
                    title: "02. Integridad y Encriptación",
                    content: "Todas las tuberías de datos utilizan encriptación estándar de la industria. No almacenamos datos operativos sensibles más tiempo del necesario para los ciclos de ingeniería activos."
                },
                {
                    title: "03. No Divulgación a Terceros",
                    content: "Carrillo Dynamics no participa en la venta o distribución de metadatos de clientes. Sus cuellos de botella operativos son tratados como secretos intelectuales patentados."
                }
            ]
        },
        termsOfService: {
            title: "Términos de Compromiso de Ingeniería",
            lastUpdated: "Revisión: 04.07.2026",
            sections: [
                {
                    title: "01. Alcance del Servicio",
                    content: "Carrillo Dynamics proporciona Ingeniería de Operaciones Fraccional y lógica de automatización personalizada. Actuamos como ejecutores técnicos."
                },
                {
                    title: "02. Propiedad Intelectual",
                    content: "Tras la liquidación total de los ciclos del proyecto, el cliente conserva el 100% de la propiedad de la lógica de automatización específica diseñada para su entorno."
                },
                {
                    title: "03. Responsabilidad y Ley Aplicable",
                    content: "Los servicios de ingeniería se rigen por las leyes del Estado de Illinois. La responsabilidad se limita al valor del sprint de ingeniería activo."
                }
            ]
        },
        faqs: [
            {
                q: "¿Cuál es el costo real de la 'Fuga de Leads'?",
                a: "Para empresas de alto volumen, incluso una fuga del 5% en el embudo de admisión puede costar entre $50k y $100k en ingresos anuales. Nuestra Auditoría Forense identifica estas 'muertes silenciosas', donde los leads desaparecen entre su CRM y el técnico de campo."
            },
            {
                q: "¿Cómo impacta la 'Regla de los 60 Segundos' en el ROI?",
                a: "Un lead contactado en <60 segundos tiene 8 veces más probabilidades de reservar. Diseñamos lógica de respuesta automatizada que evita los cuellos de botella humanos, asegurando que sea la primera empresa que el cliente escuche, 24/7."
            },
            {
                q: "¿Podemos duplicar nuestro volumen de servicios sin contratar más despachadores?",
                a: "Sí. Al eliminar la entrada manual de datos y reemplazar el despacho probabilístico con lógica determinista, su personal de oficina actual puede gestionar 3 veces el volumen de territorio con significativamente menos estrés."
            },
            {
                q: "¿Su lógica reemplaza mi CRM (ServiceTitan, Jobber, Housecall Pro)?",
                a: "No. Actuamos como un 'Multiplicador de Fuerza' para su CRM. Cerramos las brechas donde el software genérico falla, construyendo middleware personalizado que hace que sus herramientas actuales funcionen como su negocio realmente lo requiere."
            },
            {
                q: "¿Qué tan pronto podemos ver resultados medibles?",
                a: "Las primeras victorias operativas suelen estar activas en 14 días. Nos enfocamos primero en los cuellos de botella de alto impacto, como el flujo de admisión y los seguimientos automatizados, para asegurar un ROI inmediato."
            },
            {
                q: "¿Por qué lo llaman Auditoría Forense de Leads?",
                a: "Porque no adivinamos. Nos sumergimos en sus registros de datos brutos para encontrar exactamente dónde se retrasan los tiempos y dónde se pierden los leads. Es una autopsia de ingeniería de su operación actual."
            },
            {
                q: "¿Están seguros los datos de mis clientes durante estas automatizaciones?",
                a: "La seguridad no es negociable. Construimos tuberías seguras y encriptadas dentro de su ecosistema existente. Los datos de sus clientes permanecen bajo su control en todo momento."
            },
            {
                q: "¿Qué es un 'Ingeniero de Operaciones Fraccional'?",
                a: "A diferencia de un 'consultor' que solo da consejos, somos ingenieros que construyen. Actuamos como su CTO/COO de guardia, gestionando su infraestructura técnica para que usted pueda enfocarse en escalar el negocio."
            },
            {
                q: "¿Qué sucede si tenemos un pico repentino de volumen?",
                a: "Nuestros sistemas están construidos para una 'Escala Elástica'. Mientras que el despacho humano colapsa bajo el caos, nuestra lógica gestiona el aumento, priorizando trabajos de alto valor y automatizando consultas estándar."
            },
            {
                q: "¿Soy el dueño de la lógica de automatización una vez construida?",
                a: "100%. Usted es el dueño de la propiedad intelectual de los sistemas que construimos para usted. Nosotros proporcionamos la ingeniería y los planos; usted es el dueño del motor."
            }
        ],
        articles: [
            {
                id: "60-second-lead-rule",
                title: "La Regla de los 60 Segundos",
                description: "La velocidad de respuesta es la única variable crítica para la rentabilidad.",
                content: "# La Regla de los 60 Segundos\n\nEn servicios, los segundos son dólares. Un lead contactado en <60 segundos cierra 8x más. Operamos con 'Velocidad Determinista.'\n\n### Matemática de Fricción\n\nEl despacho manual es lento. Para cuando un humano marca, el cliente ya llamó a otro. Resolvemos esto con inyección CRM instantánea.\n\n### Solución Industrial\n\nImplementamos 'Conexión Inmediata':\n1. Datos al CRM al instante.\n2. Alerta inmediata al despacho.\n3. SMS automático al prospecto.",
                date: "2026-04-01",
                readTime: "3 min"
            },
            {
                id: "scaling-without-hiring",
                title: "Escalar sin Contratar",
                description: "Aumente el volumen sin añadir lastre administrativo.",
                content: "# Escalar sin Contratar\n\nEl crecimiento suele añadir costo. Cada técnico nuevo suma complejidad. Proponemos más 'lógica', no más 'personal'.\n\n### Rompiendo el Techo\n\nPara crecer sin reducir márgenes, debe automatizar tareas de bajo valor. Reemplazamos la entrada manual con flujos seguros.\n\n### Integridad de Datos\n\nLos errores manuales matan el ROI. Nuestros sistemas aseguran integridad total desde la admisión hasta la factura, permitiendo triplicar el volumen sin estrés.",
                date: "2026-04-07",
                readTime: "3 min"
            },
            {
                id: "forensic-lead-audit",
                title: "La Auditoría Forense",
                description: "Eliminando fugas operativas en su embudo de admisión.",
                content: "# La Auditoría Forense\n\n¿Su presupuesto de marketing fuga dinero? La mayoría tiene 'puntos ciegos' donde los leads mueren antes de ser atendidos.\n\n### Autopsia Técnica\n\nRastreamos cada milisegundo:\n* **Fricción del Formulario:** Por qué abandonan.\n* **Velocidad de Triaje:** El retraso real en la notificación.\n\n### El Blueprint\n\n[LOOM_VIDEO_PLACEHOLDER]\n\nAuditamos sus datos brutos y entregamos un Blueprint Técnico para tapar cada fuga. Sin adivinanzas; solo ingeniería.",
                date: "2026-04-07",
                readTime: "3 min"
            },
            {
                id: "chicagoland-automation-edge",
                title: "La Ventaja Chicago",
                description: "Automatización en el competitivo mercado de servicios del Midwest.",
                content: "# La Ventaja Chicago\n\nEn el Midwest, la velocidad es un arma. Las empresas locales deben diferenciarse o competir solo por precio.\n\n### Fricción Local\n\nDesde picos por el clima hasta logística urbana, Chicago exige resistencia. La automatización permite absorber picos sin colapsar.\n\n### Dominio del Mercado\n\nYa sea en el Loop o suburbios, un sistema operativo digital unificado brinda la visibilidad necesaria para dominar el mercado local.",
                date: "2026-04-08",
                readTime: "3 min"
            },
            {
                id: "deterministic-vs-ai",
                title: "IA vs Determinismo",
                description: "Por qué necesita lógica de precisión, no hype generativo.",
                content: "# IA vs Determinismo\n\nTodos venden IA. Nosotros vendemos Precisión. En despacho técnico, un 'tal vez' es inaceptable.\n\n### El Fallo del Hype\n\nLa IA generativa es probabilística; adivina. En servicios críticos, necesita lógica determinista: reglas fijas que funcionen siempre.\n\n### Certeza de Ingeniería\n\nConstruimos sistemas que siguen sus reglas de negocio exactas. Sin alucinaciones. Sin dudas. Solo lógica que asegura que cada trabajo se maneje con excelencia.",
                date: "2026-04-08",
                readTime: "3 min"
            }
        ]
    }
};
