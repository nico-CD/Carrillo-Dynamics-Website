import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/sections/HowItWorks";
import ValueProps from "@/components/sections/ValueProps";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/Footer";
import SEOManager from "@/components/SEOManager";
import VideoGate from "@/components/sections/VideoGate";
import { useLocation } from "react-router-dom";

const Index = () => {
    const location = useLocation();

    // Funnel Logic: Hash Check for redirect continuity
    useEffect(() => {
        if (location.hash === '#engineering-breakdown' || location.hash === '#intake') {
            const timer = setTimeout(() => scrollToForm(), 500);
            return () => clearTimeout(timer);
        }
    }, [location.hash]);

    const scrollToForm = () => {
        const el = document.getElementById('engineering-breakdown');
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
                <Hero onContactClick={scrollToForm} />
            </section>

            {/* SEGMENT 2: HOW IT WORKS & VALUE PROPS */}
            <HowItWorks />
            <ValueProps />

            {/* SEGMENT 3: VIDEO GATE (Replaced old Intake) */}
            <VideoGate />

            <Footer />
        </div>
    );
};

export default Index;
