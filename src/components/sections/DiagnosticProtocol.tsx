import { Search, Layers, Rocket, Hammer, Truck, Factory, Thermometer, Droplets, TreePine, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/components/LanguageProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DiagnosticProtocol = () => {
    const { lang, t } = useTranslation();
    const navigate = useNavigate();
    const sectors = lang === 'en' ? [
        { icon: Hammer, label: "CONSTRUCTION" },
        { icon: Truck, label: "LOGISTICS" },
        { icon: Factory, label: "MANUFACTURING" },
        { icon: Thermometer, label: "HVAC" },
        { icon: Droplets, label: "PLUMBING" },
        { icon: TreePine, label: "LANDSCAPING" },
    ] : [
        { icon: Hammer, label: "CONSTRUCCIÓN" },
        { icon: Truck, label: "LOGÍSTICA" },
        { icon: Factory, label: "MANUFACTURA" },
        { icon: Thermometer, label: "HVAC" },
        { icon: Droplets, label: "PLOMERÍA" },
        { icon: TreePine, label: "PAISAJISMO" },
    ];

    const steps = lang === 'en' ? [
        {
            icon: Search,
            step: "01",
            title: "Analysis",
            desc: "Mapping scheduling chaos, dispatch bottlenecks, and tracking inefficiencies.",
            bullets: [
                "Operational Bottleneck Discovery",
                "Data-Flow Integrity Audit",
                "Workforce Leakage Identification"
            ]
        },
        {
            icon: Layers,
            step: "02",
            title: "Design",
            desc: "Engineered routing and management layers designed to streamline crew operations.",
            bullets: [
                "Custom Systems Architecture",
                "Digital Infrastructure Alignment",
                "Integrated Communication Layers"
            ]
        },
        {
            icon: Rocket,
            step: "03",
            title: "Deployment",
            desc: "High-ROI systems that automate dispatch, quotes, and manual field operations.",
            bullets: [
                "Automated Dispatch Protocols",
                "Dynamic Quote Management",
                "Real-time Operational Syncing"
            ]
        },
    ] : [
        {
            icon: Search,
            step: "01",
            title: "Análisis",
            desc: "Mapeo del caos de programación, obstáculos principales en el despacho e ineficiencias de seguimiento.",
            bullets: [
                "Descubrimiento de Obstáculos Principales Operativos",
                "Auditoría de Integridad del Flujo de Datos",
                "Identificación de Fugas en la Fuerza Laboral"
            ]
        },
        {
            icon: Layers,
            step: "02",
            title: "Diseño",
            desc: "Capas de enrutamiento y gestión diseñadas para agilizar las operaciones de las cuadrillas.",
            bullets: [
                "Arquitectura de Sistemas Personalizada",
                "Alineación de Infraestructura Digital",
                "Capas de Comunicación Integradas"
            ]
        },
        {
            icon: Rocket,
            step: "03",
            title: "Despliegue",
            desc: "Sistemas de alto ROI que automatizan el despacho, cotizaciones y operaciones manuales de campo.",
            bullets: [
                "Protocolos de Despacho Automatizados",
                "Gestión Dinámica de Cotizaciones",
                "Sincronización Operativa en Tiempo Real"
            ]
        },
    ];

    const headers = lang === 'en' ? {
        sectors: "Current Operational Sectors",
        sectorsSub: "Custom-engineered automation for high-stakes industrial environments.",
        blueprint: "Our System Diagnostic",
        blueprintSub: "A scientific approach to operational engineering that scales with your business."
    } : {
        sectors: "Sectores Operativos Actuales",
        sectorsSub: "Automatización diseñada a medida para entornos industriales de alto riesgo.",
        blueprint: "Diagnóstico de Nuestro Sistema",
        blueprintSub: "Un enfoque científico para la ingeniería operativa que escala con su negocio."
    };

    return (
        <section className="bg-background py-32 md:py-40 px-6 border-b border-foreground/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-40">
                {/* Our System Diagnostic - Z-PATTERN BENTO */}
                <div className="space-y-20">
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-foreground transition-colors duration-300">{headers.blueprint}</h2>
                        <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-2xl transition-colors duration-300">
                            {headers.blueprintSub}
                        </p>
                    </div>

                    <div className="space-y-24">
                        {steps.map((p, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Bento Card - Visual/Metric side */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="flex-1 w-full bg-card border border-foreground/10 p-8 md:p-16 shadow-sm rounded-none relative group overflow-hidden"
                                >
                                    <div className="absolute -top-8 -right-8 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                                        <p.icon className="w-64 h-64 text-foreground" />
                                    </div>
                                    <div className="relative z-10 flex flex-col gap-6">
                                        <div className="flex items-center gap-4 border-b border-border/50 pb-6">
                                            <span className="text-muted-foreground/30 text-5xl md:text-6xl font-black tracking-tighter">
                                                {p.step}.
                                            </span>
                                            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
                                                {p.title}
                                            </h3>
                                        </div>
                                        <ul className="space-y-4 pt-4">
                                            {p.bullets.map((point, bIdx) => (
                                                <li key={bIdx} className="flex items-center gap-4 text-sm md:text-base font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                                    <div className="h-2 w-2 bg-[#10b981] rounded-none shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Explanatory Copy Side */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="flex-1 space-y-6 w-full"
                                >
                                    <p className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight text-foreground/90">
                                        {p.desc}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* STRATEGY SESSION PIVOT - HIGH-CONVERSION CTA BLOCK */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto py-24 border-t border-foreground/5 flex flex-col items-center text-center space-y-12"
                >
                    <div className="space-y-4">
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground transition-colors duration-300">
                            {lang === 'en' ? 'Direct Engineering Access.' : 'Acceso Directo a Ingeniería.'}
                        </h3>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto transition-colors duration-300">
                            {lang === 'en'
                                ? "Skip the guesswork. Book a 15-minute strategy session to map your specific operational architecture and identify immediate wins."
                                : "Evite las adivinanzas. Reserve una sesión de estrategia de 15 minutos para mapear su arquitectura operativa específica e identificar mejoras inmediatas."}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-12">
                        <Button
                            onClick={() => navigate('/book')}
                            size="lg"
                            className="h-20 w-full sm:w-fit rounded-none px-12 text-xs md:text-lg font-black uppercase tracking-[0.2em] bg-[#10b981] hover:bg-foreground hover:text-background text-black shadow-[0_0_50px_rgba(16,185,129,0.2)] transition-all border-none group"
                        >
                            {t.nav.strategy}
                            <ArrowRight className="ml-4 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-2" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DiagnosticProtocol;
