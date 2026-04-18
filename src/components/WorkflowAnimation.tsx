import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, FileText, ArrowRight } from 'lucide-react';
import { useTranslation } from './LanguageProvider';

export default function WorkflowAnimation() {
    const { lang } = useTranslation();

    const nodes = [
        { 
            id: 'lead', 
            icon: UserPlus, 
            label: lang === 'en' ? 'LEAD INTAKE' : 'CAPTACIÓN',
            metrics: ['PING: 14ms', 'VOL: HIGH']
        },
        { 
            id: 'audit', 
            icon: Search, 
            label: lang === 'en' ? 'AUTO BLUEPRINT' : 'BLUEPRINT AUTOM.',
            metrics: ['MAP: ACTIVE', 'LEAK: DETECTED']
        },
        { 
            id: 'blueprint', 
            icon: FileText, 
            label: lang === 'en' ? 'TECHNICAL BLUEPRINT' : 'BLUEPRINT TÉCNICO',
            metrics: ['OS: READY', 'FLOW: OPTIMAL']
        }
    ];

    return (
        <div className="w-full h-full min-h-[500px] bg-black flex flex-col items-center justify-center p-8 overflow-hidden relative font-mono">
            
            {/* Background Grid - More subtle and technical */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute inset-0" style={{ 
                    backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-16 md:gap-4 z-10">
                
                {nodes.map((node, idx) => (
                    <React.Fragment key={node.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.4 }}
                            className="relative flex flex-col items-center gap-8 w-full md:w-auto"
                        >
                            {/* The Node Box */}
                            <div className="relative group">
                                {/* Outer Glow */}
                                <div className="absolute -inset-4 bg-[#10b981]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                {/* Main Container */}
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-zinc-950 border-2 border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[#10b981]/50 transition-colors duration-500">
                                    
                                    {/* Scanner Beam */}
                                    <motion.div 
                                        className="absolute left-0 right-0 h-[2px] bg-[#10b981]/40 z-20 shadow-[0_0_15px_#10b981]"
                                        animate={{ top: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />

                                    {/* Corner Accents */}
                                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-zinc-700" />
                                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-zinc-700" />
                                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-zinc-700" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-zinc-700" />

                                    <node.icon className="w-12 h-12 md:w-16 md:h-16 text-white group-hover:text-[#10b981] transition-colors duration-500 z-10" />
                                    
                                    {/* Background Detail */}
                                    <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                                        <div className="text-[120px] font-black leading-none">{idx + 1}</div>
                                    </div>
                                </div>

                                {/* Floating Metrics - Technical Detail */}
                                <div className="absolute -right-8 md:-right-12 top-0 flex flex-col gap-1">
                                    {node.metrics.map((m, i) => (
                                        <motion.span 
                                            key={i}
                                            animate={{ opacity: [0.2, 0.8, 0.2] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                            className="text-[8px] md:text-[9px] text-[#10b981] font-bold tracking-tighter whitespace-nowrap bg-black/50 px-1"
                                        >
                                            {m}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Label Area */}
                            <div className="text-center space-y-2">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="h-px w-4 bg-zinc-800" />
                                    <span className="text-[10px] text-[#10b981] font-black tracking-[0.3em]">NODE_0{idx + 1}</span>
                                    <div className="h-px w-4 bg-zinc-800" />
                                </div>
                                <h3 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-white">
                                    {node.label}
                                </h3>
                            </div>
                        </motion.div>

                        {/* Connection Bridge */}
                        {idx < nodes.length - 1 && (
                            <div className="relative flex items-center justify-center h-20 md:h-auto md:w-32 shrink-0">
                                {/* Desktop Horizontal Connection */}
                                <div className="hidden md:block w-full h-px bg-zinc-800 relative">
                                    {/* Data Particles */}
                                    <motion.div 
                                        className="absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent shadow-[0_0_10px_#10b981]"
                                        animate={{ left: ['-20%', '120%'] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: idx * 0.5 }}
                                    />
                                    <motion.div 
                                        className="absolute top-1/2 -translate-y-1/2 w-4 h-[1px] bg-white"
                                        animate={{ left: ['-10%', '110%'] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: idx * 0.2 }}
                                    />
                                </div>

                                {/* Mobile Vertical Connection */}
                                <div className="md:hidden w-px h-full bg-zinc-800 relative">
                                    <motion.div 
                                        className="absolute left-1/2 -translate-x-1/2 w-[2px] h-8 bg-gradient-to-b from-transparent via-[#10b981] to-transparent"
                                        animate={{ top: ['-20%', '120%'] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: idx * 0.5 }}
                                    />
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Bottom Status Feed */}
            <div className="absolute bottom-4 left-8 right-8 h-8 flex items-center justify-between border-t border-zinc-900 pt-4 hidden lg:flex">
                <div className="flex gap-8">
                    <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">ENCRYPTION: AES-256</span>
                    <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">PIPELINE: DETERMINISTIC</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
                    <span className="text-[9px] text-[#10b981] font-bold uppercase tracking-widest">SYSTEM_LIVE</span>
                </div>
            </div>
        </div>
    );
}
