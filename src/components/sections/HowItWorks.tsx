import { motion } from "framer-motion";
import { ClipboardCheck, LineChart, Handshake } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";

const HowItWorks = () => {
    const { lang } = useTranslation();

    const steps = [
        {
            icon: <ClipboardCheck className="w-12 h-12 text-[#10b981]" />,
            title: lang === 'en' ? "1. Reach Out" : "1. Contáctenos",
            description: lang === 'en' 
                ? "Submit your details through our form below. We'll review your current setup and find the leaks." 
                : "Envíe sus datos a través de nuestro formulario a continuación. Revisaremos su configuración y encontraremos las fugas."
        },
        {
            icon: <LineChart className="w-12 h-12 text-[#10b981]" />,
            title: lang === 'en' ? "2. Get a Custom Plan" : "2. Obtenga un Plan",
            description: lang === 'en'
                ? "We provide a straightforward, no-nonsense strategy to get you more leads and automate the boring stuff."
                : "Le proporcionamos una estrategia directa para obtener más clientes y automatizar las tareas repetitivas."
        },
        {
            icon: <Handshake className="w-12 h-12 text-[#10b981]" />,
            title: lang === 'en' ? "3. Grow Your Business" : "3. Haga Crecer su Negocio",
            description: lang === 'en'
                ? "We implement the system. You focus on running your business and serving your new clients."
                : "Implementamos el sistema. Usted se enfoca en administrar su negocio y atender a sus nuevos clientes."
        }
    ];

    return (
        <section className="relative py-32 bg-background border-b border-border overflow-hidden">
            {/* Abstract Background Glow & Logo Integration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none flex items-center justify-center opacity-[0.03]">
                <img src="/bull_PNGs/bull.512x512.webp" alt="Background" className="w-[800px] h-[800px] object-contain grayscale" />
            </div>
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-[#10b981]/15 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-0 w-[40rem] h-[40rem] bg-[#10b981]/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground">
                        {lang === 'en' ? "How It Works" : "Cómo Funciona"}
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center space-y-6 lg:space-y-8 group"
                        >
                            <div className="p-8 bg-zinc-950/80 backdrop-blur-xl border border-border/50 group-hover:border-[#10b981]/60 shadow-sm rounded-3xl mb-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.25)] relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10 scale-125 md:scale-150 p-2">
                                    {step.icon}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-100">{step.title}</h3>
                                <p className="text-zinc-300 font-medium text-lg md:text-xl leading-relaxed max-w-sm">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
