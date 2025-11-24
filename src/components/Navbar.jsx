import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavLink({ to, children }) {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition ${
        active ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
      }`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 tracking-tight">
          Edwin George
        </Link>

        <nav className="flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
