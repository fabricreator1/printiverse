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
          <p className="mt-2 text-sm text-muted-foreground">Cada pedido es único, por eso los tiempos de entrega y los costos dependen del material, el tamaño y la complejidad de la pieza.
Antes de enviarte tu impresión, la revisamos con cuidado para asegurarnos de que llegue en las mejores condiciones.
Si necesitas hacer cambios en el diseño después de aprobado, podrían aplicarse costos adicionales.</p>
        </article>
        <article>
          <h2 className="text-xl font-semibold">Política de privacidad</h2>
          <p className="mt-2 text-sm text-muted-foreground">Tu confianza es muy importante para nosotros. Usamos tu información solo para contactarte, gestionar tus pedidos y enviarte tus cotizaciones.
Nunca compartiremos tus datos con terceros sin tu autorización, salvo en los casos necesarios para realizar la entrega o cumplir con la ley.</p>
        </article>
        <article>
          <h2 className="text-xl font-semibold">Garantía</h2>
          <p className="mt-2 text-sm text-muted-foreground">Queremos que quedes feliz con tu pedido. Si alguna pieza tiene un defecto de fabricación, nos haremos cargo: ya sea con una reposición o con otra solución que te deje conforme.
Eso sí, la garantía no cubre daños por mal uso, golpes o desgaste normal del material.</p>
        </article>
         <article>
          <h2 className="text-xl font-semibold">Devoluciones y reembolsos</h2>
          <p className="mt-2 text-sm text-muted-foreground">Al ser productos personalizados, no es posible ofrecer devoluciones ni reembolsos por cambios de opinión o errores en el diseño enviado por el cliente.
Sin embargo, si el producto llega con un defecto de fabricación o un error atribuible a nuestro proceso, buscaremos la mejor forma de solucionarlo contigo, ya sea con la reposición de la pieza o con una alternativa equivalente.</p>
        </article>
      </section>
    </div>
  );
};

export default Legales;
