import { Link, useParams } from "react-router-dom";
import { useTranslation } from "./LanguageProvider";
import { cn } from "@/lib/utils";

const ArticleSidebar = () => {
    const { lang, t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    return (
        <aside className="hidden lg:block w-80 fixed top-24 bottom-0 left-0 overflow-y-auto border-r border-border bg-background p-8 transition-colors duration-300">
            <div className="space-y-8">
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">
                        {lang === 'en' ? 'Technical Documentation' : 'Documentación Técnica'}
                    </h3>
                    <nav className="space-y-1">
                        {t.articles.map((article) => (
                            <Link
                                key={article.id}
                                to={`/articles/${article.id}`}
                                className={cn(
                                    "block px-4 py-3 text-sm font-bold uppercase tracking-tight transition-all border-l-2",
                                    id === article.id
                                        ? "border-[#10b981] text-foreground bg-muted/50"
                                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                                )}
                            >
                                {article.title}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="pt-8 border-t border-border">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">
                        {lang === 'en' ? 'Core Resources' : 'Recursos Principales'}
                    </h3>
                    <nav className="space-y-4">
                        <a 
                            href="https://calendly.com/nico-carrillodynamics/30min" 
                            target="_blank" 
                            className="block px-4 text-xs font-black uppercase tracking-[0.1em] text-[#10b981] hover:text-[#0ea672] transition-colors"
                        >
                            {lang === 'en' ? 'Book Strategy Session' : 'Sesión de Estrategia'}
                        </a>
                        <button 
                            onClick={() => {
                                const el = document.getElementById('intake');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                                else window.location.href = "/#intake";
                            }}
                            className="block px-4 text-xs font-black uppercase tracking-[0.1em] text-muted-foreground hover:text-[#10b981] transition-colors text-left w-full"
                        >
                            {lang === 'en' ? 'Request Blueprint' : 'Solicitar Blueprint'}
                        </button>
                        <Link to="/faq" className="block px-4 text-xs font-black uppercase tracking-[0.1em] text-muted-foreground hover:text-[#10b981] transition-colors">
                            {t.nav.faq}
                        </Link>
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default ArticleSidebar;
