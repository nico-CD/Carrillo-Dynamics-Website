import { useTranslation } from "./LanguageProvider";

const StructuredData = () => {
    const { lang } = useTranslation();

    const descriptionEn =
        "Carrillo Dynamics builds websites and automation engines for local service businesses in the Chicago area and beyond. Get more jobs, automate busywork, cut headaches. Book a 15-minute strategy call. English and Spanish.";
    const descriptionEs =
        "Carrillo Dynamics construye sitios web y motores de automatización para negocios de servicios locales en el área de Chicago y más allá. Consiga más trabajos, automatice el trabajo manual, reduzca dolores de cabeza. Reserve una llamada de 15 minutos. Inglés y español.";

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Carrillo Dynamics LLC",
        "url": "https://carrillodynamics.com",
        "alternateName": ["Carrillo Dynamics", "CD Engine Demos"],
        "description": lang === "en" ? descriptionEn : descriptionEs,
        "inLanguage": ["en", "es"],
        "publisher": {
            "@type": "Organization",
            "name": "Carrillo Dynamics LLC",
            "url": "https://carrillodynamics.com",
            "logo": "https://carrillodynamics.com/bull_PNGs/vect.bull.png",
            "email": "engineering@carrillodynamics.com",
        },
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Carrillo Dynamics LLC",
        "url": "https://carrillodynamics.com",
        "logo": "https://carrillodynamics.com/bull_PNGs/vect.bull.png",
        "image": "https://carrillodynamics.com/bull_PNGs/vect.bull.png",
        "email": "engineering@carrillodynamics.com",
        "description": lang === "en" ? descriptionEn : descriptionEs,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "addressCountry": "US",
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.8781,
            "longitude": -87.6298,
        },
        "areaServed": [
            { "@type": "City", "name": "Chicago" },
            { "@type": "State", "name": "Illinois" },
            { "@type": "Country", "name": "United States" },
        ],
        "knowsAbout": [
            "Service business automation",
            "Trade operations systems",
            "Lead intake and dispatch",
            "Bilingual English Spanish business systems",
            "HVAC plumbing electrical workflow automation",
        ],
        "brand": {
            "@type": "Brand",
            "name": "Carrillo Dynamics",
            "slogan": lang === "en" ? "Less chaos. More capacity." : "Menos caos. Más capacidad.",
        },
        "sameAs": [
            "https://demo.carrillodynamics.com",
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "engineering@carrillodynamics.com",
            "availableLanguage": ["English", "Spanish"],
            "url": "https://carrillodynamics.com/book",
        },
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What does Carrillo Dynamics do?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Carrillo Dynamics builds websites and automation engines for local service businesses so shops get more jobs, automate busywork, and cut headaches. Book a 15-minute strategy call to map an engine for your trade.",
                },
            },
            {
                "@type": "Question",
                "name": "Who is Carrillo Dynamics for?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Owners of local service businesses: HVAC, plumbing, electrical, roofing, towing, landscaping, waste removal, and similar trades that swing tools or drive trucks.",
                },
            },
            {
                "@type": "Question",
                "name": "Do you work in English and Spanish?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Sites, flows, and conversations can run in English, Spanish, or both.",
                },
            },
            {
                "@type": "Question",
                "name": "How do I get started?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Book a 15-minute strategy call at https://carrillodynamics.com/book. You can also preview live trade demos at https://demo.carrillodynamics.com.",
                },
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </>
    );
};

export default StructuredData;
