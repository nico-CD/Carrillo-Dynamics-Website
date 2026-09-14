import { motion } from "framer-motion";
import { ArrowRight, Clapperboard } from "lucide-react";
import { InlineWidget } from "react-calendly";
import Footer from "@/components/Footer";
import SEOManager from "@/components/SEOManager";
import { useTranslation } from "@/components/LanguageProvider";

const DEMO_URL = "https://demo.carrillodynamics.com";

const Start = () => {
    const { lang } = useTranslation();

    const revealProps = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }
    };

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-[#10b981]/10 font-sans overflow-x-hidden transition-colors duration-300">
            <SEOManager isNoindex={true} />
            <header className="w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md z-50 sticky top-0 h-20 flex items-center px-6">
                <div className="max-w-6xl mx-auto flex w-full items-center justify-center">
                    <div className="flex items-center gap-2">
                        <img src="/bull_PNGs/vect.bull.svg" alt="Carrillo Dynamics Logo" className="h-10 w-10" />
                        <span className="font-black text-xl tracking-tighter">
                            CARRILLO <span className="text-[#10b981]">DYNAMICS</span>
                        </span>
                    </div>
                </div>
            </header>

            <section className="px-6 py-20 bg-background relative z-10 transition-colors duration-300">
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.4] bg-repeat"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                    }}
                />

                <div className="mx-auto max-w-6xl relative z-10">
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
                                ? "Our full walk-through video is currently in production. In the meantime, test-drive the live sandbox or book a call below."
                                : "Nuestro video completo está actualmente en producción. Mientras tanto, pruebe el sandbox en vivo o agende una llamada a continuación."}
                        </p>
                    </div>

                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#27272A] bg-[#18181B]">
                        <img
                            src="/images/demo-preview.jpg"
                            alt={lang === 'en' ? "Live sandbox preview" : "Vista previa del sandbox"}
                            className="block w-full aspect-video object-cover object-top opacity-50"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
                            <div className="inline-flex items-center gap-2 bg-zinc-950/90 border border-zinc-700 text-emerald-400 font-mono text-sm px-6 py-3 rounded-full shadow-2xl backdrop-blur-md">
                                <span className="opacity-60">[</span>
                                <Clapperboard className="h-4 w-4 shrink-0" />
                                <span>
                                    {lang === 'en' ? "DEMO VIDEO COMING SOON" : "VIDEO DEMO PRÓXIMAMENTE"}
                                </span>
                                <span className="opacity-60">]</span>
                            </div>
                            <a
                                href={DEMO_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#0ea672] text-zinc-950 font-black px-8 py-4 rounded-xl text-sm md:text-base uppercase tracking-wider transition-all"
                            >
                                {lang === 'en' ? "Test Drive Live Demo Instead" : "Pruebe el Demo en Vivo"}
                                <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

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
            </section>

            <Footer />
        </div>
    );
};

export default Start;
