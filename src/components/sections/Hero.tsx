import { motion } from "framer-motion";
import { useTranslation } from "@/components/LanguageProvider";

interface HeroProps {
    onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
    const { lang, t } = useTranslation();

    return (
        <section className="relative pt-36 pb-16 md:pt-40 md:pb-28 min-h-[85vh] flex flex-col justify-center items-center px-6 bg-background overflow-hidden transition-colors duration-300">
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.4] bg-repeat"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center"
            >
                <h1 className="uppercase leading-[0.9]">
                    <span className="block text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white md:whitespace-nowrap">
                        {lang === 'en' ? "Less chaos. More capacity." : "Menos caos. Más capacidad."}
                    </span>
                    <span className="block text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#10b981] mt-1 md:mt-2 md:whitespace-nowrap">
                        {lang === 'en' ? "Automate your shop." : "Automatiza tu taller."}
                    </span>
                </h1>

                <p className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto font-medium mt-6 mb-12 md:mb-16 leading-relaxed">
                    {t.hero.subtitle}
                </p>

                <button
                    type="button"
                    onClick={onContactClick}
                    className="px-10 py-5 bg-[#10b981] text-zinc-950 font-black text-xl rounded-xl hover:bg-[#0ea672] shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all hover:scale-105 uppercase"
                >
                    {lang === 'en' ? "Test our engines" : "Prueba nuestros motores"}
                </button>
            </motion.div>
        </section>
    );
};

export default Hero;
