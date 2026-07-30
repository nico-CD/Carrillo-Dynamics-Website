import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";

const SocialProof = () => {
    const { lang } = useTranslation();

    const testimonials = [
        {
            name: "John D.",
            role: lang === 'en' ? "HVAC Business Owner" : "Propietario de HVAC",
            content: lang === 'en' 
                ? "Since Carrillo Dynamics revamped our site, our lead volume has doubled. We no longer lose jobs to competitors because of a slow website." 
                : "Desde que Carrillo Dynamics renovó nuestro sitio, nuestro volumen de clientes potenciales se ha duplicado.",
            rating: 5
        },
        {
            name: "Sarah M.",
            role: lang === 'en' ? "Plumbing Contractor" : "Contratista de Plomería",
            content: lang === 'en'
                ? "The automated lead follow-up system they built for us saves my dispatchers 10 hours a week. Incredible ROI."
                : "El sistema automatizado de seguimiento nos ahorra 10 horas a la semana. Retorno de inversión increíble.",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-background border-b border-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">
                        {lang === 'en' ? "Trusted By Local Businesses" : "De Confianza para Empresas Locales"}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
                        {/* Placeholder logos */}
                        <div className="text-2xl font-black italic">PRO HVAC</div>
                        <div className="text-2xl font-black italic">ELITE PLUMBING</div>
                        <div className="text-2xl font-black italic">MIDWEST ROOFING</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-20">
                    {testimonials.map((testimonial, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 border border-border bg-muted/5 flex flex-col space-y-4"
                        >
                            <div className="flex gap-1">
                                {[...Array(testimonial.rating)].map((_, idx) => (
                                    <Star key={idx} className="w-5 h-5 fill-[#10b981] text-[#10b981]" />
                                ))}
                            </div>
                            <p className="text-lg italic font-medium">"{testimonial.content}"</p>
                            <div className="mt-auto pt-4 border-t border-border/50">
                                <p className="font-bold uppercase">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground uppercase tracking-widest">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
