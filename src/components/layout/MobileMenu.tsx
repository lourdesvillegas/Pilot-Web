import React from "react";
import NavLink from "./NavLink";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="md:hidden border-t border-gray-200 bg-white">
      <nav className="flex flex-col px-4 py-3 gap-1">
        {links.map((link) => (
          <NavLink
            key={link.href}
            label={link.label}
            href={link.href}
            onClick={onClose}
          />
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
