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

const Start = () => {
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
            {/* Clean Header - No distracting navigation, just the logo */}
            <header className="w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md z-50 sticky top-0 h-20 flex items-center px-6">
                <div className="max-w-7xl mx-auto flex w-full items-center justify-center">
                    <div className="flex items-center gap-2">
                        <img src="/bull_PNGs/vect.bull.svg" alt="Carrillo Dynamics Logo" className="h-10 w-10" />
                        <span className="font-black text-xl tracking-tighter">
                            CARRILLO <span className="text-[#10b981]">DYNAMICS</span>
                        </span>
                    </div>
                </div>
            </header>

            {/* VIDEO SECTION */}
            <section className="px-6 py-20 bg-background relative z-10 transition-colors duration-300">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-12 text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
                            {lang === 'en' ? (
                                <>The <span className="text-[#10b981]">Engineering</span> Breakdown</>
                            ) : (
                                <>El Análisis de <span className="text-[#10b981]">Ingeniería</span></>
                            )}
                        </h1>
                        <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
                            {lang === 'en' 
                                ? "Watch the overview below to see exactly how we automate dispatch and eliminate manual data entry. Once finished, complete the diagnostic form."
                                : "Mire el resumen a continuación para ver exactamente cómo automatizamos el despacho y eliminamos la entrada manual de datos. Una vez que termine, complete el formulario de diagnóstico."}
                        </p>
                    </div>
                    
                    <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-[0_20px_50px_-15px_rgba(16,185,129,0.15)] border border-border">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0&modestbranding=1" 
                            title="Engineering Breakdown" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* THE INTAKE FORM SECTION */}
            <section id="intake" className="px-6 py-20 md:py-32 bg-background relative z-10 transition-colors duration-300 overflow-hidden">
                <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.25]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTSAyMCAwIEwgMCAwIDAgMjAnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzEwYjk4MScgc3Ryb2tlLXdpZHRoPScwLjUnIHN0cm9rZS1vcGFjaXR5PScwLjgnLz48L3N2Zz4=")`
                    }}
                />
                
                <motion.div
                    ref={formRef}
                    className="mx-auto max-w-4xl scroll-mt-24 relative z-10"
                    {...revealProps}
                >
                    <div className="mb-20 text-center space-y-8">
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none text-foreground transition-colors duration-300 mx-auto">
                            {t.intake.title}
                            {lang === 'en' ? (
                                <>
                                    <span className="italic text-[#10b981]">{t.intake.titleItalic}</span>
                                    <span className="text-[#10b981]">{t.intake.titleAccent}</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-[#10b981]">{t.intake.titleAccent}</span>
                                    <span className="italic text-[#10b981]">{t.intake.titleItalic}</span>
                                </>
                            )}
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed transition-colors duration-300 mx-auto">
                            {lang === 'en' 
                                ? "Help us prepare for your upcoming strategy session. Fill out the technical diagnostic below so we can map out your exact operational bottlenecks before we jump on the call."
                                : "Ayúdenos a prepararnos para su sesión estratégica. Complete el diagnóstico técnico a continuación para mapear sus cuellos de botella."}
                        </p>
                    </div>

                    <div className="bg-zinc-950/50 backdrop-blur-xl border-2 border-border/50 p-8 md:p-16 relative overflow-hidden flex flex-col justify-center transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(16,185,129,0.15)] rounded-3xl">
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
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default Start;
