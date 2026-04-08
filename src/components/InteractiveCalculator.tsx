import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { motion } from 'framer-motion';
import { useTranslation } from './LanguageProvider';

const InteractiveCalculator = () => {
    const { t } = useTranslation();
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
                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                <span>{t.calculator.scaleMonitor}</span>
                                <span className="text-[#10b981] underline decoration-[#10b981] underline-offset-4">{t.calculator.growthPotential}</span>
                            </div>
                            <div className="h-10 bg-secondary border border-border relative overflow-hidden transition-all duration-300">
                                <motion.div 
                                    className={`absolute inset-y-0 left-0 bg-[#10b981] transition-all duration-300 ${isIncreasing ? "shadow-[0_0_30px_rgba(16,185,129,0.8)] z-10" : ""}`}
                                    initial={{ width: "30%" }}
                                    animate={{ width: `${dynamicWidth}%` }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                />
                                <div className="absolute inset-y-0 left-[30%] w-px bg-white z-20 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="p-10 md:p-16 bg-background border-2 border-border group transition-colors duration-300">
                <div className="space-y-8">
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
