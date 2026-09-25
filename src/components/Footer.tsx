import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "./LanguageProvider";
import { Link, useNavigate } from "react-router-dom";
import { DEMO_HUB_URL } from "@/data/trades";

const Footer = () => {
  const { lang, t } = useTranslation();
  const navigate = useNavigate();

  return (
    <footer className="relative z-10 border-t border-border bg-background px-6 py-16 transition-colors duration-300 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-16 lg:flex-row lg:gap-24">
          <div className="max-w-xs shrink-0 space-y-6">
            <div
              className="group flex cursor-pointer items-center gap-3"
              onClick={() => navigate("/")}
            >
              <img
                src="/bull_PNGs/vect.bull.svg"
                alt="Logo"
                className="h-8 w-8 object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-sm font-black uppercase tracking-[0.2em] text-foreground transition-colors duration-300">
                Carrillo Dynamics LLC
              </span>
            </div>
            <p className="text-[10px] font-black uppercase leading-relaxed tracking-[0.2em] text-muted-foreground transition-colors duration-300">
              {lang === "en"
                ? "Less chaos. More capacity."
                : "Menos caos. Más capacidad."}
              <br />
              CHICAGO, IL
            </p>
          </div>

          <div className="flex flex-grow flex-col justify-end gap-16 md:flex-row md:gap-24">
            <div className="min-w-[200px] space-y-6">
              <div className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors duration-300">
                <a
                  href="mailto:engineering@carrillodynamics.com"
                  className="group flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Mail className="h-3 w-3 opacity-60 transition-colors group-hover:text-[#10b981]" />
                  engineering@carrillodynamics.com
                </a>
                <div className="group flex items-center gap-3 text-muted-foreground opacity-60">
                  <MapPin className="h-3 w-3" />
                  Chicago, IL
                </div>
              </div>
            </div>

            <div className="min-w-[200px] space-y-6">
              <div className="flex flex-col gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground transition-colors duration-300">
                <a
                  href={DEMO_HUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10b981] transition-colors hover:text-[#0ea672]"
                >
                  {lang === "en" ? "CD Engine Demos" : "Demos CD Engine"}
                </a>
                <Link to="/book" className="transition-colors hover:text-foreground">
                  {t.nav.strategy}
                </Link>
                <Link to="/faq" className="transition-colors hover:text-foreground">
                  FAQ
                </Link>
                <Link to="/resources" className="transition-colors hover:text-foreground">
                  {t.nav.articles}
                </Link>
                <Link
                  to="/terms"
                  className="mt-2 border-t border-border pt-2 opacity-50 transition-colors hover:text-foreground"
                >
                  {t.nav.terms}
                </Link>
                <Link to="/privacy" className="opacity-50 transition-colors hover:text-foreground">
                  {t.nav.privacy}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
