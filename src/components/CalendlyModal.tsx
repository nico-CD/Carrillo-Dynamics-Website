import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Terminal } from "lucide-react";
import { useTranslation } from "./LanguageProvider";

interface CalendlyModalProps {
  trigger: React.ReactNode;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ trigger }) => {
  const { lang } = useTranslation();
  const calendlyUrl = "https://calendly.com/nico-carrillodynamics/30min?hide_landing_page_details=1&hide_gdpr_banner=1";

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] p-0 bg-background border-border rounded-none gap-0 overflow-hidden outline-none">
        <DialogTitle className="sr-only">
          {lang === 'en' ? 'Book Strategy Session' : 'Programar Sesión de Estrategia'}
        </DialogTitle>
        
        {/* Modal Header */}
        <div className="h-14 border-b border-border flex items-center px-6 justify-between bg-card transition-colors duration-300">
            <div className="flex items-center gap-3">
                <Terminal className="h-4 w-4 text-[#10b981]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground transition-colors duration-300">
                    {lang === 'en' ? 'Strategy_Session_Interface_v1.0' : 'Interfaz_Sesion_Estrategia_v1.0'}
                </span>
            </div>
            <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-border" />
                <div className="h-2 w-2 rounded-full bg-border" />
                <div className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
            </div>
        </div>

        {/* Iframe Content */}
        <div className="flex-1 w-full relative bg-white transition-colors duration-300">
            <iframe
                src={`${calendlyUrl}&locale=${lang}`}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Scheduling"
                className="w-full h-full"
            />
            
            {/* Loading Indicator Overlay (Hidden when iframe loads) */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none bg-background/80 blur-sm opacity-0 transition-opacity peer-loading:opacity-100">
                 <div className="flex flex-col items-center gap-4">
                    <div className="h-1 w-32 bg-border relative overflow-hidden">
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-[#10b981] animate-infinite-scroll" />
                    </div>
                 </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;
