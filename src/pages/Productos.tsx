import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Package, Layers } from "lucide-react";

const items = [
  { icon: Box, title: "Piezas funcionales", desc: "Resistentes y dimensionadas para uso real." },
  { icon: Package, title: "Carcasas y prototipos", desc: "Presentaciones y pruebas de ajuste." },
  { icon: Layers, title: "Accesorios personalizados", desc: "A medida para tu proyecto." },
];

const Productos = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <SEO
        title="Productos de impresión 3D — Printiverse.cl"
        description="Explora categorías de productos impresos en 3D: piezas funcionales, prototipos, carcasas y más."
        canonical="https://printiverse.cl/productos"
      />
      <h1 className="font-display text-3xl md:text-4xl font-bold">Productos</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">Estos son ejemplos de lo que podemos fabricar. Cada pieza se cotiza según material, tamaño y complejidad.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="hover:shadow-brand transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3"><Icon className="text-primary" /> {title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Productos;
