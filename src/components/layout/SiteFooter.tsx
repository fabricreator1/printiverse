import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-10 grid gap-6 md:grid-cols-2">
        <div>
          <p className="font-display text-lg font-semibold">Printiverse</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Impresión 3D profesional en Chile. Calidad, precisión y tiempos de entrega competitivos.
          </p>
        </div>
        <nav className="flex md:justify-end gap-6 text-sm">
          <Link className="story-link" to="/sobre">Sobre nosotros</Link>
          <Link className="story-link" to="/contacto">Contacto</Link>
          <Link className="story-link" to="/legales">Legales</Link>
        </nav>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Printiverse.cl — Todos los derechos reservados
      </div>
    </footer>
  );
};

export default SiteFooter;
