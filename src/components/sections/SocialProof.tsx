import { motion } from "framer-motion";
import { Zap, Target, Wrench } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";

const SocialProof = () => {
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
        <section className="py-24 bg-muted/5 border-y border-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                        {lang === 'en' ? "Built for " : "Construido para "}
                        <span className="text-[#10b981] italic">{lang === 'en' ? "Results." : "Resultados."}</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {pillars.map((pillar, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 border border-border bg-background flex flex-col space-y-4 hover:border-[#10b981]/50 transition-colors"
                        >
                            <div className="h-12 w-12 bg-[#10b981]/10 flex items-center justify-center mb-4">
                                <pillar.icon className="w-6 h-6 text-[#10b981]" />
                            </div>
                            <h3 className="text-xl font-bold uppercase">{pillar.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
