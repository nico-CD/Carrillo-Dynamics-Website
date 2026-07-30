import { motion } from "framer-motion";

export const LatencyTaxDiagram = () => {
    return (
        <div className="w-full h-64 md:h-80 bg-zinc-950/50 border border-border/50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 md:p-8 mb-12">
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.25]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                }}
            />

            <svg viewBox="0 0 400 200" className="w-full h-full max-w-lg relative z-10" fill="none">
                {/* Timeline Axis */}
                <path d="M 50 150 L 350 150" stroke="#fff" strokeOpacity="0.2" strokeWidth="2" />
                
                {/* Time markers */}
                <circle cx="50" cy="150" r="4" fill="#10b981" />
                <text x="50" y="170" fill="#10b981" fontSize="10" textAnchor="middle">0s</text>

                <circle cx="150" cy="150" r="4" fill="#fff" opacity="0.5" />
                <text x="150" y="170" fill="#fff" fontSize="10" textAnchor="middle" opacity="0.5">5m</text>

                <circle cx="250" cy="150" r="4" fill="#fff" opacity="0.5" />
                <text x="250" y="170" fill="#fff" fontSize="10" textAnchor="middle" opacity="0.5">30m</text>
                
                <circle cx="350" cy="150" r="4" fill="#fff" opacity="0.5" />
                <text x="350" y="170" fill="#fff" fontSize="10" textAnchor="middle" opacity="0.5">1h+</text>

                {/* Graph Curve */}
                <path d="M 50 50 Q 100 130, 350 145" stroke="#ef4444" strokeWidth="3" />
                
                {/* Data Points */}
                <circle cx="50" cy="50" r="6" fill="#10b981" />
                <text x="50" y="35" fill="#10b981" fontSize="12" textAnchor="middle" fontWeight="bold">100% VALUE</text>
                
                <circle cx="150" cy="115" r="5" fill="#ef4444" />
                <text x="150" y="100" fill="#ef4444" fontSize="10" textAnchor="middle" fontWeight="bold">-80% DROP</text>

                {/* Area fill under curve (simulation with lines) */}
                <path d="M 50 50 Q 100 130, 350 145 L 350 150 L 50 150 Z" fill="#ef4444" opacity="0.1" />

                <motion.rect x="50" y="145" width="2" height="10" fill="#10b981"
                    animate={{ x: [0, 300] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
            </svg>
        </div>
    );
};
