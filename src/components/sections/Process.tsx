import { Search, Layers, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Process = () => {
    const steps = [
        {
            icon: Search,
            step: "01",
            title: "Analysis_",
            desc: "Mapping scheduling chaos, dispatch bottlenecks, and tracking inefficiencies.",
        },
        {
            icon: Layers,
            step: "02",
            title: "Design_",
            desc: "Engineered routing and management layers designed to streamline crew operations.",
        },
        {
            icon: Rocket,
            step: "03",
            title: "Deployment_",
            desc: "High-ROI systems that automate dispatch, quotes, and manual field operations.",
        },
    ];

    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 overflow-hidden">
                {steps.map((p, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="bg-[#050505] p-10 flex flex-col gap-8 group hover:bg-white/[0.01] transition-all relative h-full"
                    >
                        <div className="flex justify-between items-start">
                            <span className="tech-mono text-2xl font-black text-zinc-800 group-hover:text-white/20 transition-colors uppercase tracking-widest leading-none">
                                {p.step}
                            </span>
                            <p.icon className="h-6 w-6 text-[#10b981] group-hover:scale-125 transition-transform duration-500" />
                        </div>
                        
                        <div className="space-y-4">
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white group-hover:translate-x-2 transition-transform duration-300">
                                {p.title}
                            </h3>
                            <p className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed max-w-xs group-hover:text-zinc-300 transition-colors">
                                {p.desc}
                            </p>
                        </div>
                        
                        {/* Progress line indicator (only between items) */}
                        {idx < 2 && (
                            <div className="hidden md:block absolute top-1/2 -right-[1px] h-24 w-px bg-zinc-800 z-10 -translate-y-1/2" />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Process;
