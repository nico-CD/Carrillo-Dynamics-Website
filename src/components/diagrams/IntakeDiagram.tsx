import { motion } from "framer-motion";

export const IntakeDiagram = () => {
    return (
        <div className="w-full h-64 md:h-80 bg-zinc-950/50 border border-border/50 rounded-2xl relative overflow-hidden flex items-center justify-center p-4 md:p-8 mb-12">
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                }}
            />

            <svg viewBox="0 0 400 200" className="w-full h-full max-w-lg relative z-10" fill="none">
                {/* Inputs */}
                <circle cx="30" cy="50" r="6" fill="#fff" opacity="0.5" />
                <circle cx="30" cy="100" r="6" fill="#fff" opacity="0.5" />
                <circle cx="30" cy="150" r="6" fill="#fff" opacity="0.5" />
                <text x="30" y="30" fill="#fff" fontSize="10" textAnchor="middle" opacity="0.6">CALLS</text>
                <text x="30" y="80" fill="#fff" fontSize="10" textAnchor="middle" opacity="0.6">FORMS</text>
                <text x="30" y="130" fill="#fff" fontSize="10" textAnchor="middle" opacity="0.6">CHATS</text>

                {/* Processing Core */}
                <rect x="150" y="60" width="100" height="80" rx="10" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="2" />
                <text x="200" y="104" fill="#10b981" fontSize="12" textAnchor="middle" fontWeight="bold">DETERMINISTIC LOGIC</text>

                {/* Input Lines */}
                <path d="M 40 50 Q 100 50, 150 70" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" />
                <path d="M 40 100 L 150 100" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" />
                <path d="M 40 150 Q 100 150, 150 130" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" />

                {/* Automated Outputs */}
                <path d="M 250 80 Q 300 50, 350 50" stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" />
                <path d="M 250 120 Q 300 150, 350 150" stroke="#10b981" strokeWidth="2" strokeDasharray="4,4" />

                <circle cx="350" cy="50" r="8" fill="#10b981" />
                <circle cx="350" cy="150" r="8" fill="#10b981" />

                <text x="350" y="35" fill="#10b981" fontSize="10" textAnchor="middle" fontWeight="bold">CRM INJECT</text>
                <text x="350" y="175" fill="#10b981" fontSize="10" textAnchor="middle" fontWeight="bold">DISPATCH</text>

                {/* Pulses */}
                <motion.circle cx="350" cy="50" r="14" fill="none" stroke="#10b981" strokeWidth="2"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <motion.circle cx="350" cy="150" r="14" fill="none" stroke="#10b981" strokeWidth="2"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
            </svg>
        </div>
    );
};
