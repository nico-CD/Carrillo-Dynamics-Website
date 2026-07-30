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

            <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
                {/* Engineering Grid Background */}
                <div 
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%2310b981' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
                    }}
                />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
                    <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-[#10b981]/15 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-[#10b981]/10 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="bg-transparent w-full">
                        <InlineWidget 
                            url={`https://calendly.com/nico-carrillodynamics/15-minute-strategy-session?hide_event_type_details=1&hide_gdpr_banner=1&locale=${lang}`}
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
