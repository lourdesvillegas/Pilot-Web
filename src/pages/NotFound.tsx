import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold text-primary-700 mb-4">404</h1>
      <p className="text-gray-600 mb-8">Page not found.</p>
      <Link to="/" className="text-primary-600 underline">
        Go Home
      </Link>
    </section>
  );
};

export default NotFound;