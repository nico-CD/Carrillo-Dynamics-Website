import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";

const DEMO_URL = "https://demo.carrillodynamics.com";

const VideoGate = () => {
    const { lang } = useTranslation();

    const revealProps = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }
    };

    return (
        <section id="engineering-breakdown" className="px-6 py-32 md:py-40 bg-background relative z-10 transition-colors duration-300 overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.4] bg-repeat"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                }}
            />

            <motion.div
                className="mx-auto max-w-6xl relative z-10"
                {...revealProps}
            >
                <div className="mb-12 md:mb-16 text-center space-y-6">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none text-foreground transition-colors duration-300 mx-auto">
                        {lang === 'en' ? (
                            <>
                                See the <span className="text-[#10b981]">Engine</span> in Action
                            </>
                        ) : (
                            <>
                                Vea la <span className="text-[#10b981]">Motor</span> en Acción
                            </>
                        )}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-5xl leading-relaxed transition-colors duration-300 mx-auto">
                        {lang === 'en'
                            ? "Skip the sales deck. Test-drive our live field service intake engine, simulate automated dispatches, and explore the Operator Command Center in real-time."
                            : "Salte el pitch comercial. Pruebe nuestro motor de intake de campo en vivo, simule despachos automatizados y explore el Operator Command Center en tiempo real."}
                    </p>
                </div>

                <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={lang === 'en' ? "Open live sandbox demo" : "Abrir el sandbox en vivo"}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-[#27272A] bg-[#18181B] transition-all duration-300 hover:border-[#10b981]/50 hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.35)]"
                >
                    <span className="absolute top-4 right-4 z-10 rounded-full border border-[#10b981]/40 bg-[#18181B]/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#10b981] backdrop-blur-sm">
                        {lang === 'en' ? "Live Sandbox" : "Sandbox en Vivo"}
                    </span>
                    <img
                        src="/images/demo-preview.jpg"
                        alt={lang === 'en' ? "Live field service sandbox preview" : "Vista previa del sandbox de servicio de campo"}
                        className="block w-full aspect-video object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[#10b981]/0 transition-colors duration-300 group-hover:bg-[#10b981]/5" />
                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#27272A] bg-[#18181B]/90 text-[#10b981] opacity-80 transition-all duration-300 group-hover:border-[#10b981]/50 group-hover:opacity-100">
                        <ExternalLink className="h-4 w-4" />
                    </div>
                </a>

                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10 rounded-2xl border border-[#27272A] bg-[#18181B]">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                            {lang === 'en' ? "Drove the demo?" : "¿Probó el demo?"}
                        </h3>
                        <p className="text-zinc-400 text-base md:text-lg font-medium mt-1">
                            {lang === 'en'
                                ? "Book a call to design a custom, automated engine for your shop."
                                : "Agende una llamada para diseñar un motor automatizado a medida para su taller."}
                        </p>
                    </div>
                    <a
                        href="https://carrillodynamics.com/book"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center justify-center bg-[#10b981] hover:bg-[#0ea672] text-zinc-950 font-black px-8 py-4 rounded-xl text-lg uppercase tracking-wider transition-all"
                    >
                        {lang === 'en' ? "Book a Call →" : "Agendar Llamada →"}
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default VideoGate;
