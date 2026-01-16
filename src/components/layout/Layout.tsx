// src/components/layout/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopBar />
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pilot Web. Desarollado por Lourdes Villegas.
      </footer>
    </div>
  );
};

export default Layout;
