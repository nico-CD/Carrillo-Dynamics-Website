import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "@/components/LanguageProvider";
import { useVideoGate } from "@/hooks/useVideoGate";

const VideoGate = () => {
    const { lang, t } = useTranslation();
    const { isLoading, isUnlocked, submitEmail } = useVideoGate();
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            submitEmail(email);
        }
    };

    const revealProps = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }
    };

    return (
        <section id="engineering-breakdown" className="px-6 py-32 md:py-40 bg-background relative z-10 transition-colors duration-300 overflow-hidden">
            {/* Engineering Graph Paper Background */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.4] bg-repeat"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                }}
            />
            
            <motion.div
                className="mx-auto max-w-4xl relative z-10"
                {...revealProps}
            >
                <div className="mb-16 text-center space-y-6">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none text-foreground transition-colors duration-300 mx-auto">
                        {lang === 'en' ? (
                            <>
                                The <span className="text-[#10b981]">Engineering</span> Breakdown
                            </>
                        ) : (
                            <>
                                El Análisis de <span className="text-[#10b981]">Ingeniería</span>
                            </>
                        )}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed transition-colors duration-300 mx-auto">
                        {lang === 'en'
                            ? "See exactly how we automate dispatch and eliminate manual data entry. Zero spam. We build systems, not newsletters."
                            : "Vea exactamente cómo automatizamos el despacho y eliminamos la entrada manual de datos. Cero spam. Construimos sistemas, no boletines."}
                    </p>
                </div>

                <div className="bg-zinc-950/50 backdrop-blur-xl border-2 border-border/50 p-4 sm:p-6 md:p-12 relative overflow-hidden flex flex-col justify-center transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(16,185,129,0.15)] rounded-3xl w-full min-h-[450px]">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#10b981]/50 to-transparent opacity-30" />

                    {isUnlocked ? (
                        <div className="w-full flex flex-col bg-black rounded-xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-1000 border border-border/50">
                            <div className="w-full aspect-video relative">
                                <iframe 
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/Ox1LSIBMwZw?autoplay=1&rel=0&modestbranding=1" 
                                    title="Engineering Breakdown" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="w-full h-auto sm:h-[80px] bg-zinc-950 flex items-center justify-center border-t border-border/50 p-4 sm:p-0">
                                <Button 
                                    onClick={() => window.location.href = '/start'}
                                    className="w-full sm:w-auto h-14 sm:h-12 bg-[#10b981] hover:bg-[#0ea672] text-black font-black uppercase tracking-widest rounded-none border-none px-4 sm:px-8 flex items-center justify-center gap-2 text-xs sm:text-sm"
                                >
                                    {lang === 'en' ? "Next Step: Strategy Session" : "Siguiente Paso: Sesión de Estrategia"}
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-center">
                            <div className="w-20 h-20 rounded-full bg-[#10b981]/10 flex items-center justify-center mb-8 border border-[#10b981]/20">
                                <Play className="w-8 h-8 text-[#10b981] ml-1" />
                            </div>
                            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
                                <div className="space-y-4">
                                    <Input
                                        type="email"
                                        required
                                        placeholder={lang === 'en' ? "Enter your business email" : "Ingrese su correo de empresa"}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-16 rounded-none border-2 border-border bg-background px-6 text-foreground focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all font-medium text-center placeholder:text-muted-foreground/50 text-lg"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isLoading}
                                    className="w-full h-16 rounded-none bg-[#10b981] hover:bg-[#0ea672] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] text-black text-sm sm:text-lg font-black uppercase tracking-widest transition-all px-2 sm:px-4 disabled:opacity-50 disabled:cursor-not-allowed group border-none"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <Loader2 className="h-5 w-5 sm:h-6 sm:w-6 animate-spin" />
                                            <span>{lang === 'en' ? "Unlocking_" : "Desbloqueando_"}</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <span className="whitespace-nowrap">{lang === 'en' ? "Watch the Breakdown" : "Ver el Análisis"}</span>
                                            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                                        </div>
                                    )}
                                </Button>
                            </form>
                            <p className="mt-6 text-xs text-muted-foreground uppercase tracking-widest font-black opacity-50">
                                {lang === 'en' ? "100% Secure. No Marketing Spam." : "100% Seguro. Sin Spam."}
                            </p>
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default VideoGate;
