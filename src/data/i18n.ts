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
            articles: "Articles",
            blueprint: "GET FREE BLUEPRINT",
            privacy: "Privacy",
            terms: "Terms",
            strategy: "Strategy Session"
        },
        success: {
            title: "Request ",
            titleItalic: "Received.",
            description: "I am personally reviewing your workflow right now. Look out for an email from me. I'll be sending over a custom video blueprint addressing your specific bottleneck within 24 hours.",
            founder: "- Nico Carrillo (Founder of Carrillo Dynamics)",
            cta: "Return to Home"
        },
        pageTitles: {
            faq: { main: "Operational", accent: "FAQ" },
            articles: { main: "Technical", accent: "Archives" }
        },
        hero: {
            title: "Your team is spending hours on",
            subtitle: "We engineer and build custom automated systems for trade and service companies to optimize operations, protect margins, and reclaim time.",
            cta: "Get Started",
            audit: "Book Strategy Session",
            badge1: "CHICAGO-BASED ENGINEERING",
            badge2: "< 60s RESPONSE LATENCY",
            badge3: "DETERMINISTIC DATA ROUTING"
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
            titleItalic: "Free Custom Blueprint.",
            subtitle: "Tell me where your manual bottlenecks are. In 24 hours, I'll send you a personalized video analysis and automation blueprint.",
            fullName: "Full Name",
            email: "Business Email",
            companyName: "Company Name",
            companyWebsite: "Company Website",
            industry: "Industry",
            industryPlaceholder: "Select your industry",
            bottleneck: "Primary Bottleneck",
            bottleneckPlaceholder: "Select bottleneck",
            consent: "I consent to the Blueprint Analysis and occasional strategy updates.",
            consentPrivacy: "Data is processed in accordance with our Privacy Governance Standards.",
            submit: "Get Blueprint",
            submitting: "Initiating_"
        },
        privacyPolicy: {
            title: "Privacy Governance Standards",
            titleMain: "Privacy Governance",
            titleAccent: "Standards",
            lastUpdated: "Revision: 04.08.2026",
            sections: [
                {
                    title: "01. Collection & Governance",
                    content: "We collect specific operational data required to engineer your Automation Blueprint. This includes business metadata, intake volume statistics, and technical bottleneck logs. We adhere to industrial-grade standards for data integrity."
                },
                {
                    title: "02. Internal Usage Protocols",
                    content: "Your data is used exclusively for technical auditing and systems architecture. We do not participate in the sale of client telemetry. Access is restricted to active engineering cycles."
                },
                {
                    title: "03. Communication Standards",
                    content: "We strictly follow TCPA guidelines. Mobile information, including SMS consent data, is never shared with third parties or affiliates for marketing purposes."
                },
                {
                    title: "04. Data Sovereignty",
                    content: "Clients retain the rights to audit the logic built in their environment. Carrillo Dynamics LLC operates as a technical processor, ensuring your intellectual secrets remain yours."
                }
            ]
        },
        termsOfService: {
            title: "Engineering Engagement Terms",
            titleMain: "Engineering Engagement",
            titleAccent: "Terms",
            lastUpdated: "Revision: 04.08.2026",
            sections: [
                {
                    title: "01. Professional Scope",
                    content: "Carrillo Dynamics LLC provides technical execution via Fractional Operations Engineering. Our deliverables are functional logic and architectural blueprints, not passive consulting."
                },
                {
                    title: "02. Intellectual Property",
                    content: "Upon full settlement, the client owns 100% of the perpetual ownership of the specific automation sequences and middleware logic deployed within their infrastructure."
                },
                {
                    title: "03. Engineering Liability",
                    content: "Services are provided on an 'As Engineered' performance basis. Liability is limited to the value of the current active engineering sprint. Governed by the laws of the State of Illinois."
                },
                {
                    title: "04. Termination Logic",
                    content: "Either party may pause engineering cycles with 14 days notice. Any logic completed remains the property of the client post-settlement."
                }
            ]
        },
        faqs: [
            {
                q: "What is the actual cost of 'Lead Leakage'?",
                a: "For high-volume firms, even a 5% leak in the intake funnel can cost between an estimated $50k - $100k in annual revenue. Our Automation Blueprint identifies these 'silent kills' where leads disappear between your CRM and the field tech."
            },
            {
                q: "How does the '60-Second Rule' impact ROI?",
                a: "A lead contacted in <60 seconds is 8x more likely to book. We engineer automated response logic that bypasses human bottlenecks, ensuring you're the first company the customer hears from, 24/7."
            },
            {
                q: "Can we double our service volume without hiring more dispatchers?",
                a: "Positioned for growth. By automating manual data entry and replacing probabilistic dispatching with deterministic logic, your current office staff can manage 3x the territory volume with significantly less stress."
            },
            {
                q: "Does your logic replace my CRM (ServiceTitan, Jobber, Housecall Pro)?",
                a: "No. We act as a force multiplier for your CRM. We close the gaps where generic software falls short, building custom middleware that makes your current tools work exactly as your business requires."
            },
            {
                q: "How soon do we see measurable results?",
                a: "First operational wins are usually live within 14 days. We focus on high-impact bottlenecks first, such as intake flow and automated follow-ups, to drive measurable ROI."
            },
            {
                q: "Why do you call it an Automation Blueprint?",
                a: "Because we don't guess. We dive into your raw data logs to find exactly where timestamps lag and where leads drop. It's an engineering blueprint of your current operation."
            },
            {
                q: "Is my customer data secure during these automations?",
                a: "Security is non-negotiable. We build secure, encrypted pipelines within your existing ecosystem. Your customer data remains under your control at all times."
            },
            {
                q: "What is a 'Fractional Operations Engineer'?",
                a: "Unlike a 'consultant' who just gives advice, we are engineers who build. We act as your on-call CTO/COO, managing your technical infrastructure so you can focus on scaling the business."
            },
            {
                q: "What happens if we have a sudden volume spike?",
                a: "Our systems are built for 'Elastic Scale'. While human dispatch collapses under chaos, our logic manages the surge, prioritizing high-value jobs and automating standard inquiries."
            },
            {
                q: "Do I own the automation logic once built?",
                a: "100%. You own the intellectual property of the systems we build for you. We provide the engineering and the blueprints; you own the engine."
            }
        ],
        articles: [
            {
                id: "60-second-lead-rule",
                title: "The 60-Second Rule",
                description: "In high-volume service, response velocity is the single most critical variable for your bottom line.",
                content: "### Operational Velocity\n\nIn the service industry, seconds are dollars. A lead contacted in under 60 seconds closes at a rate eight times higher than one contacted even five minutes later. Most firms suffer from what we call Human Latency, which is the costly gap between a lead arriving and your team actually noticing it. We replace this inconsistent gap with deterministic logic that acts instantly.\n\n### The Math of Friction\n\nManual dispatch is inherently slow and prone to failure. By the time a dispatcher dials, the customer has often already called two competitors. Our engineered approach minimizes this friction by injecting lead data directly into your communication pipeline in under 200ms, ensuring you are always the first point of contact.\n\n### Industrial Execution\n\nWe implement immediate connect protocols to maintain this speed. This includes instant CRM injection to automate manual typing, real-time priority alerts for your best leads, and automated engagement touch-points that hit the customer's phone the moment they hit submit.",
                date: "2026-04-01",
                readTime: "4 min"
            },
            {
                id: "scaling-without-hiring",
                title: "Scaling Without Hiring",
                description: "Increase your service volume without adding to your administrative overhead.",
                content: "### The Staffing Trap\n\nTraditional growth usually leads to heavy overhead. Historically, every new technician requires a corresponding increase in office staff to manage the resulting paperwork. This linear growth model effectively kills your margins over time. We help firms shift to an exponential logic model where your infrastructure does the heavy lifting.\n\n### Digital Infrastructure\n\nTo scale without reducing your profitability, you must automate low-value repetitive tasks. We replace manual data entry, quote follow-ups, and scheduling verification with secure, rigid flows that never sleep and never make mistakes. This allows your team to focus on high-value strategy rather than data management.\n\n### Operational Integrity\n\nManual errors are the hidden tax on your ROI. Our systems ensure total data integrity from the initial intake all the way to the final invoice. This precision allows you to triple your territory volume with the same office headcount you have today.",
                date: "2026-04-07",
                readTime: "5 min"
            },
            {
                id: "operational-leak-detection",
                title: "Operations Leak Detection",
                description: "Stop the invisible revenue loss in your intake funnel.",
                content: "### Identifying the Void\n\nIs your marketing budget leaking through cracks in your process? Most high-volume firms have blind spots where leads quietly die before they ever reach a technician. Automation Blueprint is a deep-dive into the technical path of every single lead that enters your ecosystem.\n\n### Technical Analysis\n\nWe track every millisecond of the journey to find where you are losing money. We analyze form friction to see why users drop off, triage velocity to measure the actual delay in notifications, and closing logic to identify which follow-ups are failing to convert. This data allows us to build a technical blueprint to plug every leak with pure operational engineering.",
                date: "2026-04-07",
                readTime: "6 min"
            }
        ],
        articleLabels: {
            abstract: "Abstract",
            technicalSpecs: "Technical Specs",
            integrity: "INTEGRITY",
            integrityValue: "INDUSTRIAL GRADE",
            protocol: "PROTOCOL",
            protocolValue: "DETERMINISTIC",
            latency: "LATENCY",
            latencyValue: "< 100MS",
            downloadPdf: "Download PDF",
            shareEntry: "Share Entry",
            backToArchive: "TECHNICAL ARCHIVE"
        }
    },
    es: {
        nav: {
            home: "Inicio",
            faq: "FAQ",
            articles: "Artículos",
            blueprint: "OBTENGA SU BLUEPRINT GRATIS",
            privacy: "Privacidad",
            terms: "Términos",
            strategy: "Sesión de Estrategia"
        },
        success: {
            title: "Solicitud ",
            titleItalic: "Recibida.",
            description: "Estoy revisando personalmente su flujo de trabajo ahora mismo. Esté atento a un correo mío. Le enviaré un blueprint en video personalizado abordando su cuello de botella específico en menos de 24 horas.",
            founder: "- Nico Carrillo (Fundador de Carrillo Dynamics)",
            cta: "Volver al Inicio"
        },
        pageTitles: {
            faq: { main: "Operaciones", accent: "FAQ" },
            articles: { main: "Archivo", accent: "Técnico" }
        },
        hero: {
            title: "Su equipo dedica horas a",
            subtitle: "Diseñamos y construimos sistemas automatizados personalizados para que las empresas comerciales y de servicios optimicen sus operaciones, protejan sus márgenes y recuperen su tiempo.",
            cta: "Comenzar",
            audit: "Sesión de Estrategia",
            badge1: "INGENIERÍA BASADA EN CHICAGO",
            badge2: "LATENCIA DE RESPUESTA < 60s",
            badge3: "ENRUTAMIENTO DETERMINISTA DE DATOS"
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
            summaryTemplate: "Recuperar {ftu} FTU significa liberar la capacidad real de más de {wholeFtu} operador(es) adicional(es) a tiempo completo. No solo ahorramos tiempo; recuperamos la capacidad productiva de su equipo sin añadir un solo dólar a su nómina.",
            bookStrategy: "Sesión de Estrategia",
            successTitle: "Análisis Completado.",
            successSub: "Su desglose de ROI personalizado ha sido diseñado. Descargue el PDF y reserve su sesión a continuación.",
            operationalStress: "Estrés Operativo"
        },
        intake: {
            title: "Obtenga su ",
            titleItalic: "Blueprint Personalizado Gratis.",
            subtitle: "Dígame dónde están sus cuellos de botella manuales. En 24 horas, le enviaré un análisis en video y un blueprint de automatización personalizado.",
            fullName: "Nombre Completo",
            email: "Email de Negocios",
            companyName: "Nombre de la Empresa",
            companyWebsite: "Sitio Web de la Empresa",
            industry: "Industria",
            industryPlaceholder: "Seleccione su industria",
            bottleneck: "Cuello de Botella Principal",
            bottleneckPlaceholder: "Seleccione su cuello de botella",
            consent: "Doy mi consentimiento para el Análisis del Blueprint y actualizaciones ocasionales de estrategia.",
            consentPrivacy: "Los datos se procesan de acuerdo con nuestros Estándares de Gobernanza de Privacidad.",
            submit: "Obtenga su Blueprint",
            submitting: "Iniciando_"
        },
        privacyPolicy: {
            title: "Estándares de Gobernanza de Privacidad",
            titleMain: "Gobernanza de",
            titleAccent: "Privacidad",
            lastUpdated: "Revisión: 04.08.2026",
            sections: [
                {
                    title: "01. Recopilación y Gobernanza",
                    content: "Recopilamos datos operativos específicos necesarios para diseñar su Blueprint de Automatización. Esto incluye metadatos comerciales, estadísticas de volumen de admisión y registros de cuellos de botella técnicos. Nos adherimos a estándares de grado industrial para la integridad de los datos."
                },
                {
                    title: "02. Protocolos de Uso Interno",
                    content: "Sus datos se utilizan exclusivamente para auditorías técnicas y arquitectura de sistemas. No vendemos la telemetría de nuestros clientes. El acceso está restringido a los ciclos de ingeniería activos."
                },
                {
                    title: "03. Estándares de Comunicación",
                    content: "Seguimos estrictamente las directrices de la TCPA. La información móvil, incluidos los datos de consentimiento de SMS, nunca se comparte con terceros o afiliados con fines de marketing."
                },
                {
                    title: "04. Soberanía de Datos",
                    content: "Los clientes conservan el derecho de auditar la lógica desarrollada en su entorno. Carrillo Dynamics LLC opera como un procesador técnico, asegurando que sus secretos de propiedad intelectual sigan siendo suyos."
                }
            ]
        },
        termsOfService: {
            title: "Términos de Compromiso de Ingeniería",
            titleMain: "Compromiso de",
            titleAccent: "Ingeniería",
            lastUpdated: "Revisión: 04.08.2026",
            sections: [
                {
                    title: "01. Alcance Profesional",
                    content: "Carrillo Dynamics LLC proporciona ejecución técnica a través de Ingeniería de Operaciones Fraccional. Nuestros entregables son lógica funcional y blueprints arquitectónicos, no consultoría pasiva."
                },
                {
                    title: "02. Propiedad Intelectual",
                    content: "Tras la liquidación total, el cliente es propietario del 100% de los derechos perpetuos sobre las secuencias de automatización específicas y la lógica de middleware desplegada en su infraestructura."
                },
                {
                    title: "03. Responsabilidad de Ingeniería",
                    content: "Los servicios se prestan bajo la premisa de 'Rendimiento Diseñado'. La responsabilidad se limita al valor del sprint de ingeniería activo actual. Se rige por las leyes del Estado de Illinois."
                },
                {
                    title: "04. Lógica de Terminación",
                    content: "Cualquiera de las partes puede pausar los ciclos de ingeniería con un aviso previo de 14 días. Toda lógica completada seguirá siendo propiedad del cliente tras el pago correspondiente."
                }
            ]
        },
        faqs: [
            {
                q: "¿Cuál es el costo real de la 'Fuga de Leads'?",
                a: "Para empresas de alto volumen, incluso una fuga del 5% en el embudo de admisión puede costar un estimado de $50k - $100k en ingresos anuales. Nuestro Blueprint de Automatización identifica estas 'muertes silenciosas', donde los leads desaparecen entre su CRM y el técnico de campo."
            },
            {
                q: "¿Cómo impacta la 'Regla de los 60 Segundos' en el ROI?",
                a: "Un lead contactado en <60 segundos tiene 8 veces más probabilidades de reservar. Diseñamos lógica de respuesta automatizada que evita los cuellos de botella humanos, asegurando que sea la primera empresa que el cliente escuche, 24/7."
            },
            {
                q: "¿Podemos duplicar nuestro volumen de servicios sin contratar más despachadores?",
                a: "Posicionados para el crecimiento. Al automatizar la entrada manual de datos y reemplazar el despacho probabilístico con lógica determinista, su personal de oficina actual puede gestionar 3 veces el volumen de territorio con significativamente menos estrés."
            },
            {
                q: "¿Su lógica reemplaza mi CRM (ServiceTitan, Jobber, Housecall Pro)?",
                a: "No. Actuamos como un multiplicador de fuerza para su CRM. Cerramos las brechas donde el software genérico falla, construyendo middleware personalizado que hace que sus herramientas actuales funcionen como su negocio realmente lo requiere."
            },
            {
                q: "¿Qué tan pronto podemos ver resultados medibles?",
                a: "Las primeras victorias operativas suelen estar activas en 14 días. Nos enfocamos primero en los cuellos de botella de alto impacto, como el flujo de admisión y los seguimientos automatizados, para impulsar un ROI medible."
            },
            {
                q: "¿Por qué lo llaman Blueprint de Automatización?",
                a: "Porque no adivinamos. Nos sumergimos en sus registros de datos brutos para encontrar exactamente dónde se retrasan los tiempos y dónde se pierden los leads. Es un blueprint de ingeniería de su operación actual."
            },
            {
                q: "¿Están seguros los datos de mis clientes durante estas automatizaciones?",
                a: "La seguridad no es negociable. Construimos canales de datos seguros y encriptados dentro de su ecosistema existente. Los datos de sus clientes permanecen bajo su control en todo momento."
            },
            {
                q: "¿Qué es un 'Ingeniero de Operaciones Fraccional'?",
                a: "A diferencia de un 'consultor' que solo da consejos, somos ingenieros que construyen. Actuamos como su CTO/COO externo, gestionando su infraestructura técnica para que usted pueda enfocarse en escalar el negocio."
            },
            {
                q: "¿Qué sucede si tenemos un pico de volumen repentino?",
                a: "Nuestros sistemas están construidos para una 'Escala Elástica'. Mientras que el despacho humano colapsa bajo el caos, nuestra lógica genera el pico de demanda, priorizando trabajos de alto valor y automatizando consultas estándar."
            },
            {
                q: "¿Soy el dueño de la lógica de automatización una vez construida?",
                a: "100%. Usted posee la propiedad intelectual de los sistemas que construimos para usted. Nosotros proporcionamos la ingeniería y los blueprints; usted es el dueño del motor."
            }
        ],
        articles: [
            {
                id: "60-second-lead-rule",
                title: "La Regla de los 60 Segundos",
                description: "La velocidad de respuesta es la variable más crítica para su rentabilidad.",
                content: "### Velocidad Operativa\n\nEn la industria de servicios, los segundos se traducen en dólares. Un cliente potencial contactado en menos de 60 segundos tiene una probabilidad de cierre ocho veces mayor que uno contactado apenas cinco minutos después. La mayoría de las empresas sufren de lo que llamamos Latencia Humana, el costoso lapso entre la llegada de un prospecto y el momento en que su equipo lo detecta. Reemplazamos este lapso inconsistente con lógica determinista que actúa al instante.\n\n### La Matemática de la Fricción\n\nEl despacho manual es intrínsecamente lento y propenso a errores. Para cuando un despachador marca, el cliente a menudo ya ha llamado a dos competidores. Nuestro enfoque de ingeniería minimiza esta fricción inyectando los datos del prospecto directamente en su flujo de comunicación en menos de 200 ms, asegurando que usted sea siempre el primer punto de contacto.\n\n### Ejecución Industrial\n\nImplementamos protocolos de conexión inmediata para mantener esta velocidad. Esto incluye la inyección instantánea en el CRM para automatizar la escritura manual, alertas de prioridad en tiempo real para sus mejores leads y puntos de contacto automatizados que llegan al teléfono del cliente en el momento en que envía su solicitud.",
                date: "2026-04-01",
                readTime: "4 min"
            },
            {
                id: "scaling-without-hiring",
                title: "Escalar sin Contratar",
                description: "Aumente su volumen de servicios sin añadir carga administrativa.",
                content: "### La Trampa del Personal\n\nEl crecimiento tradicional suele conllevar grandes gastos generales. Históricamente, cada nuevo técnico requiere un aumento correspondiente en el personal de oficina para gestionar el papeleo resultante. Este modelo de crecimiento lineal termina erosionando sus márgenes con el tiempo. Ayudamos a las empresas a cambiar a un modelo de lógica exponencial donde su infraestructura hace el trabajo pesado.\n\n### Infraestructura Digital\n\nPara escalar sin reducir su rentabilidad, debe automatizar las tareas repetitivas de bajo valor. Reemplazamos la entrada manual de datos, el seguimiento de cotizaciones y la verificación de programación con flujos seguros y robustos que nunca duermen y nunca cometen errores. Esto permite que su equipo se concentre en la estrategia de alto valor en lugar de en la gestión de datos.\n\n### Integridad Operativa\n\nLos errores manuales son el impuesto oculto en su ROI. Nuestros sistemas aseguran una integridad de datos total desde la admisión inicial hasta la factura final. Esta precisión le permite triplicar su volumen de territorio con el mismo personal de oficina que tiene actualmente.",
                date: "2026-04-07",
                readTime: "5 min"
            },
            {
                id: "operational-leak-detection",
                title: "Detección de Fugas en Operaciones",
                description: "Detenga la pérdida invisible de ingresos en su embudo de admisión.",
                content: "### Identificando el Vacío\n\n¿Se está fugando su presupuesto de marketing a través de grietas en su proceso? La mayoría de las empresas de alto volumen tienen puntos ciegos donde los leads mueren silenciosamente antes de llegar a un técnico. El Blueprint de Automatización es una inmersión profunda en la ruta técnica de cada lead que ingresa a su ecosistema.\n\n### Análisis Técnico\n\nRastreamos cada milisegundo del viaje para encontrar dónde está perdiendo dinero. Analizamos la fricción del formulario para ver por qué los usuarios abandonan, la velocidad de triaje para medir el retraso real en las notificaciones y la lógica de cierre para identificar qué seguimientos no logran convertir. Estos datos nos permiten construir un blueprint técnico para sellar cada fuga con pura ingeniería operativa.",
                date: "2026-04-07",
                readTime: "6 min"
            }
        ],
        articleLabels: {
            abstract: "Resumen",
            technicalSpecs: "Especificaciones",
            integrity: "INTEGRIDAD",
            integrityValue: "GRADO INDUSTRIAL",
            protocol: "PROTOCOLO",
            protocolValue: "DETERMINISTA",
            latency: "LATENCIA",
            latencyValue: "< 100MS",
            downloadPdf: "Descargar PDF",
            shareEntry: "Compartir",
            backToArchive: "ARCHIVO TÉCNICO"
        }
    }
};
