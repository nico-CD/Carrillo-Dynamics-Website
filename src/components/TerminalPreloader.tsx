import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TerminalPreloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Lock body scroll right away
        document.body.style.overflow = 'hidden';

        const timeout = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = '';
        }, 1500);

        return () => {
            clearTimeout(timeout);
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[999] bg-black flex items-center justify-center p-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative w-24 h-24 sm:w-32 sm:h-32"
                    >
                        <img 
                            src="/bull_PNGs/vect.bull.svg" 
                            alt="Carrillo Dynamics" 
                            className="h-full w-full object-contain grayscale opacity-80"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
