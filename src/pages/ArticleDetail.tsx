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
import { Rule60Diagram } from "../components/diagrams/Rule60Diagram";
import { ScalingDiagram } from "../components/diagrams/ScalingDiagram";
import { IntakeDiagram } from "../components/diagrams/IntakeDiagram";
import { LatencyTaxDiagram } from "../components/diagrams/LatencyTaxDiagram";
import { SwivelChairDiagram } from "../components/diagrams/SwivelChairDiagram";
import { FounderBlueprintDiagram } from "../components/diagrams/FounderBlueprintDiagram";

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
                    <Link to="/resources" className="text-[#10b981] font-mono uppercase tracking-widest hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft className="h-4 w-4" /> Return to Archives
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen selection:bg-[#10b981]/10 font-sans relative overflow-hidden">
            {/* Engineering Graph Paper Background */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.25] z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                }}
            />
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
                                    to="/resources"
                                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#10b981] hover:text-foreground transition-colors"
                                >
                                    <ArrowLeft className="h-3 w-3" />
                                    {t.articleLabels.backToArchive}
                                </Link>

                                <div className="space-y-4">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1] text-foreground text-balance break-words">
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
                                        
                                        {/* DYNAMIC DIAGRAM INJECTION (MODULAR) */}
                                        {article.id === '60-second-lead-rule' && <Rule60Diagram />}
                                        {article.id === 'scaling-without-hiring' && <ScalingDiagram />}
                                        {article.id === 'diagnostic-intake-automation' && <IntakeDiagram />}
                                        {article.id === 'human-latency-tax' && <LatencyTaxDiagram />}
                                        {article.id === 'swivel-chair-integration' && <SwivelChairDiagram />}
                                        {article.id === 'why-i-built-carrillo-dynamics' && <FounderBlueprintDiagram />}

                                        <ReactMarkdown
                                            components={{
                                                p: ({node, ...props}) => <p className="text-lg md:text-xl leading-[2.2] text-zinc-300 mb-12" {...props} />,
                                                h3: ({node, ...props}) => <h3 className="text-3xl md:text-4xl font-black text-foreground mt-20 mb-8 uppercase tracking-tight" {...props} />,
                                                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-12 space-y-4" {...props} />,
                                                li: ({node, ...props}) => <li className="text-lg text-zinc-300" {...props} />,
                                                h1: ({node, ...props}) => <h1 className="hidden" {...props} />,
                                                h2: ({node, ...props}) => <h2 className="text-4xl font-black text-foreground mt-24 mb-10" {...props} />
                                            }}
                                        >
                                            {article.content}
                                        </ReactMarkdown>
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
                            <section className="bg-zinc-950 border border-border/50 shadow-[0_0_50px_rgba(16,185,129,0.05)] rounded-3xl p-8 md:p-16 mt-24 space-y-12 transition-colors relative overflow-hidden flex flex-col items-start print:hidden">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#10b981]/10 rounded-full blur-[100px] pointer-events-none" />
                                <div className="space-y-6 relative z-10 w-full">

                                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none max-w-xl text-foreground">
                                        {lang === 'en' ? 'Engineered Precision. Industrial Grit.' : 'Precisión de Ingeniería. Tesón Industrial.'}
                                    </h2>
                                    <p className="font-bold max-w-2xl text-lg md:text-xl text-zinc-400">
                                        {lang === 'en' 
                                             ? 'Request your free diagnostic to identify and plug operational leaks.'
                                             : 'Solicite su diagnóstico gratuito para identificar y tapar fugas operativas.'}
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-6 relative z-10 w-full md:w-auto pt-8">
                                    <Button 
                                        onClick={() => navigate('/#intake')}
                                        className="h-20 px-12 bg-[#10b981] text-black font-black uppercase tracking-[0.2em] rounded-none hover:bg-white transition-all flex items-center group"
                                    >
                                        {lang === 'en' ? 'Get Started' : 'Comenzar'}
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
