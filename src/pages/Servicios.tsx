import SEO from "@/components/SEO";
import { CheckCircle2, Timer, Wrench } from "lucide-react";

const Servicios = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <SEO
        title="Servicios de impresión 3D — Printiverse.cl"
        description="Impresión 3D FDM, asesoría en diseño, postprocesado y producción en pequeñas series."
        canonical="https://printiverse.cl/servicios"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Impresión 3D",
          provider: { "@type": "Organization", name: "Printiverse.cl" }
        }}
      />
      <h1 className="font-display text-3xl md:text-4xl font-bold">Servicios</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold flex items-center gap-2"><CheckCircle2 className="text-primary" /> Impresión 3D FDM</h3>
          <p className="mt-2 text-sm text-muted-foreground">Materiales PLA, PETG, ABS, TPU; diferentes densidades y resoluciones.</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold flex items-center gap-2"><Wrench className="text-primary" /> Asesoría de diseño</h3>
          <p className="mt-2 text-sm text-muted-foreground">Optimización para impresión, tolerancias y elección de materiales.</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold flex items-center gap-2"><Timer className="text-primary" /> Entrega rápida</h3>
          <p className="mt-2 text-sm text-muted-foreground">Plazos ajustados y seguimiento de tu pedido.</p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
