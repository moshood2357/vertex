// "use client";

// import Link from "next/link";
// import Image from "next/image";
// // import { usePathname } from "next/navigation";
// // import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Footer() {
//   const services = [
//     {
//       title: "Website Development",
//       desc: "High-performance, responsive websites built for impact and scalability.",
//     },
//     {
//       title: "E-Commerce Solutions",
//       desc: "Robust online stores engineered to drive sales and growth.",
//     },
//     {
//       title: "UI/UX Design",
//       desc: "Intuitive digital experiences crafted for performance and engagement.",
//     },
//     {
//       title: "SEO & Optimization",
//       desc: "Strategic visibility that drives measurable traffic and results.",
//     },
//     {
//       title: "Website Maintenance",
//       desc: "Ongoing support to keep your digital presence at its peak.",
//     },
//     {
//       title: "Custom Digital Solutions",
//       desc: "Tailored platforms built around your unique business needs.",
//     },
//   ];
//   return (
//     <>
//       {/* ================= FOOTER ================= */}
//       <footer className="bg-slate-900 text-slate-400 py-16">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-white text-xl font-semibold mb-4">
//               Vertex Digital
//             </h3>
//             <p className="text-slate-400">Digital at Its Peak.</p>
//           </div>
//           <div>
//             <h4 className="text-white font-semibold mb-2">Services</h4>
//             <ul>
//               {services.map((s, idx) => (
//                 <li key={idx} className="hover:text-[#C6A75E] transition">
//                   {s.title}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-white font-semibold mb-2">Quick Links</h4>
//             <ul>
//               <li className="hover:text-[#C6A75E] transition">
//                 <a href="#about">About</a>
//               </li>
//               <li className="hover:text-[#C6A75E] transition">
//                 <a href="#services">Services</a>
//               </li>
//               <li className="hover:text-[#C6A75E] transition">
//                 <a href="#portfolio">Portfolio</a>
//               </li>
//               <li className="hover:text-[#C6A75E] transition">
//                 <a href="#contact">Contact</a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-white font-semibold mb-2">Contact</h4>
//             <p>Email: contact@vertexdigital.com</p>
//             <p>Phone: +234 9038979339</p>
//           </div>
//         </div>
//         <div className="text-center mt-12 text-slate-500">
//           © {new Date().getFullYear()} Vertex Digital. All rights reserved.
//         </div>
//       </footer>
//     </>
//   );
// }

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

import Link from "next/link";

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/nakedlogo.png"
            alt="Vertex Prime Digital logo"
            width={60}
            height={30}
            className="mb-2"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              {/* <div className="flex items-center mb-6">
                
              </div> */}
              <h3 className="text-2xl font-bold text-[#C6A75E] mb-4">
                Reach Out to
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                We are here to help. Contact us for more information about our
                services, to get involved, or to share your feedback.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#C6A75E] mr-3" />
                  <a
                    href="tel:+2349038979339"
                    className="text-gray-300 hover:text-white transition"
                  >
                    +2349038979339
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#C6A75E] mr-3" />
                  <a
                    // href="mailto:pgcleanlimited@gmail.com"
                    className="text-gray-300 hover:text-white transition"
                  >
                    contact@vertexprimedigital.com
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#C6A75E] mr-3 mt-1" />
                  <span className="text-gray-300 leading-relaxed">
                    Lekki, Lagos, <br />
                    Nigeria
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg text-[#C6A75E] font-semibold mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-[#C6A75E] transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-300 hover:text-[#C6A75E] transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-[#C6A75E] transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-gray-300 hover:text-[#C6A75E] transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-300 hover:text-[#C6A75E] transition-colors duration-200"
                  >
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* ================= SOCIAL LINKS ================= */}
            <div>
              <h4 className="text-lg text-[#C6A75E] font-semibold mb-6">
                Follow Us
              </h4>

              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-[#C6A75E] hover:text-black transition"
                >
                  <FaFacebook size={18} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-[#C6A75E] hover:text-black transition"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-[#C6A75E] hover:text-black transition"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-[#C6A75E] hover:text-black transition"
                >
                  <FaTiktok size={18} />
                </a>
              </div>

              <p className="text-gray-400 mt-6 text-sm">
                Stay connected with Vertex Prime Digital for web design & development
                insights, digital strategy updates, and industry trends.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              Copyright © 2026 Vertex Prime Digital Ltd. All rights reserved.
            </p>
            {/* <span>
              Developed by&nbsp;
              <a
                rel="noopener noreferrer"
                className="underline text-[#4CD1FE]"
                href="https://r2systemsolution.co.uk"
                target="_blank"
              >
                R2 system solution Ltd.
              </a>
            </span> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
