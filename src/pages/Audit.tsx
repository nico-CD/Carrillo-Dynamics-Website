import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const Audit = () => {
    const revealProps = {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    };

    return (
        <div className="bg-[#050505] min-h-screen text-white selection:bg-white/10 font-sans">
            <Navbar />
            
            <main className="pt-32">
                {/* 3 Pillars Section - Focused Reading */}
                <section className="py-12 px-6">
                    <div className="max-w-3xl mx-auto space-y-24">
                        <motion.div {...revealProps} className="space-y-8">
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                                Friction <span className="italic">Audit.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed">
                                A forensic analysis of your operational architecture. Direct engineering clarity for industrial scale.
                            </p>
                        </motion.div>

                        <div className="space-y-12">
                            <div className="border-y border-zinc-800 py-4 mb-8">
                                <h4 className="tech-mono text-lg sm:text-xl font-black uppercase tracking-[0.3em] text-[#10b981]">What We Audit:</h4>
                            </div>
                            
                            <div className="space-y-16 border-l-2 border-[#10b981] pl-6 md:pl-8">
                                {[
                                    { 
                                        title: "Manual Lag", 
                                        desc: "Identifying where fragmented data entry and manual syncs are draining your operational bandwidth." 
                                    },
                                    { 
                                        title: "Lead Leakage", 
                                        desc: "Analyzing response latency and follow-up gaps that are costing you top-line revenue every month." 
                                    },
                                    { 
                                        title: "Ops Blindness", 
                                        desc: "Mapping the infrastructure gaps preventing a real-time, deterministic view of your business metrics." 
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <h3 className="text-3xl font-black uppercase tracking-tight text-[#10b981]">{item.title}</h3>
                                        <p className="text-zinc-400 text-lg font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stripe Checkout Migration - Direct Payment Link */}
                <section className="py-16 flex flex-col items-center justify-center bg-white/[0.01] border-t border-zinc-800">
                    <div className="w-full max-w-sm px-6">
                        <div className="flex justify-center flex-col">
                            <a 
                                href="https://buy.stripe.com/28EeVe3la3w9gOQdtp0Jq01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[#10b981] text-black text-center py-6 text-sm font-black uppercase tracking-[0.3em] transition-all hover:bg-[#10b981]/90 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-95"
                            >
                                INITIATE AUDIT
                            </a>

                            <div className="flex flex-col items-center pt-8 border-t border-zinc-800 mt-12">
                                <p className="text-[10px] text-zinc-400 max-w-xs uppercase tracking-widest leading-loose font-black text-center">
                                    Your operational context is protected by encryption. Audit data is used strictly for technical synthesis.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Credit Clause - Now at the very bottom */}
                <section className="reading-section py-12 border-t border-white/5">
                    <div className="border border-white p-12 md:p-16 space-y-8 text-center bg-white/[0.02]">
                        <p className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white max-w-4xl mx-auto leading-tight">
                            ENGINEERING DEPOSIT: 100% of the audit fee is creditable toward any subsequent infrastructure build.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Audit;
