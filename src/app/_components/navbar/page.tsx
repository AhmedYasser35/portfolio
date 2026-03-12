"use client";
import { useState } from "react";
import ModeToggle from "../mode-toggle/page";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-100 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 h-16 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-black tracking-tighter uppercase text-primary">
          <a href="#"> Ahmed Yasser</a>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 font-mono text-md tracking-widest text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors uppercase"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-primary bg-primary/10 rounded-lg border border-primary/20"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Modern Mobile Menu */}
      <div
        className={`
        md:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden
        ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
      `}
      >
        <div className="p-8 space-y-8 flex flex-col items-center">
          <ul className="w-full space-y-4">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={`transition-all duration-500 delay-[${index * 100}ms] ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl text-lg font-bold hover:bg-primary/10 hover:border-primary/30 transition-all"
                >
                  <span className="text-muted-foreground font-mono text-xs italic">
                    0{index + 1}
                  </span>
                  <span className="uppercase tracking-widest">{link.name}</span>
                  <span className="text-primary opacity-0 group-hover:opacity-100">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-white/5 w-full text-center">
            <p className="font-mono text-[10px] text-primary/50 uppercase tracking-[0.3em]">
              Secure_Access_Point
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
