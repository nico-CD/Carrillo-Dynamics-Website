import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Loader2 } from "lucide-react";

const Success = () => {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [intakeData, setIntakeData] = useState<any>(null);

    // Form State
    const [formData, setFormData] = useState({
        systemStack: "",
        monthlyThroughput: "",
        manualLatency: "",
        interfaceRequirements: "",
        primaryObjective: ""
    });

    useEffect(() => {
        const stored = localStorage.getItem('intake_data');
        if (stored) {
            try {
                setIntakeData(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse intake data:", e);
            }
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const finalPayload = {
            ...intakeData,
            diagnostic: formData,
            submittedAt: new Date().toISOString(),
            type: "TECHNICAL_DIAGNOSTIC"
        };

        console.log("[Industrial Mono 3.0] Technical Synthesis Payload:", finalPayload);

        // Simulate clinical processing delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Clear local storage after successful bridge
        localStorage.removeItem('intake_data');
    };

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col selection:bg-[#10b981]/30">
            <Navbar />
            
            <main className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-24 relative z-10">
                <div className="max-w-4xl w-full space-y-12">
                    
                    {!isSubmitted ? (
                        <div className="space-y-12">
                            <div className="text-center space-y-6">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex justify-center"
                                >
                                    <div className="h-20 w-20 rounded-none border border-zinc-800 bg-white/[0.02] flex items-center justify-center relative overflow-hidden">
                                        <img 
                                            src="/bull_PNGs/bull-apple-touch-icon.png" 
                                            alt="Carrillo Dynamics Logo"
                                            className="h-16 w-16 object-contain opacity-100" 
                                        />
                                        <div className="absolute inset-0 bg-[#10b981]/10 blur-xl px-4" />
                                    </div>
                                </motion.div>

                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
                                        PAYMENT VERIFIED.<br />
                                        <span className="italic text-[#10b981]">INITIALIZING DIAGNOSTIC.</span>
                                    </h1>
                                    <p className="tech-mono text-[10px] md:text-xs font-black text-zinc-500 uppercase tracking-widest leading-loose max-w-lg mx-auto">
                                        DO NOT CLOSE THIS TAB. TECHNICAL DATA COLLECTION REQUIRED FOR ANALYSIS.
                                    </p>
                                </div>
                            </div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="max-w-2xl mx-auto w-full bg-black/50 border border-zinc-800 p-8 md:p-12 space-y-10"
                            >
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="space-y-6">
                                        {/* SYSTEM_STACK */}
                                        <div className="space-y-3">
                                            <Label className="text-zinc-200 text-xs uppercase font-black tracking-[0.2em] tech-mono">[ SYSTEM_STACK ]</Label>
                                            <Input 
                                                required
                                                placeholder="Salesforce, HubSpot, Excel, etc."
                                                className="h-14 rounded-none border-zinc-800 bg-zinc-950 text-white px-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-bold placeholder:text-zinc-500 text-md"
                                                value={formData.systemStack}
                                                onChange={(e) => setFormData({...formData, systemStack: e.target.value})}
                                            />
                                        </div>

                                        {/* MONTHLY_THROUGHPUT */}
                                        <div className="space-y-3">
                                            <Label className="text-zinc-200 text-xs uppercase font-black tracking-[0.2em] tech-mono">[ MONTHLY_THROUGHPUT ]</Label>
                                            <Select 
                                                required
                                                onValueChange={(val) => setFormData({...formData, monthlyThroughput: val})}
                                            >
                                                <SelectTrigger className="h-14 rounded-none border-zinc-800 bg-zinc-950 text-zinc-200 px-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-medium data-[placeholder]:text-zinc-700">
                                                    <SelectValue placeholder="Select Volume Range" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-none border-zinc-800 bg-zinc-950 text-zinc-200">
                                                    <SelectItem value="low" className="focus:bg-[#10b981] focus:text-black rounded-none">Low (&lt;100/mo)</SelectItem>
                                                    <SelectItem value="medium" className="focus:bg-[#10b981] focus:text-black rounded-none">Medium (100-1000/mo)</SelectItem>
                                                    <SelectItem value="high" className="focus:bg-[#10b981] focus:text-black rounded-none">High (1000+/mo)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* MANUAL_LATENCY */}
                                        <div className="space-y-3">
                                            <Label className="text-zinc-200 text-xs uppercase font-black tracking-[0.2em] tech-mono">[ MANUAL_LATENCY ]</Label>
                                            <Input 
                                                required
                                                placeholder="Est. hours/week wasted on manual entry"
                                                className="h-14 rounded-none border-zinc-800 bg-zinc-950 text-white px-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-bold placeholder:text-zinc-500 text-md"
                                                value={formData.manualLatency}
                                                onChange={(e) => setFormData({...formData, manualLatency: e.target.value})}
                                            />
                                        </div>

                                        {/* INTERFACE_REQUIREMENTS */}
                                        <div className="space-y-3">
                                            <Label className="text-zinc-200 text-xs uppercase font-black tracking-[0.2em] tech-mono">[ INTERFACE_REQUIREMENTS ]</Label>
                                            <Textarea 
                                                required
                                                placeholder="List the 3 apps that need to talk to each other most."
                                                className="min-h-[100px] rounded-none border-zinc-800 bg-zinc-950 text-white p-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-bold placeholder:text-zinc-500 text-md resize-none"
                                                value={formData.interfaceRequirements}
                                                onChange={(e) => setFormData({...formData, interfaceRequirements: e.target.value})}
                                            />
                                        </div>

                                        {/* PRIMARY_OBJECTIVE */}
                                        <div className="space-y-3">
                                            <Label className="text-zinc-200 text-xs uppercase font-black tracking-[0.2em] tech-mono">[ PRIMARY_OBJECTIVE ]</Label>
                                            <Textarea 
                                                required
                                                placeholder="If we could automate ONE task this week, what would it be?"
                                                className="min-h-[100px] rounded-none border-zinc-800 bg-zinc-950 text-white p-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-bold placeholder:text-zinc-500 text-md resize-none"
                                                value={formData.primaryObjective}
                                                onChange={(e) => setFormData({...formData, primaryObjective: e.target.value})}
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-16 rounded-none bg-[#10b981] hover:bg-[#0ea672] text-black font-black uppercase tracking-[0.2em] transition-all disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                        ) : (
                                            "SUBMIT FOR AUDIT"
                                        )}
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="max-w-xl mx-auto w-full bg-zinc-900 border border-[#10b981]/30 p-12 space-y-6 tech-mono"
                        >
                            <div className="space-y-4">
                                <motion.p 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-[#10b981] text-xs font-bold uppercase tracking-widest"
                                >
                                    &gt; DATA_PACKET_RECEIVED
                                </motion.p>
                                <motion.p 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-[#10b981] text-xs font-bold uppercase tracking-widest"
                                >
                                    &gt; ENCRYPTING_TRANSMISSION...
                                </motion.p>
                                <motion.p 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="text-[#10b981] text-xs font-bold uppercase tracking-widest"
                                >
                                    &gt; ARCHITECT_NOTIFIED.
                                </motion.p>
                                <motion.p 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.1 }}
                                    className="text-white text-xs font-bold uppercase tracking-widest pt-4"
                                >
                                    &gt; FINAL_REPORT_PENDING_ASYNCHRONOUS_REVIEW.
                                </motion.p>
                            </div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2 }}
                                className="pt-12"
                            >
                                <Button
                                    onClick={() => navigate("/")}
                                    variant="outline"
                                    className="w-full rounded-none border-zinc-800 text-zinc-400 hover:bg-white hover:text-black transition-all text-[10px] uppercase font-black tracking-widest h-12"
                                >
                                    Terminating_Session
                                </Button>
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </main>
            
            <Footer />

            {/* Grid Pattern */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
    );
};

export default Success;

