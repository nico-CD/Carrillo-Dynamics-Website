import { motion } from "framer-motion";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-border bg-background/95 backdrop-blur-sm transition-all duration-300"
        >
            <div 
                className="flex items-center gap-4 cursor-pointer group"
                onClick={() => window.location.href = "/"}
            >
                <div className="relative h-10 w-10 overflow-hidden">
                    <img
                        src="/bull_PNGs/bull-apple-touch-icon.png"
                        alt="Carrillo Dynamics Logo"
                        className="h-full w-full object-contain transition-transform group-hover:scale-105"
                    />
                </div>
                <span className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Carrillo Dynamics</span>
            </div>

            <div className="flex items-center gap-6">
                <ModeToggle />
            </div>
        </motion.nav>
    );
};

export default Navbar;
