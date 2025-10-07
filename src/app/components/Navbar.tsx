"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollToPlugin);

const navLinks = [
  { href: "solutions", label: "Solutions", type: "scroll" },
  { href: "about-us", label: "About Us", type: "scroll" },
  { href: "process", label: "Process", type: "scroll" },
  { href: "case-studies", label: "Case Studies", type: "page" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: target, offsetY: 70 },
      ease: "power3.inOut",
    });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* ✅ VRBS Logo Image */}
        <Link
  href="/"
  className="flex items-center space-x-2"
  onClick={(e) => {
    if (pathname === "/") {
      e.preventDefault(); // stop full reload
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: 0 },
        ease: "power3.inOut",
      });
    }
  }}
>
  <Image
    src="/logo.png"
    alt="VRBS Logo"
    width={200}
    height={120}
    priority
    className="object-contain w-28 h-14 md:w-48 md:h-24 "
  />
</Link>

        {/* ✅ Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {link.type === "scroll" ? (
                pathname === "/" ? (
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-900 hover:text-teal-500 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={`/#${link.href}`}
                    scroll={false}
                    className="text-gray-900 hover:text-teal-500 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ) : (
                <Link
                  href={`/${link.href}`}
                  className="text-gray-900 hover:text-teal-500 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </motion.li>
          ))}

          {/* ✅ Contact Us Button */}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2 rounded-full bg-teal-500 text-white font-medium hover:bg-teal-600 transition-colors"
          >
            Contact Us
          </Link>
        </ul>

        {/* ✅ Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) =>
              link.type === "scroll" ? (
                pathname === "/" ? (
                  <a
                    key={link.href}
                    href={`#${link.href}`}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-900 hover:text-teal-500 transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={`/#${link.href}`}
                    scroll={false}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-900 hover:text-teal-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              ) : (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-900 hover:text-teal-500 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 rounded-full bg-teal-500 text-white font-medium text-center hover:bg-teal-600 transition-colors"
            >
              Contact Us
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
