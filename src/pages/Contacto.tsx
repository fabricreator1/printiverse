import SEO from "@/components/SEO";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contacto = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = (data.get("nombre") || "").toString().trim();
    const correo = (data.get("correo") || "").toString().trim();
    const mensaje = (data.get("mensaje") || "").toString().trim();
    const webhook = (data.get("webhook") || "").toString().trim();

    if (!webhook) {
      toast.error("Agrega tu URL de webhook de Zapier para enviar el correo.");
      return;
    }

    setLoading(true);
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          nombre,
          correo,
          mensaje,
          page: "contacto",
          timestamp: new Date().toISOString(),
        }),
      });

      toast.success(
        "Solicitud enviada a Zapier. Revisa el historial de tu Zap para confirmar."
      );
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("No se pudo enviar. Verifica tu webhook y vuelve a intentar.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto px-6 py-12">
      <SEO
        title="Contacto — Printiverse.cl"
        description="¿Listo para imprimir tu idea? Envíanos tu mensaje y te cotizamos a la brevedad."
        canonical="https://printiverse.cl/contacto"
      />
      <h1 className="font-display text-3xl md:text-4xl font-bold">Contacto</h1>
      <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-4" noValidate>
        <div>
          <label className="text-sm" htmlFor="nombre">Nombre</label>
          <Input id="nombre" name="nombre" required placeholder="Tu nombre" />
        </div>
        <div>
          <label className="text-sm" htmlFor="correo">Correo</label>
          <Input id="correo" name="correo" required type="email" placeholder="tu@correo.com" />
        </div>
        <div>
          <label className="text-sm" htmlFor="mensaje">Mensaje</label>
          <Textarea id="mensaje" name="mensaje" required placeholder="Cuéntanos sobre tu proyecto" />
        </div>
        <div className="pt-2">
          <label className="text-sm" htmlFor="webhook">Webhook de Zapier (para envío de email)</label>
          <Input id="webhook" name="webhook" type="url" placeholder="https://hooks.zapier.com/..." />
          <p className="mt-1 text-xs text-muted-foreground">Pega aquí tu URL de webhook de Zapier. El mensaje llegará al email configurado en tu Zap.</p>
        </div>
        <Button type="submit" variant="hero" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </div>
  );
};

export default Contacto;
