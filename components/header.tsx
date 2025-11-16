"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`relative z-20 px-6 py-6 md:px-12 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/80 backdrop-blur-md border-b border-brand-gold/10"
          : ""
      }`}
    >
      <nav className="flex items-center justify-between">
        <Link href="/" className="transform transition-all duration-700">
          <div
            className={`${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            } transition-all duration-700`}
          >
            <div className="font-bold text-lg tracking-widest text-brand-text hover:text-brand-gold transition-colors duration-300">
              ALAWLAMA<span className="text-brand-gold">.</span>
            </div>
            <p className="text-xs text-brand-text/60 uppercase tracking-widest-[0.1em]">
              Store
            </p>
          </div>
        </Link>

        <div className="hidden md:flex gap-8">
          {["HOME", "PRODUCTS", "ABOUT", "CONTACT"].map((item, i) => (
            <Link
              key={item}
              // href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              href={item === "HOME" ? "/" : `/`}
              className="text-xs uppercase tracking-wider text-brand-text/80 hover:text-brand-gold transition-colors duration-300 relative group"
              style={{
                animation: isVisible
                  ? `slideInTop 0.6s ease-out ${0.1 + i * 0.1}s both`
                  : "none",
              }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-brand-gold to-transparent group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        <button className="md:hidden text-brand-text hover:text-brand-gold transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
