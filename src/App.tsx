import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import SobreNosotros from "./pages/SobreNosotros";
import Legales from "./pages/Legales";
import Layout from "./components/layout/Layout";
import WhatsAppButton from "./components/WhatsAppButton";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/sobre" element={<SobreNosotros />} />
            <Route path="/legales" element={<Legales />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <WhatsAppButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
