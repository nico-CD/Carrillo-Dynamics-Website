import { useState, useEffect } from "react";
import { Calculator, Users, Clock, Zap, Target } from "lucide-react";
import { calculateAnnualReclaimedHours, calculateEngineeredLeverage } from "@/utils/roi";

const InteractiveCalculator = () => {
    const [teamSize, setTeamSize] = useState(10);
    const [hoursPerWeek, setHoursPerWeek] = useState(5);
    const [reclaimedHours, setReclaimedHours] = useState(0);

    useEffect(() => {
        setReclaimedHours(calculateAnnualReclaimedHours(teamSize, hoursPerWeek));
    }, [teamSize, hoursPerWeek]);

    const equivalentHires = calculateEngineeredLeverage(reclaimedHours);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 bg-black">
            {/* Efficiency Input Section */}
            <div className="bg-[#050505] p-12 md:p-20 space-y-16 border border-zinc-800">
                <div className="flex items-center gap-4 text-white">
                    <Calculator className="h-8 w-8 text-zinc-400" />
                    <h3 className="text-3xl font-black uppercase tracking-tight">Efficiency Input</h3>
                </div>

                <div className="space-y-16">
                    <div className="space-y-8">
                        <div className="flex justify-between text-xs font-black uppercase tracking-widest text-zinc-400 tech-mono">
                            <label className="flex items-center gap-2 text-white">
                                <Users className="h-4 w-4" /> Team Size
                            </label>
                            <span className="text-white">{teamSize} Members</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value={teamSize}
                            onChange={(e) => setTeamSize(parseInt(e.target.value))}
                            className="w-full h-1 bg-zinc-800 appearance-none cursor-pointer accent-white"
                        />
                    </div>

                    <div className="space-y-8">
                        <div className="flex justify-between text-xs font-black uppercase tracking-widest text-zinc-400 tech-mono">
                            <label className="flex items-center gap-2 text-white">
                                <Clock className="h-4 w-4" /> Hrs / Week / Person
                            </label>
                            <span className="text-white">{hoursPerWeek} Hours</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="20"
                            value={hoursPerWeek}
                            onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                            className="w-full h-1 bg-zinc-800 appearance-none cursor-pointer accent-white"
                        />
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-800/50">
                    <p className="text-[10px] font-black text-zinc-400 leading-relaxed uppercase tracking-widest tech-mono">
                        *Based on standard 50-week operational year and typical manual friction points like CRM entry, lead routing, and report generation.
                    </p>
                </div>
            </div>

            {/* Strategic Impact Section */}
            <div className="p-12 md:p-20 flex flex-col justify-between gap-16 border border-zinc-800 bg-[#050505]">
                <div className="flex flex-col gap-12">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 tech-mono">Annual Reclaimed</p>
                        <div className="flex items-baseline gap-4">
                            <span className="text-7xl md:text-8xl font-black text-[#10b981] tabular-nums tracking-tighter">
                                {reclaimedHours.toLocaleString()}
                            </span>
                            <span className="text-xl font-bold text-zinc-400 tech-mono uppercase">Hrs</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 tech-mono">Engineered Leverage</p>
                        <div className="flex items-baseline gap-4">
                            <span className="text-7xl md:text-8xl font-black text-[#10b981] tabular-nums tracking-tighter">
                                {equivalentHires}
                            </span>
                            <span className="text-xl font-bold text-zinc-400 italic tech-mono uppercase">FTU</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 relative overflow-hidden group border-t border-zinc-800 pt-12">
                    <div className="relative z-10 flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <Target className="h-5 w-5 text-white" />
                            <h4 className="text-lg font-black uppercase tracking-widest text-white">Strategic Impact</h4>
                        </div>
                        <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-xl">
                            This isn't just about "reclaiming time." This is about reclaiming your focus on high-value work that scales revenue without increasing headcount.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveCalculator;
