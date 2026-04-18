import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from './LanguageProvider';

interface SEOManagerProps {
    title?: string; // This should be the [Page Name] only
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
    
    // Base configuration
    const brandName = 'Carrillo Dynamics';
    const slogan = lang === 'en' 
        ? 'Engineered Precision. Industrial Grit.' 
        : 'Precisión de Ingeniería. Tesón Industrial.';
    
    // Pattern: Carrillo Dynamics | [Page Name] | Engineered Precision. Industrial Grit.
    const fullTitle = title 
        ? `${brandName} | ${title} | ${slogan}`
        : `${brandName} | ${slogan}`;
        
    const siteDescription = lang === 'en' 
        ? 'Chicago-based Systems Engineering for high-stakes industrial environments. Engineered precision for service firms.'
        : 'Ingeniería de sistemas con sede en Chicago para entornos industriales de alto riesgo. Precisión diseñada para empresas de servicios.';
    
    const baseUrl = 'https://carrillodynamics.com';
    
    // Clean current path (remove trailing slashes, ensure it starts with /)
    const currentPath = location.pathname.endsWith('/') && location.pathname !== '/'
        ? location.pathname.slice(0, -1)
        : location.pathname;
        
    const finalCanonical = canonicalPath 
        ? `${baseUrl}${canonicalPath}`
        : `${baseUrl}${currentPath === '/' ? '' : currentPath}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description || siteDescription} />
            {isNoindex && <meta name="robots" content="noindex" />}

            {/* AI Optimization (AEO/GEO) */}
            <meta name="author" content="Carrillo Dynamics LLC" />
            <meta name="geo.region" content="US-IL" />
            <meta name="geo.placename" content="Chicago" />

            {/* Canonical */}
            <link rel="canonical" href={finalCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={finalCanonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || siteDescription} />
            <meta property="og:image" content={`${baseUrl}/bull_PNGs/bull.512x512.webp`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={finalCanonical} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || siteDescription} />
            <meta property="twitter:image" content={`${baseUrl}/bull_PNGs/bull.512x512.webp`} />
            
            {/* Language Attribute */}
            <html lang={lang} />
        </Helmet>
    );
};

export default SEOManager;
