import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/components/LanguageProvider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ArticlesPage = () => {
    const { lang, t } = useTranslation();

    const revealProps = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    };

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-[#10b981]/10 font-sans transition-colors duration-300">
            <Helmet>
                <title>{lang === 'en' ? 'Carrillo Dynamics | Articles' : 'Carrillo Dynamics | Artículos'}</title>
                <meta name="description" content={lang === 'en' ? 'Forensic analysis and operational blueprints for high-volume trade firms.' : 'Análisis forense y planes operativos para empresas de servicios de alto volumen.'} />
            </Helmet>
            <Navbar />
            
            <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto w-full">
                <motion.div {...revealProps} className="space-y-16">
                    <div className="space-y-4 max-w-3xl">
                        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-foreground transition-colors break-words text-balance">
                            {t.pageTitles.articles.main} <span className="italic text-[#10b981]">{t.pageTitles.articles.accent}.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                            {lang === 'en' 
                                ? 'Technical documentation on engineering flow and eliminating industrial-grade friction.'
                                : 'Documentación técnica sobre ingeniería de flujo y eliminación de fricción de grado industrial.'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
                        {t.articles.map((article, idx) => (
                            <Link 
                                key={article.id}
                                to={`/${lang}/articles/${article.id}`}
                                className={`group bg-background p-8 md:p-12 hover:bg-muted/50 transition-all flex flex-col justify-between h-full space-y-12 ${idx === 0 ? 'md:col-span-2' : ''}`}
                            >
                                <div className="space-y-6">
                                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight group-hover:text-[#10b981] transition-colors leading-none text-foreground">
                                        {article.title}
                                    </h2>
                                    <p className="text-muted-foreground font-medium text-lg leading-relaxed line-clamp-2">
                                        {article.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-8 border-t border-border">
                                    <div className="flex items-center gap-4 text-[#10b981]/60">
                                        <Clock className="h-3 w-3" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                                            {article.readTime}
                                        </span>
                                    </div>
                                    <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-[#10b981] group-hover:translate-x-2 transition-all" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default ArticlesPage;
