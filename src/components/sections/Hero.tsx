import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
    onContactClick: () => void;
}

const words = ["Sheet Sprawl", "Manual Syncs", "Invoice Chasing", "Email Purgatory", "CRM Bloat", "Lead Leakage"];

const Hero = ({ onContactClick }: HeroProps) => {
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
    }, [currentWord, isDeleting, wordIndex, typingSpeed]);

    return (
        <section className="relative flex min-h-[85vh] flex-col justify-center px-6 pt-32 md:pt-48 pb-12 md:pb-24 bg-background overflow-hidden transition-colors duration-300">
            <div className="max-w-5xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 md:space-y-12"
                >
                    <div className="space-y-4 text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tight leading-[0.85] text-foreground transition-colors duration-300">
                            Your team is spending hours on{" "}
                            <span className="text-[#10b981] italic">
                                {currentWord}
                                <span className="animate-pulse">|</span>
                            </span>
                        </h1>
                    </div>

                    <div className="space-y-6 text-left max-w-4xl">
                        <div className="flex flex-col gap-4">
                             <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground leading-none transition-colors duration-300 whitespace-nowrap">
                                Manual data entry. Disconnected tools. Repeating the same steps every day.
                             </p>
                             <h2 className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-widest text-foreground leading-none transition-colors duration-300">
                                AI automation is not a trend. It's a <span className="text-[#10b981] italic underline decoration-2 underline-offset-8">tool to reclaim your time.</span>
                             </h2>
                        </div>
                    </div>

                    <div className="pt-8 text-left">
                        <Button
                            onClick={onContactClick}
                            size="lg"
                            className="h-16 md:h-24 w-full sm:w-fit rounded-none px-10 md:px-20 text-xs sm:text-sm md:text-xl font-black uppercase tracking-[0.2em] bg-[#10b981] hover:bg-[#0ea672] shadow-[0_0_50px_rgba(16,185,129,0.2)] text-black transition-all group border-none"
                        >
                            <span className="flex items-center gap-4">
                                GET IN TOUCH
                                <ArrowRight className="h-4 w-4 md:h-8 md:w-8 transition-transform group-hover:translate-x-4" />
                            </span>
                        </Button>
                    </div>
                </motion.div>
            </div>
            
            {/* Visual background cleanup */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,#10b981_0,transparent:25%)] blur-3xl" />
        </section>
    );
};

export default Hero;
