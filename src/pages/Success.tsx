import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Success = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col">
            <Navbar />
            
            <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-24">
                <div className="max-w-xl w-full space-y-12 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex justify-center"
                    >
                        <div className="h-24 w-24 rounded-none border border-zinc-700 bg-white/[0.02] flex items-center justify-center relative">
                            <img 
                                src="/bull_PNGs/bull-apple-touch-icon.png" 
                                alt="Carrillo Dynamics Logo"
                                className="h-12 w-12 object-contain" 
                            />
                            <div className="absolute inset-0 bg-[#10b981]/10 blur-xl px-4" />
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-tight">
                            PAYMENT VERIFIED.<br />
                            <span className="italic">INITIALIZING DIAGNOSTIC.</span>
                        </h1>
                        <p className="tech-mono text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest leading-loose max-w-sm mx-auto">
                            DO NOT CLOSE THIS TAB. TECHNICAL DATA COLLECTION REQUIRED FOR ANALYSIS.
                        </p>
                    </div>

                    <div className="pt-8 flex flex-col gap-4">
                        <div className="h-1 w-full bg-zinc-800 relative overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-[#10b981]"
                            />
                        </div>
                        <p className="tech-mono text-[10px] text-zinc-600 uppercase tracking-[0.4em]">System Status: Operational / Priority Queue</p>
                    </div>

                    <div className="pt-8">
                        <Button
                            onClick={() => navigate("/")}
                            variant="outline"
                            className="rounded-none border-zinc-700 hover:bg-white hover:text-black transition-all tech-mono text-[10px] uppercase font-black tracking-widest px-8 h-12"
                        >
                            Return to Dashboard
                        </Button>
                    </div>
                </div>
            </main>
            
            <Footer />

            {/* Grid Pattern */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
    );
};

export default Success;
