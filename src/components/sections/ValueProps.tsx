import { motion } from "framer-motion";
import { Zap, Target, Wrench } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";

const ValueProps = () => {
    const { lang } = useTranslation();

    const pillars = [
        {
            icon: Zap,
            title: lang === 'en' ? "Speed is Money" : "La Velocidad es Dinero",
            description: lang === 'en' 
                ? "In the service industry, if you're slow, your competitor gets the job. Our systems ensure you're always the first to respond." 
                : "En la industria de servicios, si es lento, su competidor se lleva el trabajo. Nuestros sistemas aseguran que siempre sea el primero en responder."
        },
        {
            icon: Target,
            title: lang === 'en' ? "No-Nonsense Execution" : "Ejecución Directa",
            description: lang === 'en'
                ? "We don't sell vanity metrics. We build digital infrastructure that actually works and drives tangible revenue."
                : "No vendemos métricas de vanidad. Construimos infraestructura digital que realmente funciona y genera ingresos."
        },
        {
            icon: Wrench,
            title: lang === 'en' ? "Streamlined Operations" : "Operaciones Simplificadas",
            description: lang === 'en'
                ? "Stop drowning in paperwork. Automate your scheduling and follow-ups to get paid faster and reduce office headaches."
                : "Deje de ahogarse en papeleo. Automatice su programación y seguimiento para cobrar más rápido y reducir dolores de cabeza."
        }
    ];

    return (
        <section className="relative py-32 bg-zinc-950 border-b border-border overflow-hidden">
            {/* Darker background with top subtle line to separate from How It Works */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#10b981]/20 to-transparent" />
            
            {/* Topographical Contour Map Background */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.1]"
                style={{
                    backgroundImage: `
                        repeating-radial-gradient(circle at 0% 0%, transparent 0, transparent 40px, #10b981 40px, #10b981 41px),
                        repeating-radial-gradient(circle at 100% 100%, transparent 0, transparent 60px, #10b981 60px, #10b981 61px)
                    `
                }}
            />
            
            {/* Abstract Mesh Background Glow */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-0 left-1/4 w-[50rem] h-[50rem] bg-gradient-to-br from-[#10b981]/10 to-transparent rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-[60rem] h-[60rem] bg-gradient-to-tl from-[#0ea672]/10 to-transparent rounded-full blur-[150px] translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
                        {lang === 'en' ? "Built for " : "Construido para "}
                        <span className="text-[#10b981] italic">{lang === 'en' ? "Results." : "Resultados."}</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mt-12">
                    {pillars.map((pillar, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 md:p-10 border border-border/50 bg-zinc-900/60 backdrop-blur-xl rounded-3xl flex flex-col space-y-6 hover:border-[#10b981]/50 transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.2)] group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            
                            <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-[#10b981]/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                <pillar.icon className="w-8 h-8 md:w-10 md:h-10 text-[#10b981]" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight relative z-10 text-zinc-100">{pillar.title}</h3>
                            <p className="text-zinc-300 leading-relaxed text-lg md:text-xl font-medium relative z-10">{pillar.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProps;
