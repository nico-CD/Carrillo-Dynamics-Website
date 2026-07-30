import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useTranslation } from "@/components/LanguageProvider";
import SEOManager from "@/components/SEOManager";

const FAQPage = () => {
    const { lang, t } = useTranslation();

    const revealProps = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    };

    return (
        <div className="bg-zinc-950 min-h-screen text-foreground selection:bg-[#10b981]/10 font-sans relative overflow-hidden">
            {/* Engineering Graph Paper Background */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.25]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                }}
            />

            <SEOManager 
                title={lang === 'en' ? 'Support & Intelligence FAQ' : 'FAQ de Soporte e Inteligencia'}
                description={lang === 'en' 
                    ? 'Everything you need to know about our industrial-grade automation diagnostics and systems engineering.' 
                    : 'Todo lo que necesita saber sobre nuestros diagnósticos de automatización de grado industrial e ingeniería de sistemas.'}
            />
            <Navbar />
            
            <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto w-full">
                <motion.div {...revealProps} className="space-y-16">
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] text-foreground transition-all break-words text-balance">
                            {t.pageTitles.faq.main} <span className="italic text-[#10b981]">{t.pageTitles.faq.accent}.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
                            {lang === 'en' 
                                ? 'Everything you need to know about working with us.'
                                : 'Todo lo que necesita saber sobre cómo trabajar con nosotros.'}
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {t.faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="border border-border bg-zinc-950 rounded-none px-4 md:px-8 data-[state=open]:bg-zinc-900 transition-all uppercase relative z-10">
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
