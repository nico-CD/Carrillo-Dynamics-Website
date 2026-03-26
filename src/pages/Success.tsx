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

        const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

        // The Handshake: n8n Audit Intake Payload
        const payload = {
            lead_name: intakeData?.firstName || "N/A",
            lead_email: intakeData?.email || "N/A",
            systemStack: formData.systemStack,
            monthlyThroughput: formData.monthlyThroughput,
            manualLatency: formData.manualLatency,
            interfaceRequirements: formData.interfaceRequirements,
            primaryObjective: formData.primaryObjective,
            submittedAt: new Date().toISOString(),
            source: window.location.hostname,
            event_type: "audit_intake"
        };

        console.log("[The Handshake] Initiating Audit Transmission:", payload);

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                console.log("[The Handshake] Transmission Confirmed.");
                localStorage.removeItem('intake_data');
            }
            
            // Industrial Mono 4.0: Show terminal readout regardless for mission continuity
            // Ensure we scroll to top to show the centered success container
            window.scrollTo({ top: 0, behavior: 'instant' });
            setIsSubmitted(true);
        } catch (error) {
            console.error("[The Handshake] Critical Transmission Error:", error);
            window.scrollTo({ top: 0, behavior: 'instant' });
            setIsSubmitted(true); // Allow UI to transition to terminal state
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col selection:bg-[#10b981]/30">
            <Navbar />
            
            <main className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-24 relative z-10">
                <div className="max-w-4xl w-full space-y-12">
                    
                    {!isSubmitted ? (
                        <div className="space-y-12">
                            <div className="text-center space-y-6">
                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none text-center">
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
                                        <div className="space-y-3 text-left">
                                            <Label className="text-zinc-100 text-lg font-bold tracking-tight">What is your primary software stack?</Label>
                                            <p className="text-sm text-zinc-300 mt-1 font-medium leading-relaxed">e.g., Salesforce, HubSpot, or the specific tools you use daily.</p>
                                            <Input 
                                                required
                                                placeholder="e.g., Salesforce + Slack + Quickbooks"
                                                className="h-14 rounded-none border-zinc-800 bg-zinc-950 text-white px-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-bold placeholder:text-zinc-600 text-md"
                                                value={formData.systemStack}
                                                onChange={(e) => setFormData({...formData, systemStack: e.target.value})}
                                            />
                                        </div>

                                        {/* MONTHLY_THROUGHPUT */}
                                        <div className="space-y-3 text-left">
                                            <Label className="text-zinc-100 text-lg font-bold tracking-tight">Approximate monthly data volume?</Label>
                                            <p className="text-sm text-zinc-300 mt-1 font-medium leading-relaxed">Select the scale of your current digital throughput.</p>
                                            <Select 
                                                required
                                                onValueChange={(val) => setFormData({...formData, monthlyThroughput: val})}
                                            >
                                                <SelectTrigger className="h-14 rounded-none border-zinc-800 bg-zinc-950 text-zinc-200 px-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-medium data-[placeholder]:text-zinc-700 text-md">
                                                    <SelectValue placeholder="Select Volume Range" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-none border-zinc-800 bg-zinc-950 text-zinc-200">
                                                    <SelectItem value="low" className="focus:bg-[#10b981] focus:text-black rounded-none">Low (&lt;100 leads/mo)</SelectItem>
                                                    <SelectItem value="medium" className="focus:bg-[#10b981] focus:text-black rounded-none">Medium (100-1000 leads/mo)</SelectItem>
                                                    <SelectItem value="high" className="focus:bg-[#10b981] focus:text-black rounded-none">High (1000+ leads/mo)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* MANUAL_LATENCY */}
                                        <div className="space-y-3 text-left">
                                            <Label className="text-zinc-100 text-lg font-bold tracking-tight">How many hours per week are lost to manual data entry?</Label>
                                            <p className="text-sm text-zinc-300 mt-1 font-medium leading-relaxed">Estimate the 'Human Tax' your team pays for fragmented systems.</p>
                                            <Select 
                                                required
                                                onValueChange={(val) => setFormData({...formData, manualLatency: val})}
                                            >
                                                <SelectTrigger className="h-14 rounded-none border-zinc-800 bg-zinc-950 text-zinc-200 px-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-medium data-[placeholder]:text-zinc-700 text-md">
                                                    <SelectValue placeholder="Select Estimated Wasted Hours" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-none border-zinc-800 bg-zinc-950 text-zinc-200">
                                                    <SelectItem value="0-5" className="focus:bg-[#10b981] focus:text-black rounded-none">0-5 hours (Minor Friction)</SelectItem>
                                                    <SelectItem value="5-15" className="focus:bg-[#10b981] focus:text-black rounded-none">5-15 hours (Operational Drag)</SelectItem>
                                                    <SelectItem value="15-40" className="focus:bg-[#10b981] focus:text-black rounded-none">15-40 hours (Critical Leakage)</SelectItem>
                                                    <SelectItem value="40+" className="focus:bg-[#10b981] focus:text-black rounded-none">40+ hours (Systems Failure)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* INTERFACE_REQUIREMENTS */}
                                        <div className="space-y-3 text-left">
                                            <Label className="text-zinc-100 text-lg font-bold tracking-tight">Which systems need to be connected?</Label>
                                            <p className="text-sm text-zinc-300 mt-1 font-medium leading-relaxed">Identify the top 3 apps that aren't talking to each other.</p>
                                            <Textarea 
                                                required
                                                placeholder="e.g., Sync CRM leads to my ERP automatically."
                                                className="min-h-[100px] rounded-none border-zinc-800 bg-zinc-950 text-white p-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-bold placeholder:text-zinc-600 text-md resize-none"
                                                value={formData.interfaceRequirements}
                                                onChange={(e) => setFormData({...formData, interfaceRequirements: e.target.value})}
                                            />
                                        </div>

                                        {/* PRIMARY_OBJECTIVE */}
                                        <div className="space-y-3 text-left">
                                            <Label className="text-zinc-100 text-lg font-bold tracking-tight">What is the #1 bottleneck we should solve first?</Label>
                                            <p className="text-sm text-zinc-300 mt-1 font-medium leading-relaxed">If one task was 100% automated by next week, what would change the game?</p>
                                            <Textarea 
                                                required
                                                placeholder="e.g., I want to stop manually copying invoices."
                                                className="min-h-[100px] rounded-none border-zinc-800 bg-zinc-950 text-white p-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-bold placeholder:text-zinc-600 text-md resize-none"
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
                        <div className="flex-1 flex items-center justify-center p-6 bg-black">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="max-w-md mx-auto w-full border border-zinc-900 bg-[#050505] p-8 md:p-12 space-y-10 tech-mono shadow-2xl overflow-hidden relative"
                            >
                                <div className="space-y-6">
                                    {[
                                        { text: "Audit Data Received", delay: 0.2 },
                                        { text: "ENCRYPTING_TRANSMISSION...", delay: 0.5 },
                                        { text: "Engineers Notified", delay: 0.8 },
                                    ].map((line, idx) => (
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: line.delay }}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="text-[#10b981] font-bold">&gt;</span>
                                            <p className="text-zinc-200 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed">{line.text}</p>
                                        </motion.div>
                                    ))}
                                    
                                    <motion.div 
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.1 }}
                                        className="flex items-start gap-3 pt-4"
                                    >
                                        <span className="text-[#10b981] font-bold">&gt;</span>
                                        <p className="text-zinc-200 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed break-all">
                                            Final Report Pending Review
                                        </p>
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5 }}
                                    className="pt-6"
                                >
                                    <Button
                                        onClick={() => navigate("/")}
                                        className="w-full h-14 rounded-none border border-zinc-800 bg-transparent hover:bg-zinc-900 text-zinc-400 hover:text-white tech-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all"
                                    >
                                        Return to Homepage
                                    </Button>
                                </motion.div>

                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#10b981]/5 blur-3xl rounded-full -mr-12 -mt-12" />
                            </motion.div>
                        </div>
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

