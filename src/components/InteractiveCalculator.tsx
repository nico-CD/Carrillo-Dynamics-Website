import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { motion } from 'framer-motion';
import { useTranslation } from './LanguageProvider';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const InteractiveCalculator = () => {
    const { t, lang } = useTranslation();
    const [teamSize, setTeamSize] = useState([8]);
    const [hoursPerWeek, setHoursPerWeek] = useState([12]);
    const [prevHours, setPrevHours] = useState(12);
    const [isIncreasing, setIsIncreasing] = useState(false);
    
    useEffect(() => {
        if (hoursPerWeek[0] > prevHours) {
            setIsIncreasing(true);
        } else {
            setIsIncreasing(false);
        }
        setPrevHours(hoursPerWeek[0]);
    }, [hoursPerWeek, prevHours]);

    const weeklyWaste = teamSize[0] * hoursPerWeek[0];
    const annualHoursSaved = weeklyWaste * 52;
    const ftuReclaimed = (weeklyWaste / 40).toFixed(1);

    const weightedTotal = (teamSize[0] * 20) + (hoursPerWeek[0] * 10);
    const dynamicWidth = Math.min(100, 30 + (weightedTotal / 1400) * 70);

    return (
        <div className="w-full max-w-7xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-border border-2 border-border gap-[2px] overflow-hidden">
                {/* Q1: EFFICIENCY INPUT */}
                <div className="bg-background p-10 md:p-16 space-y-12 transition-colors duration-300">
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground transition-colors duration-300">
                        {t.calculator.efficiencyInput}
                    </h3>
                    
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs font-black uppercase text-muted-foreground tracking-widest">{t.calculator.totalPeople}</span>
                                <span className="text-4xl font-black text-foreground">{teamSize[0]}</span>
                            </div>
                            <Slider
                                value={teamSize}
                                onValueChange={setTeamSize}
                                max={50}
                                step={1}
                                className="[&_[role=slider]]:bg-[#10b981] [&_[role=slider]]:h-8 [&_[role=slider]]:w-8 [&_[role=slider]]:cursor-pointer"
                            />
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs font-black uppercase text-muted-foreground tracking-widest">{t.calculator.manualHours}</span>
                                <span className="text-4xl font-black text-[#10b981]">{hoursPerWeek[0]}</span>
                            </div>
                            <Slider
                                value={hoursPerWeek}
                                onValueChange={setHoursPerWeek}
                                max={40}
                                step={1}
                                className="[&_[role=slider]]:bg-[#10b981] [&_[role=slider]]:h-8 [&_[role=slider]]:w-8 [&_[role=slider]]:cursor-pointer"
                            />
                        </div>
                    </div>
                </div>

                {/* Q2: PROJECTED GAIN */}
                <div className="bg-background p-10 md:p-16 flex flex-col justify-between group transition-colors duration-300">
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground transition-colors duration-300">
                        {t.calculator.projectedGain}
                    </h3>
                    <div className="flex items-baseline gap-6 mt-8">
                        <span className="text-8xl md:text-9xl font-black text-foreground tracking-tighter tabular-nums leading-none">
                            {ftuReclaimed}
                        </span>
                        <span className="text-2xl font-black text-[#10b981] uppercase tracking-tighter">FTU</span>
                    </div>
                </div>

                {/* Q3: OPERATIONAL RECOVERY */}
                <div className="bg-background p-10 md:p-16 flex flex-col justify-between transition-colors duration-300">
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground transition-colors duration-300">
                        {t.calculator.manualRecovery}
                    </h3>
                    <div className="flex items-baseline gap-4 mt-8">
                        <span className="text-6xl md:text-7xl font-black text-foreground tracking-tighter tabular-nums leading-none transition-colors duration-300">
                            {annualHoursSaved.toLocaleString()}
                        </span>
                        <div className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-tight">
                            {t.calculator.totalHoursRecovered.split(' ').map((word, i) => (
                                <React.Fragment key={i}>
                                    {word}{i === 1 ? <br /> : ' '}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Q4: CAPACITY IMPACT SCALE */}
                <div className="bg-background p-10 md:p-16 flex flex-col justify-between transition-colors duration-300">
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground transition-colors duration-300 mb-8">
                        {t.calculator.capacityImpact}
                    </h3>
                    
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <div className="flex justify-center items-center text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground w-full">
                                <span>{t.calculator.scaleMonitor}</span>
                            </div>
                            <div className="h-16 bg-card border-2 border-border relative overflow-hidden transition-all duration-300 flex items-center px-1 group/bar">
                                <div className="absolute inset-0 flex opacity-10">
                                    {Array.from({ length: 40 }).map((_, i) => (
                                        <div key={i} className="h-full w-px bg-foreground mx-auto" />
                                    ))}
                                </div>
                                <motion.div 
                                    className={`relative h-12 transition-all duration-300 z-10 ${
                                        dynamicWidth > 80 ? "bg-red-500 shadow-[0_0_50px_rgba(239,68,68,0.4)]" : 
                                        dynamicWidth > 50 ? "bg-orange-500 shadow-[0_0_50px_rgba(249,115,22,0.3)]" : 
                                        "bg-[#10b981] shadow-[0_0_50px_rgba(16,185,129,0.2)]"
                                    } ${isIncreasing ? "ring-2 ring-foreground/20" : ""}`}
                                    initial={{ width: "30%" }}
                                    animate={{ width: `${dynamicWidth}%` }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                >
                                    {/* Scanline effect on the bar itself */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/20 to-transparent w-full animate-[shimmer_2s_infinite] pointer-events-none" />
                                </motion.div>
                                
                                {/* LEAKAGE INDICATORS */}
                                {dynamicWidth > 60 && (
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 z-20">
                                        {Array.from({ length: 3 }).map((_, i) => (
                                            <motion.div 
                                                key={i}
                                                className="w-1 h-4 bg-foreground/40"
                                                animate={{ 
                                                    opacity: [0.2, 0.8, 0.2],
                                                    height: [4, 8, 4]
                                                }}
                                                transition={{ 
                                                    repeat: Infinity, 
                                                    duration: 0.5, 
                                                    delay: i * 0.1 
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* PRESSURE LABEL */}
                        <div className="flex flex-col items-center justify-center border-t border-border pt-6 text-center">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">{t.calculator.operationalStress}</p>
                                <p className={`text-4xl font-mono font-black ${dynamicWidth > 80 ? "text-red-500" : dynamicWidth > 50 ? "text-orange-500" : "text-[#10b981]"}`}>
                                    {Math.round(dynamicWidth)}%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-10 md:p-16 bg-background border-2 border-border group transition-colors duration-300 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="space-y-8 max-w-4xl">
                    <p className="text-xl md:text-2xl text-muted-foreground font-bold leading-relaxed transition-colors duration-300">
                        {t.calculator.summaryTemplate
                            .replace('{ftu}', ftuReclaimed)
                            .split('{wholeFtu}')
                            .map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                        <span className="text-foreground underline decoration-muted-foreground decoration-2 underline-offset-8">
                                            {Math.floor(Number(ftuReclaimed))}
                                        </span>
                                    )}
                                </React.Fragment>
                            ))
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};


export default InteractiveCalculator;

