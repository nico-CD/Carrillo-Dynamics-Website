import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "../components/LanguageProvider";
import { ArrowLeft, ArrowRight, Clock, Calendar, FileText, Share2, ShieldCheck, Database, Menu } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import ReactMarkdown from "react-markdown";
import ArticleSidebar from "../components/ArticleSidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import ForensicBlueprint from "../components/ForensicBlueprint";
import { Button } from "../components/ui/button";

const ArticleDetail = () => {
    const { id } = useParams();
    const { t, lang } = useTranslation();
    
    const article = t.articles.find(a => a.id === id);
    const canonicalUrl = `https://carrillodynamics.com/${lang}/articles/${id}`;
    
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
                    <Link to={`/${lang}/articles`} className="text-[#10b981] font-mono uppercase tracking-widest hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft className="h-4 w-4" /> Return to Archives
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen selection:bg-[#10b981]/10 font-sans">

            <Helmet>
                <title>{article.title} | Technical Whitepaper | Carrillo Dynamics</title>
                <meta name="description" content={article.description} />
                <link rel="canonical" href={canonicalUrl} />
                <link rel="alternate" hreflang="en" href={`https://carrillodynamics.com/en/articles/${id}`} />
                <link rel="alternate" hreflang="es" href={`https://carrillodynamics.com/es/articles/${id}`} />
                <link rel="alternate" hreflang="x-default" href={`https://carrillodynamics.com/en/articles/${id}`} />
                
                {/* Dynamic OG image for sharing specific articles */}
                <meta property="og:title" content={`${article.title} | Carrillo Dynamics`} />
                <meta property="og:description" content={article.description} />
                <meta property="og:image" content="/bull_PNGs/bull.512x512.webp" />
                <meta name="twitter:title" content={`${article.title} | Carrillo Dynamics`} />
                <meta name="twitter:description" content={article.description} />
            </Helmet>
            
            <Navbar />
            
            <div className="flex flex-col lg:flex-row min-h-screen bg-background pt-20">
                <ArticleSidebar />
                
                <main className="flex-1 lg:ml-80 overflow-x-hidden relative">
                    {/* BACKGROUND SCHEMATIC OVERLAY */}
                    <div className="absolute inset-x-0 top-0 h-screen opacity-[0.03] pointer-events-none overflow-hidden grayscale">
                        <ForensicBlueprint />
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
                                    to={`/${lang}/articles`}
                                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#10b981] hover:text-foreground transition-colors"
                                >
                                    <ArrowLeft className="h-3 w-3" />
                                    {t.articleLabels.backToArchive}
                                </Link>

                                <div className="space-y-4">
                                    <div className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/30 font-mono">
                                        CD-OPS // INTERNAL WHITEPAPER_{id?.toUpperCase()}
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
                                        <span>METRIC: {article.readTime} LXP</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="h-3 w-3 text-[#10b981]" />
                                        <span>VERIFIED ARCHITECTURE</span>
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
                                        prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
                                        prose-h1:hidden 
                                        prose-h3:text-2xl prose-h3:md:text-3xl prose-h3:font-black prose-h3:tracking-tighter prose-h3:text-foreground prose-h3:border-b prose-h3:border-border prose-h3:pb-4 prose-h3:mt-16
                                        prose-p:text-lg prose-p:md:text-xl prose-p:leading-[1.6] prose-p:text-muted-foreground prose-p:font-medium prose-p:mb-8
                                        prose-li:text-muted-foreground prose-li:font-medium
                                        space-y-8
                                    ">
                                        <ReactMarkdown
                                            components={{
                                                h3: ({node, ...props}) => <h3 {...props} className="text-foreground whitespace-normal break-words text-balance leading-tight" />,
                                                p: ({node, ...props}) => <p {...props} className="whitespace-normal break-words text-balance leading-relaxed" />,
                                                ul: ({node, ...props}) => <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 bg-muted/5 border-2 border-border p-8 py-12 scanner-border"><ul {...props} className="contents" /></div>,
                                                li: ({node, ...props}) => (
                                                    <div className="flex items-start gap-4">
                                                         <Database className="h-5 w-5 shrink-0 text-[#10b981] mt-1" />
                                                         <span className="text-base md:text-lg font-black text-foreground break-words leading-tight uppercase tracking-tight">{props.children}</span>
                                                    </div>
                                                )
                                            }}
                                        >
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
                                            <FileText className="mr-3 h-4 w-4 text-[#10b981]" />
                                            {t.articleLabels.downloadPdf}
                                        </Button>
                                        <Button 
                                            onClick={handleShare}
                                            variant="outline" 
                                            className="w-full justify-start rounded-none h-12 text-[10px] font-black uppercase tracking-widest border-border hover:bg-muted/5 transition-all"
                                        >
                                            <Share2 className="mr-3 h-4 w-4 text-[#10b981]" />
                                            {t.articleLabels.shareEntry}
                                        </Button>
                                    </div>
                                </aside>
                            </div>

                            {/* FOOTER CTA SECTION */}
                            <section className="bg-foreground text-background p-8 md:p-16 mt-24 space-y-12 transition-colors relative overflow-hidden flex flex-col items-start scanner-border print:hidden">
                                <div className="space-y-6 relative z-10 w-full">

                                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none max-w-xl">
                                        {lang === 'en' ? 'Plug Your Operational Leaks.' : 'Tape sus Fugas Operativas.'}
                                    </h2>
                                    <p className="font-bold max-w-2xl text-lg md:text-xl opacity-60">
                                        {lang === 'en' 
                                            ? 'Stop relying on human systems for deterministic problems. Book a strategy session to map your architecture.'
                                            : 'Deje de confiar en sistemas humanos para problemas deterministas. Reserve una sesión para mapear su arquitectura.'}
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-6 relative z-10 w-full md:w-auto pt-8">
                                    <Button 
                                        onClick={() => window.open('https://calendly.com/nico-carrillodynamics/30min', '_blank')}
                                        className="h-20 px-12 bg-[#10b981] text-black font-black uppercase tracking-[0.2em] rounded-none hover:bg-white transition-all flex items-center group"
                                    >
                                        {lang === 'en' ? 'BOOK STRATEGY SESSION' : 'SESIÓN DE ESTRATEGIA'}
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
