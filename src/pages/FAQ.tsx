import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useTranslation } from "@/components/LanguageProvider";
import { Helmet } from "react-helmet-async";

const FAQPage = () => {
    const { lang, t } = useTranslation();

    const revealProps = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    };

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-[#10b981]/10 font-sans transition-colors duration-300">
            <Helmet htmlAttributes={{ lang: lang }}>
                <title>{lang === 'en' ? 'Support & Intelligence FAQ | Carrillo Dynamics' : 'FAQ de Soporte e Inteligencia | Carrillo Dynamics'}</title>
                <meta name="description" content={lang === 'en' ? 'Everything you need to know about engineering flow and eliminating operational friction.' : 'Todo lo que necesita saber sobre ingeniería de flujo y eliminación de fricción operativa.'} />
                <link rel="canonical" href={`https://carrillodynamics.com/${lang}/faq`} />
                <link rel="alternate" hreflang="en" href="https://carrillodynamics.com/en/faq" />
                <link rel="alternate" hreflang="es" href="https://carrillodynamics.com/es/faq" />
                <link rel="alternate" hreflang="x-default" href="https://carrillodynamics.com/en/faq" />
                
                {/* Social Standardization */}
                <meta property="og:title" content={lang === 'en' ? 'Support & Intelligence FAQ' : 'FAQ de Soporte e Inteligencia'} />
                <meta property="og:description" content="Operational excellence through deterministic digital systems." />
                <meta property="og:url" content={`https://carrillodynamics.com/${lang}/faq`} />
            </Helmet>
            <Navbar />
            
            <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto w-full">
                <motion.div {...revealProps} className="space-y-16">
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-foreground transition-all break-words text-balance">
                            {t.pageTitles.faq.main} <span className="italic text-[#10b981]">{t.pageTitles.faq.accent}.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
                            {lang === 'en' 
                                ? 'Everything you need to know about engineering flow and eliminating operational friction.'
                                : 'Todo lo que necesita saber sobre ingeniería de flujo y eliminación de fricción operativa.'}
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {t.faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="border border-border bg-muted/20 rounded-none px-4 md:px-8 data-[state=open]:bg-muted transition-all uppercase">
                                <AccordionTrigger className="text-left text-lg md:text-xl font-bold hover:no-underline py-8 data-[state=open]:text-foreground transition-colors uppercase tracking-tight leading-snug text-muted-foreground/80">
                                    <span className="max-w-[90%] break-words">{faq.q}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground font-medium text-base md:text-lg leading-relaxed pb-8 border-t border-border pt-6 mt-2 normal-case">
                                    <div className="break-words whitespace-normal">
                                        {faq.a}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default FAQPage;

