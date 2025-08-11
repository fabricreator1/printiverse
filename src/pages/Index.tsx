import heroImage from "@/assets/hero-printiverse.jpg";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Layers, BadgeCheck, Rocket, Zap, Package } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Printiverse.cl — Impresión 3D profesional en Chile"
        description="Impresión 3D de alta calidad: prototipado rápido, piezas funcionales, materiales variados y acabados premium. Cotiza tu proyecto hoy."
        canonical="https://printiverse.cl/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Printiverse.cl",
          url: "https://printiverse.cl/",
          sameAs: [],
        }}
      />

      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Impresoras 3D creando piezas de alta precisión" className="h-full w-full object-cover" />
        </div>
        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl animate-enter">
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Llevamos tus ideas al mundo físico
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Servicios de impresión 3D precisos, rápidos y accesibles. Desde prototipos hasta producción en pequeñas series.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg" className="hover-scale">
                <Link to="/contacto" className="inline-flex items-center gap-2">
                  <Zap className="h-5 w-5" aria-hidden="true" />
                  Cotiza tu proyecto
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale">
                <Link to="/productos" className="inline-flex items-center gap-2">
                  <Package className="h-5 w-5" aria-hidden="true" />
                  Ver productos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <section className="grid md:grid-cols-3 gap-6" aria-labelledby="features-title">
          <h2 id="features-title" className="sr-only">Características principales de impresión 3D</h2>
          <article className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-brand transition-shadow">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Layers className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-semibold">Materiales variados</h3>
            </div>
            <p className="mt-4 text-muted-foreground">PLA, PETG, ABS, TPU y más para cada necesidad.</p>
          </article>
          <article className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-brand transition-shadow">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BadgeCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-semibold">Calidad y precisión</h3>
            </div>
            <p className="mt-4 text-muted-foreground">Capas finas, tolerancias cuidadas y acabados prolijos.</p>
          </article>
          <article className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-brand transition-shadow">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Rocket className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-semibold">Entrega rápida</h3>
            </div>
            <p className="mt-4 text-muted-foreground">Cotizaciones ágiles y plazos competitivos.</p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Index;
