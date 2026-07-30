import { motion } from "framer-motion";

export const FounderBlueprintDiagram = () => {
    return (
        <div className="w-full h-64 md:h-80 bg-zinc-950/50 border border-border/50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 md:p-8 mb-12">
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                }}
            />

            <svg viewBox="0 0 400 200" className="w-full h-full max-w-lg relative z-10" fill="none">
                {/* Foundation / Wrench Concept */}
                <path d="M 50 150 L 350 150" stroke="#10b981" strokeWidth="4" />
                <path d="M 100 150 L 100 100 L 300 100 L 300 150" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
                
                <text x="200" y="175" fill="#10b981" fontSize="12" textAnchor="middle" fontWeight="bold">ENGINEERED FOUNDATION</text>
                
                {/* Central Gear / Operations */}
                <g transform="translate(200, 100)">
                    <motion.g animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                        <circle cx="0" cy="0" r="20" stroke="#10b981" strokeWidth="4" fill="none" />
                        <circle cx="0" cy="0" r="10" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="4,4" />
                        {/* Gear Teeth */}
                        <path d="M -25 -5 L -25 5 L -20 5 L -20 -5 Z" fill="#10b981" />
                        <path d="M 20 -5 L 20 5 L 25 5 L 25 -5 Z" fill="#10b981" />
                        <path d="M -5 -25 L 5 -25 L 5 -20 L -5 -20 Z" fill="#10b981" />
                        <path d="M -5 20 L 5 20 L 5 25 L -5 25 Z" fill="#10b981" />
                    </motion.g>
                </g>

                {/* Growth Vectors */}
                <path d="M 200 70 L 200 30" stroke="#10b981" strokeWidth="3" />
                <path d="M 190 40 L 200 30 L 210 40" stroke="#10b981" strokeWidth="3" />
                <text x="220" y="45" fill="#10b981" fontSize="10" fontWeight="bold">SCALABILITY</text>

                {/* Abstract Code/Blueprint lines */}
                <path d="M 70 80 L 130 80" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" />
                <path d="M 70 60 L 110 60" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" />
                <path d="M 270 80 L 330 80" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" />
                <path d="M 290 60 L 330 60" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" />
            </svg>
        </div>
    );
};
