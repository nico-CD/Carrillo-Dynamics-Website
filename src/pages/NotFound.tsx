import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import SEOManager from "../components/SEOManager";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-[#10b981]/10 font-sans flex flex-col">
      <SEOManager title="404 - Page Not Found" description="The page you are looking for does not exist." />
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-6 relative z-10 pt-32 pb-24">
        {/* Subtle Background Glow */}
        <div 
            className="fixed inset-0 pointer-events-none z-[-1]" 
            style={{ 
                backgroundImage: "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.05) 0%, transparent 60%)" 
            }} 
        />
        
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-[#ef4444]">
              404
            </h1>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
              Route <span className="italic text-muted-foreground">Not Found.</span>
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-lg mx-auto">
            The endpoint or resource you requested doesn't exist in our current architecture. 
          </p>

          <div className="pt-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 group bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all border border-border/50"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return to Core
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
