import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/productos", label: "Productos" },
  { to: "/servicios", label: "Servicios" },
  { to: "/contacto", label: "Contacto" },
  { to: "/sobre", label: "Sobre nosotros" },
  { to: "/legales", label: "Legales" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          Printiverse
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) =>
              `text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground'} story-link`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm">
            <Link to="/contacto?asunto=cotizacion">Cotiza ahora</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
