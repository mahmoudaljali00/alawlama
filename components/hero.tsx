"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative z-10 px-6 py-20 md:px-12 md:py-32 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div
            style={{
              animation: isVisible
                ? "slideInLeft 0.8s ease-out 0.2s both"
                : "none",
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/40 backdrop-blur-sm">
              <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
              <span className="text-xs uppercase tracking-wider text-brand-gold font-medium">
                Premium Quality
              </span>
            </div>
          </div>

          <div
            style={{
              animation: isVisible
                ? "slideInLeft 0.8s ease-out 0.3s both"
                : "none",
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-brand-text leading-tight">
              Welcome to <span className="text-brand-gold">Alawlama</span>
            </h1>
          </div>

          <p
            className="text-lg text-brand-text/80 max-w-md leading-relaxed"
            style={{
              animation: isVisible
                ? "slideInLeft 0.8s ease-out 0.4s both"
                : "none",
            }}
          >
            Discover the intersection of cutting-edge technology, innovative
            commerce solutions, and luxurious perfumery. Experience excellence
            across three distinct sectors, unified by quality and
            sophistication.
          </p>

          <div
            className="flex gap-4 pt-4"
            style={{
              animation: isVisible
                ? "slideInLeft 0.8s ease-out 0.5s both"
                : "none",
            }}
          >
            <button className="px-8 py-3 rounded-full border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 font-semibold uppercase text-sm tracking-wider hover:shadow-lg hover:shadow-brand-gold/50 transform hover:scale-105">
              Explore
            </button>
            <button className="px-8 py-3 rounded-full bg-brand-gold text-brand-navy hover:bg-brand-gold-dark transition-all duration-300 font-semibold uppercase text-sm tracking-wider shadow-lg shadow-brand-gold/30 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Scroll indicator */}
          <div
            className="flex gap-3 pt-8"
            style={{
              animation: isVisible
                ? "slideInLeft 0.8s ease-out 0.6s both"
                : "none",
            }}
          >
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === 0
                    ? "bg-brand-gold scale-125"
                    : "bg-brand-text/20 hover:bg-brand-text/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right side - Featured visual */}
        <div
          className="relative h-96 md:h-full min-h-96"
          style={{
            animation: isVisible
              ? "slideInRight 0.8s ease-out 0.4s both"
              : "none",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 flex items-center justify-center ">
                <img src="/icon.png" alt="" className="animate-logo-float" />
              </div>

              {/* Background glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-80 h-80 rounded-full bg-linear-to-br from-brand-gold/15 to-transparent blur-3xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div
        className="absolute bottom-8 right-8 flex gap-4"
        style={{
          animation: isVisible ? "slideInUp 0.8s ease-out 0.6s both" : "none",
        }}
      >
        {[
          { icon: "f", label: "Facebook" },
          { icon: "in", label: "Instagram" },
          { icon: "t", label: "Twitter" },
        ].map((social) => (
          <a
            key={social.label}
            href="#"
            className="w-10 h-10 rounded-full border border-brand-gold/50 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/50"
          >
            <span className="text-sm font-bold">{social.icon}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
