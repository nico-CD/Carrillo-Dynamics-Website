import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Clapperboard, ExternalLink, Languages } from "lucide-react";
import { InlineWidget } from "react-calendly";
import Footer from "@/components/Footer";
import SEOManager from "@/components/SEOManager";
import { useTranslation } from "@/components/LanguageProvider";
import { DEMO_HUB_URL } from "@/data/trades";

/**
 * QR-only landing. Not linked from the public homepage —
 * card scanners arrive here directly.
 */
const Start = () => {
  const { lang, setLanguage } = useTranslation();
  const [searchParams] = useSearchParams();

  const hubHome = useMemo(() => {
    const url = new URL(DEMO_HUB_URL);
    ["utm_source", "utm_medium", "utm_campaign", "src", "v"].forEach((key) => {
      const val = searchParams.get(key);
      if (val) url.searchParams.set(key, val);
    });
    return url.toString();
  }, [searchParams]);

  const revealProps = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  };

  const copy =
    lang === "en"
      ? {
          title: "Watch the walk-through.",
          titleAccent: "Then book a call.",
          subtitle:
            "This video shows the engines we build for local trades — English or Spanish. Then book 15 minutes or drive a live demo yourself.",
          videoBadge: "Walk-through video coming soon",
          previewAlt: "CD Trade Automation Suite preview",
          previewBadge: "Live Suite",
          openHub: "Open full demo hub",
          bookPrimary: "Book a 15-min strategy call",
          bookTitleLead: "Book Your",
          bookTitleAccent: "Strategy Session",
          bookBody:
            "15 minutes to map bottlenecks and sketch an automation engine for your shop.",
          langToggle: "ES",
        }
      : {
          title: "Vea el recorrido.",
          titleAccent: "Luego agende.",
          subtitle:
            "Este video muestra los motores que construimos para oficios locales — en inglés o español. Luego reserve 15 minutos o pruebe un demo en vivo.",
          videoBadge: "Video del recorrido próximamente",
          previewAlt: "Vista previa de la Suite de Automatización CD",
          previewBadge: "Suite en vivo",
          openHub: "Abrir hub completo",
          bookPrimary: "Agendar llamada de 15 min",
          bookTitleLead: "Agende Su",
          bookTitleAccent: "Sesión de Estrategia",
          bookBody:
            "15 minutos para mapear cuellos de botella y bosquejar un motor de automatización para su taller.",
          langToggle: "EN",
        };

  const scrollToBook = () => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-[#10b981]/10 transition-colors duration-300">
      <SEOManager isNoindex={true} />

      <header className="sticky top-0 z-50 flex h-14 items-center border-b border-foreground/10 bg-background/80 px-4 backdrop-blur-md sm:h-16 sm:px-6">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <img
              src="/bull_PNGs/vect.bull.svg"
              alt=""
              className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
            />
            <span className="truncate font-black text-base tracking-tighter sm:text-lg">
              CARRILLO <span className="text-[#10b981]">DYNAMICS</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setLanguage(lang === "en" ? "es" : "en")}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-foreground/20 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider hover:border-[#10b981] hover:text-[#10b981]"
          >
            <Languages className="h-3.5 w-3.5" />
            {copy.langToggle}
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <div
          className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.3]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`,
          }}
        />

        <section className="relative px-4 pb-6 pt-8 sm:px-6 sm:pt-10">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              {copy.title}{" "}
              <span className="text-[#10b981]">{copy.titleAccent}</span>
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
              {copy.subtitle}
            </p>

            <div className="relative mt-6 w-full overflow-hidden rounded-2xl border border-[#27272A] bg-[#18181B]">
              <div className="relative aspect-video w-full">
                <img
                  src="/images/demo-preview.jpg"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover object-top opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/90 px-4 py-2.5 text-[11px] text-emerald-400 backdrop-blur-md sm:text-sm">
                    <Clapperboard className="h-4 w-4 shrink-0" />
                    <span className="truncate">{copy.videoBadge}</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToBook}
              className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#10b981] px-5 py-3.5 text-sm font-black uppercase tracking-wider text-zinc-950 transition-colors hover:bg-[#0ea672] sm:w-auto sm:px-8"
            >
              {copy.bookPrimary}
            </button>

            <a
              href={hubHome}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={copy.openHub}
              className="group relative mt-5 block w-full overflow-hidden rounded-2xl border border-[#27272A] bg-[#18181B] transition-all duration-300 hover:border-[#10b981]/50 hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.35)]"
            >
              <span className="absolute right-3 top-3 z-10 rounded-full border border-[#10b981]/40 bg-[#18181B]/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#10b981] backdrop-blur-sm sm:right-4 sm:top-4">
                {copy.previewBadge}
              </span>
              <img
                src="/images/demo-preview.jpg"
                alt={copy.previewAlt}
                className="block aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>

            <a
              href={hubHome}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-[#10b981]/40 px-5 py-3.5 text-sm font-black uppercase tracking-wider text-[#10b981] transition-colors hover:bg-[#10b981]/10 sm:w-auto sm:px-8"
            >
              {copy.openHub}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section id="book" className="relative z-10 scroll-mt-20 px-4 pt-20 pb-16 sm:px-6 sm:pt-24 md:pb-24">
          <motion.div className="relative z-10 mx-auto w-full max-w-full md:max-w-4xl" {...revealProps}>
            <div className="mb-8 space-y-3 text-center sm:mb-10">
              <h2 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
                {copy.bookTitleLead}{" "}
                <span className="italic text-[#10b981]">{copy.bookTitleAccent}</span>
              </h2>
              <p className="mx-auto max-w-xl text-sm font-medium text-muted-foreground sm:text-base">
                {copy.bookBody}
              </p>
            </div>

            <InlineWidget
              url={`https://calendly.com/nico-carrillodynamics/15-minute-strategy-session?hide_event_type_details=1&hide_gdpr_banner=1&locale=${lang === "en" ? "en" : "es"}`}
              styles={{
                height: "700px",
                width: "100%",
                border: "none",
                overflow: "hidden",
              }}
              pageSettings={{
                backgroundColor: "09090b",
                hideEventTypeDetails: true,
                hideLandingPageDetails: true,
                primaryColor: "10b981",
                textColor: "ffffff",
              }}
            />
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Start;
