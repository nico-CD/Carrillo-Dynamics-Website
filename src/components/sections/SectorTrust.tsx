import { Hammer, Truck, Factory, Thermometer, Droplets, TreePine } from "lucide-react";
import { motion } from "framer-motion";

const SectorTrust = () => {
    const sectors = [
        { icon: Hammer, label: "Construction" },
        { icon: Truck, label: "Logistics" },
        { icon: Factory, label: "Manufacturing" },
        { icon: Thermometer, label: "HVAC" },
        { icon: Droplets, label: "Plumbing" },
        { icon: TreePine, label: "Landscaping" },
    ];

    return (
        <div className="space-y-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-zinc-800 border border-zinc-800">
                {sectors.map((s, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-[#050505] p-12 flex flex-col items-center justify-center gap-10 hover:bg-white/[0.03] transition-all group aspect-square hover:z-20 cursor-default"
                    >
                        <s.icon className="h-10 w-10 text-white opacity-40 group-hover:opacity-100 group-hover:text-[#10b981] group-hover:scale-110 transition-all duration-500" />
                        <span className="tech-mono text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-white transition-all text-center">
                            {s.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SectorTrust;
