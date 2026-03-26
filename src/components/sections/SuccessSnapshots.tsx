import CountUp from "@/components/CountUp";

const SuccessSnapshots = () => {
    return (
        <div className="space-y-24">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">Snapshots of <span className="italic">Success.</span></h2>
                <p className="text-lg text-zinc-400 font-medium max-w-xl">Real-world impact across diverse operational ecosystems.</p>
            </div>

            <div className="flex flex-col gap-px bg-zinc-700 border border-zinc-700">
                {[
                    {
                        start: 0, end: 14, suffix: "%", decimals: 0,
                        label: "Fleet Logistics",
                        win: "14% Route Efficiency gain via Automated Dispatch Telemetry.",
                    },
                    {
                        start: 0, end: 99.8, suffix: "%", decimals: 1,
                        label: "Industrial Compliance",
                        win: "99.8% Document Integrity for high-volume audit trails.",
                    },
                    {
                        start: 0, end: 82, suffix: "%", decimals: 0,
                        label: "Service Operations",
                        win: "82% Reduction in manual lead-triage overhead.",
                    },
                ].map((s, idx) => (
                    <div key={idx} className="bg-[#050505] p-12 md:p-20 flex flex-col md:flex-row items-baseline justify-between gap-12 group hover:bg-white/[0.01] transition-all">
                        <div className="flex flex-col gap-2 min-w-[200px]">
                            <span className="tech-mono text-6xl font-black text-[#10b981] transition-tighter">
                                <CountUp
                                    start={s.start}
                                    end={s.end}
                                    decimals={s.decimals}
                                    suffix={s.suffix}
                                    duration={2}
                                />
                            </span>
                            <span className="tech-mono text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{s.label}</span>
                        </div>
                        
                        <p className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed max-w-2xl border-l border-white/10 pl-10 group-hover:border-white transition-colors">
                            "{s.win}"
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuccessSnapshots;
