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
import Index from "./pages/Index";
import Success from "./pages/Success";
const NotFound = React.lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));
const FAQPage = React.lazy(() => import("./pages/FAQ"));
const Unsubscribed = React.lazy(() => import("./pages/Unsubscribed"));
const ArticlesPage = React.lazy(() => import("./pages/Articles"));
const ArticleDetail = React.lazy(() => import("./pages/ArticleDetail"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="carrillo-dynamics-theme">
        <TooltipProvider>
          <BrowserRouter>
            <ScrollToTop />
            <LanguageProvider>
              <PageProgressBar />
              <StructuredData />
              <Breadcrumbs />
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
                  {/* LanguageProvider handles root redirect based on browser/local storage */}
                  <Route path="/" element={<Navigate to="/en" replace />} />
                  
                  {/* Bilingual Routes */}
                  <Route path="/:lang" element={<Index />} />
                  <Route path="/:lang/success" element={<Success />} />
                  <Route path="/:lang/privacy" element={<PrivacyPolicy />} />
                  <Route path="/:lang/terms" element={<TermsConditions />} />
                  <Route path="/:lang/faq" element={<FAQPage />} />
                  <Route path="/:lang/unsubscribed" element={<Unsubscribed />} />
                  <Route path="/:lang/articles" element={<ArticlesPage />} />
                  <Route path="/:lang/articles/:id" element={<ArticleDetail />} />

                  
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

