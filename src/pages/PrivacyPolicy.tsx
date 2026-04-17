import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FastTrackNav from "@/components/FastTrackNav";
import { useState } from "react";
import { useTranslation } from "@/components/LanguageProvider";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  const { lang, t } = useTranslation();
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 font-sans flex flex-col transition-colors duration-300">
      <Helmet htmlAttributes={{ lang: lang }}>
          <title>{lang === 'en' ? 'Privacy Policy | Carrillo Dynamics' : 'Política de Privacidad | Carrillo Dynamics'}</title>
          <meta name="description" content={t.privacyPolicy.titleMain} />
          <link rel="canonical" href={`https://carrillodynamics.com/${lang}/privacy`} />
          <link rel="alternate" hreflang="en" href="https://carrillodynamics.com/en/privacy" />
          <link rel="alternate" hreflang="es" href="https://carrillodynamics.com/es/privacy" />
      </Helmet>
      <Navbar />

      <main className="flex-1 px-6 py-40 mx-auto max-w-4xl w-full">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight mb-12 text-foreground">
          {t.privacyPolicy.titleMain} <span className="text-[#10b981] italic">{t.privacyPolicy.titleAccent}</span>
        </h1>
        
        <div className="space-y-16 text-muted-foreground font-medium leading-relaxed">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{t.privacyPolicy.lastUpdated}</p>
          
          {t.privacyPolicy.sections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-2xl font-black uppercase text-foreground tracking-tight">{section.title}</h2>
              <p className="text-lg md:text-xl">{section.content}</p>
            </div>
          ))}

          <div className="p-8 border-2 border-border bg-muted/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#10b981]" />
            <p className="text-foreground font-bold italic text-lg">
                Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
