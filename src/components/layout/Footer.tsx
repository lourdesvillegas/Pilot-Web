import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white text-center py-4 border-t mt-auto">
      <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Pilot Web. All rights reserved.</p>
    </footer>
  );
};