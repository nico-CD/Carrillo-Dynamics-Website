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

            <section className="py-24 px-6 bg-muted/10 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
                    <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#10b981]/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="bg-background border border-border/50 rounded-2xl p-2 md:p-4 shadow-[0_20px_50px_-15px_rgba(16,185,129,0.2)]">
                        <InlineWidget 
                            url={`https://calendly.com/nico-carrillodynamics/30min?hide_event_type_details=1&hide_gdpr_banner=1&locale=${lang}`}
                            styles={{
                                height: '700px',
                                minWidth: '320px'
                            }}
                            pageSettings={{
                                backgroundColor: '09090b',
                                hideEventTypeDetails: false,
                                hideLandingPageDetails: false,
                                primaryColor: '10b981',
                                textColor: 'ffffff'
                            }}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Book;
