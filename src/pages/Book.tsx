import React, { useEffect } from 'react';
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
                };
            }) => void;
        };
    }
}

const Book = () => {
    const { lang } = useTranslation();

    useEffect(() => {
        const scriptId = 'calendly-script';
        let script = document.getElementById(scriptId) as HTMLScriptElement | null;

        const initWidget = () => {
            const targetEl = document.getElementById('calendly-target-container');
            if (window.Calendly && targetEl) {
                targetEl.innerHTML = '';
                window.Calendly.initInlineWidget({
                    url: 'https://calendly.com/nico-carrillodynamics/15-minute-strategy-session',
                    parentElement: targetEl,
                    hideEventTypeDetails: true,
                    hideGdprBanner: true,
                    styles: {
                        backgroundColor: '09090b',
                        textColor: 'ffffff',
                        primaryColor: '10b981'
                    }
                });
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
                                : 'Seleccione una hora a continuación para su sesión de estrategia de 15 minutos.'}
                        </p>
                    </div>

                    <div className="w-full bg-background border border-border min-h-[750px] relative overflow-hidden rounded-sm">
                        <div 
                            id="calendly-target-container"
                            style={{ width: '100%', minHeight: '750px' }} 
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Book;
