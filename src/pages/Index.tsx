import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Navbar from "@/components/Navbar";
import InteractiveCalculator from "@/components/InteractiveCalculator";
import { useNavigate, useLocation } from "react-router-dom";
import Hero from "@/components/sections/Hero";
import BlueprintProtocol from "@/components/sections/BlueprintProtocol";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
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
    { en: "Dispatching & Scheduling", es: "Despacho y Programación" },
    { en: "Lead Follow-up & Conversion", es: "Seguimiento y Conversión" },
    { en: "Paperwork & Compliance", es: "Papeleo y Cumplimiento" },
    { en: "Legacy System Integration", es: "Integración de Sistemas Legacy" },
    { en: "Other", es: "Otro" }
];

const Index = () => {
    const { lang, t } = useTranslation();
    const formRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoading, submitIntake } = useIntake();

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

    // Funnel Logic: Hash Check for redirect continuity
    useEffect(() => {
        if (location.hash === '#intake') {
            const timer = setTimeout(() => scrollToForm(), 500);
            return () => clearTimeout(timer);
        }
    }, [location.hash]);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const onSubmit = async (data: IntakeValues) => {
        const success = await submitIntake(data);
        if (success) {
            localStorage.removeItem('carrillo_dynamics_intake');
            navigate(`/success`);
            window.scrollTo(0, 0);
        }
    };

    const revealProps = {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }
    };

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-[#10b981]/10 font-sans overflow-x-hidden transition-colors duration-300">
            <SEOManager />
            <Navbar />

            {/* SEGMENT 1: HERO */}
            <section className="border-b border-border">
                <Hero onContactClick={scrollToForm} />
            </section>

            {/* SEGMENT 2: THE PROOF (CALCULATOR) */}
            <section id="calculator" className="border-b border-border bg-background transition-colors duration-300">
                <motion.div 
                    className="reading-section py-32"
                    {...revealProps}
                >
                    <div className="mb-20 text-left">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-8 leading-none text-foreground lg:max-w-3xl transition-colors duration-300">
                            {t.calculator.title}
                            <span className="italic text-[#10b981]">{t.calculator.titleItalic}</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed transition-colors duration-300">
                            {t.calculator.subtitle}
                        </p>
                    </div>
                    <ErrorBoundary name="ROI Calculator">
                        <InteractiveCalculator />
                    </ErrorBoundary>
                </motion.div>
            </section>

            {/* Bridge CTA */}
            <section className="bg-background py-24 px-6 border-b border-border transition-colors duration-300">
                <motion.div 
                    {...revealProps}
                    className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
                >
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-foreground transition-colors duration-300">
                            {lang === 'en' ? 'Stop the leak.' : 'Detén la fuga.'}
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-[#10b981] uppercase tracking-widest">
                            {lang === 'en' ? 'Start the engine.' : 'Arranca el motor.'}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                        <Button
                            onClick={() => document.getElementById('intake')?.scrollIntoView({ behavior: 'smooth' })}
                            size="lg"
                            className="h-20 w-full sm:w-fit rounded-none px-12 text-xs md:text-lg font-black uppercase tracking-[0.2em] bg-[#10b981] hover:bg-[#0ea672] text-black shadow-[0_0_50px_rgba(16,185,129,0.2)] transition-all border-none"
                        >
                            {lang === 'en' ? 'GET FREE BLUEPRINT' : 'OBTENER BLUEPRINT GRATIS'}
                            <ArrowRight className="ml-4 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-2" />
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* SEGMENT 3: THE BLUEPRINT OVERLAY */}
            <ErrorBoundary name="Blueprint Protocol">
                <BlueprintProtocol />
            </ErrorBoundary>

            {/* SEGMENT 4: THE INTAKE FORM */}
            <section id="intake" className="px-6 py-48 bg-background relative z-10 transition-colors duration-300">
                <motion.div 
                    ref={formRef} 
                    className="mx-auto max-w-4xl scroll-mt-24"
                    {...revealProps}
                >
                    <div className="mb-20 text-center space-y-8">
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none text-foreground transition-colors duration-300 mx-auto">
                            {t.intake.title}
                            <span className="italic text-[#10b981]">{t.intake.titleItalic}</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed transition-colors duration-300 mx-auto">
                            {t.intake.subtitle}
                        </p>
                    </div>

                    <div className="bg-muted/10 border-2 border-border p-8 md:p-16 relative overflow-hidden flex flex-col justify-center transition-colors duration-300 shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-foreground opacity-5" />

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
                                        className="w-full h-20 md:h-24 rounded-none bg-[#10b981] hover:bg-[#0ea672] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] text-black text-xl font-black uppercase tracking-[0.3em] transition-all px-4 disabled:opacity-50 disabled:cursor-not-allowed group border-none"
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
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default Index;
