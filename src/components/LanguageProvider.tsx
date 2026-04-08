import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Language, i18nData, I18nContent } from '@/data/i18n';

interface LanguageContextType {
    lang: Language;
    t: I18nContent;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { lang: urlLang } = useParams<{ lang: Language }>();
    const navigate = useNavigate();
    const location = useLocation();
    const [lang, setLangState] = useState<Language>(() => {
        const pathParts = location.pathname.split('/');
        const firstSegment = pathParts[1];
        if (firstSegment === 'en' || firstSegment === 'es') return firstSegment as Language;
        
        const saved = localStorage.getItem('user-lang');
        if (saved === 'en' || saved === 'es') return saved as Language;
        return 'en';
    });

    useEffect(() => {
        const pathParts = location.pathname.split('/');
        const firstSegment = pathParts[1];
        
        if (firstSegment === 'en' || firstSegment === 'es') {
            if (lang !== firstSegment) {
                setLangState(firstSegment as Language);
                localStorage.setItem('user-lang', firstSegment);
            }
        } else if (location.pathname === '/' || location.pathname === '' || location.pathname === '/index.html') {
            const saved = localStorage.getItem('user-lang');
            const targetLang = (saved === 'en' || saved === 'es') ? saved : 'en';
            
            // Critical check to avoid infinite redirect loops
            if (location.pathname !== `/${targetLang}`) {
                navigate(`/${targetLang}${location.search}`, { replace: true });
            }
        }
    }, [location.pathname, location.search, navigate, lang]);

    const setLanguage = (newLang: Language) => {
        // Save current scroll position
        const scrollPos = window.scrollY;
        
        localStorage.setItem('user-lang', newLang);
        const pathParts = location.pathname.split('/');
        // If path starts with /lang, replace it
        if (pathParts[1] === 'en' || pathParts[1] === 'es') {
            pathParts[1] = newLang;
        } else {
            // Otherwise prepend it
            pathParts.splice(1, 0, newLang);
        }
        const newPath = pathParts.join('/') || `/${newLang}`;
        
        navigate(newPath + location.search);
        
        // Restore scroll position after a short delay to allow for route change
        setTimeout(() => {
            window.scrollTo(0, scrollPos);
        }, 10);
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
