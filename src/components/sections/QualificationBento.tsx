import { Check, X } from "lucide-react";

const QualificationBento = () => {
    return (
        <div className="space-y-24">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">System <span className="italic">Eligibility.</span></h2>
                <p className="text-lg text-zinc-400 font-medium max-w-xl">We engineer results for high-stakes operations. Here is who we serve.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-700 border border-zinc-700">
                {/* Engineered For */}
                <div className="bg-[#050505] p-12 md:p-20 space-y-12">
                    <h3 className="tech-mono text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 underline underline-offset-8 decoration-zinc-800">Engineered For</h3>
                    <ul className="space-y-8">
                        {[
                            "High-growth teams drowning in manual syncs",
                            "Industrial operations with fragmented data",
                            "Logistics firms seeking deterministic dispatch",
                            "Founders investing in long-term leverage",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-6 text-xl font-bold text-white leading-tight">
                                <Check className="mt-1 h-5 w-5 shrink-0 text-white" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Excluded */}
                <div className="bg-[#050505] p-12 md:p-20 space-y-12 opacity-50 border-t lg:border-t-0 lg:border-l border-zinc-700/50">
                    <h3 className="tech-mono text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 underline underline-offset-8 decoration-zinc-800">Excluded Scope</h3>
                    <ul className="space-y-8">
                        {[
                            "Hobbyist projects without real volume",
                            "Short-term tactical patches",
                            "Magic-button instant fixes",
                            "Firms resistant to structural change",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-6 text-xl font-medium text-zinc-400 leading-tight">
                                <X className="mt-1 h-5 w-5 shrink-0 text-zinc-800" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default QualificationBento;
