import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOManager from '@/components/SEOManager';
import { useTranslation } from '@/components/LanguageProvider';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import { ArrowRight } from "lucide-react";

const Book = () => {
    const { lang } = useTranslation();

    const revealProps = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }
    };

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-[#10b981]/10 font-sans">
            <SEOManager />
            <Navbar />
            
            <section className="pt-32 pb-24 px-6 min-h-screen bg-zinc-950 relative overflow-hidden flex flex-col items-center">
                {/* Engineering Graph Paper Background */}
                <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.4]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
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
                    className="w-full max-w-full px-4 mx-auto md:max-w-4xl text-center relative z-10 mb-4"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-6 text-foreground">
                        {lang === 'en' ? 'Book Your ' : 'Agende Su '} <br className="md:hidden" />
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

                <motion.div
                    className="w-full max-w-full px-4 mx-auto md:max-w-4xl relative z-10"
                    {...revealProps}
                >
                    <InlineWidget 
                        url={`https://calendly.com/nico-carrillodynamics/15-minute-strategy-session?hide_event_type_details=1&hide_gdpr_banner=1&locale=${lang}`}
                        styles={{
                            height: '700px',
                            width: '100%',
                            border: 'none',
                            overflow: 'hidden'
                        }}
                        pageSettings={{
                            backgroundColor: '09090b',
                            hideEventTypeDetails: true,
                            hideLandingPageDetails: true,
                            primaryColor: '10b981',
                            textColor: 'ffffff'
                        }}
                    />
                </motion.div>

                <div className="w-full max-w-5xl mx-auto px-4 relative z-10 mt-12 mb-12">
                    <div className="mb-12 text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
                            {lang === 'en' ? (
                                <>The <span className="text-[#10b981]">Engineering</span> Breakdown</>
                            ) : (
                                <>El Análisis de <span className="text-[#10b981]">Ingeniería</span></>
                            )}
                        </h2>
                        <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
                            {lang === 'en' 
                                ? "Watch the overview below to see exactly how we automate dispatch and eliminate manual data entry."
                                : "Mire el resumen a continuación para ver exactamente cómo automatizamos el despacho y eliminamos la entrada manual de datos."}
                        </p>
                    </div>
                    
                    <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-[0_20px_50px_-15px_rgba(16,185,129,0.15)] border border-border">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/Ox1LSIBMwZw?autoplay=0&rel=0&modestbranding=1" 
                            title="Engineering Breakdown" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <motion.div
                    className="w-full max-w-5xl px-4 mx-auto relative z-10 mt-8 mb-12"
                    {...revealProps}
                >
                    <div className="bg-zinc-950/50 backdrop-blur-xl border border-[#10b981]/30 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]">
                        <div className="text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-black uppercase text-foreground">
                                {lang === 'en' ? "Want to see it in action?" : "¿Quieres verlo en acción?"}
                            </h3>
                            <p className="text-muted-foreground font-medium mt-2">
                                {lang === 'en' ? "Test drive the live demo website built for local trades." : "Prueba el sitio web de demostración en vivo diseñado para oficios locales."}
                            </p>
                        </div>
                        <a 
                            href="https://demo.carrillodynamics.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="shrink-0 flex items-center justify-center gap-2 h-14 px-8 bg-[#10b981] hover:bg-[#0ea672] text-black font-black uppercase tracking-widest text-sm transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] rounded-none"
                        >
                            {lang === 'en' ? "Launch Demo" : "Lanza Demo"} <ArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default Book;
