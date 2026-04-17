"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Wifi,
  Shield,
  HardDrive,
  Cloud,
  Settings,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    {
      icon: <Monitor className="h-5 w-5" />,
      title: "Website Development",
      description: "High-performance business websites.",
      href: "/services/website-development",
    },
    {
      icon: <Wifi className="h-5 w-5" />,
      title: "Website Design",
      description: "Modern, responsive UI designs.",
      href: "/services/website-design",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "UI/UX Design",
      description: "User-focused digital experiences.",
      href: "/services/ui-ux-design",
    },
    {
      icon: <HardDrive className="h-5 w-5" />,
      title: "Website Maintenance",
      description: "Ongoing support & updates.",
      href: "/services/website-maintenance",
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "SEO & Optimization",
      description: "Rank higher on Google.",
      href: "/services/seo-optimization",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Custom Digital Solutions",
      description: "Tailored business systems.",
      href: "/services/custom-solutions",
    },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
    { name: "Blog", href: "https://blog.vertexprimedigital.com" },
  ];

  return (
    <motion.header
      className="bg-white fixed w-full z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="text-2xl font-bold text-[#0B1F3B] flex items-center space-x-2">
          <Image
            src="/nakedlogo.png"
            alt="Vertex Prime Digital logo"
            width={80}
            height={30}
          />
          <Link href="/">
            <h2>Vertex Prime Digital</h2>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-8 items-center text-slate-700 font-medium">
          {/* HOME */}
          <Link
            href="/"
            className={`relative px-1 py-2 transition-colors ${
              pathname === "/"
                ? "text-[#0B1F3B] border-b-2 border-[#C6A75E]"
                : "text-gray-700 hover:text-[#C6A75E]"
            }`}
          >
            Home
          </Link>

          {/* SERVICES */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#C6A75E] transition">
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute top-full left-0 mt-3 w-155 bg-white rounded-xl shadow-xl border transition-all duration-200 ${
                isServicesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              }`}
            >
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition group"
                    >
                      <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                        {service.icon}
                      </div>

                      <div>
                        <p className="font-medium text-sm text-gray-900 group-hover:text-blue-600">
                          {service.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href="/service"
                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                  >
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* OTHER NAV ITEMS */}
          {navItems
            .filter((item) => item.name !== "Home")
            .map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-1 py-2 transition-colors ${
                    isActive
                      ? "text-[#0B1F3B] border-b-2 border-[#C6A75E]"
                      : "text-gray-700 hover:text-[#C6A75E]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact-us"
            className="bg-[#C6A75E] text-[#0B1F3B] px-6 py-3 font-medium rounded-md hover:scale-105 transition"
          >
            Get a Free Consultation
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-[#0B1F3B]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block"
            >
              {item.name}
            </Link>
          ))}

          {/* MOBILE SERVICES */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full font-medium"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="pl-4 mt-2 space-y-2 border-l">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-gray-600 hover:text-[#C6A75E]"
                  >
                    {service.title}
                  </Link>
                ))}

                <Link
                  href="/service"
                  className="block text-sm font-medium text-[#C6A75E] mt-2"
                >
                  View All Services →
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact-us"
            className="block bg-[#C6A75E] text-[#0B1F3B] px-4 py-2 rounded-md font-medium text-center"
          >
            Get a free consultation
          </Link>
        </div>
      )}
    </motion.header>
  );
}
