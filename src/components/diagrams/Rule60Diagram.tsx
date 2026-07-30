import { motion } from "framer-motion";

export const Rule60Diagram = () => {
    return (
        <div className="w-full h-64 md:h-80 bg-zinc-950/50 border border-border/50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 md:p-8 mb-12">
            {/* Grid */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                }}
            />

            <svg viewBox="0 0 400 200" className="w-full h-full max-w-lg relative z-10" fill="none">
                <defs>
                    <linearGradient id="fastPath" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="slowPath" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
                    </linearGradient>
                </defs>
                
                {/* Source Node */}
                <circle cx="50" cy="100" r="8" fill="#fff" opacity="0.8" />
                <text x="50" y="130" fill="#fff" fontSize="10" textAnchor="middle" opacity="0.6" fontWeight="bold">NEW LEAD</text>
                
                {/* Fast Path (< 60s) */}
                <path id="fast" d="M 60 100 Q 150 50, 300 50" stroke="url(#fastPath)" strokeWidth="3" strokeDasharray="5,5" />
                <motion.circle 
                    cx="300" cy="50" r="12" fill="#10b981" 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <text x="300" y="30" fill="#10b981" fontSize="12" textAnchor="middle" fontWeight="bold">CLOSED (8X ROI)</text>
                <text x="180" y="65" fill="#10b981" fontSize="10" fontWeight="bold">&lt; 60 SECONDS</text>
                
                {/* Slow Path (> 5min) */}
                <path d="M 60 100 Q 150 150, 300 150" stroke="url(#slowPath)" strokeWidth="3" strokeDasharray="5,5" opacity="0.5" />
                <circle cx="300" cy="150" r="12" fill="#ef4444" opacity="0.3" />
                <text x="300" y="180" fill="#ef4444" fontSize="12" textAnchor="middle" opacity="0.5" fontWeight="bold">LOST</text>
                <text x="180" y="145" fill="#ef4444" fontSize="10" opacity="0.5" fontWeight="bold">&gt; 5 MINUTES</text>
            </svg>
        </div>
    );
};
