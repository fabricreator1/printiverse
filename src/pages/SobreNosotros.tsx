import SEO from "@/components/SEO";

const SobreNosotros = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <SEO
        title="Sobre nosotros — Printiverse.cl"
        description="Somos especialistas en impresión 3D orientados a calidad, rapidez y servicio al cliente."
        canonical="https://printiverse.cl/sobre"
      />
      <h1 className="font-display text-3xl md:text-4xl font-bold">Sobre nosotros</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        En Printiverse creemos que las buenas ideas merecen materializarse. Trabajamos con tecnología FDM de alto rendimiento y un proceso
        de control de calidad para asegurar resultados consistentes, desde prototipos hasta series cortas.
      </p>
    </div>
  );
};

export default SobreNosotros;
