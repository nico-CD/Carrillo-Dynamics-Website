import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOManager from '@/components/SEOManager';
import { useTranslation } from '@/components/LanguageProvider';

// Define TS interface for window.Calendly
declare global {
    interface Window {
        Calendly?: {
            initInlineWidget: (options: {
                url: string;
                parentElement: HTMLElement | null;
                prefill?: Record<string, any>;
                utm?: Record<string, any>;
                hideEventTypeDetails?: boolean;
                hideGdprBanner?: boolean;
                styles?: {
                    backgroundColor?: string;
                    textColor?: string;
                    primaryColor?: string;
                    height?: string;
                };
            }) => void;
        };
    }
}

const Book = () => {
    const { lang } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const scriptId = 'calendly-script';
        let script = document.getElementById(scriptId) as HTMLScriptElement | null;

        const initWidget = () => {
            const targetEl = document.getElementById('calendly-target-container');
            if (window.Calendly && targetEl) {
                targetEl.innerHTML = '';
                window.Calendly.initInlineWidget({
                    // Dynamic locale parameter appended to ensure bilingual support
                    url: `https://calendly.com/nico-carrillodynamics/15-minute-strategy-session?locale=${lang}`,
                    parentElement: targetEl,
                    hideEventTypeDetails: true,
                    hideGdprBanner: true,
                    styles: {
                        backgroundColor: '09090b',
                        textColor: 'ffffff',
                        primaryColor: '10b981',
                        height: '1000px'
                    }
                });

                // Listening to iframe load events to hide the loading overlay
                const iframe = targetEl.querySelector('iframe');
                if (iframe) {
                    iframe.addEventListener('load', () => {
                        setIsLoading(false);
                    });
                    // Fail-safe fallback in case load event fires early or fails
                    setTimeout(() => setIsLoading(false), 4000);
                } else {
                    setIsLoading(false);
                }
            }
        };

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            script.onload = initWidget;
            document.body.appendChild(script);
        } else {
            if (window.Calendly) {
                initWidget();
            } else {
                script.addEventListener('load', initWidget);
            }
        }

        return () => {
            if (script) {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-[#10b981]/10 font-sans">
            <SEOManager />
            <Navbar />
            
            <section className="pt-32 pb-24 px-6 relative border-b border-foreground/5">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-6 text-foreground">
                        {lang === 'en' ? 'Book a ' : 'Agende una '} <br/>
                        <span className="italic text-[#10b981]">
                            {lang === 'en' ? 'Strategy Session' : 'Sesión de Estrategia'}
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                        {lang === 'en' 
                            ? "Let's discuss your business, find the bottlenecks, and see how our automation systems can help you scale." 
                            : "Hablemos sobre su negocio, identifiquemos los cuellos de botella y veamos cómo nuestros sistemas de automatización pueden ayudarle a escalar."}
                    </p>
                </motion.div>
            </section>

            <section className="py-24 px-6 bg-muted/10 relative">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-background border-2 border-border p-4 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.1)]">
                        <div id="calendly-target-container" style={{ minWidth: '320px', height: '700px' }} />
                        
                        {/* Fallback Fail-Safe Banner */}
                        <div className="border-t border-border p-6 bg-black/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span className="text-xs md:text-sm font-mono text-muted-foreground">
                                {lang === 'en' 
                                    ? "Experiencing script latency? Open the scheduling terminal directly."
                                    : "¿Experimenta latencia de script? Abra la terminal de programación directamente."}
                            </span>
                            <a 
                                href="https://calendly.com/nico-carrillodynamics/15-minute-strategy-session"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 text-xs uppercase tracking-widest border border-emerald-500/30 text-emerald-400 bg-emerald-950/20 hover:bg-emerald-500 hover:text-black font-mono transition-all shrink-0 text-center"
                            >
                                {lang === 'en' ? "Open Scheduler" : "Abrir Programador"}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Book;
