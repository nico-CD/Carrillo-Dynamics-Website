import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQPage = () => {
    const revealProps = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    };

    return (
        <div className="bg-[#050505] min-h-screen text-white selection:bg-white/10 font-sans">
            <Navbar />
            
            <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto w-full">
                <motion.div {...revealProps} className="space-y-16">
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                            Operations <span className="italic">FAQ.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed max-w-2xl">
                            Everything you need to know about engineering flow and eliminating operational friction.
                        </p>
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
                            },
                            {
                                q: "How do you handle data security?",
                                a: "Industrial-grade security is at our core. All automation payloads are encrypted, and we prioritize least-privilege access for all integrations. Your data never leaves your controlled ecosystem."
                            },
                            {
                                q: "Can this scale with us?",
                                a: "Absolutely. We build modular infrastructure. As your team grows from 10 to 100+, the same deterministic logic scales with you, preventing the 'growth-drag' common in manual firms."
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
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default FAQPage;
