import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import Navbar from "@/components/Navbar";
import InteractiveCalculator from "@/components/InteractiveCalculator";
import FastTrackNav from "@/components/FastTrackNav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Modular Sections
import Hero from "@/components/sections/Hero";
import SectorTrust from "@/components/sections/SectorTrust";
import QualificationBento from "@/components/sections/QualificationBento";
import Process from "@/components/sections/Process";
import SuccessSnapshots from "@/components/sections/SuccessSnapshots";
import FounderStatement from "@/components/sections/FounderStatement";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/Footer";

// Logic & Types
import { intakeSchema, IntakeValues } from "@/types/intake";
import { useIntake } from "@/hooks/useIntake";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const successContainerRef = useRef<HTMLDivElement>(null);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  const navigate = useNavigate();
  const { isLoading, submitIntake } = useIntake();

  const form = useForm<IntakeValues>({
    resolver: zodResolver(intakeSchema),
    defaultValues: {
      firstName: "", email: "", howCanWeHelp: "",
    },
  });

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = async (data: IntakeValues) => {
    localStorage.setItem('intake_data', JSON.stringify(data));
    const success = await submitIntake(data);
    if (success) {
      navigate('/audit');
      window.scrollTo(0, 0);
    }
  };

  const resetForm = () => {
    form.reset();
  };

  const revealProps = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-white/10 font-sans">
      <FastTrackNav onContactClick={scrollToForm} onVisibilityChange={setIsNavbarHidden} />
      {!isNavbarHidden && <Navbar />}

      <div className="border-b border-zinc-700">
        <Hero onContactClick={scrollToForm} />
      </div>

      <div className="border-b border-zinc-700">
        <motion.div {...revealProps} className="reading-section">
            <SectorTrust />
        </motion.div>
      </div>

      <div className="border-b border-zinc-700">
        <motion.div {...revealProps} className="reading-section">
            <Process />
        </motion.div>
      </div>

      <div className="border-b border-zinc-700">
        <motion.section 
            id="calculator" 
            className="reading-section"
            {...revealProps}
        >
            <div className="mb-24">
                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-8 leading-none text-white">
                    Reclaim <span className="italic">Your Time.</span>
                </h2>
                <p className="text-lg text-zinc-400 font-medium max-w-2xl">
                    Our calculated ROI projection for your current operational structures.
                </p>
            </div>
            <InteractiveCalculator />
        </motion.section>
      </div>

      <div className="border-b border-zinc-700">
        <motion.div {...revealProps} className="reading-section">
            <SuccessSnapshots />
        </motion.div>
      </div>

      <div className="border-b border-zinc-700">
        <motion.div {...revealProps} className="reading-section">
            <FounderStatement />
        </motion.div>
      </div>


      {/* INTAKE FORM SECTION */}
      <section id="consultation" className="px-6 py-48 bg-[#050505]">
        <motion.div 
          ref={formRef} 
          className="mx-auto max-w-4xl scroll-mt-24"
          {...revealProps}
        >
          <div className="mb-24 text-left space-y-8">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white">
              Systems <span className="italic">Intake.</span>
            </h2>
            <p className="tech-mono text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-relaxed">
                Complete the fields below. All information reviewed prior to scheduling.
            </p>
          </div>

          <div ref={successContainerRef} className="bg-zinc-900 border border-zinc-700 p-8 md:p-16 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white opacity-20" />

            <div className="w-full">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                  <div className="space-y-10">
                    <div className="grid gap-8 md:grid-cols-2">
                      <FormField control={form.control} name="firstName" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">Full Name</FormLabel>
                          <FormControl><Input placeholder="John Doe" className="h-16 rounded-none border-zinc-700 bg-black px-6 text-zinc-100 focus:border-white focus:ring-1 focus:ring-white transition-all font-medium placeholder:text-zinc-500" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">Business Email</FormLabel>
                          <FormControl><Input type="email" placeholder="john@company.com" className="h-16 rounded-none border-zinc-700 bg-black px-6 text-zinc-100 focus:border-white focus:ring-1 focus:ring-white transition-all font-medium placeholder:text-zinc-500" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="howCanWeHelp" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">Primary Operational Bottleneck</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe what you think is slowing down your business..." className="min-h-[200px] rounded-none border-zinc-700 bg-black p-6 text-zinc-100 focus:border-white focus:ring-1 focus:ring-white transition-all font-medium placeholder:text-zinc-500" {...field} />
                        </FormControl>
                        <FormMessage />
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
                        <span className="tech-mono">Initializing_</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4">
                        <span>Initiate Audit</span>
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

      <motion.div {...revealProps}>
        <FAQ />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Index;
