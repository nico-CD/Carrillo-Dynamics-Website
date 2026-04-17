import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserMinus } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Unsubscribed = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background flex flex-col selection:bg-[#10b981]/30 transition-colors duration-300">
            <Helmet htmlAttributes={{ lang: 'en' }}>
                <title>Unsubscribed | Carrillo Dynamics</title>
                <meta name="robots" content="noindex" />
                <link rel="canonical" href={`https://carrillodynamics.com/en/unsubscribed`} />
            </Helmet>
            <Navbar />
            
            <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl w-full bg-card/40 backdrop-blur-xl border border-border p-8 md:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#10b981] to-transparent opacity-50" />
                    
                    <div className="flex justify-center">
                        <div className="p-4 bg-[#10b981]/10 rounded-full">
                            <UserMinus className="h-12 w-12 text-[#10b981]" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-none">
                            Un<span className="text-[#10b981] italic">subscribed.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-lg mx-auto">
                            You have successfully opted out of the Carrillo Dynamics flow. Transmissions of engineering insights and workflow blueprints have been halted. We respect your focus.
                        </p>
                        <p className="text-sm font-black uppercase tracking-[0.1em] text-[#10b981] pt-4">
                            - Nico Carrillo (Founder of Carrillo Dynamics)
                        </p>
                    </div>

                    <div className="pt-8">
                        <Button
                            onClick={() => navigate("/")}
                            className="h-14 rounded-none px-8 text-xs font-black uppercase tracking-[0.2em] bg-[#10b981] hover:bg-[#0ea672] text-black transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] border-none"
                        >
                            Return to Home
                        </Button>
                    </div>
                </motion.div>
            </main>
            
            <Footer />

            {/* Background Effects */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:64px_64px]" />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#10b981]/10 blur-[120px] rounded-full pointer-events-none z-0" />
        </div>
    );
};

export default Unsubscribed;
