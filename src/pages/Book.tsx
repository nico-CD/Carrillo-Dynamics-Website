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
                script.removeEventListener('load', initWidget);
            }
        };
    }, [lang]);

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-[#10b981]/10 font-sans overflow-x-hidden">
            <SEOManager />
            <Navbar />
            
            <section className="pt-32 pb-16 px-6 border-b border-foreground/5 min-h-[80vh] flex flex-col items-center justify-center">
                <div className="w-full max-w-5xl mx-auto space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
                            {lang === 'en' ? 'Direct Engineering Access.' : 'Acceso Directo a Ingeniería.'}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                            {lang === 'en' 
                                ? 'Select a time below for your 15-minute strategy session.' 
                                : 'Seleccione un horario a continuación para su sesión de estrategia de 15 minutos.'}
                        </p>
                    </div>

                    <div className="w-full bg-background border border-border min-h-[1000px] relative overflow-visible rounded-sm" style={{ overflow: 'visible' }}>
                        <div 
                            id="calendly-target-container"
                            style={{ width: '100%', height: '1000px', display: 'block', minHeight: '1000px' }} 
                        />
                        
                        {/* Themed telemetry loading spinner */}
                        {isLoading && (
                            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-[#09090b] pointer-events-none transition-opacity duration-300">
                                <div className="relative h-12 w-12 flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-full border-2 border-emerald-500/10 animate-pulse" />
                                    <div className="absolute inset-0 rounded-full border-2 border-t-[#10b981] animate-spin" />
                                </div>
                                <span className="font-mono text-[10px] text-[#10b981] uppercase tracking-[0.2em] animate-pulse">
                                    {lang === 'en' ? 'Connecting Secure Pipeline...' : 'Conectando Canal Seguro...'}
                                </span>
                            </div>
                        )}
                        
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
