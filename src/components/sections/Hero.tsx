import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
    onContactClick: () => void;
}

const cyclingWords = ["Sheet Sprawl", "Manual Syncing", "Invoice Chasing", "Email Purgatory", "CRM Bloat", "Lead Leakage"];

const Hero = ({ onContactClick }: HeroProps) => {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % cyclingWords.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    const easeTransition = [0.16, 1, 0.3, 1] as any;

    return (
        <section className="relative flex min-h-[90vh] flex-col justify-center px-6 py-48 bg-[#050505] overflow-hidden">
            <div className="max-w-4xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div className="space-y-6 text-left">
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                            Engineer <span className="italic">Flow.</span><br />
                            Eliminate <span className="italic">Friction.</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-4 h-10 overflow-hidden">
                        <span className="tech-mono text-[11px] font-bold text-zinc-400 uppercase tracking-widest whitespace-nowrap">We are eliminating:</span>
                        <div className="relative flex-1 h-full">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={cyclingWords[wordIndex]}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: easeTransition }}
                                    className="absolute left-0 tech-mono text-[11px] font-bold text-white uppercase tracking-widest border border-zinc-700 px-4 py-1.5"
                                >
                                    {cyclingWords[wordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>

                    <p className="text-xl md:text-2xl font-medium max-w-2xl leading-relaxed text-left text-zinc-400">
                        High-agency digital infrastructure for industrial operations. We replace friction with engineered leverage.
                    </p>

                    <div className="pt-8 text-left">
                        <Button
                            onClick={onContactClick}
                            size="lg"
                            className="h-16 md:h-24 w-full md:w-auto rounded-none px-8 md:px-16 text-base md:text-2xl font-black uppercase tracking-[0.3em] bg-white hover:bg-white/90 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] text-black transition-all group shrink-0"
                        >
                            INITIATE AUDIT
                            <ArrowRight className="ml-4 h-6 w-6 md:h-8 md:w-8 transition-transform group-hover:translate-x-3" />
                        </Button>
                    </div>
                </motion.div>
            </div>
            
            {/* Minimalist Industrial Grid Branding */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </section>
    );
};

export default Hero;
