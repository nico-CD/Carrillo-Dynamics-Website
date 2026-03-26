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

  const { isLoading, submitIntake } = useIntake();
  const [formStep, setFormStep] = useState<'step1' | 'step2' | 'generating' | 'success'>('step1');

  const form = useForm<IntakeValues>({
    resolver: zodResolver(intakeSchema),
    defaultValues: {
      firstName: "", lastName: "", email: "", companyName: "", website: "",
      role: "", companySize: "", annualRevenue: "", projectBudget: "",
      howCanWeHelp: "", automationGoal: "", anythingElse: "",
    },
  });

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = async (data: IntakeValues) => {
    if (formStep === 'step1') {
      const success = await submitIntake(data, 1);
      if (success) {
        setFormStep('step2');
        setTimeout(() => {
          const y = successContainerRef.current ? successContainerRef.current.getBoundingClientRect().top + window.scrollY - 40 : 0;
          if (y > 0) {
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 50);
      }
    } else if (formStep === 'step2') {
      const success = await submitIntake(data, 2);
      if (success) {
        setFormStep('generating');
        form.reset();
        
        // Scroll to success container to show the generating animation
        setTimeout(() => {
          const y = successContainerRef.current ? successContainerRef.current.getBoundingClientRect().top + window.scrollY - 40 : 0;
          if (y > 0) {
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 50);

        // Simulate blueprint generation for prestige feel
        setTimeout(() => {
          setFormStep('success');
        }, 2500);
      }
    }
  };

  const resetForm = () => {
    form.reset();
    setFormStep('step1');
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

          <div ref={successContainerRef} className="bg-zinc-900 border border-zinc-700 p-8 md:p-16 relative overflow-hidden min-h-[600px] flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white opacity-20" />

            <AnimatePresence mode="wait">
              {formStep === 'step1' || formStep === 'step2' ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                      {formStep === 'step1' && (
                        <>
                          <div className="space-y-10">
                        <div className="flex items-center gap-6">
                          <span className="tech-mono text-[10px] font-black uppercase tracking-[0.3em] text-white/40 border border-zinc-700 px-4 py-1">Part 01</span>
                          <h3 className="tech-mono text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">General Information</h3>
                          <div className="flex-1 h-px bg-zinc-800" />
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                          <FormField control={form.control} name="firstName" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">First Name</FormLabel>
                              <FormControl><Input placeholder="John" className="h-16 rounded-none border-zinc-700 bg-black px-6 text-zinc-100 focus:border-white focus:ring-1 focus:ring-white transition-all font-medium placeholder:text-zinc-500" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="lastName" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">Last Name</FormLabel>
                              <FormControl><Input placeholder="Doe" className="h-16 rounded-none border-zinc-700 bg-black px-6 text-zinc-100 focus:border-white focus:ring-1 focus:ring-white transition-all font-medium placeholder:text-zinc-500" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                          <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">Corporate Email</FormLabel>
                              <FormControl><Input type="email" placeholder="john@company.com" className="h-16 rounded-none border-zinc-700 bg-black px-6 text-zinc-100 focus:border-white focus:ring-1 focus:ring-white transition-all font-medium placeholder:text-zinc-500" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="companyName" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">Company Name</FormLabel>
                              <FormControl><Input placeholder="Acme Inc." className="h-16 rounded-none border-zinc-700 bg-black px-6 text-zinc-100 focus:border-white focus:ring-1 focus:ring-white transition-all font-medium placeholder:text-zinc-500" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>
                        <FormField control={form.control} name="howCanWeHelp" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">Current Friction Points</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Describe your structural operational challenges..." className="min-h-[160px] rounded-none border-zinc-700 bg-black p-6 text-zinc-100 focus:border-white focus:ring-1 focus:ring-white transition-all font-medium placeholder:text-zinc-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                        </>
                      )}

                      {formStep === 'step2' && (
                        <>
                      {/* Section 2: Company Profile */}
                      <div className="space-y-10">
                        <div className="flex items-center gap-6">
                          <span className="tech-mono text-[10px] font-black uppercase tracking-[0.3em] text-white/40 border border-zinc-700 px-4 py-1">Part 02</span>
                          <h3 className="tech-mono text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Company Information</h3>
                          <div className="flex-1 h-px bg-zinc-800" />
                        </div>

                        <FormField control={form.control} name="website" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">Company Website</FormLabel>
                            <FormControl><Input placeholder="https://" className="h-16 rounded-none border-zinc-700 bg-black px-6 text-zinc-100 focus:border-white focus:ring-1 focus:ring-white transition-all font-medium placeholder:text-zinc-500" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <div className="grid gap-8 md:grid-cols-2">
                          <FormField control={form.control} name="role" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">Operational Role</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-16 rounded-none border-zinc-700 bg-black px-6 text-zinc-100 font-medium focus:border-white focus:ring-1 focus:ring-white transition-all">
                                    <SelectValue placeholder="Select role" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-zinc-900 border-zinc-700 rounded-none">
                                  {["Owner", "Executive", "Manager", "Operations", "Technical", "Sales", "Marketing", "Finance", "Other"].map((r) => (
                                    <SelectItem key={r} value={r.toLowerCase()} className="hover:bg-zinc-800 cursor-pointer focus:bg-zinc-800 font-bold uppercase text-[10px] tracking-widest">{r}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="companySize" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">Company Scale</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-16 rounded-none border-zinc-700 bg-black px-6 text-zinc-100 font-medium focus:border-white focus:ring-1 focus:ring-white transition-all">
                                    <SelectValue placeholder="Select size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-zinc-900 border-zinc-700 rounded-none">
                                  {["1-10", "11-50", "51-200", "201-500", "500+"].map((s) => (
                                    <SelectItem key={s} value={s} className="hover:bg-zinc-800 cursor-pointer focus:bg-zinc-800 font-bold uppercase text-[10px] tracking-widest">{s} employees</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>
                      </div>

                      {/* Section 3: Project Goals */}
                      <div className="space-y-10">
                        <div className="flex items-center gap-6">
                          <span className="tech-mono text-[10px] font-black uppercase tracking-[0.3em] text-white/40 border border-zinc-700 px-4 py-1">Part 03</span>
                          <h3 className="tech-mono text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Systems Strategy</h3>
                          <div className="flex-1 h-px bg-zinc-800" />
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                          <FormField control={form.control} name="annualRevenue" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">Annual Revenue</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-16 rounded-none border-zinc-700 bg-black px-6 text-zinc-100 font-medium focus:border-white focus:ring-1 focus:ring-white transition-all">
                                    <SelectValue placeholder="Select revenue" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-zinc-900 border-zinc-700 rounded-none">
                                  {["Under $500K", "$500K - $1M", "$1M - $5M", "$5M - $10M", "$10M+"].map((r) => (
                                    <SelectItem key={r} value={r} className="hover:bg-zinc-800 cursor-pointer focus:bg-zinc-800 font-bold uppercase text-[10px] tracking-widest">{r}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="projectBudget" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">Implementation Budget</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-16 rounded-none border-zinc-700 bg-black px-6 text-zinc-100 font-medium focus:border-white focus:ring-1 focus:ring-white transition-all">
                                    <SelectValue placeholder="Select budget" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-zinc-900 border-zinc-700 rounded-none">
                                  {["Less than $10K", "$10K - $50K", "$50K - $100K", "More than $100K"].map((b) => (
                                    <SelectItem key={b} value={b} className="hover:bg-zinc-800 cursor-pointer focus:bg-zinc-800 font-bold uppercase text-[10px] tracking-widest">{b}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>

                        <FormField control={form.control} name="automationGoal" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">Most Important Objective</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-16 rounded-none border-zinc-700 bg-black px-6 text-zinc-100 font-medium focus:border-white focus:ring-1 focus:ring-white transition-all">
                                  <SelectValue placeholder="Select target area" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-zinc-900 border-zinc-700 rounded-none">
                                {[
                                  "Lead generation or sales",
                                  "Customer support",
                                  "Internal operations",
                                  "Data processing or reporting",
                                  "Content or marketing workflows",
                                  "Not sure yet",
                                ].map((g) => (
                                  <SelectItem key={g} value={g.toLowerCase()} className="hover:bg-zinc-800 cursor-pointer focus:bg-zinc-800 font-bold uppercase text-[10px] tracking-widest">{g}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="anythingElse" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase font-black tracking-widest text-white mb-4 block tech-mono">Additional Notes (Optional)</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Additional context..." className="min-h-[120px] rounded-none border-zinc-700 bg-black p-6 text-zinc-100 focus:border-white focus:ring-1 focus:ring-white transition-all font-medium placeholder:text-zinc-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      </>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isLoading}
                        className="w-full h-20 md:h-24 rounded-none bg-white hover:bg-zinc-200 text-black text-xl font-black uppercase tracking-[0.3em] transition-all px-4 disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-4">
                            <Loader2 className="h-8 w-8 animate-spin" />
                            <span className="tech-mono">Processing_</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-4">
                            <span>Submit</span>
                            <ArrowRight className="h-7 w-7 transition-transform group-hover:translate-x-2" />
                          </div>
                        )}
                      </Button>
                      
                      {formStep === 'step2' && (
                        <div className="flex justify-center mt-6">
                            <button 
                              type="button" 
                              onClick={() => {
                                setFormStep('generating');
                                // Scroll to success container to show the generating animation
                                setTimeout(() => {
                                  const y = successContainerRef.current ? successContainerRef.current.getBoundingClientRect().top + window.scrollY - 40 : 0;
                                  if (y > 0) {
                                    window.scrollTo({ top: y, behavior: "smooth" });
                                  }
                                }, 50);

                                // Simulate blueprint generation
                                setTimeout(() => {
                                  setFormStep('success');
                                }, 2500);
                              }} 
                              className="text-muted-foreground hover:text-white font-bold tracking-widest uppercase transition-colors text-sm"
                            >
                              Skip & Finish
                            </button>
                        </div>
                      )}
                    </form>
                  </Form>
                </motion.div>
              ) : formStep === 'generating' ? (
                <motion.div
                  key="generating"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center space-y-12 w-full py-20"
                >
                  <div className="relative h-24 w-24">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-zinc-800 border-t-white"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black uppercase tracking-tighter">Blueprint <span className="italic">Synthesis.</span></h3>
                    <p className="tech-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest animate-pulse">Analyzing structural bottlenecks...</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col items-center justify-center text-center space-y-10 w-full py-20"
                >
                  <div className="h-20 w-20 bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4">
                    <Check className="h-10 w-10 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white leading-none">
                      Intake <span className="italic text-zinc-500">Confirmed.</span>
                    </h3>
                    <p className="text-lg text-zinc-400 font-medium max-w-lg mx-auto leading-relaxed">
                      Your profile has been routed to our operations engineering team. We will review your context and reach out within 24 hours to schedule your consultation.
                    </p>
                  </div>
                  <button
                    onClick={resetForm}
                    className="mt-8 h-12 border border-zinc-700 hover:border-white text-zinc-500 hover:text-white font-bold tracking-[0.2em] uppercase px-10 transition-all tech-mono text-[10px]"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
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
