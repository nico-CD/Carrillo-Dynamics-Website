import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Download, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from './LanguageProvider';

const ExitIntentModal = () => {
    const { lang } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Exit intent logic
        const handleMouseOut = (e: MouseEvent) => {
            if (e.clientY <= 0 && !isOpen && !submitted && !localStorage.getItem('exit_modal_shown')) {
                setIsOpen(true);
                localStorage.setItem('exit_modal_shown', 'true');
            }
        };

        document.addEventListener('mouseleave', handleMouseOut);
        return () => document.removeEventListener('mouseleave', handleMouseOut);
    }, [isOpen, submitted]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await fetch('https://primary-production-4591.up.railway.app/webhook/e07e66df-287f-4fd2-8b4e-8fcb7b134907', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'exit_intent' })
            });
            setSubmitted(true);
            setTimeout(() => setIsOpen(false), 3000);
        } catch (error) {
            setSubmitted(true);
            setTimeout(() => setIsOpen(false), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* DEV TRIGGER BUTTON */}
            <button 
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase p-2 z-[99] opacity-20 hover:opacity-100 transition-opacity"
            >
                [ DEV: MODAL ]
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-2xl bg-background border-2 border-border p-12 md:p-20 space-y-12 scanner-border"
                        >
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X className="h-8 w-8" />
                            </button>

                            <div className="space-y-6">
                                <div className="text-[#10b981] font-black text-xs tracking-[0.3em] uppercase flex items-center gap-3">
                                    <span className="h-2 w-2 bg-[#10b981] rounded-full" />
                                    OPERATIONAL LEAK DETECTION
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-none">
                                    {lang === 'en' ? 'Plug Your Funnel.' : 'Tape sus Fugas.'}
                                </h3>
                                <p className="text-xl text-muted-foreground font-medium max-w-lg">
                                    {lang === 'en' 
                                        ? 'Download our internal checklist to identify friction points in your current lead triage.'
                                        : 'Descargue nuestra lista interna para identificar los puntos de fricción en su triaje de leads actual.'}
                                </p>
                            </div>

                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="relative">
                                        <input 
                                            type="email" 
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="engineering@company.com"
                                            className="w-full bg-muted/30 border-2 border-border p-8 text-xl font-black uppercase tracking-tight focus:outline-none focus:border-[#10b981] transition-colors placeholder:text-muted-foreground/30"
                                        />
                                        <Mail className="absolute right-8 top-1/2 -translate-y-1/2 text-muted-foreground/20 h-8 w-8" />
                                    </div>
                                    <Button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        size="lg" 
                                        className="h-24 w-full rounded-none bg-foreground text-background font-black uppercase tracking-[0.2em] text-lg hover:bg-[#10b981] hover:text-black transition-all group"
                                    >
                                        {isSubmitting ? <Loader2 className="animate-spin h-8 w-8" /> : (lang === 'en' ? 'DOWNLOAD' : 'DESCARGAR')}
                                        {!isSubmitting && <Download className="ml-4 h-6 w-6 group-hover:translate-y-1 transition-transform" />}
                                    </Button>
                                </form>
                            ) : (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="bg-muted/10 border-2 border-[#10b981]/30 p-12 text-center space-y-6"
                                >
                                    <div className="text-[#10b981] font-black uppercase tracking-widest">{lang === 'en' ? 'TRANSMISSION SUCCESSFUL' : 'TRANSMISIÓN EXITOSA'}</div>
                                    <p className="text-muted-foreground">
                                        {lang === 'en' 
                                            ? 'Check your email for the Automation Checklist.' 
                                            : 'Revise su correo para la Lista de Automatización.'}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ExitIntentModal;
