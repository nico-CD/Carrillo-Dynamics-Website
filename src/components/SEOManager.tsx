import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from './LanguageProvider';

interface SEOManagerProps {
    title?: string;
    description?: string;
    canonicalPath?: string;
    type?: string;
    isNoindex?: boolean;
}

const SEOManager: React.FC<SEOManagerProps> = ({ 
    title, 
    description, 
    canonicalPath,
    type = 'website',
    isNoindex
}) => {
    const { lang } = useTranslation();
    const location = useLocation();
    
    const brandName = 'Carrillo Dynamics';
    const tagline = lang === 'en' 
        ? 'Less chaos. More capacity.' 
        : 'Menos caos. Más capacidad.';
    
    const fullTitle = title 
        ? `${brandName} | ${title}`
        : `${brandName} | ${tagline}`;
        
    const siteDescription = lang === 'en' 
        ? 'We build the engines that help service businesses scale. Get more jobs. Automate the busywork. Cut the headaches. Chicago-based. English and Spanish.'
        : 'Construimos los motores que ayudan a las empresas de servicios a escalar. Consiga más trabajos. Automatice el trabajo manual. Reduzca los dolores de cabeza. Con sede en Chicago. Inglés y español.';
    
    const baseUrl = 'https://carrillodynamics.com';
    
    const currentPath = location.pathname.endsWith('/') && location.pathname !== '/'
        ? location.pathname.slice(0, -1)
        : location.pathname;
        
    const finalCanonical = canonicalPath 
        ? `${baseUrl}${canonicalPath}`
        : `${baseUrl}${currentPath === '/' ? '' : currentPath}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description || siteDescription} />
            <meta name="robots" content={isNoindex ? 'noindex, nofollow' : 'index, follow'} />

            <meta name="author" content="Carrillo Dynamics LLC" />
            <meta name="geo.region" content="US-IL" />
            <meta name="geo.placename" content="Chicago" />
            <meta name="language" content={lang === 'en' ? 'English' : 'Spanish'} />

            <link rel="canonical" href={finalCanonical} />
            <link rel="alternate" hrefLang="en" href={finalCanonical} />
            <link rel="alternate" hrefLang="es" href={finalCanonical} />
            <link rel="alternate" hrefLang="x-default" href={finalCanonical} />

            <meta property="og:type" content={type} />
            <meta property="og:url" content={finalCanonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || siteDescription} />
            <meta property="og:image" content={`${baseUrl}/bull_PNGs/vect.bull.png`} />
            <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'es_US'} />
            <meta property="og:site_name" content="Carrillo Dynamics" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={finalCanonical} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || siteDescription} />
            <meta name="twitter:image" content={`${baseUrl}/bull_PNGs/vect.bull.png`} />
            
            <html lang={lang} />
        </Helmet>
    );
};

export default SEOManager;
