import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': any;
    }
  }
}

const Audit = () => {
    const [isStripeLoaded, setIsStripeLoaded] = useState(false);

    useEffect(() => {
        const scriptId = "stripe-buy-button-script";
        
        const checkStripe = () => {
            if (window.customElements && window.customElements.get('stripe-buy-button')) {
                setIsStripeLoaded(true);
            } else {
                setTimeout(checkStripe, 200);
            }
        };

        const initStripe = () => {
            let script = document.getElementById(scriptId) as HTMLScriptElement;
            if (!script) {
                script = document.createElement("script");
                script.id = scriptId;
                script.src = "https://js.stripe.com/v3/buy-button.js";
                script.async = true;
                script.onload = () => checkStripe();
                document.body.appendChild(script);
            } else {
                checkStripe();
            }
        };

        // 500ms delay to ensure DOM is fully ready before injection
        const timer = setTimeout(initStripe, 500);
        return () => clearTimeout(timer);
    }, []);

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
                <section className="py-24 px-6">
                    <div className="max-w-3xl mx-auto space-y-24">
                        <motion.div {...revealProps} className="space-y-8">
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                                Friction <span className="italic">Audit.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed">
                                A forensic analysis of your operational architecture. $99. Direct engineering clarity for industrial scale.
                            </p>
                        </motion.div>

                        <div className="space-y-16">
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
                </section>

                {/* Credit Clause */}
                <section className="reading-section py-24">
                    <div className="border border-white p-12 md:p-16 space-y-8 text-center bg-white/[0.02]">
                        <h4 className="tech-mono text-xs font-black uppercase tracking-[0.4em] text-white">Engineering Deposit</h4>
                        <p className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white max-w-2xl mx-auto leading-tight">
                            The $99 audit fee is 100% creditable toward any subsequent infrastructure build.
                        </p>
                    </div>
                </section>

                {/* Stripe Checkout */}
                <section className="py-48 flex flex-col items-center justify-center space-y-12 bg-white/[0.01] border-t border-zinc-800">
                    <div className="text-center space-y-4">
                        <h2 className="text-6xl md:text-8xl font-black tech-mono leading-none tracking-tighter text-white">$99.00</h2>
                        <p className="tech-mono text-xs text-zinc-500 uppercase tracking-widest font-black">Secure Audit Initiation</p>
                    </div>

                    <div className="w-full max-w-sm px-6">
                        <div key={`stripe-mount-${isStripeLoaded}`} className="flex justify-center flex-col gap-12">
                            {/* Stripe Buy Button Embed */}
                            {isStripeLoaded && (
                                <stripe-buy-button
                                  buy-button-id="buy_btn_1TFI5hJbjr79m6717AFAeZ60"
                                  publishable-key="pk_live_51Sf9RlJbjr79m671lbGGSORAftWHo03kLeuTuyvNkhgaFguMVIRhyd5iBuh9BykfEDHhTGEPgUKvTRMphW7Qm10R00lx1OpFT6"
                                >
                                </stripe-buy-button>
                            )}

                            <div className="flex flex-col items-center gap-8 pt-12 border-t border-zinc-800">
                                <div className="flex items-center gap-4 text-white/40">
                                    <ShieldCheck className="h-6 w-6" />
                                    <span className="tech-mono text-[10px] font-black uppercase tracking-[0.3em]">Industrial Security Protocol</span>
                                </div>
                                <p className="text-[10px] text-zinc-600 max-w-xs uppercase tracking-widest leading-loose font-black text-center">
                                    Your operational context is protected by encryption. Audit data is used strictly for technical synthesis.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Audit;
