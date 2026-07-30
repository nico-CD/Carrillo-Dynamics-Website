import {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "@/components/LanguageProvider";

const FAQ = () => {
    const { t } = useTranslation();

    return (
        <div className="space-y-16 max-w-4xl mx-auto w-full overflow-hidden">
            <div className="space-y-4 text-center">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">Operations <span className="italic">FAQ.</span></h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
                {t.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/50 bg-zinc-950/50 backdrop-blur-md rounded-xl px-4 md:px-8 data-[state=open]:border-[#10b981]/50 data-[state=open]:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all overflow-hidden">
                        <AccordionTrigger className="text-left text-lg md:text-xl font-bold hover:no-underline py-8 text-foreground hover:text-[#10b981] data-[state=open]:text-white transition-colors uppercase tracking-tight leading-snug">
                            <span className="max-w-[90%] break-words">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-zinc-300 font-medium text-base md:text-lg leading-relaxed pb-8 pt-2 overflow-hidden">
                            <div className="break-words whitespace-normal">
                                {faq.a}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQ;
