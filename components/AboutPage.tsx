"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Heading";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div>
      {/* Head section */}
      <Header />

      <section className="py-48 bg-linear-to-r from-blue-50 via-white to-indigo-100 overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
              About Vertex Prime Digital
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Vertex Prime Digital is a technology-driven digital agency helping
              startups, SMEs, and growing businesses build high-performance
              websites and web applications that drive measurable growth. We
              combine creative design, technical precision, and strategic
              insight to transform your online presence into a powerful business
              asset.
            </p>
          </motion.div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Our Story
                </h3>
                <p className="text-gray-600 mb-2">
                  Vertex Prime Digital was founded to bridge the gap between
                  business vision and technology. We build websites and web
                  applications that are not just visually stunning but also
                  performance-optimized, scalable, and secure.
                </p>
                <p className="text-gray-600">
                  Our team blends creativity, technical expertise, and strategic
                  insight to deliver digital experiences that empower businesses
                  to thrive online.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Mission & Vision
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong>Mission:</strong> To provide businesses with
                  high-performance digital solutions that increase visibility,
                  engagement, and measurable growth.
                </p>
                <p className="text-gray-600">
                  <strong>Vision:</strong> To be a trusted digital growth
                  partner recognized for innovation, reliability, and excellence
                  in web development and digital strategy.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Custom Website Design & Development</li>
                  <li>Conversion-Focused UI/UX Design</li>
                  <li>SEO-Optimized Web Architecture</li>
                  <li>Scalable Web Applications</li>
                  <li>Business-Centered Digital Strategy</li>
                </ul>
              </Card>

              <Card className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Why Choose Vertex Prime Digital
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Expertise in modern web technologies (React, Next.js)</li>
                  <li>Performance-first development approach</li>
                  <li>SEO-ready architecture from day one</li>
                  <li>Secure, scalable, and reliable implementations</li>
                  <li>
                    Strategy-driven solutions tailored to your business goals
                  </li>
                  <li>Client-focused partnership mindset</li>
                </ul>
              </Card>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-0 border-border bg-card mb-6 overflow-hidden shadow-lg">
                <Image
                  src="/colabo.jpg"
                  width={300}
                  height={650}
                  alt="Vertex Prime Digital Team Collaborating"
                  className="w-full h-full object-cover rounded-lg"
                />
              </Card>

              <Card className="p-0 border-border bg-card overflow-hidden shadow-lg">
                <Image
                  src="/yip.jpeg"
                  width={300}
                  height={650}
                  alt="Vertex Prime Digital Team Working"
                  className="w-full h-full object-cover rounded-lg"
                />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
