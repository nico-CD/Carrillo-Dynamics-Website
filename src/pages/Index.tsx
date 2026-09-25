import React, { useEffect, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/Footer";
import SEOManager from "@/components/SEOManager";
import { useLocation } from "react-router-dom";

// Lazy load below-the-fold components
const HowItWorks = React.lazy(() => import("@/components/sections/HowItWorks"));
const VideoGate = React.lazy(() => import("@/components/sections/VideoGate"));

const Index = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#engines' || location.hash === '#engineering-breakdown') {
            const timer = setTimeout(() => scrollToEngines(), 500);
            return () => clearTimeout(timer);
        }
    }, [location.hash]);

    const scrollToEngines = () => {
        const el = document.getElementById('engines');
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-[#10b981]/10 font-sans overflow-x-hidden transition-colors duration-300">
            <SEOManager />
            <Navbar />

            {/* SEGMENT 1: HERO */}
            <section className="border-b border-foreground/5">
                <Hero onContactClick={scrollToEngines} />
            </section>

            {/* SEGMENT 2 & 3: BELOW THE FOLD */}
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
                <HowItWorks />
                <VideoGate />
            </Suspense>

            <Footer />
        </div>
    );
};

export default Index;
