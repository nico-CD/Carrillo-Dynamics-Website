import { motion } from "framer-motion";
import { ClipboardCheck, LineChart, Handshake } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";

const HowItWorks = () => {
    const { lang } = useTranslation();

    const steps = [
        {
            icon: <ClipboardCheck className="w-12 h-12 text-[#10b981]" />,
            title: lang === 'en' ? "1. Reach Out" : "1. Contáctenos",
            description: lang === 'en' 
                ? "Submit your details through our simple form. We'll review your current setup and find the leaks." 
                : "Envíe sus datos a través de nuestro formulario. Revisaremos su configuración y encontraremos las fugas."
        },
        {
            icon: <LineChart className="w-12 h-12 text-[#10b981]" />,
            title: lang === 'en' ? "2. Get a Custom Plan" : "2. Obtenga un Plan",
            description: lang === 'en'
                ? "We provide a straightforward, no-nonsense strategy to get you more leads and automate the boring stuff."
                : "Le proporcionamos una estrategia directa para obtener más clientes y automatizar las tareas repetitivas."
        },
        {
            icon: <Handshake className="w-12 h-12 text-[#10b981]" />,
            title: lang === 'en' ? "3. Grow Your Business" : "3. Haga Crecer su Negocio",
            description: lang === 'en'
                ? "We implement the system. You focus on running your business and serving your new customers."
                : "Implementamos el sistema. Usted se enfoca en administrar su negocio y atender a sus nuevos clientes."
        }
    ];

    return (
        <section className="py-24 bg-muted/10 border-b border-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
                        {lang === 'en' ? "How It Works" : "Cómo Funciona"}
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center space-y-4"
                        >
                            <div className="p-4 bg-background border border-border shadow-sm rounded-full mb-4">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold uppercase">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
