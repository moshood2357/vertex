"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/service" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        className="bg-white fixed w-full z-50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#0B1F3B] flex items-center space-x-2">
            <Image
              src="/nakedlogo.png"
              alt="PG Clean Ltd logo"
              width={80}
              height={30}
            />
            <Link href="/">
              <h1>Vertex Prime Digital</h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center text-slate-700 font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-1 py-2 transition-colors ${
                    isActive
                      ? "text-[#0B1F3B] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-[#C6A75E]"
                      : "text-gray-700 hover:text-[#C6A75E]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact-us"
              className="bg-[#C6A75E] text-[#0B1F3B] px-6 py-3 font-medium rounded-md hover:scale-105 transition transform"
            >
              Request a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-[#0B1F3B]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="flex flex-col px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#0B1F3B] font-medium hover:text-[#C6A75E] transition"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact-us"
                className="bg-[#C6A75E] text-[#0B1F3B] px-4 py-2 rounded-md font-medium hover:scale-105 transition transform"
              >
                Request a Consultation
              </Link>
            </nav>
          </div>
        )}
      </motion.header>
    </>
  );
}
