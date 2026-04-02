import { Search, Layers, Rocket, Hammer, Truck, Factory, Thermometer, Droplets, TreePine } from "lucide-react";
import { motion } from "framer-motion";

const BlueprintProtocol = () => {
    const sectors = [
        { icon: Hammer, label: "CONSTRUCTION" },
        { icon: Truck, label: "LOGISTICS" },
        { icon: Factory, label: "MANUFACTURING" },
        { icon: Thermometer, label: "HVAC" },
        { icon: Droplets, label: "PLUMBING" },
        { icon: TreePine, label: "LANDSCAPING" },
    ];

    const steps = [
        {
            icon: Search,
            step: "01",
            title: "Analysis",
            desc: "Mapping scheduling chaos, dispatch bottlenecks, and tracking inefficiencies.",
            bullets: [
                "Operational Bottleneck Discovery",
                "Data-Flow Integrity Audit",
                "Workforce Leakage Identification"
            ]
        },
        {
            icon: Layers,
            step: "02",
            title: "Design",
            desc: "Engineered routing and management layers designed to streamline crew operations.",
            bullets: [
                "Custom Systems Architecture",
                "Digital Infrastructure Alignment",
                "Integrated Communication Layers"
            ]
        },
        {
            icon: Rocket,
            step: "03",
            title: "Deployment",
            desc: "High-ROI systems that automate dispatch, quotes, and manual field operations.",
            bullets: [
                "Automated Dispatch Protocols",
                "Dynamic Quote Management",
                "Real-time Operational Syncing"
            ]
        },
    ];

    return (
        <section className="bg-background py-24 md:py-48 px-6 border-y border-zinc-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-48">
                
                {/* Current Operational Sectors - HEAVY INDUSTRIAL GRID */}
                <div className="space-y-16">
                    <div className="flex flex-col items-start gap-4">
                         <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-foreground transition-colors duration-300">Current Operational Sectors</h2>
                         <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-2xl transition-colors duration-300">
                             Custom-engineered automation for high-stakes industrial environments.
                         </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[2px] bg-zinc-600 border-2 border-zinc-600 overflow-hidden">
                        {sectors.map((s, idx) => (
                            <div key={idx} className="bg-background p-10 flex flex-col items-center justify-center gap-8 group hover:bg-zinc-900/5 transition-colors h-40">
                                <s.icon className="h-6 w-6 text-zinc-500 group-hover:text-[#10b981] group-hover:scale-110 transition-all duration-300" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-[#10b981] transition-colors">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our System Blueprint - HEAVY INDUSTRIAL GRID */}
                <div className="space-y-20">
                    <div className="flex flex-col items-start gap-4">
                         <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-foreground transition-colors duration-300">Our System Blueprint</h2>
                         <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-2xl transition-colors duration-300">
                             A scientific approach to operational engineering that scales with your business.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 bg-zinc-600 border-2 border-zinc-600 gap-[2px] overflow-hidden">
                        {steps.map((p, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-background p-10 md:p-14 flex flex-col gap-10 hover:bg-zinc-900/5 transition-all group"
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <span className="text-zinc-600 text-lg font-black group-hover:text-[#10b981] transition-colors">{p.step}.</span>
                                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground transition-colors duration-300">{p.title}</h3>
                                    </div>
                                    <p.icon className="h-10 w-10 text-zinc-700 group-hover:text-[#10b981] transition-all duration-500 shrink-0" />
                                </div>
                                <div className="space-y-8 h-full flex flex-col">
                                    <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                        {p.desc}
                                    </p>
                                    
                                    <ul className="space-y-4 pt-4 border-t border-border flex-grow">
                                        {p.bullets.map((point, bIdx) => (
                                            <li key={bIdx} className="flex items-center gap-3 text-xs md:text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                                <div className="h-1 w-1 bg-[#10b981] rounded-full shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BlueprintProtocol;
