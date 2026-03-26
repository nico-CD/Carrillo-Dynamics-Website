import {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    return (
        <div className="space-y-16 max-w-4xl mx-auto w-full overflow-hidden">
            <div className="space-y-4 text-center">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">Operations <span className="italic">FAQ.</span></h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                    {
                        q: "Is this just another software application?",
                        a: "No. We build invisible systems that integrate with your existing tools. Your field crew won't have to learn another app; we just make the ones they already use communicate deterministically."
                    },
                    {
                        q: "How long until we see reduced friction?",
                        a: "We target high-friction bottlenecks first (duplicate entry, missed follow-ups). Systems typically start reclaiming hours and reducing dispatch chaos within 14-21 days of deployment."
                    },
                    {
                        q: "What if our processes are currently manual?",
                        a: "That is our ideal starting point. We do not automate chaos; we engineer clarity. Our first step is a rigorous Blueprint phase where we map out dispatch and quoting flows."
                    },
                    {
                        q: "Do we need internal IT to maintain this?",
                        a: "Zero internal maintenance. We act as your fractional operations engineering department, providing structural oversight and iterative scaling."
                    }
                ].map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border border-zinc-700 bg-white/[0.01] rounded-none px-4 md:px-8 data-[state=open]:bg-white/[0.03] transition-all overflow-hidden">
                        <AccordionTrigger className="text-left text-lg md:text-xl font-bold hover:no-underline py-8 data-[state=open]:text-white transition-colors uppercase tracking-tight leading-snug">
                            <span className="max-w-[90%] break-words">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-zinc-400 font-medium text-base md:text-lg leading-relaxed pb-8 border-t border-zinc-800 pt-6 mt-2 overflow-hidden">
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
