const FounderStatement = () => {
    return (
        <div className="space-y-16">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">Engineered <span className="italic">Conviction.</span></h2>
            </div>

            <div className="border border-zinc-700 p-12 md:p-24 relative overflow-hidden bg-white/[0.01]">
                <div className="space-y-12 relative z-10">
                    <p className="text-2xl md:text-5xl font-black leading-tight text-white italic tracking-tighter">
                        "Most teams drown in spreadsheets; we build deterministic engines that add zeros. Chaos is a choice, engineering is the solution."
                    </p>
                    
                    <div className="pt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-zinc-700">
                        <div className="space-y-2">
                            <p className="text-2xl font-black uppercase tracking-tight text-white">Nicolas Carrillo</p>
                            <p className="tech-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Founding Engineer</p>
                        </div>
                        <div className="tech-mono text-[10px] text-zinc-100 uppercase tracking-[0.5em] pb-1 font-black">
                            Carrillo Dynamics
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FounderStatement;
