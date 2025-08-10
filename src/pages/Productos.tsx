import { useEffect, useMemo, useState } from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Package, Layers } from "lucide-react";

const items = [
  { icon: Box, title: "Piezas funcionales", desc: "Resistentes y dimensionadas para uso real." },
  { icon: Package, title: "Carcasas y prototipos", desc: "Presentaciones y pruebas de ajuste." },
  { icon: Layers, title: "Accesorios personalizados", desc: "A medida para tu proyecto." },
];

interface ProductItem {
  id: string;
  name: string;
  slug: string;
  description?: string;
  material?: string;
  price?: number;
  image?: string;
  inStock?: boolean;
}

const Productos = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    let active = true;
    fetch("/data/products.json")
      .then((r) => r.json())
      .then((data: ProductItem[]) => {
        if (active) setProducts(Array.isArray(data) ? data : []);
      })
      .catch(() => setProducts([]));
    return () => {
      active = false;
    };
  }, []);

  const structuredData = useMemo(() => {
    if (!products.length) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: products.map((p, i) => ({
        "@type": "Product",
        name: p.name,
        position: i + 1,
        url: `https://printiverse.cl/productos#${p.slug}`,
        image: p.image || "https://printiverse.cl/placeholder.svg",
        offers: p.price
          ? {
              "@type": "Offer",
              price: p.price,
              priceCurrency: "CLP",
              availability: p.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            }
          : undefined,
      })),
    } as Record<string, any>;
  }, [products]);

  return (
    <div className="container mx-auto px-6 py-12">
      <SEO
        title="Productos de impresión 3D — Printiverse.cl"
        description="Explora categorías de productos impresos en 3D y las impresiones disponibles actualmente."
        canonical="https://printiverse.cl/productos"
        structuredData={structuredData}
      />
      <h1 className="font-display text-3xl md:text-4xl font-bold">Productos</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">
        Estos son ejemplos de lo que podemos fabricar. Cada pieza se cotiza según material, tamaño y complejidad.
      </p>

      {/* Categorías (se mantiene) */}
      <section className="mt-8" aria-labelledby="categorias-heading">
        <h2 id="categorias-heading" className="sr-only">Categorías de productos</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="hover:shadow-brand transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon className="text-primary" /> {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Impresiones disponibles desde JSON */}
      <section className="mt-12" aria-labelledby="impresiones-heading">
        <h2 id="impresiones-heading" className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
          Impresiones 3D disponibles
        </h2>
        <p className="mt-2 text-muted-foreground">Se cargan dinámicamente desde un archivo JSON.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card key={p.id} id={p.slug} className="hover:shadow-brand transition-shadow">
              <CardHeader>
                <CardTitle className="leading-tight">{p.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video overflow-hidden rounded-md border">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={`${p.name} — impresión 3D`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
                {p.description && (
                  <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
                )}
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Material: {p.material || "—"}</span>
                  {typeof p.price === "number" ? (
                    <span className="font-medium text-primary">${new Intl.NumberFormat("es-CL").format(p.price)}</span>
                  ) : (
                    <span className="text-muted-foreground">A cotizar</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}

          {!products.length && (
            <div className="col-span-full text-sm text-muted-foreground">
              No hay impresiones cargadas aún. Agrega o edita <code className="font-mono">public/data/products.json</code>.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Productos;
