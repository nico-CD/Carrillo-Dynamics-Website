import { motion } from "framer-motion";

export const SwivelChairDiagram = () => {
    return (
        <div className="w-full h-64 md:h-80 bg-zinc-950/50 border border-border/50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 md:p-8 mb-12">
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.25]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                }}
            />

            <svg viewBox="0 0 400 200" className="w-full h-full max-w-lg relative z-10" fill="none">
                {/* Systems */}
                <rect x="50" y="40" width="80" height="40" rx="5" fill="#fff" fillOpacity="0.1" stroke="#fff" strokeOpacity="0.5" strokeWidth="2" />
                <text x="90" y="65" fill="#fff" fontSize="10" textAnchor="middle" opacity="0.8" fontWeight="bold">SOFTWARE A</text>

                <rect x="270" y="40" width="80" height="40" rx="5" fill="#fff" fillOpacity="0.1" stroke="#fff" strokeOpacity="0.5" strokeWidth="2" />
                <text x="310" y="65" fill="#fff" fontSize="10" textAnchor="middle" opacity="0.8" fontWeight="bold">SOFTWARE B</text>

                {/* Swivel Chair (Manual) */}
                <circle cx="200" cy="150" r="15" fill="#ef4444" opacity="0.8" />
                <text x="200" y="185" fill="#ef4444" fontSize="10" textAnchor="middle" fontWeight="bold">HUMAN OPERATOR</text>
                
                <path d="M 185 140 L 100 80" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />
                <path d="M 215 140 L 300 80" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />
                
                {/* Animated typing/swiveling */}
                <motion.circle cx="142" cy="110" r="4" fill="#ef4444"
                    animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.5, repeat: Infinity }} />
                <motion.circle cx="258" cy="110" r="4" fill="#ef4444"
                    animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} />

                {/* API Integration (Automated) */}
                <path d="M 130 60 L 270 60" stroke="#10b981" strokeWidth="4" />
                <text x="200" y="50" fill="#10b981" fontSize="12" textAnchor="middle" fontWeight="bold">CUSTOM MIDDLEWARE (API)</text>
                
                <motion.circle cx="130" cy="60" r="6" fill="#10b981"
                    animate={{ x: [0, 140] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
            </svg>
        </div>
    );
};
