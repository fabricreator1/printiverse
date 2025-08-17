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
        En Printiverse creemos que todas las ideas, grandes o pequeñas, merecen hacerse realidad. ✨
Usamos impresión 3D con tecnología FDM de alta calidad y cuidamos cada detalle en el proceso, para que tus piezas salgan tal como las imaginaste.
Ya sea un prototipo, una pieza personalizada o una pequeña producción, te acompañamos en cada paso para que tu proyecto cobre vida. 🚀
      </p>
    </div>
  );
};

export default SobreNosotros;
