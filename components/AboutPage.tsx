"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Heading";
import Footer from "@/components/Footer";

import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div>
      {/* head section */}
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
              At Vertex Prime Digital, we help businesses transform their
              digital presence and leverage technology as a growth engine. From
              web design and development to IT solutions and digital strategies,
              we deliver innovative, scalable, and results-driven solutions.
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
                  Vertex Prime Digital was founded to help businesses bridge the
                  gap between vision and technology. We specialize in web
                  design, development, and digital solutions that empower
                  businesses to thrive online.
                </p>
                <p className="text-gray-600">
                  Our team combines creativity, technical expertise, and
                  strategic insight to deliver digital experiences that are not
                  only visually stunning but also highly functional and
                  performance-optimized.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Our Mission & Vision
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong>Mission:</strong> To provide businesses with
                  exceptional web and digital solutions that drive growth,
                  engagement, and measurable results.
                </p>
                <p className="text-gray-600">
                  <strong>Vision:</strong> To be a leading digital partner
                  recognized for innovation, reliability, and excellence in web
                  development and digital solutions globally.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Why Choose Vertex Prime Digital
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Expertise in web design, development, and digital strategy
                  </li>
                  <li>
                    Innovative and forward-thinking solutions tailored for your
                    business
                  </li>
                  <li>Reliable, scalable, and secure implementations</li>
                  <li>Client-focused approach with measurable results</li>
                  <li>
                    Serving startups, SMEs, and enterprise businesses globally
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Image */}
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
                  alt="Vertex Prime Digital Team Collaborating"
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
