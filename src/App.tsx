import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Academic from "./pages/Academic";
import Notices from "./pages/Notices";
import Admission from "./pages/Admission";
import Results from "./pages/Results";
import FormFillup from "./pages/FormFillup";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NoticeDetail from "./pages/NoticeDetail";
import PrincipalDetails from "./pages/PrincipalDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/results" element={<Results />} />
          <Route path="/form-fillup" element={<FormFillup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />
          <Route path="/principal-details" element={<PrincipalDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
