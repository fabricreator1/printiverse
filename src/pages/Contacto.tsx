import SEO from "@/components/SEO";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contacto = () => {
  const [loading, setLoading] = useState(false);

  // Estados para cada campo
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Control de si el formulario es válido (todos los campos llenos)
  const [isFormValid, setIsFormValid] = useState(false);

  const [searchParams] = useSearchParams();
  const asuntoParam = (searchParams.get("asunto") || "").toLowerCase();
  const allowedAsuntos = ["cotizacion", "soporte", "consulta"];
  const defaultAsunto = allowedAsuntos.includes(asuntoParam) ? asuntoParam : "";

  // Sincronizamos asunto si viene por parámetro (solo una vez)
  useEffect(() => {
    if (defaultAsunto) setAsunto(defaultAsunto);
  }, [defaultAsunto]);

  // Validamos en tiempo real si todos los campos están llenos para habilitar botón
  useEffect(() => {
    const valid =
      nombre.trim() !== "" &&
      correo.trim() !== "" &&
      asunto.trim() !== "" &&
      mensaje.trim() !== "";
    setIsFormValid(valid);
  }, [nombre, correo, asunto, mensaje]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Extra validación en submit (por si acaso)
    if (!isFormValid) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }

    const webhook = "https://hooks.zapier.com/hooks/catch/24159306/u6dka8g/";

    setLoading(true);
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          nombre,
          correo,
          asunto,
          mensaje,
          page: "contacto",
          timestamp: new Date().toISOString(),
        }),
      });

      toast.success(
        "Solicitud enviada a Zapier. Revisa el historial de tu Zap para confirmar."
      );
      // Reset campos
      setNombre("");
      setCorreo("");
      setAsunto("");
      setMensaje("");
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
          <label className="text-sm" htmlFor="nombre">
            Nombre
          </label>
          <Input
            id="nombre"
            name="nombre"
            required
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="correo">
            Correo
          </label>
          <Input
            id="correo"
            name="correo"
            required
            type="email"
            placeholder="tu@correo.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm" htmlFor="asunto">
            Asunto
          </label>
          <select
            id="asunto"
            name="asunto"
            required
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            className="mt-1 block w-full rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option value="" disabled>
              Selecciona un asunto
            </option>
            <option value="cotizacion">Cotización</option>
            <option value="soporte">Soporte</option>
            <option value="consulta">Consulta general</option>
          </select>
        </div>
        <div>
          <label className="text-sm" htmlFor="mensaje">
            Mensaje
          </label>
          <Textarea
            id="mensaje"
            name="mensaje"
            required
            placeholder="Cuéntanos sobre tu proyecto"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>

        {/* Input oculto con el webhook para Zapier */}
        <input
          type="hidden"
          name="webhook"
          value="https://hooks.zapier.com/hooks/catch/24159306/u6dka8g/"
        />

        <Button type="submit" variant="hero" disabled={!isFormValid || loading}>
          {loading ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </div>
  );
};

export default Contacto;
