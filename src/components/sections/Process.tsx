import { Search, Layers, Rocket } from "lucide-react";

const Process = () => {
    const steps = [
        {
            icon: Search,
            step: "01",
            title: "Systems Analysis",
            desc: "Rigorous mapping of scheduling chaos, dispatch bottlenecks, and field tracking inefficiencies.",
        },
        {
            icon: Layers,
            step: "02",
            title: "Architecture Design",
            desc: "Custom-engineered routing and management layers designed to streamline crew operations.",
        },
        {
            icon: Rocket,
            step: "03",
            title: "Deterministic Scale",
            desc: "Deployment of high-ROI systems that automate dispatch, quotes, and manual field operations.",
        },
    ];

    return (
        <div className="space-y-24">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">Our <span className="italic">Process.</span></h2>
            </div>

            <div className="flex flex-col gap-px bg-zinc-700 border border-zinc-700">
                {steps.map((p, idx) => (
                    <div key={idx} className="bg-[#050505] p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center gap-12 group hover:bg-white/[0.01] transition-all">
                        <div className="flex flex-col gap-4 min-w-[120px]">
                            <span className="tech-mono text-4xl font-black text-white/5 group-hover:text-white transition-colors">
                                {p.step}
                            </span>
                        </div>
                        
                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-4">
                                <p.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">{p.title}</h3>
                            </div>
                            <p className="text-lg text-zinc-400 font-medium max-w-2xl leading-relaxed">
                                {p.desc}
                            </p>
                        </div>
                        
                        <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="h-px w-24 bg-zinc-600" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Process;
