"use client";
import {
  Layout,
  PenTool,
  Smartphone,
  Users,
  Phone,
  Calendar,
  CheckCircle,
  Palette,
} from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "./Heading";
import Footer from "./Footer";

export default function UIUXDesignPage() {
  const services = [
    {
      icon: <Layout className="h-8 w-8" />,
      title: "User Interface (UI) Design",
      description:
        "Visually stunning interfaces that reflect your brand and engage users.",
      features: [
        "Modern layouts",
        "Consistent design systems",
        "Typography & color harmony",
        "Pixel-perfect UI",
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User Experience (UX) Design",
      description:
        "Seamless and intuitive experiences that guide users to take action.",
      features: [
        "User journey mapping",
        "Wireframing",
        "Usability testing",
        "Conversion-focused flows",
      ],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Brand & Visual Design",
      description:
        "Create a strong visual identity that resonates with your audience.",
      features: [
        "Brand consistency",
        "Visual storytelling",
        "Design guidelines",
        "Creative direction",
      ],
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Prototyping & Testing",
      description:
        "Interactive prototypes to validate ideas before development.",
      features: [
        "Figma prototypes",
        "User testing",
        "Feedback iteration",
        "Design validation",
      ],
    },
  ];

  return (
    <div>
      <Header />

      <div className="min-h-screen bg-background py-20">
        {/* Hero */}
        <section className="bg-linear-to-br from-slate-50 to-purple-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Layout className="h-8 w-8 text-white" />
                </div>
                <Badge
                  variant="secondary"
                  className="text-sm bg-green-100 text-green-800"
                >
                  User-Centered Design
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                UI/UX Design Services
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                We design intuitive, engaging, and conversion-focused digital
                experiences that delight users and drive business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/ui-ux-design">
                  <Button
                    size="lg"
                    className="bg-purple-600 text-white hover:bg-purple-700"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Free Consultation
                  </Button>
                </Link>

                <a
                  href="tel:+2349038979339"
                  className="text-2xl font-bold text-purple-600 hover:text-purple-800 flex items-center transition-colors"
                >
                  <Phone className="mr-2 h-6 w-6" />
                  +2349038979339
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-8">
              <div className="text-center">
                <Smartphone className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">
                  User-First Experiences
                </h3>
                <p className="text-gray-600 mt-2">
                  Designed for usability, engagement, and conversion
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our UI/UX Capabilities
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We craft digital experiences that are not just beautiful — but
                effective.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <Card
                  key={i}
                  className="hover:shadow-lg transition duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        {service.icon}
                      </div>

                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Button */}
        <Link href="/ROI/ui-ux-design-roi-calculator">
          <Button
            size="lg"
            variant="outline"
            className="flex justify-center bg-purple-600 text-white mx-auto hover:bg-purple-700 transition cursor-pointer"
          >
            <PenTool className="h-4 w-4 mr-2" />
            Calculate UI/UX ROI
          </Button>
        </Link>

        {/* You can extend: testimonials, pricing, FAQ like your other pages */}
      </div>

      <Footer />
    </div>
  );
}
