import React from 'react';
import { useTranslation } from './LanguageProvider';

export default function WorkflowAnimation() {
    const { lang } = useTranslation();

    return (
        <div className="w-full bg-zinc-950/40 border border-[#10b981]/10 shadow-[inset_0_0_50px_rgba(16,185,129,0.05)] rounded-lg flex flex-col p-6 md:p-8 overflow-hidden relative font-sans backdrop-blur-sm mt-8 lg:mt-0">
            {/* Terminal Header */}
            <div className="h-10 border-b border-[#10b981]/10 bg-black/40 flex items-center px-4 gap-2 absolute top-0 left-0 right-0 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <span className="text-[10px] text-[#10b981]/50 ml-4 font-mono tracking-widest uppercase font-bold">
                    {lang === 'en' ? 'sys.telemetry_dashboard' : 'sys.telemetry_dashboard'}
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">operational analysis</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-8 z-10 mt-2">
                {/* Left Side: Legacy (Latency Risk) */}
                <div className="flex flex-col bg-zinc-950/50 border border-red-500/10 p-5 relative overflow-hidden group scanner-border-red">
                    <div className="flex justify-between items-center mb-4 border-b border-red-500/15 pb-2">
                        <span className="text-[9px] font-mono text-red-500/80 font-bold uppercase tracking-wider">[ PIPELINE_LEGACY ]</span>
                        <span className="text-[9px] font-mono text-red-500/40 uppercase tracking-widest">ID_9748 // CRIT</span>
                    </div>

                    {/* Jagged Graph */}
                    <div className="h-20 w-full flex items-center justify-center bg-black/30 border border-red-500/5 p-2 mb-4 relative">
                        <svg viewBox="0 0 100 40" className="w-full h-full text-red-500/40 opacity-70">
                            <path 
                                d="M 0,30 L 10,10 L 20,35 L 30,5 L 40,28 L 50,15 L 60,37 L 70,12 L 80,32 L 90,8 L 100,30" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1.5" 
                                strokeDasharray="2 2" 
                            />
                        </svg>
                        <div className="absolute inset-0 bg-red-500/[0.02] pointer-events-none" />
                    </div>

                    {/* Raw data rows */}
                    <div className="space-y-2 mb-4 font-mono text-[9px] text-zinc-500">
                        <div className="flex justify-between border-b border-zinc-900 pb-1">
                            <span className="uppercase">ERR_DISPATCH_OVERFLOW</span>
                            <span className="text-red-500 font-bold">FAIL_408</span>
                        </div>
                        <div className="flex justify-between border-b border-zinc-900 pb-1">
                            <span className="uppercase">INVOICE_LAG_ALERT</span>
                            <span className="text-red-500 font-bold">WARN_SYNC</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="uppercase">MANUAL_REKEY_REQ</span>
                            <span className="text-red-500 font-bold">SYS_HALT</span>
                        </div>
                    </div>

                    {/* Red Alert Banner */}
                    <div className="mt-auto">
                        <div className="bg-red-500/10 text-red-500 border border-red-500/20 px-2 py-2 text-[9px] tracking-wider font-mono font-black uppercase text-center rounded-none shadow-[0_0_15px_rgba(239,68,68,0.05)]">
                            [LATENCY RISK // UNLINKED PIPELINE]
                        </div>
                    </div>
                </div>

                {/* Right Side: Automated (Deterministic Architecture) */}
                <div className="flex flex-col bg-zinc-950/50 border border-[#10b981]/20 p-5 relative overflow-hidden group scanner-border">
                    <div className="flex justify-between items-center mb-4 border-b border-[#10b981]/20 pb-2">
                        <span className="text-[9px] font-mono text-[#10b981] font-bold uppercase tracking-wider">[ PIPELINE_ACTIVE ]</span>
                        <span className="text-[9px] font-mono text-[#10b981]/40 uppercase tracking-widest">ID_0028 // OK</span>
                    </div>

                    {/* Smooth Chart Vector */}
                    <div className="h-20 w-full flex items-center justify-center bg-black/30 border border-[#10b981]/10 p-2 mb-4 relative">
                        <svg viewBox="0 0 100 40" className="w-full h-full text-[#10b981] opacity-90">
                            {/* Grid Lines */}
                            <line x1="0" y1="10" x2="100" y2="10" stroke="#10b981" strokeWidth="0.2" strokeOpacity="0.2" />
                            <line x1="0" y1="20" x2="100" y2="20" stroke="#10b981" strokeWidth="0.2" strokeOpacity="0.2" />
                            <line x1="0" y1="30" x2="100" y2="30" stroke="#10b981" strokeWidth="0.2" strokeOpacity="0.2" />
                            
                            <path 
                                d="M 0,30 Q 25,30 50,15 T 100,5" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                            />
                            <circle cx="100" cy="5" r="2" fill="#10b981" />
                        </svg>
                        <div className="absolute inset-0 bg-emerald-500/[0.02] pointer-events-none" />
                    </div>

                    {/* Operational Rows */}
                    <div className="space-y-2 mb-4 font-mono text-[9px] text-zinc-400">
                        <div className="flex justify-between border-b border-zinc-900 pb-1">
                            <span className="uppercase text-zinc-500">AUTO_DISPATCH_ROUTE</span>
                            <span className="text-[#10b981] font-bold">VERIFIED_OK</span>
                        </div>
                        <div className="flex justify-between border-b border-zinc-900 pb-1">
                            <span className="uppercase text-zinc-500">DATA_INTEGRITY_INDEX</span>
                            <span className="text-[#10b981] font-bold">SIGMA_1.0</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="uppercase text-zinc-500">REALTIME_SYNC_LATENCY</span>
                            <span className="text-[#10b981] font-bold">0.02 MS</span>
                        </div>
                    </div>

                    {/* Emerald Success Banner */}
                    <div className="mt-auto">
                        <div className="bg-emerald-500/10 text-[#10b981] border border-[#10b981]/30 px-2 py-2 text-[9px] tracking-wider font-mono font-black uppercase text-center rounded-none shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                            [DETERMINISTIC ARCHITECTURE ONLINE]
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
