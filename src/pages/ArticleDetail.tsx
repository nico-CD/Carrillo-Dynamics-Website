import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "../components/LanguageProvider";
import { ArrowLeft, ArrowRight, Clock, Calendar, ShieldCheck, Database } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import ReactMarkdown from "react-markdown";
import ArticleSidebar from "../components/ArticleSidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEOManager from "../components/SEOManager";
import ForensicDiagnostic from "../components/ForensicDiagnostic";
import { Button } from "../components/ui/button";

const ArticleDetail = () => {
    const { id } = useParams();
    const { t, lang } = useTranslation();
    const navigate = useNavigate();
    
    const article = t.articles.find(a => a.id === id);
    
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const handlePrint = () => {
        window.print();
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: article?.title,
                    text: article?.description,
                    url: window.location.href,
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert(lang === 'en' ? "Link copied to clipboard." : "Enlace copiado al portapapeles.");
            }
        } catch (err) {
            console.error("Share failed:", err);
        }
    };

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8 bg-background font-sans">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground">Publication Not Found</h1>
                    <Link to="/articles" className="text-[#10b981] font-mono uppercase tracking-widest hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft className="h-4 w-4" /> Return to Archives
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen selection:bg-[#10b981]/10 font-sans">
            <SEOManager 
                title={article.title}
                description={article.description}
            />
            
            <Navbar />
            
            <div className="flex flex-col lg:flex-row min-h-screen bg-background pt-20">
                <ArticleSidebar />
                
                <main className="flex-1 lg:ml-80 overflow-x-hidden relative">
                    <div className="absolute inset-x-0 top-0 h-screen opacity-[0.03] pointer-events-none overflow-hidden grayscale">
                        <ForensicDiagnostic />
                    </div>

                    <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-24 relative z-10 space-y-24">
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-16"
                        >
                            {/* TECHNICAL HEADER BLOCK */}
                            <div className="space-y-8 border-l-4 border-[#10b981] pl-8">
                                <Link 
                                    to="/articles"
                                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#10b981] hover:text-foreground transition-colors"
                                >
                                    <ArrowLeft className="h-3 w-3" />
                                    {t.articleLabels.backToArchive}
                                </Link>

                                <div className="space-y-4">
                                    <div className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/30 font-mono">
                                        RESOURCE_{id?.toUpperCase()}
                                    </div>
                                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-foreground text-balance break-words">
                                        {article.title}
                                    </h1>
                                </div>

                                <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border/50 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground font-mono">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="h-3 w-3 text-[#10b981]" />
                                        <span>RELEASED: {article.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="h-3 w-3 text-[#10b981]" />
                                        <span>READ TIME: {article.readTime}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="h-3 w-3 text-[#10b981]" />
                                        <span>ACTIONABLE INSIGHTS</span>
                                    </div>
                                </div>
                            </div>

                            {/* WHITEPAPER CONTENT GRID */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                                {/* MAIN CONTENT: HIGH-DENSITY TEXT */}
                                <div className="lg:col-span-9 space-y-12">
                                    <article className="
                                        prose prose-zinc dark:prose-invert 
                                        max-w-none 
                                        prose-headings:font-bold
                                        prose-h1:hidden 
                                        prose-h3:text-2xl prose-h3:md:text-3xl prose-h3:font-bold prose-h3:text-foreground prose-h3:mt-12 prose-h3:mb-6
                                        prose-p:text-lg prose-p:md:text-xl prose-p:leading-[1.7] prose-p:text-muted-foreground prose-p:mb-8
                                        prose-li:text-lg prose-li:text-muted-foreground
                                        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
                                    ">
                                        <ReactMarkdown>
                                            {article.content}
                                        </ReactMarkdown>
                                    </article>
                                </div>

                                {/* SIDEBAR: METADATA & QUICK LINKS (Below on mobile, Right on desktop) */}
                                <aside className="lg:col-span-3 space-y-12 shrink-0">
                                    <div className="space-y-6 pt-2">
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#10b981]">{t.articleLabels.abstract}</h4>
                                        <p className="text-sm text-muted-foreground font-medium leading-relaxed italic">
                                            "{article.description}"
                                        </p>
                                    </div>

                                    <div className="space-y-6 border-t border-border pt-8">
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">{t.articleLabels.technicalSpecs}</h4>
                                        <div className="space-y-4 font-mono">
                                            <div className="flex justify-between items-center text-[10px] font-bold">
                                                <span className="text-muted-foreground">{t.articleLabels.integrity}</span>
                                                <span className="text-[#10b981]">{t.articleLabels.integrityValue}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-[10px] font-bold">
                                                <span className="text-muted-foreground">{t.articleLabels.protocol}</span>
                                                <span className="text-foreground">{t.articleLabels.protocolValue}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-[10px] font-bold">
                                                <span className="text-muted-foreground">{t.articleLabels.latency}</span>
                                                <span className="text-foreground">{t.articleLabels.latencyValue}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4">
                                        <Button 
                                            onClick={handlePrint}
                                            variant="outline" 
                                            className="w-full justify-start rounded-none h-12 text-[10px] font-black uppercase tracking-widest border-border hover:bg-muted/5 transition-all"
                                        >
                                            <ShieldCheck className="mr-3 h-4 w-4 text-[#10b981]" />
                                            {t.articleLabels.downloadPdf}
                                        </Button>
                                        <Button 
                                            onClick={handleShare}
                                            variant="outline" 
                                            className="w-full justify-start rounded-none h-12 text-[10px] font-black uppercase tracking-widest border-border hover:bg-muted/5 transition-all"
                                        >
                                            <ShieldCheck className="mr-3 h-4 w-4 text-[#10b981]" />
                                            {t.articleLabels.shareEntry}
                                        </Button>
                                    </div>
                                </aside>
                            </div>

                            {/* FOOTER CTA SECTION */}
                            <section className="bg-foreground text-background p-8 md:p-16 mt-24 space-y-12 transition-colors relative overflow-hidden flex flex-col items-start print:hidden">
                                <div className="space-y-6 relative z-10 w-full">

                                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none max-w-xl">
                                        {lang === 'en' ? 'Engineered Precision. Industrial Grit.' : 'Precisión de Ingeniería. Tesón Industrial.'}
                                    </h2>
                                    <p className="font-bold max-w-2xl text-lg md:text-xl opacity-60">
                                        {lang === 'en' 
                                             ? 'Request your custom Automation Diagnostic to identify and solve operational leaks.'
                                             : 'Solicite su Diagnóstico de Automatización personalizado para identificar y resolver fugas operativas.'}
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-6 relative z-10 w-full md:w-auto pt-8">
                                    <Button 
                                        onClick={() => navigate('/#intake')}
                                        className="h-20 px-12 bg-[#10b981] text-black font-black uppercase tracking-[0.2em] rounded-none hover:bg-white transition-all flex items-center group"
                                    >
                                        {t.nav.strategy}
                                        <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                    </Button>
                                </div>
                            </section>
                        </motion.div>
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default ArticleDetail;
