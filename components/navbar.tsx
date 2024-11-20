"use client";

import { motion } from "framer-motion";
import { Code2, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useScrollTo } from "@/hooks/useScrollTo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center"
            >
              <Code2 className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold text-gradient">OBLECH</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="#about" onClick={(e) => handleNavClick(e, "about")}>
              About
            </NavLink>
            <span className="text-white select-none h-6 inline-flex items-center">/</span>
            <NavLink href="#work" onClick={(e) => handleNavClick(e, "work")}>
              Work
            </NavLink>
            <span className="text-white select-none h-6 inline-flex items-center">/</span>
            <NavLink href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b">
            <MobileNavLink
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
            >
              About
            </MobileNavLink>
            <MobileNavLink
              href="#work"
              onClick={(e) => handleNavClick(e, "work")}
            >
              Work
            </MobileNavLink>
            <MobileNavLink
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
            </MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-white hover:text-primary transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-base font-medium text-white hover:text-primary transition-colors duration-200"
    >
      {children}
    </Link>
  );
}