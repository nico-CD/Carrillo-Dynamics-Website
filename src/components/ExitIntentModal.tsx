import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from './LanguageProvider';

export default function ExitIntentModal() {
    const { lang } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [hasSeen, setHasSeen] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasSeen && !localStorage.getItem('cd-exit-modal-seen')) {
                setIsOpen(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasSeen]);

    const closeScale = () => {
        setIsOpen(false);
        setHasSeen(true);
        localStorage.setItem('cd-exit-modal-seen', 'true');
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 p-8 md:p-12 rounded-none shadow-2xl"
                >
                    <button 
                        onClick={closeScale}
                        className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <span className="tech-mono text-[10px] text-[#10b981] font-bold tracking-[0.3em] uppercase">
                                Internal Resource
                            </span>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-none">
                                {lang === 'en' ? 'Operational Leak Detection' : 'Detección de Fugas Operativas'}
                            </h2>
                        </div>

                        <p className="text-zinc-400 text-lg leading-relaxed">
                            {lang === 'en' 
                                ? 'Download our internal checklist to identify friction points in your current lead triage and eliminate manual bottlenecks.'
                                : 'Descargue nuestra lista de verificación interna para identificar puntos de fricción en su triaje de leads y eliminar cuellos de botella manuales.'}
                        </p>

                        <form 
                            className="space-y-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                // Handle download logic
                                closeScale();
                            }}
                        >
                            <input 
                                type="email" 
                                required
                                placeholder={lang === 'en' ? 'ENTER BUSINESS EMAIL' : 'INGRESE EMAIL DE NEGOCIOS'}
                                className="w-full bg-zinc-900 border border-zinc-800 p-4 font-mono text-sm tracking-widest text-white focus:outline-none focus:border-[#10b981] transition-colors rounded-none"
                            />
                            <Button 
                                type="submit"
                                className="w-full h-16 bg-[#10b981] hover:bg-[#0ea672] text-black font-black uppercase tracking-widest transition-all rounded-none gap-3"
                            >
                                {lang === 'en' ? 'DOWNLOAD' : 'DESCARGAR'}
                                <Download className="w-5 h-5" />
                            </Button>
                        </form>

                        <button 
                            onClick={closeScale}
                            className="w-full text-zinc-600 hover:text-zinc-400 tech-mono text-[10px] tracking-[0.2em] uppercase transition-colors"
                        >
                            [ DECLINE ACCESS ]
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
