import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { LanguageProvider } from "./components/LanguageProvider";
import { motion } from "framer-motion";
import StructuredData from "./components/StructuredData";
import ScrollToTop from "./components/ScrollToTop";
import PageProgressBar from "./components/PageProgressBar";
import Breadcrumbs from "./components/Breadcrumbs";
import SEOManager from "./components/SEOManager";
import Index from "./pages/Index";

const NotFound = React.lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));
const FAQPage = React.lazy(() => import("./pages/FAQ"));
const Unsubscribed = React.lazy(() => import("./pages/Unsubscribed"));
const ArticlesPage = React.lazy(() => import("./pages/Articles"));
const ArticleDetail = React.lazy(() => import("./pages/ArticleDetail"));
const Book = React.lazy(() => import("./pages/Book"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="carrillo-dynamics-theme">
        <TooltipProvider>
          <BrowserRouter>
            <ScrollToTop />
            <LanguageProvider>
              <SEOManager />
              <PageProgressBar />
              <StructuredData />
              <Breadcrumbs />
              {/* Subtle Static Ambient Background Glow */}
              <div 
                className="fixed inset-0 pointer-events-none z-[1]" 
                style={{ 
                  backgroundImage: "radial-gradient(circle at 50% 30%, rgba(16, 185, 129, 0.03) 0%, transparent 60%)" 
                }} 
              />
              <Suspense fallback={
                <div className="min-h-screen bg-black flex items-center justify-center">
                  <motion.img 
                    src="/bull_PNGs/bull.512x512.webp" 
                    alt="Carrillo Dynamics"
                    className="h-24 w-24 object-contain"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/book" element={<Book />} />

                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsConditions />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/unsubscribed" element={<Unsubscribed />} />
                  <Route path="/articles" element={<ArticlesPage />} />
                  <Route path="/articles/:id" element={<ArticleDetail />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <Toaster />
              <Sonner />
            </LanguageProvider>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

