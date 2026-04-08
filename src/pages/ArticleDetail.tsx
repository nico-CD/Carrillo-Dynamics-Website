import { useParams, Link } from "react-router-dom";
import { useTranslation } from "../components/LanguageProvider";
import { ArrowLeft, Clock, Calendar, ExternalLink } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import ArticleSidebar from "../components/ArticleSidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const ArticleDetail = () => {
    const { id } = useParams();
    const { t, lang } = useTranslation();
    
    const article = t.articles.find(a => a.id === id);
    
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8 bg-background">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-black uppercase tracking-tighter">Publication Not Found</h1>
                    <Link to={`/${lang}/articles`} className="text-[#10b981] font-mono uppercase tracking-widest hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft className="h-4 w-4" /> Return to Archives
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen font-sans selection:bg-[#10b981]/10">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#10b981] origin-left z-[100]"
                style={{ scaleX }}
            />
            <Helmet>
                <title>{article.title} | Carrillo Dynamics</title>
                <meta name="description" content={article.description} />
            </Helmet>
            
            <Navbar />
            
            <div className="flex flex-col lg:flex-row min-h-screen bg-background pt-20">
                <ArticleSidebar />
                
                <main className="flex-1 lg:ml-80 overflow-x-hidden">
                    <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-24 pt-12 md:pt-24 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-12"
                        >
                            <Link 
                                to={`/${lang}/articles`}
                                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-[#10b981] transition-colors"
                            >
                                <ArrowLeft className="h-3 w-3" />
                                {lang === 'en' ? 'Back to Publications' : 'Volver a Publicaciones'}
                            </Link>

                            <header className="space-y-8">
                                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-foreground text-balance break-words">
                                    {article.title}
                                </h1>
                                
                                <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground pt-4 border-t border-border">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-3 w-3 text-[#10b981]" />
                                        {article.date}
                                    </div>
                                    <div className="flex items-center gap-2 text-[#10b981]">
                                        <Clock className="h-3 w-3" />
                                        {article.readTime} {lang === 'en' ? 'READ' : 'LECTURA'}
                                    </div>
                                </div>
                            </header>

                            <article className="
                                prose prose-zinc dark:prose-invert 
                                max-w-none 
                                prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
                                prose-h1:hidden 
                                prose-h3:text-lg prose-h3:md:text-xl prose-h3:font-bold prose-h3:tracking-tight prose-h3:text-[#10b981] prose-h3:break-words
                                prose-p:text-base prose-p:md:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground prose-p:whitespace-normal prose-p:break-words
                                prose-li:text-muted-foreground
                                space-y-8
                            ">
                                {article.content.split('\n\n').map((paragraph, pIdx) => {
                                    if (paragraph.startsWith('### ')) {
                                        return (
                                            <h3 key={pIdx} className="pt-8 text-foreground whitespace-normal break-words leading-tight">
                                                {paragraph.replace('### ', '').replace(/\n/g, ' ')}
                                            </h3>
                                        );
                                    }
                                    if (paragraph.startsWith('* ')) {
                                        const items = paragraph.split('\n').filter(item => item.startsWith('* '));
                                        return (
                                            <ul key={pIdx} className="space-y-4 my-8 list-none p-0 m-0">
                                                {items.map((item, iIdx) => (
                                                    <li key={iIdx} className="flex items-start gap-4 text-muted-foreground whitespace-normal break-words">
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#10b981]" />
                                                        <span className="text-base md:text-lg">{item.replace('* ', '')}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        );
                                    }
                                    if (paragraph.includes('[LOOM_VIDEO_PLACEHOLDER]')) {
                                        return (
                                            <div key={pIdx} className="aspect-video w-full bg-muted border-2 border-border my-12 relative overflow-hidden group shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                                                <iframe 
                                                    src="https://www.loom.com/embed/5ef9b8b5c07140da933cefcc317b6544?hide_owner=true&hide_share=true&hide_title=true&hide_status_bar=true"
                                                    allowFullScreen
                                                    className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                                                />
                                            </div>
                                        );
                                    }
                                    return <p key={pIdx} className="whitespace-normal break-words leading-relaxed">{paragraph.replace(/\n/g, ' ')}</p>;
                                })}
                            </article>

                            <section className="bg-muted/10 border-2 border-border p-6 md:p-16 mt-24 space-y-12 transition-colors relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <ExternalLink className="h-32 w-32" />
                                </div>
                                
                                <div className="space-y-6 relative z-10">
                                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-none">
                                        {lang === 'en' ? 'Stop the leak.' : 'Detén la fuga.'} <span className="italic text-[#10b981]">{lang === 'en' ? 'Start the engine.' : 'Arranca el motor.'}</span>
                                    </h2>
                                    <p className="text-muted-foreground font-medium max-w-2xl text-lg whitespace-normal break-words">
                                        {lang === 'en' 
                                            ? 'Every high-volume firm has operational friction. Our Forensic Lead Audit identifies exactly where your ROI is draining. Get your custom blueprint today.'
                                            : 'Toda empresa de alto volumen tiene fricción operativa. Nuestra Auditoría Forense identifica dónde se drena su ROI. Obtenga su blueprint hoy.'}
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                    <Link 
                                        to={`/${lang}#intake`}
                                        className="h-14 px-10 bg-[#10b981] text-black font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all group"
                                    >
                                        {lang === 'en' ? 'Get Free Blueprint' : 'Obtener Blueprint Gratis'}
                                        <ArrowLeft className="h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                                    </Link>
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
