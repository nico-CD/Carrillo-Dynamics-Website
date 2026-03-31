import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Audit = () => {
    return (
        <div className="bg-background min-h-screen text-foreground pt-32 transition-colors duration-300 relative overflow-hidden">
            <Navbar />
            
            {/* High-Fidelity Industrial Layers */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute left-10 top-0 bottom-0 w-px bg-border/20 hidden lg:block" />
                <div className="absolute right-10 top-0 bottom-0 w-px bg-border/20 hidden lg:block" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24 space-y-32 relative z-10">
                
                {/* Discovery Path Header */}
                <div className="space-y-6 text-center lg:text-left">
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight leading-[0.9]">
                        Discovery <br />Path.
                    </h1>
                    <div className="flex flex-col md:flex-row md:items-center gap-12 pt-4">
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-medium leading-relaxed transition-colors duration-300">
                            Systems Mapping aligns our engineering with your operations. We map your architectural friction points to ensure every automation is precision-engineered for your throughput.
                        </p>
                    </div>
                </div>

                {/* Tactical Path - THE ROADMAP */}
                <div className="space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px] bg-border border-2 border-border overflow-hidden shadow-2xl">
                        <div className="bg-background p-10 md:p-20 space-y-12 transition-colors duration-300 relative">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#10b981] leading-[0.9]">
                                Systems Mapping
                            </h2>
                            <div className="space-y-10">
                                {[
                                    { title: "Operational Immersion", desc: "48-hour immersion into your current dispatch, admin, and manual data-entry workflows to map every inefficiency." },
                                    { title: "Technical Asset Mapping", desc: "Identification of redundant software costs, API fragmentation, and manual debt leakage points." },
                                    { title: "Architecture Blueprint", desc: "Full technical design of the custom automation layer that will replace your manual labor with high-fidelity logic." },
                                    { title: "Your Execution Roadmap", desc: "A phased deployment strategy that scales from core friction points to full operational autonomy." }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-6 group">
                                        <div className="tech-mono text-zinc-500 text-sm font-bold pt-1">{idx + 1}.</div>
                                        <div className="space-y-2 text-left">
                                            <h3 className="text-xl font-bold uppercase tracking-tight text-foreground transition-colors duration-300">{step.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed transition-colors duration-300 text-sm md:text-md uppercase font-medium">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#10b981] p-10 lg:p-20 flex flex-col justify-center items-center transition-colors duration-300 relative overflow-hidden min-h-[500px] text-black">
                            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,white,transparent)]" />
                            
                            {/* Strategic Intake Header */}
                            <div className="w-full relative z-10 flex flex-col items-center space-y-10">
                                <div className="text-center space-y-6">
                                    <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-black">
                                        Secure Your <br />Operational <br />Integrity.
                                    </h2>
                                    <p className="text-sm md:text-lg font-bold uppercase tracking-wide leading-relaxed max-w-sm mx-auto opacity-70">
                                        Eliminate manual friction and recover lost throughput. Initialize your systems mapping to align with our next engineering sprint.
                                    </p>
                                </div>

                                <motion.a
                                    href="https://buy.stripe.com/28EeVe3la3w9gOQdtp0Jq01"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full max-w-sm group"
                                >
                                    <div className="bg-black text-white p-10 flex flex-col items-center justify-center space-y-6 shadow-2xl transition-all hover:bg-zinc-900 border-none rounded-none">
                                        <ShieldCheck className="h-10 w-10 text-[#10b981]" />
                                        <span className="text-3xl font-black uppercase tracking-[0.1em] text-center leading-none">GET MY <br/>SYSTEM MAPPED</span>
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                    
                    {/* High-Contrast Technical Guarantee Block */}
                    <div className="p-10 md:p-16 bg-white text-black transition-all duration-300 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/5 blur-3xl rounded-full -mr-32 -mt-32" />
                        <div className="flex flex-col lg:flex-row items-center gap-12 justify-between relative z-10">
                            <div className="space-y-4 text-center lg:text-left flex-1">
                                <p className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none text-[#10b981]">BUILD COMMITMENT GUARANTEE</p>
                                <p className="text-sm md:text-lg font-bold uppercase tracking-wide opacity-70 max-w-2xl">
                                    100% of the Systems Mapping fee is applied as a direct credit toward your custom operational engine development. We don't bill for blueprints; we bill for performance.
                                </p>
                            </div>
                            <div className="h-28 w-28 md:h-36 md:w-36 border-4 md:border-8 border-black flex items-center justify-center flex-shrink-0 group-hover:bg-[#10b981] group-hover:border-[#10b981] transition-all duration-500">
                                <span className="text-3xl md:text-5xl font-black group-hover:text-white transition-colors">100%</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Audit;

