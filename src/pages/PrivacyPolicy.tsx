import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/components/LanguageProvider";
import SEOManager from "@/components/SEOManager";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 font-sans flex flex-col transition-colors duration-300">
      <SEOManager
        title={t.privacyPolicy.title}
        description={t.privacyPolicy.titleMain + " " + t.privacyPolicy.titleAccent}
      />
      <Navbar />

      <main className="flex-1 px-6 py-40 mx-auto max-w-4xl w-full">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight mb-12 text-foreground">
          {t.privacyPolicy.titleMain}{" "}
          <span className="text-[#10b981] italic">{t.privacyPolicy.titleAccent}</span>
        </h1>

        <div className="space-y-16 text-muted-foreground font-medium leading-relaxed">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-60">
            {t.privacyPolicy.lastUpdated}
          </p>

          {t.privacyPolicy.sections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-2xl font-black uppercase text-foreground tracking-tight">
                {section.title}
              </h2>
              <p className="text-lg md:text-xl">{section.content}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
