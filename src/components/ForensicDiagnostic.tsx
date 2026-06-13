import React from 'react';
import { motion } from 'framer-motion';

export default function ForensicDiagnostic() {
    return (
        <div className="w-full h-full bg-zinc-950/50 border border-zinc-900 flex items-center justify-center p-4 md:p-12 relative overflow-hidden group">
            {/* Background Grid Detail */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
                backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }} />

            <svg viewBox="0 0 800 500" className="w-full h-full max-w-4xl text-zinc-500 fill-none stroke-current stroke-[0.5]">
                {/* Structural Frames */}
                <rect x="50" y="50" width="700" height="400" className="stroke-zinc-800" />
                <line x1="50" y1="150" x2="750" y2="150" className="stroke-zinc-800" />
                <line x1="250" y1="150" x2="250" y2="450" className="stroke-zinc-800" />
                <line x1="550" y1="150" x2="550" y2="450" className="stroke-zinc-800" />

                {/* Technical Callouts */}
                <g className="text-emerald-500/50">
                    <circle cx="250" cy="150" r="4" fill="currentColor" />
                    <circle cx="550" cy="150" r="4" fill="currentColor" />
                    <circle cx="250" cy="450" r="4" fill="currentColor" />
                    <circle cx="550" cy="450" r="4" fill="currentColor" />
                </g>

                {/* Central Bridge Diagram */}
                <g className="stroke-emerald-500/30 stroke-[1.5]">
                    {/* Input Node */}
                    <rect x="100" y="250" width="100" height="60" />
                    <text x="110" y="285" className="fill-zinc-400 stroke-none text-[10px] font-mono">INTAKE_L1</text>
                    
                    {/* Process Node */}
                    <rect x="350" y="240" width="100" height="80" />
                    <text x="360" y="285" className="fill-emerald-500 stroke-none text-[10px] font-mono font-bold">DIAGNOSTIC</text>
                    
                    {/* Output Node */}
                    <rect x="600" y="250" width="100" height="60" />
                    <text x="610" y="285" className="fill-zinc-400 stroke-none text-[10px] font-mono">OUTPUT_Z6</text>

                    {/* Connection Paths */}
                    <path d="M 200 280 L 350 280" />
                    <path d="M 450 280 L 600 280" />
                    
                    {/* Flow Indicators */}
                    <motion.circle 
                        r="2" 
                        fill="#10b981" 
                        animate={{ cx: [200, 350], opacity: [0, 1, 0] }} 
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
                    />
                    <motion.circle 
                        r="2" 
                        fill="#10b981" 
                        animate={{ cx: [450, 600], opacity: [0, 1, 0] }} 
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }} 
                    />
                </g>

                {/* Schematic Labels */}
                <text x="60" y="80" className="fill-zinc-600 stroke-none text-[12px] font-black tracking-widest uppercase">Operational Architecture v4.0.8</text>
                <text x="60" y="100" className="fill-zinc-800 stroke-none text-[8px] font-mono">REF: CD-IND-26-X</text>
                
                {/* Measurement Lines */}
                <g className="stroke-zinc-900 text-[6px] font-mono fill-zinc-800">
                    <line x1="50" y1="470" x2="750" y2="470" />
                    <line x1="50" y1="465" x2="50" y2="475" />
                    <line x1="750" y1="465" x2="750" y2="475" />
                    <text x="380" y="485" textAnchor="middle">SCALE: 1:1 DETERMINISTIC</text>
                </g>
            </svg>

            {/* Corner Status Accents */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-emerald-500/50 font-mono tracking-tighter">DATA_INTEGRITY: 100%</span>
            </div>
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 flex flex-col gap-1 border-l border-zinc-800 pl-3">
                <span className="text-[8px] text-zinc-600 font-bold uppercase tracking-widest">Legend: 0x88 Logic</span>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-[1px] bg-emerald-500" />
                    <span className="text-[8px] text-zinc-500">Automated Path</span>
                </div>
            </div>
        </div>
    );
}
