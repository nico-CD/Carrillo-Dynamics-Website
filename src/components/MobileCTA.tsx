import { useTranslation } from './LanguageProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const MobileCTA = () => {
    const { lang } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    // Do not show on the book page itself
    if (location.pathname === '/book') return null;

    return (
        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-6 pointer-events-none">
            <button
                onClick={() => navigate('/book')}
                className="pointer-events-auto w-full h-14 bg-zinc-950/90 backdrop-blur-xl border border-[#10b981]/30 rounded-full flex items-center justify-center gap-3 text-[#10b981] font-black uppercase tracking-widest text-sm shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] hover:bg-[#10b981] hover:text-black transition-all"
            >
                <Calendar className="w-4 h-4" />
                {lang === 'en' ? 'Book a Call' : 'Agendar Llamada'}
            </button>
        </div>
    );
};

export default MobileCTA;
