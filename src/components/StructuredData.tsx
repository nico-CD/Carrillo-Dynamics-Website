import { useTranslation } from "./LanguageProvider";

const StructuredData = () => {
    const { lang } = useTranslation();

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Carrillo Dynamics LLC",
        "url": "https://carrillodynamics.com",
        "alternateName": "CD_Ops",
        "description": lang === 'en' 
            ? "Engineered Precision. Industrial Grit. Chicago-based Systems Engineering."
            : "Precisión de Ingeniería. Tesón Industrial. Ingeniería de sistemas con sede en Chicago.",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://carrillodynamics.com/articles?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Carrillo Dynamics LLC",
        "url": "https://carrillodynamics.com",
        "logo": "https://carrillodynamics.com/bull_PNGs/bull.512x512.webp",
        "image": "https://carrillodynamics.com/bull_PNGs/bull-apple-touch-icon.png",
        "description": lang === 'en' 
            ? "Chicago-based Systems Engineering firm serving the Greater Chicago Area and industrial clients nationwide. Specialized in high-stakes automation."
            : "Empresa de ingeniería de sistemas con sede en Chicago que sirve al área metropolitana de Chicago y clientes industriales en todo el país.",
        "priceRange": "$$$",
        "telephone": "+17087227876",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving Greater Chicago Area",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "postalCode": "60601",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.8781,
            "longitude": -87.6298
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Chicago"
            },
            {
                "@type": "State",
                "name": "Illinois"
            }
        ],
        "knowsAbout": [
            "Systems Engineering",
            "Industrial Automation",
            "Operational Efficiency",
            "HVAC Workflow Optimization",
            "Logistics Automation"
        ],
        "brand": {
            "@type": "Brand",
            "name": "Carrillo Dynamics",
            "slogan": lang === 'en' ? "Engineered Precision. Industrial Grit." : "Precisión de Ingeniería. Tesón Industrial."
        },
        // Spanish-specific Core Value injection
        ...(lang === 'es' ? {
            "award": "Core Value: Tesón (Compromiso de ingeniería persistente y de alta resistencia)"
        } : {}),
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".hero-title", ".hero-subtitle"]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is a Carrillo Dynamics Automation Diagnostic?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Automation Diagnostic is a scientific technical audit that identifies operational leaks and engineers deterministic digital systems to replace manual bottlenecks."
                }
            },
            {
                "@type": "Question",
                "name": "How does Carrillo Dynamics optimize HVAC and service workflows?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "By replacing human-dependent dispatching with deterministic routing logic and real-time data sync, allowing firms to scale volume without adding office headcount."
                }
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>
        </>
    );
};

export default StructuredData;
