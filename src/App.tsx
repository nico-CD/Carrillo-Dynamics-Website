import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { LanguageProvider } from "./components/LanguageProvider";
import StructuredData from "./components/StructuredData";
import ScrollToTop from "./components/ScrollToTop";
import ExitIntentModal from "./components/ExitIntentModal";

import Index from "./pages/Index";
const Success = React.lazy(() => import("./pages/Success"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));
const FAQPage = React.lazy(() => import("./pages/FAQ"));
const Unsubscribed = React.lazy(() => import("./pages/Unsubscribed"));
const ArticlesPage = React.lazy(() => import("./pages/Articles"));
const ArticleDetail = React.lazy(() => import("./pages/ArticleDetail"));
const ApexResponseCenter = React.lazy(() => import("./pages/ApexResponseCenter"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="carrillo-dynamics-theme">
        <TooltipProvider>
          <BrowserRouter>
            <ScrollToTop />
            <LanguageProvider>
              <StructuredData />
              <ExitIntentModal />
              <Suspense fallback={
                <div className="min-h-screen bg-black flex items-center justify-center">
                  <div className="h-1 w-32 bg-zinc-900 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-[#10b981] animate-[infinite-scroll_2s_linear_infinite]" />
                  </div>
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
                  <Route path="/:lang/apex-response-center" element={<ApexResponseCenter />} />
                  
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

