import SEO from "@/components/SEO";

const Legales = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <SEO
        title="Legales — Printiverse.cl"
        description="Términos y condiciones, política de privacidad y condiciones de servicio."
        canonical="https://printiverse.cl/legales"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Legales",
          url: "https://printiverse.cl/legales"
        }}
      />
      <h1 className="font-display text-3xl md:text-4xl font-bold">Legales</h1>

      <section className="mt-8 space-y-6">
        <article>
          <h2 className="text-xl font-semibold">Términos y condiciones</h2>
          <p className="mt-2 text-sm text-muted-foreground">El tiempo de entrega y los costos dependen del material, tamaño y complejidad. Las piezas se revisan antes del despacho para asegurar su calidad.</p>
        </article>
        <article>
          <h2 className="text-xl font-semibold">Política de privacidad</h2>
          <p className="mt-2 text-sm text-muted-foreground">Respetamos tu privacidad. Usamos tu información solo para gestionar cotizaciones y pedidos.</p>
        </article>
        <article>
          <h2 className="text-xl font-semibold">Garantía</h2>
          <p className="mt-2 text-sm text-muted-foreground">Si una pieza presenta defectos de fabricación, coordinamos reposición o solución equivalente.</p>
        </article>
      </section>
    </div>
  );
};

export default Legales;
