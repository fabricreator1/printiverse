import SEO from "@/components/SEO";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contacto = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("¡Gracias! Te contactaremos pronto.");
    }, 800);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <SEO
        title="Contacto — Printiverse.cl"
        description="¿Listo para imprimir tu idea? Envíanos tu mensaje y te cotizamos a la brevedad."
        canonical="https://printiverse.cl/contacto"
      />
      <h1 className="font-display text-3xl md:text-4xl font-bold">Contacto</h1>
      <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-4">
        <div>
          <label className="text-sm">Nombre</label>
          <Input required placeholder="Tu nombre" />
        </div>
        <div>
          <label className="text-sm">Correo</label>
          <Input required type="email" placeholder="tu@correo.com" />
        </div>
        <div>
          <label className="text-sm">Mensaje</label>
          <Textarea required placeholder="Cuéntanos sobre tu proyecto" />
        </div>
        <Button type="submit" variant="hero" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </div>
  );
};

export default Contacto;
