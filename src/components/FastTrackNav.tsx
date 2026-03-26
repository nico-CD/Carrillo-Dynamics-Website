import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface FastTrackNavProps {
    onContactClick: () => void;
    onVisibilityChange?: (isVisible: boolean) => void;
}

const FastTrackNav = ({ onContactClick, onVisibilityChange }: FastTrackNavProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            const visible = window.scrollY > 800;
            if (visible !== isVisible) {
                setIsVisible(visible);
                onVisibilityChange?.(visible);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isVisible, onVisibilityChange]);

    const handleNavigation = (id: string) => {
        if (window.location.pathname !== "/") {
            window.location.href = `/#${id}`;
        } else {
            const el = document.getElementById(id);
            el?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
                    className="fixed top-0 left-0 right-0 z-[100] px-4 py-6 pointer-events-none"
                >
                    <div className="mx-auto max-w-4xl pointer-events-auto">
                        <div className="bg-[#050505] border border-white/10 px-8 py-4 flex items-center shadow-2xl relative overflow-hidden">
                            {/* Industrial Progress Bar */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-[1px] bg-white origin-left opacity-30"
                                style={{ scaleX, width: '100%' }}
                            />

                             <div className="flex w-full items-center justify-between gap-8">
                                <button
                                    onClick={() => window.location.href = "/"}
                                    className="flex items-center group"
                                >
                                    <span className="tech-mono text-[10px] font-black uppercase tracking-[0.4em] text-white">Carrillo Dynamics</span>
                                </button>

                                <div className="flex items-center gap-12">
                                    <Button
                                        onClick={onContactClick}
                                        size="sm"
                                        className="h-10 rounded-none px-6 text-[10px] font-black uppercase tracking-widest bg-white hover:bg-white/90 text-black transition-all group"
                                    >
                                        INITIATE AUDIT
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FastTrackNav;
