import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="px-6 py-16 md:py-24 border-t border-border bg-background transition-colors duration-300">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 items-start">
                    
                    {/* LEFT IDENTITY */}
                    <div className="space-y-6 max-w-xs shrink-0">
                        <div 
                            className="flex items-center gap-3 cursor-pointer group"
                            onClick={() => window.location.href = "/"}
                        >
                            <img
                                src="/bull_PNGs/bull-apple-touch-icon.png"
                                alt="Logo"
                                className="h-8 w-8 object-contain transition-transform group-hover:scale-105"
                            />
                            <span className="text-lg font-black uppercase tracking-[0.2em] text-foreground transition-colors duration-300">Carrillo Dynamics</span>
                        </div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] leading-relaxed transition-colors duration-300">
                            Engineer flow. Eliminate friction.<br />
                            Chicago, IL. {new Date().getFullYear()}
                        </p>
                    </div>

                    {/* RIGHT ARCHITECTURAL LINKS */}
                    <div className="flex flex-col md:flex-row gap-16 md:gap-24 flex-grow justify-end">
                        
                        {/* OUTREACH */}
                        <div className="space-y-6 min-w-[200px]">
                            <div className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors duration-300">
                                <a href="mailto:engineering@carrillodynamics.com" className="flex items-center gap-3 hover:text-foreground transition-colors group">
                                    <Mail className="h-3 w-3 opacity-60 group-hover:text-[#10b981] transition-colors" />
                                    engineering@carrillodynamics.com
                                </a>
                                <a href="tel:7089059254" className="flex items-center gap-3 hover:text-foreground transition-colors group">
                                    <Phone className="h-3 w-3 opacity-60 group-hover:text-[#10b981] transition-colors" />
                                    708-905-9254
                                </a>
                                <div className="flex items-center gap-3 group text-muted-foreground opacity-60">
                                    <MapPin className="h-3 w-3" />
                                    Chicago Metropolitan Area
                                </div>
                            </div>
                        </div>

                        {/* LEGAL */}
                        <div className="space-y-6 min-w-[200px]">
                             <div className="flex flex-col gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground transition-colors duration-300">
                                <a href="/faq" className="hover:text-foreground transition-colors">FAQ</a>
                                <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
                                <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
                             </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
