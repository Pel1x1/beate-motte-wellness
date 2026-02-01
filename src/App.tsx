import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Apparatus from "./pages/Apparatus";
import Technique from "./pages/Technique";
import Indications from "./pages/Indications";
import Privacy from "./pages/Privacy";

import Oils from "./pages/Oils";
import Pricing from "./components/ui/Pricing1";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/apparatus" element={<Apparatus />} />
            <Route path="/technique" element={<Technique />} />
            <Route path="/indications" element={<Indications />} />
            <Route path="/oils" element={<Oils />} />
             {/* <Route path="/contact" element={<Contact />} />*/}
            <Route path="/privacy" element={<Privacy />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
