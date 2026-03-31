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
        <div className="min-h-screen bg-background flex flex-col selection:bg-[#10b981]/30 transition-colors duration-300">
            <Navbar />
            
            <main className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-24 relative z-10 transition-colors duration-300">
                <div className="max-w-4xl w-full space-y-12">
                    
                    {!isSubmitted ? (
                        <div className="space-y-12">
                            <div className="text-center space-y-8">
                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-foreground leading-none text-center">
                                        SYSTEMS MAPPING<br />
                                        <span className="text-[#10b981]">INITIALIZED.</span>
                                    </h1>
                                    <p className="tech-mono text-[10px] md:text-sm font-bold text-muted-foreground uppercase tracking-[0.4em] max-w-xl mx-auto">
                                        INTAKE RECORDED. SECURE ARCHITECTURAL ANALYSIS IN PROGRESS.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Form remains the same as it's functional */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="max-w-2xl mx-auto w-full bg-card/50 border border-border p-8 md:p-12 space-y-10 transition-colors duration-300 shadow-2xl"
                            >
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="space-y-6">
                                        {/* SYSTEM_STACK */}
                                        <div className="space-y-3 text-left">
                                            <Label className="text-foreground text-lg font-bold tracking-tight transition-colors duration-300">What is your primary software stack?</Label>
                                            <p className="text-sm text-muted-foreground mt-1 font-medium leading-relaxed transition-colors duration-300">e.g., Salesforce, HubSpot, or the specific tools you use daily.</p>
                                            <Input 
                                                required
                                                placeholder="e.g., Salesforce + Slack + Quickbooks"
                                                className="h-14 rounded-none border-border bg-secondary text-foreground px-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-bold placeholder:text-muted-foreground/50 text-md"
                                                value={formData.systemStack}
                                                onChange={(e) => setFormData({...formData, systemStack: e.target.value})}
                                            />
                                        </div>

                                        {/* MONTHLY_THROUGHPUT */}
                                        <div className="space-y-3 text-left">
                                            <Label className="text-foreground text-lg font-bold tracking-tight transition-colors duration-300">Approximate monthly data volume?</Label>
                                            <p className="text-sm text-muted-foreground mt-1 font-medium leading-relaxed transition-colors duration-300">Select the scale of your current digital throughput.</p>
                                            <Select 
                                                required
                                                onValueChange={(val) => setFormData({...formData, monthlyThroughput: val})}
                                            >
                                                <SelectTrigger className="h-14 rounded-none border-border bg-secondary text-foreground px-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-medium data-[placeholder]:text-muted-foreground/50 text-md">
                                                    <SelectValue placeholder="Select Volume Range" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-none border-border bg-secondary text-foreground">
                                                    <SelectItem value="low" className="focus:bg-[#10b981] focus:text-black rounded-none">Low (&lt;100 leads/mo)</SelectItem>
                                                    <SelectItem value="medium" className="focus:bg-[#10b981] focus:text-black rounded-none">Medium (100-1000 leads/mo)</SelectItem>
                                                    <SelectItem value="high" className="focus:bg-[#10b981] focus:text-black rounded-none">High (1000+ leads/mo)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* MANUAL_LATENCY */}
                                        <div className="space-y-3 text-left">
                                            <Label className="text-foreground text-lg font-bold tracking-tight transition-colors duration-300">How many hours per week are lost to manual data entry?</Label>
                                            <p className="text-sm text-muted-foreground mt-1 font-medium leading-relaxed transition-colors duration-300">Estimate the 'Human Tax' your team pays for fragmented systems.</p>
                                            <Select 
                                                required
                                                onValueChange={(val) => setFormData({...formData, manualLatency: val})}
                                            >
                                                <SelectTrigger className="h-14 rounded-none border-border bg-secondary text-foreground px-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-medium data-[placeholder]:text-muted-foreground/50 text-md">
                                                    <SelectValue placeholder="Select Estimated Wasted Hours" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-none border-border bg-secondary text-foreground">
                                                    <SelectItem value="0-5" className="focus:bg-[#10b981] focus:text-black rounded-none">0-5 hours (Minor Friction)</SelectItem>
                                                    <SelectItem value="5-15" className="focus:bg-[#10b981] focus:text-black rounded-none">5-15 hours (Operational Drag)</SelectItem>
                                                    <SelectItem value="15-40" className="focus:bg-[#10b981] focus:text-black rounded-none">15-40 hours (Critical Leakage)</SelectItem>
                                                    <SelectItem value="40+" className="focus:bg-[#10b981] focus:text-black rounded-none">40+ hours (Systems Failure)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* INTERFACE_REQUIREMENTS */}
                                        <div className="space-y-3 text-left">
                                            <Label className="text-foreground text-lg font-bold tracking-tight transition-colors duration-300">Which systems need to be connected?</Label>
                                            <p className="text-sm text-muted-foreground mt-1 font-medium leading-relaxed transition-colors duration-300">Identify the top 3 apps that aren't talking to each other.</p>
                                            <Textarea 
                                                required
                                                placeholder="e.g., Sync CRM leads to my ERP automatically."
                                                className="min-h-[100px] rounded-none border-border bg-secondary text-foreground p-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-bold placeholder:text-muted-foreground/50 text-md resize-none"
                                                value={formData.interfaceRequirements}
                                                onChange={(e) => setFormData({...formData, interfaceRequirements: e.target.value})}
                                            />
                                        </div>

                                        {/* PRIMARY_OBJECTIVE */}
                                        <div className="space-y-3 text-left">
                                            <Label className="text-foreground text-lg font-bold tracking-tight transition-colors duration-300">What is the #1 bottleneck we should solve first?</Label>
                                            <p className="text-sm text-muted-foreground mt-1 font-medium leading-relaxed transition-colors duration-300">If one task was 100% automated by next week, what would change the game?</p>
                                            <Textarea 
                                                required
                                                placeholder="e.g., I want to stop manually copying invoices."
                                                className="min-h-[100px] rounded-none border-border bg-secondary text-foreground p-5 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]/50 transition-all font-bold placeholder:text-muted-foreground/50 text-md resize-none"
                                                value={formData.primaryObjective}
                                                onChange={(e) => setFormData({...formData, primaryObjective: e.target.value})}
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-16 rounded-none bg-[#10b981] hover:bg-[#0ea672] text-black font-black uppercase tracking-[0.2em] transition-all disabled:opacity-50 border-none shadow-lg"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                        ) : (
                                            "FINALIZE SYSTEMS MAPPING"
                                        )}
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center space-y-16">
                            <div className="text-center space-y-4">
                                <motion.h1 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-[#10b981] leading-none mb-4"
                                >
                                    SECURE & ACTIVE.
                                </motion.h1>
                            </div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-[#10b981]/20 border-2 border-[#10b981]/30 overflow-hidden shadow-[0_0_150px_rgba(16,185,129,0.2)] ring-1 ring-[#10b981]/50 bg-black/40 backdrop-blur-md"
                            >
                                <div className="bg-black/80 p-12 lg:p-20 space-y-12 border-r-2 border-[#10b981]/20">
                                    <div className="space-y-6 text-left">
                                        <div className="text-sm tech-mono font-black text-[#10b981] uppercase tracking-[0.3em]">MISSION PROTOCOL: ACTIVE</div>
                                        <div className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[0.9]">STRATEGIC <br/>CONSULTATION <br/>INITIATED.</div>
                                    </div>
                                    <div className="space-y-8 pt-8 border-t border-[#10b981]/20 text-left">
                                        <div className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">ENGINEERING NEXT STEPS:</div>
                                        <ul className="space-y-4">
                                            {["Full Operational Immersion", "Friction Point Isolation", "ROI Scaling Blueprint"].map((item, i) => (
                                                <li key={i} className="flex items-center gap-4 text-sm font-black uppercase text-white tracking-tight">
                                                    <span className="w-2 h-2 bg-[#10b981] flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-[#10b981]/5 p-12 lg:p-20 space-y-12 flex flex-col justify-between">
                                    <div className="space-y-12">
                                        <div className="text-sm font-bold text-[#10b981] uppercase tracking-[0.3em] text-left">INTAKE VERIFIED:</div>
                                        <div className="space-y-12 text-left">
                                            {[
                                                { label: "PRIMARY STACK", value: formData.systemStack },
                                                { label: "THROUGHPUT VOLUME", value: formData.monthlyThroughput },
                                                { label: "OPERATIONAL DRAG", value: formData.manualLatency + " HPW" }
                                            ].map((item, i) => (
                                                <div key={i} className="space-y-3">
                                                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{item.label}</div>
                                                    <div className="text-3xl lg:text-4xl font-black text-[#10b981] uppercase tracking-tighter leading-tight">{item.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="pt-8 border-t border-[#10b981]/20">
                                        <p className="text-[10px] font-bold text-zinc-500 leading-relaxed text-left uppercase tracking-widest">
                                            Secure architectural mapping prioritized. Your Lead Engineer will review this blueprint within 24 hours.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="w-full max-w-xs"
                            >
                                <Button
                                    onClick={() => navigate("/")}
                                    className="w-full h-16 rounded-none bg-foreground text-background hover:bg-muted-foreground font-black uppercase tracking-[0.2em] transition-all shadow-xl"
                                >
                                    RETURN TO OPERATIONS
                                </Button>
                            </motion.div>
                        </div>
                    )}
                </div>
            </main>
            
            <Footer />

            {/* Grid Pattern */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
    );
};

export default Success;


