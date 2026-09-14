import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Handshake, LineChart } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";

const HowItWorks = () => {
    const { lang } = useTranslation();

    const steps = [
        {
            badge: lang === 'en' ? "[ STEP 01 ]" : "[ PASO 01 ]",
            icon: ClipboardCheck,
            title: lang === 'en' ? "Book a Session Below" : "Reserve una Sesión",
            description: lang === 'en'
                ? "Test-drive the live engineering sandbox below, grab 15 minutes on our calendar to map out your digital engine."
                : "Pruebe el sandbox de ingeniería en vivo a continuación, reserva 15 minutos en nuestro calendario para trazar su motor digital."
        },
        {
            badge: lang === 'en' ? "[ STEP 02 ]" : "[ PASO 02 ]",
            icon: LineChart,
            title: lang === 'en' ? "Get a Custom Plan" : "Obtenga un Plan",
            description: lang === 'en'
                ? "We provide a straightforward, no-nonsense strategy to get you more leads and automate the boring stuff."
                : "Le proporcionamos una estrategia directa para obtener más clientes y automatizar las tareas repetitivas."
        },
        {
            badge: lang === 'en' ? "[ STEP 03 ]" : "[ PASO 03 ]",
            icon: Handshake,
            title: lang === 'en' ? "Grow Your Business" : "Haga Crecer su Negocio",
            description: lang === 'en'
                ? "We implement the system. You focus on running your business and serving your new clients."
                : "Implementamos el sistema. Usted se enfoca en administrar su negocio y atender a sus nuevos clientes."
        }
    ];

    return (
        <section className="relative py-40 bg-background border-b border-border overflow-hidden">
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] z-0">
                <img src="/bull_PNGs/vect.bull.svg" alt="" className="w-[800px] h-[800px] object-contain grayscale" />
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-[#10b981]/15 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-0 w-[40rem] h-[40rem] bg-[#10b981]/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6 z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground">
                        {lang === 'en' ? "How It Works" : "Cómo Funciona"}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 lg:gap-6 items-stretch">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.badge} className="contents">
                                <motion.article
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="group flex flex-col bg-[#18181B] border border-[#27272A] rounded-2xl p-8 md:p-10 text-center transition-all duration-300 hover:border-[#10b981]/50 hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.35)]"
                                >
                                    <span className="self-center mb-6 font-mono text-[10px] md:text-xs font-black uppercase tracking-widest text-[#10b981]">
                                        {step.badge}
                                    </span>
                                    <div className="mx-auto mb-6 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-xl border border-[#27272A] bg-[#18181B] text-[#10b981] transition-colors duration-300 group-hover:border-[#10b981]/40">
                                        <Icon className="h-8 w-8 md:h-10 md:w-10" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black uppercase text-zinc-100 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="mt-4 text-zinc-400 font-medium text-base md:text-lg leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.article>

                                {index < steps.length - 1 && (
                                    <div
                                        className="hidden md:flex items-center justify-center self-center text-[#10b981]/70"
                                        aria-hidden="true"
                                    >
                                        <span className="h-px w-6 lg:w-10 bg-[#10b981]/40" />
                                        <ArrowRight className="h-5 w-5 shrink-0" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
