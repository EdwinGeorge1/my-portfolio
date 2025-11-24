// components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install icons: npm install lucide-react

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const NavItem = ({ to, label }) => (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className={`block px-3 py-2 rounded-md text-sm font-medium transition
        ${location.pathname === to 
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"}`}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-white/90 backdrop-blur border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800 tracking-tight">
          Edwin George
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <NavItem to="/" label="Home" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/experience" label="Experience" />
          <NavItem to="/contact" label="Contact" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <NavItem to="/" label="Home" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/experience" label="Experience" />
          <NavItem to="/contact" label="Contact" />
        </div>
      )}
    </header>
  );
}
