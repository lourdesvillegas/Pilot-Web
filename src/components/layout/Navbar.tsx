// src/components/layout/Navbar.tsx
import React, { useState } from "react";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-blue-600" />
            <span className="text-lg font-semibold text-gray-900">
              Pilot
            </span>
          </a>

          {/* Links desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.href}
                label={link.label}
                href={link.href}
              />
            ))}
          </nav>

          {/* Botón hamburguesa (solo móvil) */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden border border-gray-200"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-gray-800"></span>
              <span className="block h-0.5 w-5 bg-gray-800"></span>
              <span className="block h-0.5 w-5 bg-gray-800"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Menú móvil: aparece debajo del header */}
      <MobileMenu open={open} onClose={closeMenu} />
    </header>
  );
};

export default Navbar;
