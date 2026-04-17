import { useTranslation } from "./LanguageProvider";

const StructuredData = () => {
    const { lang } = useTranslation();

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Carrillo Dynamics",
        "url": "https://carrillodynamics.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://carrillodynamics.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Carrillo Dynamics",
        "url": "https://carrillodynamics.com",
        "image": "https://carrillodynamics.com/bull_PNGs/bull-apple-touch-icon.png",
        "priceRange": "$$$",
        "telephone": "+17087227876",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 41.8781,
                "longitude": -87.6298
            },
            "geoRadius": "100000"
        },
        "description": lang === 'en' 
            ? "High-performance automation agency building deterministic operating systems for high-volume service firms."
            : "Agencia de automatización de alto rendimiento que construye sistemas operativos deterministas para empresas de servicios de alto volumen.",
        "sameAs": [
            "https://www.linkedin.com/company/carrillodynamics",
            "https://github.com/carrillodynamics"
        ]
    };

    // New Breadcrumb Schema for search result trails
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": lang === 'en' ? "Home" : "Inicio",
                "item": `https://carrillodynamics.com/${lang}`
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(professionalServiceSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
        </>
    );
};

export default StructuredData;
