// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function WebsiteDevelopmentClient() {
//   return (
    // <section className="py-20 md:py-32 bg-slate-50 min-h-screen">
    //   <div className="max-w-6xl mx-auto px-6">
    //     {/* Hero Header */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 30 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 0.7 }}
    //       className="text-center mb-16 md:mb-24"
    //     >
    //       <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F3B] mb-4">
    //         Website Development
    //       </h1>
    //       <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
    //         High-performance, responsive websites engineered for scalability,
    //         speed, and business impact.
    //       </p>
    //     </motion.div>

    //     {/* Section 1 */}
    //     <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    //       <div>
    //         <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1F3B] mb-4">
    //           Why Choose Vertex Prime Digital?
    //         </h2>
    //         <ul className="list-disc pl-5 text-slate-600 space-y-2">
    //           <li>Responsive design for all devices</li>
    //           <li>SEO-friendly architecture</li>
    //           <li>Fast loading performance</li>
    //           <li>Scalable infrastructure</li>
    //           <li>Secure, maintainable code</li>
    //         </ul>
    //       </div>

    //       <div className="relative w-full h-72 md:h-80">
    //         <Image
    //           src="/website-development.png"
    //           alt="Website development illustration"
    //           fill
    //           className="object-cover rounded-2xl shadow-lg"
    //         />
    //       </div>
    //     </div>

    //     {/* CTA */}
    //     <div className="text-center">
    //       <Link
    //         href="/contact-us"
    //         className="inline-block bg-[#C6A75E] text-[#0B1F3B] px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
    //       >
    //         Request a Consultation
    //       </Link>
    //     </div>
    //   </div>
    // </section>
//   );
// }

"use client";
import {
  // Code,
  LayoutTemplate,
  // PenTool,
  Smartphone,
  Phone,
  // Calendar,
  // Globe,
  // CheckCircle,
  // Database,
  // Heading,
  // Heading,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "./Footer";
import Header from "./Heading";
// import ReadytoGetStarted from "./ReadytoGetStarted";

export default function WebsiteDesignAndDevelopment() {
  // const services = [
  //   {
  //     icon: <PenTool className="h-8 w-8" />,
  //     title: "Custom Website Design",
  //     description:
  //       "Tailored UI/UX to capture your brand identity and engage users.",
  //     features: [
  //       "Responsive design",
  //       "Modern UI/UX",
  //       "Brand-focused visuals",
  //       "User-centric flows",
  //     ],
  //   },
  //   {
  //     icon: <Code className="h-8 w-8" />,
  //     title: "Web Development",
  //     description:
  //       "High-performance websites built using modern frameworks and technologies.",
  //     features: [
  //       "React & Vue",
  //       "Headless CMS",
  //       "E-commerce",
  //       "Speed optimization",
  //     ],
  //   },
  //   {
  //     icon: <Globe className="h-8 w-8" />,
  //     title: "SEO & Performance",
  //     description:
  //       "Optimized for search engines and lightning-fast performance.",
  //     features: [
  //       "SEO best practices",
  //       "Technical audits",
  //       "Fast load time",
  //       "Analytics integration",
  //     ],
  //   },
  //   {
  //     icon: <Database className="h-8 w-8" />,
  //     title: "Maintenance & Support",
  //     description:
  //       "Ongoing updates, bug fixes, and content changes to keep your site fresh.",
  //     features: [
  //       "Regular backups",
  //       "Content updates",
  //       "Security patches",
  //       "Dedicated support",
  //     ],
  //   },
  // ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-linear-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto py-28 px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-[#C6A75E] p-3 rounded-lg">
                <LayoutTemplate className="h-8 w-8 text-white" />
              </div>
              <Badge
                variant="secondary"
                className="text-sm bg-green-100 text-green-800"
              >
                Custom-Crafted Websites
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] leading-tight">
              Website Design & Development
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Beautiful, fast, and functional websites designed to drive
              results. Perfect for startups, brands, and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="bg-[#C6A75E] text-[#0B1F3B] px-6 py-3 font-medium rounded-md hover:scale-105 transition transform"
              >
                Request a Consultation
              </Link>
              <Link
                href="tel:+2349038979339"
                className="text-2xl font-bold text-[#0B1F3B] hover:text-[#1e457c] flex items-center transition-colors"
              >
                <Phone className="mr-2 h-6 w-6" />
                2349038979339
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-8">
            <div className="text-center">
              <Smartphone className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                Mobile-First Design
              </h3>
              <p className="text-gray-600 mt-2">
                Fully responsive across devices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-32 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-24"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F3B] mb-4">
              Partner with us
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              High-performance, responsive websites engineered for scalability,
              speed, and business impact.
            </p>
          </motion.div>

          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1F3B] mb-4">
                Why Choose Vertex Prime Digital?
              </h2>
              <ul className="list-disc pl-5 text-slate-600 space-y-2">
                <li>Responsive design for all devices</li>
                <li>SEO-friendly architecture</li>
                <li>Fast loading performance</li>
                <li>Scalable infrastructure</li>
                <li>Secure, maintainable code</li>
              </ul>
            </div>

            <div className="relative w-full h-72 md:h-80">
              <Image
                src="/landscape.png"
                alt="Website development illustration"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-block bg-[#C6A75E] text-[#0B1F3B] px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Tabs, Comparison, Testimonials, Pricing, FAQ, CTA */}
      {/* ...continue based on structure from your `ManagedITSupport.jsx`... */}
      {/* <ReadytoGetStarted /> */}

      <Footer />
    </div>
  );
}


