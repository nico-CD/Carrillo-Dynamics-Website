import { Search, Layers, Rocket, Hammer, Truck, Factory, Thermometer, Droplets, TreePine, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/components/LanguageProvider";
import CalendlyModal from "@/components/CalendlyModal";
import { Button } from "@/components/ui/button";

const BlueprintProtocol = () => {
    const { lang } = useTranslation();
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
            desc: "Mapeo del caos de programación, cuellos de botella en el despacho e ineficiencias de seguimiento.",
            bullets: [
                "Descubrimiento de Cuellos de Botella Operativos",
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
        blueprint: "Our System Blueprint",
        blueprintSub: "A scientific approach to operational engineering that scales with your business."
    } : {
        sectors: "Sectores Operativos Actuales",
        sectorsSub: "Automatización diseñada a medida para entornos industriales de alto riesgo.",
        blueprint: "Blueprint de Nuestro Sistema",
        blueprintSub: "Un enfoque científico para la ingeniería operativa que escala con su negocio."
    };

    return (
        <section className="bg-background py-24 md:py-48 px-6 border-y border-zinc-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-48">
                
                {/* Current Operational Sectors - HEAVY INDUSTRIAL GRID */}
                <div className="space-y-16">
                    <div className="flex flex-col items-start gap-4">
                         <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-foreground transition-colors duration-300">{headers.sectors}</h2>
                         <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-2xl transition-colors duration-300">
                             {headers.sectorsSub}
                         </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[2px] bg-border border-2 border-border overflow-hidden">
                        {sectors.map((s, idx) => (
                            <div key={idx} className="bg-background p-10 flex flex-col items-center justify-center gap-8 group hover:bg-muted/5 transition-colors h-40">
                                <s.icon className="h-6 w-6 text-muted-foreground/50 group-hover:text-[#10b981] group-hover:scale-110 transition-all duration-300" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 group-hover:text-[#10b981] transition-colors">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* OUR FORENSIC LEAD AUDIT VIDEO */}
                <div className="space-y-16">
                    <div className="flex flex-col items-start gap-4">
                         <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-foreground transition-colors duration-300">
                             {lang === 'en' ? 'Forensic Lead Audit' : 'Auditoría Forense'}
                         </h2>
                         <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-3xl transition-colors duration-300">
                             {lang === 'en' 
                                ? "Watch the process behind our custom automation blueprints. We don't guess—we audit your existing data flow to find the leakage."
                                : "Vea el proceso detrás de nuestros blueprints de automatización. No adivinamos: auditamos su flujo de datos para encontrar la fuga."}
                         </p>
                    </div>
                    <div className="aspect-video w-full bg-muted/20 border-2 border-border relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <iframe 
                            src="https://www.loom.com/embed/5ef9b8b5c07140da933cefcc317b6544?hide_owner=true&hide_share=true&hide_title=true&hide_status_bar=true"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity z-10"
                        ></iframe>
                    </div>
                </div>

                {/* Our System Blueprint - HEAVY INDUSTRIAL GRID */}
                <div className="space-y-20">
                    <div className="flex flex-col items-start gap-4">
                         <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-foreground transition-colors duration-300">{headers.blueprint}</h2>
                         <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-2xl transition-colors duration-300">
                             {headers.blueprintSub}
                         </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 bg-border border-2 border-border gap-[2px] overflow-hidden">
                        {steps.map((p, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-background p-10 md:p-14 flex flex-col gap-10 hover:bg-muted/5 transition-all group"
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <span className="text-muted-foreground/30 text-lg font-black group-hover:text-[#10b981] transition-colors">{p.step}.</span>
                                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground transition-colors duration-300">{p.title}</h3>
                                    </div>
                                    <p.icon className="h-10 w-10 text-muted-foreground/20 group-hover:text-[#10b981] transition-all duration-500 shrink-0" />
                                </div>
                                <div className="space-y-8 h-full flex flex-col">
                                    <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                        {p.desc}
                                    </p>
                                    
                                    <ul className="space-y-4 pt-4 border-t border-border flex-grow">
                                        {p.bullets.map((point, bIdx) => (
                                            <li key={bIdx} className="flex items-center gap-3 text-xs md:text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                                <div className="h-1 w-1 bg-[#10b981] rounded-full shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* STRATEGY SESSION PIVOT - HIGH-CONVERSION CTA BLOCK */}
            <div className="max-w-7xl mx-auto mt-48 py-24 border-t-2 border-border flex flex-col items-center text-center space-y-12">
                <div className="space-y-4">
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground transition-colors duration-300">
                        {lang === 'en' ? 'Direct Engineering Access.' : 'Acceso Directo a Ingeniería.'}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto transition-colors duration-300">
                        {lang === 'en' 
                            ? "Skip the guesswork. Book a 30-minute strategy session to map your specific operational architecture and identify immediate wins."
                            : "Evite las adivinanzas. Reserve una sesión de estrategia de 30 minutos para mapear su arquitectura operativa específica e identificar mejoras inmediatas."}
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                    <Button
                        onClick={() => window.open("https://calendly.com/nico-carrillodynamics/30min", "_blank")}
                        size="lg"
                        className="h-20 w-full sm:w-fit rounded-none px-12 text-xs md:text-lg font-black uppercase tracking-[0.2em] bg-[#10b981] hover:bg-white text-black shadow-[0_0_50px_rgba(16,185,129,0.2)] transition-all border-none group"
                    >
                        {lang === 'en' ? 'BOOK STRATEGY SESSION' : 'SESIÓN DE ESTRATEGIA'}
                        <ArrowRight className="ml-4 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BlueprintProtocol;
