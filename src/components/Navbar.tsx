import { motion } from "framer-motion";
import { ModeToggle } from "./mode-toggle";
import { useTranslation } from "./LanguageProvider";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { lang, setLanguage, t } = useTranslation();

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-border bg-background/95 backdrop-blur-sm transition-all duration-300"
        >
            <Link 
                to={`/${lang}`}
                className="flex items-center gap-4 cursor-pointer group"
            >
                <div className="relative h-10 w-10 overflow-hidden">
                    <img
                        src="/bull_PNGs/bull-apple-touch-icon.png"
                        alt="Carrillo Dynamics Logo"
                        className="h-full w-full object-contain transition-transform group-hover:scale-105"
                    />
                </div>
                <span className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Carrillo Dynamics</span>
            </Link>

            <div className="flex items-center gap-4 md:gap-6">
                <nav className="hidden md:flex items-center gap-8 mr-8">
                    <Link to={`/${lang}/articles`} className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-[#10b981] transition-colors">{t.nav.articles}</Link>
                    <Link to={`/${lang}/faq`} className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-[#10b981] transition-colors">{t.nav.faq}</Link>
                </nav>

                <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 px-4 rounded-none border border-zinc-800 hover:border-[#10b981] hover:bg-zinc-900/50 transition-all text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white"
                    onClick={() => setLanguage(lang === 'en' ? 'es' : 'en')}
                >
                    {lang === 'en' ? 'VER EN ESPAÑOL' : 'VIEW IN ENGLISH'}
                </Button>
                
                <ModeToggle />
            </div>
        </motion.nav>
    );
};

export default Navbar;

