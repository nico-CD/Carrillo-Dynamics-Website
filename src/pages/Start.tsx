import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { InlineWidget } from "react-calendly";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOManager from "@/components/SEOManager";

// Logic & Types
import { useTranslation } from "@/components/LanguageProvider";

const Start = () => {
    const { lang, t } = useTranslation();

    const revealProps = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }
    };

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-[#10b981]/10 font-sans overflow-x-hidden transition-colors duration-300">
            <SEOManager isNoindex={true} />
            {/* Clean Header - No distracting navigation, just the logo */}
            <header className="w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md z-50 sticky top-0 h-20 flex items-center px-6">
                <div className="max-w-7xl mx-auto flex w-full items-center justify-center">
                    <div className="flex items-center gap-2">
                        <img src="/bull_PNGs/vect.bull.svg" alt="Carrillo Dynamics Logo" className="h-10 w-10" />
                        <span className="font-black text-xl tracking-tighter">
                            CARRILLO <span className="text-[#10b981]">DYNAMICS</span>
                        </span>
                    </div>
                </div>
            </header>

            {/* VIDEO SECTION */}
            <section className="px-6 py-20 bg-background relative z-10 transition-colors duration-300">
                {/* Engineering Graph Paper Background */}
                <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.4] bg-repeat"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                    }}
                />
                
                <div className="mx-auto max-w-5xl relative z-10">
                    <div className="mb-12 text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
                            {lang === 'en' ? (
                                <>The <span className="text-[#10b981]">Engineering</span> Breakdown</>
                            ) : (
                                <>El Análisis de <span className="text-[#10b981]">Ingeniería</span></>
                            )}
                        </h1>
                        <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
                            {lang === 'en' 
                                ? "Watch the overview below to see exactly how we automate dispatch and eliminate manual data entry. Once finished, complete the diagnostic form."
                                : "Mire el resumen a continuación para ver exactamente cómo automatizamos el despacho y eliminamos la entrada manual de datos. Una vez que termine, complete el formulario de diagnóstico."}
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
            </section>

            {/* THE BOOKING SECTION */}
            <section id="intake" className="px-6 pb-20 md:pb-32 bg-background relative z-10 transition-colors duration-300 overflow-hidden">
                <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.4] bg-repeat"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                    }}
                />
                
                <motion.div
                    className="w-full max-w-full px-4 mx-auto md:max-w-4xl scroll-mt-24 relative z-10"
                    {...revealProps}
                >
                    <div className="mb-4 text-center space-y-4">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none text-foreground transition-colors duration-300 mx-auto">
                            {lang === 'en' ? (
                                <>Book Your <span className="italic text-[#10b981]">Strategy Session</span></>
                            ) : (
                                <>Agende Su <span className="italic text-[#10b981]">Sesión de Estrategia</span></>
                            )}
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed transition-colors duration-300 mx-auto">
                            {lang === 'en' 
                                ? "Let's discuss your business, find the bottlenecks, and see how our automation systems can help you scale."
                                : "Hablemos sobre su negocio, identifiquemos los cuellos de botella y veamos cómo nuestros sistemas de automatización pueden ayudarle a escalar."}
                        </p>
                    </div>

                    <InlineWidget 
                        url={`https://calendly.com/nico-carrillodynamics/15-minute-strategy-session?hide_event_type_details=1&hide_gdpr_banner=1&locale=${lang === 'en' ? 'en' : 'es'}`}
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

export default Start;
