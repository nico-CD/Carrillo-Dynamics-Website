import { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { InlineWidget } from "react-calendly";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOManager from "@/components/SEOManager";

// Logic & Types
import { intakeSchema, IntakeValues } from "@/types/intake";
import { useIntake } from "@/hooks/useIntake";
import { useTranslation } from "@/components/LanguageProvider";

const INDUSTRIES = [
    { en: "HVAC / Plumbing / Electrical", es: "HVAC / Plomería / Electricidad" },
    { en: "Restoration / Contracting", es: "Restauración / Contratación" },
    { en: "Property Management / Real Estate", es: "Gestión de Propiedades / Inmuebles" },
    { en: "Logistics / Fleet", es: "Logística / Flota" },
    { en: "Healthcare / Clinics", es: "Salud / Clínicas" },
    { en: "Other", es: "Otros" }
];

const BOTTLENECKS = [
    { en: "Missed Calls & Lost Leads", es: "Llamadas Perdidas y Leads Perdidos" },
    { en: "Too Much Paperwork", es: "Demasiado Papeleo" },
    { en: "Scheduling Nightmares", es: "Pesadillas de Programación" },
    { en: "Slow Follow-ups", es: "Seguimiento Lento" },
    { en: "Other", es: "Otro" }
];

const Diagnostic = () => {
    const { lang, t } = useTranslation();
    const formRef = useRef<HTMLDivElement>(null);
    const { isLoading, submitIntake } = useIntake();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<IntakeValues>({
        resolver: zodResolver(intakeSchema),
        defaultValues: {
            firstName: "",
            email: "",
            companyName: "",
            companyWebsite: "",
            industry: undefined,
            bottleneck: undefined,
            consent: false
        },
    });

    // Persistence: Load from LocalStorage
    useEffect(() => {
        const savedData = localStorage.getItem('carrillo_dynamics_intake');
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                form.reset(parsed);
            } catch (e) {
                console.error("Failed to parse saved intake data", e);
            }
        }
    }, [form]);

    // Persistence: Save to LocalStorage on change
    const formValues = form.watch();
    useEffect(() => {
        localStorage.setItem('carrillo_dynamics_intake', JSON.stringify(formValues));
    }, [formValues]);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const onSubmit = async (data: IntakeValues) => {
        const success = await submitIntake(data);
        if (success) {
            localStorage.removeItem('carrillo_dynamics_intake');
            setIsSubmitted(true);
            scrollToForm();
        }
    };

    const revealProps = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }
    };

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-[#10b981]/10 font-sans overflow-x-hidden transition-colors duration-300">
            <SEOManager isNoindex={true} />
            <Navbar />

            {/* THE INTAKE FORM SECTION */}
            <section id="intake" className="px-6 py-20 md:py-32 bg-background relative z-10 transition-colors duration-300 overflow-hidden">
                <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.4] bg-repeat"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`
                    }}
                />
                


                <motion.div
                    ref={formRef}
                    className="w-full max-w-full px-4 mx-auto md:max-w-4xl scroll-mt-24 relative z-10"
                    {...revealProps}
                >
                    <div className="mb-16 text-center space-y-6">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none text-foreground transition-colors duration-300 mx-auto">
                            {t.intake.title}
                            {lang === 'en' ? (
                                <>
                                    <span className="italic text-[#10b981]"> {t.intake.titleItalic}</span>
                                    <span className="text-[#10b981]"> {t.intake.titleAccent}</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-[#10b981]"> {t.intake.titleAccent}</span>
                                    <span className="italic text-[#10b981]"> {t.intake.titleItalic}</span>
                                </>
                            )}
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed transition-colors duration-300 mx-auto">
                            {lang === 'en' 
                                ? "Help us prepare for your upcoming strategy session. Fill out the technical diagnostic below so we can map out your exact operational bottlenecks before we jump on the call."
                                : "Ayúdenos a prepararnos para su sesión estratégica. Complete el diagnóstico técnico a continuación para mapear sus cuellos de botella."}
                        </p>
                    </div>

                    <div className="w-full max-w-full bg-zinc-950/50 backdrop-blur-xl border-2 border-border/50 p-4 sm:p-8 md:p-16 relative overflow-hidden flex flex-col justify-center transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(16,185,129,0.15)] rounded-2xl md:rounded-3xl">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#10b981]/50 to-transparent opacity-30" />

                        {isSubmitted ? (
                            <div className="w-full min-h-[700px] flex flex-col items-center justify-center animate-in fade-in duration-1000 text-center pt-8">
                                <h3 className="text-2xl md:text-3xl font-black uppercase mb-2 text-[#10b981] tracking-widest">
                                    {lang === 'en' ? 'Specs Received.' : 'Especificaciones Recibidas.'}
                                </h3>
                                <p className="text-muted-foreground font-medium mb-8 max-w-md">
                                    {lang === 'en' 
                                        ? "We have your operational data. If you haven't booked your time yet, you can pick a slot below." 
                                        : 'Tenemos sus datos. Si aún no ha reservado su tiempo, puede elegir un horario a continuación.'}
                                </p>
                                <div className="w-full">
                                    <InlineWidget 
                                        url={`https://calendly.com/nico-carrillodynamics/15-minute-strategy-session?hide_event_type_details=1&hide_gdpr_banner=1&locale=${lang === 'en' ? 'en' : 'es'}`}
                                        styles={{
                                            height: '700px',
                                            minWidth: '320px'
                                        }}
                                        pageSettings={{
                                            backgroundColor: '09090b',
                                            hideEventTypeDetails: true,
                                            hideLandingPageDetails: true,
                                            primaryColor: '10b981',
                                            textColor: 'ffffff'
                                        }}
                                    />
                                </div>
                            </div>
                        ) : (
                        <div className="w-full">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                                    <div className="space-y-10">
                                        <div className="grid gap-8 md:grid-cols-2">
                                            <FormField control={form.control} name="firstName" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm uppercase font-black tracking-widest text-foreground mb-4 block transition-colors duration-300">
                                                        {t.intake.fullName}
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            id="lead_name"
                                                            name="lead_name"
                                                            required
                                                            placeholder={lang === 'en' ? "John Doe" : "Juan Martinez"}
                                                            className="h-16 rounded-none border-2 border-border bg-background px-6 text-foreground focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all font-medium placeholder:text-muted-foreground/30"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="email" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm uppercase font-black tracking-widest text-foreground mb-4 block transition-colors duration-300">
                                                        {t.intake.email}
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            id="email"
                                                            name="email"
                                                            required
                                                            type="email"
                                                            placeholder="john@company.com"
                                                            className="h-16 rounded-none border-2 border-border bg-background px-6 text-foreground focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all font-medium placeholder:text-muted-foreground/30"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>

                                        <div className="grid gap-8 md:grid-cols-2">
                                            <FormField control={form.control} name="companyName" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm uppercase font-black tracking-widest text-foreground mb-4 block transition-colors duration-300">
                                                        {t.intake.companyName}
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            id="company_name"
                                                            name="company_name"
                                                            required
                                                            placeholder="ACME Corp"
                                                            className="h-16 rounded-none border-2 border-border bg-background px-6 text-foreground focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all font-medium placeholder:text-muted-foreground/30"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="companyWebsite" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm uppercase font-black tracking-widest text-foreground mb-4 block transition-colors duration-300">
                                                        {t.intake.companyWebsite}
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            id="company_website"
                                                            name="company_website"
                                                            required
                                                            placeholder="https://company.com"
                                                            className="h-16 rounded-none border-2 border-border bg-background px-6 text-foreground focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all font-medium placeholder:text-muted-foreground/30"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>

                                        <div className="grid gap-8 md:grid-cols-2">
                                            <FormField control={form.control} name="industry" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm uppercase font-black tracking-widest text-foreground mb-4 block transition-colors duration-300">
                                                        {t.intake.industry}
                                                    </FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger
                                                                id="service_type"
                                                                className="h-16 rounded-none border-2 border-border bg-background px-6 text-foreground focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all font-medium"
                                                            >
                                                                <SelectValue placeholder={t.intake.industryPlaceholder} />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className="rounded-none border-2 border-border bg-background">
                                                            {INDUSTRIES.map((opt) => (
                                                                <SelectItem key={opt.en} value={opt.en} className="focus:bg-[#10b981] focus:text-black rounded-none">
                                                                    {lang === "en" ? opt.en : opt.es}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="bottleneck" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm uppercase font-black tracking-widest text-foreground mb-4 block transition-colors duration-300">
                                                        {t.intake.bottleneck}
                                                    </FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger
                                                                id="bottleneck"
                                                                className="h-16 rounded-none border-2 border-border bg-background px-6 text-foreground focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all font-medium"
                                                            >
                                                                <SelectValue placeholder={t.intake.bottleneckPlaceholder} />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className="rounded-none border-2 border-border bg-background">
                                                            {BOTTLENECKS.map((opt) => (
                                                                <SelectItem key={opt.en} value={opt.en} className="focus:bg-[#10b981] focus:text-black rounded-none">
                                                                    {lang === "en" ? opt.en : opt.es}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>

                                        <FormField control={form.control} name="consent" render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-4 space-y-0 p-4 bg-muted/20 border border-border transition-colors duration-300">
                                                <FormControl>
                                                    <Checkbox
                                                        id="consent"
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                        className="mt-1 border-border data-[state=checked]:bg-[#10b981] data-[state=checked]:border-[#10b981] rounded-none transition-colors"
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel className="text-[10px] uppercase font-black tracking-[0.1em] text-muted-foreground leading-tight transition-colors duration-300">
                                                        {t.intake.consent}
                                                        <span className="block mt-2 opacity-60 font-bold normal-case tracking-normal">
                                                            {t.intake.consentPrivacy}
                                                        </span>
                                                    </FormLabel>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                        )} />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isLoading}
                                        className="w-full h-20 md:h-24 rounded-none bg-[#10b981] hover:bg-[#0ea672] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] text-black text-base md:text-xl font-black uppercase tracking-[0.1em] md:tracking-[0.3em] transition-all px-4 disabled:opacity-50 disabled:cursor-not-allowed group border-none"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center gap-4">
                                                <Loader2 className="h-8 w-8 animate-spin" />
                                                <span>{t.intake.submitting}</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-4">
                                                <span>{t.intake.submit}</span>
                                                <ArrowRight className="h-7 w-7 transition-transform group-hover:translate-x-2" />
                                            </div>
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                        )}
                    </div>
                    
                    <div className="mt-16 mx-auto max-w-4xl relative z-10">
                        <div className="bg-zinc-950/50 backdrop-blur-xl border border-[#10b981]/30 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]">
                            <div className="text-center md:text-left">
                                <h3 className="text-xl md:text-2xl font-black uppercase text-foreground">
                                    {lang === 'en' ? "Want to see it in action?" : "¿Quieres verlo en acción?"}
                                </h3>
                                <p className="text-muted-foreground font-medium mt-2">
                                    {lang === 'en' ? "Test drive the live demo website built for local trades." : "Prueba el sitio web de demostración en vivo diseñado para oficios locales."}
                                </p>
                            </div>
                            <a 
                                href="https://demo.carrillodynamics.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="shrink-0 flex items-center justify-center gap-2 h-14 px-8 bg-[#10b981] hover:bg-[#0ea672] text-black font-black uppercase tracking-widest text-sm transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] rounded-none"
                            >
                                {lang === 'en' ? "Launch Demo" : "Lanza Demo"} <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default Diagnostic;
