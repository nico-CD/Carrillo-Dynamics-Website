import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "./LanguageProvider";
import { Link, useNavigate } from "react-router-dom";
import { DEMO_HUB_URL } from "@/data/trades";

const Footer = () => {
  const { lang, t } = useTranslation();
  const navigate = useNavigate();

  return (
    <footer className="relative z-10 border-t border-border bg-background px-6 py-10 md:py-12 transition-colors duration-300">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:gap-12 md:items-start">
        <div className="space-y-4">
          <div
            className="group flex cursor-pointer items-center gap-3"
            onClick={() => navigate("/")}
          >
            <img
              src="/bull_PNGs/vect.bull.svg"
              alt=""
              className="h-8 w-8 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-sm font-black uppercase tracking-[0.2em] text-foreground">
              Carrillo Dynamics LLC
            </span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
            {lang === "en" ? "Less chaos. More capacity." : "Menos caos. Más capacidad."}
          </p>
          <div className="space-y-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <a
              href="mailto:engineering@carrillodynamics.com"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail className="h-3 w-3 opacity-60" />
              engineering@carrillodynamics.com
            </a>
            <div className="flex items-center gap-2 opacity-60">
              <MapPin className="h-3 w-3" />
              Chicago, IL
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground md:justify-end">
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
          <Link to="/terms" className="transition-colors hover:text-foreground">
            {t.nav.terms}
          </Link>
          <Link to="/privacy" className="transition-colors hover:text-foreground">
            {t.nav.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
