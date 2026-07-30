import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOManager from '@/components/SEOManager';
import { useTranslation } from '@/components/LanguageProvider';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';

const Book = () => {
    const { lang } = useTranslation();

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-[#10b981]/10 font-sans">
            <SEOManager />
            <Navbar />
            
            <section className="pt-32 pb-24 px-6 min-h-screen bg-zinc-950 relative overflow-hidden flex flex-col items-center">
                {/* Engineering Graph Paper Background */}
                <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.07]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.5'/%3E%3C/svg%3E")`
                    }}
                />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
                    <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-[#10b981]/15 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-[#10b981]/10 rounded-full blur-[100px]" />
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center relative z-10 mb-12"
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

                <div className="max-w-4xl w-full mx-auto relative z-10">
                    <div className="bg-transparent w-full">
                        <InlineWidget 
                            url={`https://calendly.com/nico-carrillodynamics/15-minute-strategy-session?hide_event_type_details=1&hide_gdpr_banner=1&locale=${lang}`}
                            styles={{
                                height: '700px',
                                minWidth: '320px'
                            }}
                            pageSettings={{
                                backgroundColor: '09090b',
                                hideEventTypeDetails: true,
                                hideLandingPageDetails: true,
                                primaryColor: '10b981',
                                textColor: 'ffffff'
                            }}
                        />
                    </div>
                    
                    <div className="mt-8 text-center">
                        <a 
                            href={`https://calendly.com/nico-carrillodynamics/15-minute-strategy-session?locale=${lang}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-[#10b981] transition-colors"
                        >
                            {lang === 'en' ? 'Widget not loading? Click here to book directly.' : '¿El widget no carga? Haga clic aquí para agendar directamente.'}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Book;
