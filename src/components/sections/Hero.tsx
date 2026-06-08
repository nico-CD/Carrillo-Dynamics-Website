import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/components/LanguageProvider";

interface HeroProps {
    onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
    const { lang, t } = useTranslation();
    const words = lang === 'en' 
        ? ["Sheet Sprawl", "Manual Syncs", "Invoice Lag", "Email Limbo", "CRM Bloat", "Lead Leakage"]
        : ["Hojas Caóticas", "Sincros Manuales", "Retraso en Facturas", "Limbo de Emails", "CRM Saturado", "Fuga de Leads"];

    const [currentWord, setCurrentWord] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleType = () => {
            const targetWord = words[wordIndex];
            if (isDeleting) {
                setCurrentWord(targetWord.substring(0, currentWord.length - 1));
                setTypingSpeed(40);
            } else {
                setCurrentWord(targetWord.substring(0, currentWord.length + 1));
                setTypingSpeed(90);
            }

            if (!isDeleting && currentWord === targetWord) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && currentWord === "") {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentWord, isDeleting, wordIndex, typingSpeed, words]);

    return (
        <section className="relative flex min-h-[85vh] flex-col justify-center px-6 pt-32 md:pt-48 pb-12 md:pb-24 bg-background overflow-hidden transition-colors duration-300 scanner-border border-b border-foreground/5">
            <div className="max-w-7xl mx-auto w-full z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 md:space-y-12 flex flex-col items-center"
                    >
                        <div className="space-y-4 text-center">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.85] text-foreground transition-colors duration-300">
                                {t.hero.title}<br />
                                <span className="text-[#10b981] italic">
                                    {currentWord}
                                    <span className="animate-pulse">|</span>
                                </span>
                            </h1>
                        </div>

                        <p className="text-sm sm:text-base md:text-lg font-medium text-muted-foreground max-w-2xl text-center leading-relaxed">
                            {lang === 'en' 
                                ? "We engineer and build custom automated systems for trade and service companies to optimize their operations, protect their margins, and reclaim their time."
                                : "Diseñamos y construimos sistemas automatizados personalizados para que las empresas comerciales y de servicios optimicen sus operaciones, protejan sus márgenes y recuperen su tiempo."}
                        </p>

                        <div className="pt-4 text-center">
                            <Button
                                onClick={onContactClick}
                                size="lg"
                                className="h-16 md:h-20 w-full sm:w-fit rounded-none px-10 md:px-12 text-xs sm:text-sm md:text-lg font-black uppercase tracking-[0.2em] bg-[#10b981] hover:bg-[#0ea672] shadow-[0_0_50px_rgba(16,185,129,0.2)] text-black transition-all group border-none"
                            >
                                <span className="flex items-center gap-4">
                                    {t.nav.blueprint}
                                    <ArrowRight className="h-4 w-4 md:h-6 md:w-6 transition-transform group-hover:translate-x-4" />
                                </span>
                            </Button>
                        </div>

                        {/* Telemetry Trust Badges */}
                        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 font-mono text-[9px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest">
                            <span>CHICAGO-BASED ENGINEERING</span>
                            <span className="opacity-30">|</span>
                            <span>&lt; 60s RESPONSE LATENCY</span>
                            <span className="opacity-30">|</span>
                            <span>DETERMINISTIC DATA ROUTING</span>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Visual background cleanup */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,#10b981_0,transparent_25%)] blur-3xl" />
        </section>
    );
};

export default Hero;
