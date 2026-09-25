import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";
import { DEMO_HUB_URL } from "@/data/trades";

const VideoGate = () => {
  const { lang } = useTranslation();

  const revealProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  };

  const copy =
    lang === "en"
      ? {
          titleLead: "Test-drive our",
          titleAccent: "engines.",
          body: "Open the CD Trade Automation Suite to try seven live trade demos.",
          cta: "Open demo hub",
          badge: "Live Suite",
          previewAlt: "CD Trade Automation Suite preview",
        }
      : {
          titleLead: "Pruebe nuestros",
          titleAccent: "motores.",
          body: "Abra la Suite de Automatización CD para probar siete demos de oficios en vivo.",
          cta: "Abrir hub de demos",
          badge: "Suite en vivo",
          previewAlt: "Vista previa de la Suite de Automatización CD",
        };

  return (
    <section
      id="engines"
      className="relative z-10 overflow-hidden bg-background px-6 py-32 transition-colors duration-300 md:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.4]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div className="relative z-10 mx-auto max-w-6xl" {...revealProps}>
        <div className="mb-12 space-y-6 text-center md:mb-16">
          <h2 className="mx-auto text-4xl font-black uppercase leading-none tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {copy.titleLead}{" "}
            <span className="text-[#10b981]">{copy.titleAccent}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
            {copy.body}
          </p>
        </div>

        <a
          href={DEMO_HUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={copy.cta}
          className="group relative block w-full overflow-hidden rounded-2xl border border-[#27272A] bg-[#18181B] transition-all duration-300 hover:border-[#10b981]/50 hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.35)]"
        >
          <span className="absolute right-4 top-4 z-10 rounded-full border border-[#10b981]/40 bg-[#18181B]/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#10b981] backdrop-blur-sm">
            {copy.badge}
          </span>
          <img
            src="/images/demo-preview.jpg"
            alt={copy.previewAlt}
            className="block aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[#10b981]/0 transition-colors duration-300 group-hover:bg-[#10b981]/5" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#10b981] px-5 py-3 text-sm font-black uppercase tracking-wider text-zinc-950 shadow-lg transition-colors group-hover:bg-[#0ea672]">
              {copy.cta}
              <ExternalLink className="h-4 w-4" />
            </span>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default VideoGate;
