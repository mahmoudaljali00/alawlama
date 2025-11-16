"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-brand-gold/20 bg-brand-dark/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-brand-text mb-4">
              ALAWLAMA<span className="text-brand-gold">.</span>
            </h3>
            <p className="text-brand-text/60 text-sm">Premium technology, commerce, and perfumery solutions</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-brand-text mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2">
              {["Technology", "Commerce", "Perfumery"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-brand-text/60 hover:text-brand-gold transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-brand-text mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {["About", "Contact", "Support"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-brand-text/60 hover:text-brand-gold transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-brand-text mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-brand-text/60 hover:text-brand-gold transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-gold/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-brand-text/50 text-sm">Copyright 2025 Alawlama. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {[
              { label: "Facebook", icon: "f" },
              { label: "Instagram", icon: "in" },
              { label: "Twitter", icon: "t" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold/10 transition-all duration-300 text-xs font-semibold"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
