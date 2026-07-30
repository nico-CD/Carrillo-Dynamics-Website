import { Mail, Phone, MapPin, Terminal } from "lucide-react";
import { useTranslation } from "./LanguageProvider";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const { lang, t } = useTranslation();
    const navigate = useNavigate();

    return (
        <footer className="px-6 py-16 md:py-24 border-t border-border bg-background transition-colors duration-300 relative z-10">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 items-start">
                    
                    {/* LEFT IDENTITY */}
                    <div className="space-y-6 max-w-xs shrink-0">
                        <div 
                            className="flex items-center gap-3 cursor-pointer group"
                            onClick={() => navigate('/')}
                        >
                            <img
                                src="/bull_PNGs/vect.bull.svg"
                                alt="Logo"
                                className="h-8 w-8 object-contain transition-transform group-hover:scale-105"
                            />
                            <span className="text-sm font-black uppercase tracking-[0.2em] text-foreground transition-colors duration-300">Carrillo Dynamics LLC</span>
                        </div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] leading-relaxed transition-colors duration-300">
                            {lang === 'en' ? 'Engineered Precision. Industrial Grit.' : 'Precisión de Ingeniería. Tesón Industrial.'}<br />
                            CHICAGO, IL
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
                                <div className="flex items-center gap-3 group text-muted-foreground opacity-60">
                                    <MapPin className="h-3 w-3" />
                                    Chicago, IL
                                </div>
                            </div>
                        </div>

                        {/* LEGAL & ALPHA */}
                        <div className="space-y-6 min-w-[200px]">
                             <div className="flex flex-col gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground transition-colors duration-300">
                                <a href="/faq" onClick={(e) => { e.preventDefault(); navigate('/faq'); }} className="hover:text-foreground transition-colors">FAQ</a>
                                <a href="/resources" onClick={(e) => { e.preventDefault(); navigate('/resources'); }} className="hover:text-foreground transition-colors">{t.nav.articles}</a>
                                <a 
                                    href="/book" 
                                    onClick={(e) => { e.preventDefault(); navigate('/book'); }} 
                                    className="text-[#10b981] hover:text-[#0ea672] transition-colors"
                                >
                                    {t.nav.strategy}
                                </a>
                                <a href="/terms" onClick={(e) => { e.preventDefault(); navigate('/terms'); }} className="hover:text-foreground transition-colors pt-2 border-t border-border mt-2 opacity-50">{t.nav.terms}</a>
                                <a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }} className="hover:text-foreground transition-colors opacity-50">{t.nav.privacy}</a>
                             </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
