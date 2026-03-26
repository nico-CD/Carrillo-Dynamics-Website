const Footer = () => {
    return (
        <footer className="px-6 py-24 border-t border-[#1a1a1a] bg-black/50">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-10">
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
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] tech-mono text-zinc-300">Carrillo Dynamics</span>
                </div>
                
                <p className="tech-mono text-[10px] font-black tracking-[0.5em] text-zinc-300 uppercase">
                    © {new Date().getFullYear()} Systems Engineering. Chicago, IL.
                </p>
                
                <div className="flex gap-8 tech-mono text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 flex-wrap justify-center md:justify-end">
                    <a href="mailto:engineering@carrillodynamics.com" className="hover:text-white transition-colors">engineering@carrillodynamics.com</a>
                    <a href="tel:7089059254" className="hover:text-white transition-colors">708-905-9254</a>
                    <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                    <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
