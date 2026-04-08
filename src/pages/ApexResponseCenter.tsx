import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/components/LanguageProvider";
import { Helmet } from "react-helmet-async";
import { Layout, Shield, Zap, Database, Terminal } from "lucide-react";

const ApexResponseCenter = () => {
    const { lang } = useTranslation();

    const revealProps = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    };

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-[#10b981]/10 font-sans flex flex-col transition-colors duration-300">
            <Helmet>
                <title>Carrillo Dynamics | Apex Response Center</title>
                <meta name="description" content="Operational Command & Control for high-volume service firms." />
            </Helmet>
            
            <Navbar />
            
            <main className="flex-1 flex flex-col items-center justify-center p-6 pt-32">
                <motion.div {...revealProps} className="max-w-4xl w-full space-y-12">
                    <div className="space-y-6 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#10b981]/30 bg-[#10b981]/5 text-[#10b981] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                            </span>
                            Live System Status: Offline_
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                            Apex <span className="text-[#10b981] italic">Response</span> Center
                        </h1>
                        <p className="text-muted-foreground font-mono text-sm max-w-2xl mx-auto uppercase tracking-widest transition-colors">
                            Command & Control Interface for Chicagoland's Elite Home Service Providers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border mt-12">
                        {[
                            { icon: Terminal, label: "Triage Engine", status: "STANDBY" },
                            { icon: Database, label: "Ledger Sync", status: "ENCRYPTED" },
                            { icon: Zap, label: "Dispatch Core", status: "COLD_START" },
                            { icon: Shield, label: "Governance Layer", status: "ACTIVE" }
                        ].map((item, i) => (
                            <div key={i} className="bg-background p-12 flex flex-col gap-6 group hover:bg-muted/50 transition-colors">
                                <item.icon className="h-8 w-8 text-[#10b981]" />
                                <div className="space-y-2">
                                    <h3 className="text-xl font-black uppercase tracking-tight text-foreground transition-colors">{item.label}</h3>
                                    <div className="flex items-center gap-4">
                                        <div className="h-1 flex-1 bg-muted overflow-hidden">
                                            <div className="h-full w-1/3 bg-[#10b981]/20 group-hover:w-full transition-all duration-1000" />
                                        </div>
                                        <span className="text-[10px] font-mono text-muted-foreground/50">{item.status}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="py-24 text-center border-t border-border space-y-8 mt-12 transition-colors">
                        <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-xl mx-auto">
                            The full Apex interactive interface is currently under security audit for the Chicagoland 2026 rollout.
                        </p>
                        <div className="flex justify-center gap-4">
                            <div className="h-2 w-2 bg-muted/50" />
                            <div className="h-2 w-2 bg-muted/50" />
                            <div className="h-2 w-2 bg-muted/50" />
                        </div>
                    </div>
                </motion.div>
            </main>
            
            <Footer />
        </div>
    );
};

export default ApexResponseCenter;
