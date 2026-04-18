import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Language, i18nData, I18nContent } from '@/data/i18n';

interface LanguageContextType {
    lang: Language;
    t: I18nContent;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [lang, setLangState] = useState<Language>(() => {
        const saved = localStorage.getItem('user-lang');
        if (saved === 'en' || saved === 'es') return saved as Language;
        
        // Browser detection as fallback
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'es') return 'es';
        
        return 'en';
    });

    useEffect(() => {
        // Handle URL sanitization only (trailing slashes)
        // No more redirecting to /en or /es
        if (location.pathname.length > 1 && location.pathname.endsWith('/')) {
            const cleanPath = location.pathname.slice(0, -1);
            navigate(`${cleanPath}${location.search}`, { replace: true });
        }
    }, [location.pathname, location.search, navigate]);

    const setLanguage = (newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem('user-lang', newLang);
        // Language changes are now internal-only, no URL change needed
    };

    const value = {
        lang,
        t: i18nData[lang],
        setLanguage
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useTranslation must be used within LanguageProvider');
    return context;
};
