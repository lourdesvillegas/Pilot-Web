// src/components/layout/NavLink.tsx
import React from "react";

type NavLinkProps = {
  label: string;
  href: string;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ label, href, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors"
    >
      {label}
    </a>
  );
};

export default NavLink;
