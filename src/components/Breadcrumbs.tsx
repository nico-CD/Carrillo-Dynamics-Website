import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useTranslation } from "./LanguageProvider";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const { lang, t } = useTranslation();
  
  const pathnames = pathname.split("/").filter((x) => x);

  if (pathname === '/' || pathname === '') return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 py-4 px-6 relative z-10"
    >
      <Link 
        to="/" 
        className="flex items-center gap-2 hover:text-[#10b981] transition-colors group"
      >
        <Home className="h-3 w-3" />
        <span className="sr-only">Home</span>
      </Link>

      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        // Map technical paths to readable titles from i18n
        const readableTitle = (val: string) => {
          if (val === 'articles') return t.nav.articles;
          if (val === 'faq') return t.nav.faq;
          if (val === 'privacy') return lang === 'en' ? 'Privacy' : 'Privacidad';
          if (val === 'terms') return lang === 'en' ? 'Terms' : 'Términos';
          return val.toUpperCase();
        };

        return (
          <React.Fragment key={to}>
            <ChevronRight className="h-3 w-3 shrink-0 opacity-30" />
            {last ? (
              <span className="text-[#10b981] truncate max-w-[200px]" aria-current="page">
                {readableTitle(value)}
              </span>
            ) : (
              <Link 
                to={to} 
                className="hover:text-[#10b981] transition-colors"
              >
                {readableTitle(value)}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
