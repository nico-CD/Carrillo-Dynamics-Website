import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Lock, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Audit = () => {
    const easeTransition = [0.16, 1, 0.3, 1] as any;

    return (
        <div className="bg-[#050505] min-h-screen text-white selection:bg-white/10 font-sans">
            <Navbar />
            
            <main className="pt-20">
                {/* Hero Section */}
                <div className="border-b border-zinc-700">
                    <section className="reading-section space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-6"
                        >
                            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                                Friction <span className="italic">Analysis.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-2xl leading-relaxed mt-12">
                                A comprehensive forensic audit of your operational bottlenecks. One report. $99. Direct engineering clarity for industrial scale.
                            </p>
                        </motion.div>
                    </section>
                </div>

                {/* Proof Section */}
                <div className="border-b border-zinc-700">
                    <section className="reading-section space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">Technical <span className="italic text-zinc-500">Forensics.</span></h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-700 border border-zinc-700">
                            {[
                                { title: "Data Leakage", desc: "Identifying where manual entry is fragmenting your source of truth." },
                                { title: "System Friction", desc: "Analyzing software-to-human handoffs slowing down production." },
                                { title: "Manual Debt", desc: "Calculating the hidden cost of labor-intensive spreadsheets." },
                                { title: "Architecture Gaps", desc: "Mapping the missing infrastructure preventing deterministic scale." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-[#050505] p-12 space-y-6 hover:bg-white/[0.01] transition-all">
                                    <h3 className="tech-mono text-sm font-black uppercase tracking-widest text-white leading-none">{item.title}</h3>
                                    <p className="text-zinc-500 text-sm font-bold uppercase tracking-wide leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Pricing / Checkout */}
                <div className="border-b border-zinc-700 bg-white/[0.01]">
                    <section className="reading-section space-y-12 text-center py-60">
                        <div className="space-y-4 mb-20 text-white">
                            <h2 className="text-8xl md:text-[12rem] font-black tech-mono leading-none tracking-tighter">$99.00</h2>
                            <p className="tech-mono text-xs text-zinc-500 uppercase tracking-widest font-black">One-Time Diagnostic Fee</p>
                        </div>

                        <div className="max-w-md mx-auto space-y-12">
                            <Button
                                onClick={() => window.location.href = "https://buy.stripe.com/placeholder-friction-audit"}
                                size="lg"
                                className="h-24 w-full rounded-none px-12 text-2xl font-black uppercase tracking-[0.3em] bg-white hover:bg-zinc-200 text-black transition-all group"
                            >
                                Initiate Audit
                                <ArrowRight className="ml-4 h-8 w-8 transition-transform group-hover:translate-x-3" />
                            </Button>

                            <div className="flex flex-col items-center gap-8 pt-12 border-t border-zinc-700">
                                <div className="flex items-center gap-4 text-white/40">
                                    <ShieldCheck className="h-6 w-6" />
                                    <span className="tech-mono text-[10px] font-black uppercase tracking-[0.3em]">Hardware Secured</span>
                                </div>
                                <p className="text-[10px] text-zinc-500 max-w-xs uppercase tracking-widest leading-loose font-black px-4">
                                    Your operational context is protected by industrial-grade security protocols. Information is strictly used for the audit.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
            
            <div className="fixed inset-0 z-[-1] opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default Audit;
