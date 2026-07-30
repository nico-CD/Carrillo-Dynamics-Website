import { motion } from "framer-motion";

export const ScalingDiagram = () => {
    return (
        <div className="w-full h-64 md:h-80 bg-zinc-950/50 border border-border/50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 md:p-8 mb-12">
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                }}
            />

            <svg viewBox="0 0 400 200" className="w-full h-full max-w-lg relative z-10" fill="none">
                {/* Manual Setup (Left) */}
                <g opacity="0.3">
                    <circle cx="50" cy="100" r="15" fill="#ef4444" />
                    <text x="50" y="135" fill="#ef4444" fontSize="10" textAnchor="middle" fontWeight="bold">MANUAL</text>
                    <path d="M 70 100 L 120 70" stroke="#ef4444" strokeWidth="2" />
                    <path d="M 70 100 L 120 100" stroke="#ef4444" strokeWidth="2" />
                    <path d="M 70 100 L 120 130" stroke="#ef4444" strokeWidth="2" />
                    <circle cx="120" cy="70" r="4" fill="#ef4444" />
                    <circle cx="120" cy="100" r="4" fill="#ef4444" />
                    <circle cx="120" cy="130" r="4" fill="#ef4444" />
                    <text x="140" y="104" fill="#ef4444" fontSize="10">MAX CAPACITY</text>
                </g>

                {/* Automated Setup (Right) */}
                <g>
                    <motion.circle 
                        cx="250" cy="100" r="15" fill="#10b981"
                        animate={{ boxShadow: ["0px 0px 0px #10b981", "0px 0px 20px #10b981", "0px 0px 0px #10b981"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <text x="250" y="135" fill="#10b981" fontSize="10" textAnchor="middle" fontWeight="bold">AUTOMATED</text>
                    
                    {/* Top Branch */}
                    <path d="M 270 95 Q 320 40, 360 40" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
                    <circle cx="360" cy="40" r="6" fill="#10b981" />
                    
                    {/* Middle Branches */}
                    <path d="M 270 100 L 360 80" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
                    <circle cx="360" cy="80" r="6" fill="#10b981" />
                    
                    <path d="M 270 100 L 360 120" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
                    <circle cx="360" cy="120" r="6" fill="#10b981" />

                    {/* Bottom Branch */}
                    <path d="M 270 105 Q 320 160, 360 160" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
                    <circle cx="360" cy="160" r="6" fill="#10b981" />
                    
                    <text x="315" y="104" fill="#10b981" fontSize="10" fontWeight="bold">INFINITE SCALE</text>
                </g>
            </svg>
        </div>
    );
};
