import { Hammer, Truck, Factory, Thermometer, Droplets, TreePine } from "lucide-react";

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
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-zinc-400">
                    Industrial <span className="italic text-white">Integration.</span>
                </h2>
                <p className="text-lg text-zinc-400 font-medium max-w-xl">Deep domain knowledge across high-stakes operational sectors.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-zinc-700 border border-zinc-700">
                {sectors.map((s, idx) => (
                    <div key={idx} className="bg-[#050505] p-10 flex flex-col items-center justify-center gap-8 hover:bg-white/[0.02] transition-all group aspect-square">
                        <s.icon className="h-10 w-10 text-zinc-400 group-hover:text-white transition-all group-hover:scale-110" />
                        <span className="tech-mono text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white">{s.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectorTrust;
