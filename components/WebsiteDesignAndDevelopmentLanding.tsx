"use client";

import React, { useState } from "react";
import {
  Monitor,
  Code2,
  Smartphone,
  Globe2,
  Users,
  Phone,
  Mail,
  Building,
  User,
  CheckCircle,
  AlertTriangle,
  X,
  Award,
  Server,
  Cloud,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import Back from "@/components/Back";
import Image from "next/image";
import Header from "./Heading";
import Footer from "./Footer";

const WebsiteDesignLanding: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    serviceCategory: "Website Development",
  });

  const [showBio, setShowBio] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSubmitted(true);

      setFormData({
        fullName: "",
        companyName: "",
        businessEmail: "",
        phoneNumber: "",
        serviceCategory: "Website Development",
      });
    } catch {
      alert("Failed to send form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Modern, responsive UI built for performance.",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Secure and scalable server-side architecture.",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "E-commerce Solutions",
      description: "Build, deploy, and scale powerful online stores.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Optimization",
      description: "Fully responsive across all devices.",
    },
    {
      icon: <Globe2 className="h-6 w-6" />,
      title: "SEO Optimization",
      description: "Rank higher and get more visibility.",
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Web Applications",
      description: "Custom digital systems for businesses.",
    },
  ];

  const benefits = [
    "Custom-built scalable web solutions",
    "Fast and optimized performance",
    "Secure development architecture",
    "Mobile-first responsive design",
    "SEO-friendly structure",
    "Ongoing maintenance & support",
  ];

  const trustIndicators = [
    { icon: <Award className="h-8 w-8" />, text: "Expert Developers" },
    { icon: <Monitor className="h-8 w-8" />, text: "10+ Projects Delivered" },
    { icon: <Users className="h-8 w-8" />, text: "Trusted by Businesses" },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      text: "98% Client Satisfaction",
    },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center px-4">
        <div className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-xl relative">
          <button
            onClick={() => setSubmitted(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="bg-green-100 rounded-full p-4 mx-auto w-20 h-20 flex items-center justify-center mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Request Submitted!
          </h1>

          <p className="text-lg text-gray-600 mb-4">
            Thanks for contacting us about your website development project. We
            will reach out soon!
          </p>

          <p className="text-sm text-gray-500">Urgent inquiries: +2349038979339</p>
        </div>
      </div>
    );
  }

  const inputFields = [
    { name: "name", placeholder: "Your Full Name", icon: User },
    { name: "companyName", placeholder: "Company Name", icon: Building },
    { name: "email", placeholder: "Business Email", icon: Mail },
    { name: "phone", placeholder: "Phone Number", icon: Phone },
  ];

  return (
    <div>
      <Header />

      <div className="min-h-screen bg-linear-to-b from-[#0B1F3B] via-[#0B1F3B]/95 to-[#0B1F3B] py-20">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <Back className="mt-5" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="inline-flex items-center bg-pink-500/20 text-pink-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Scalable & High-Performance Web Solutions
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Website{" "}
                  <span className="text-yellow-400">Design & Development</span>
                </h1>

                <p className="text-xl text-indigo-100 mb-8">
                  We build powerful, scalable, and secure{" "}
                  <a
                    href="/web-design-lagos"
                    className="text-yellow-400 hover:underline"
                  >
                    websites
                  </a>{" "}
                  that drive business growth.
                </p>
              </div>

              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm mb-12 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Our Capabilities
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="text-yellow-400 mt-1">{service.icon}</div>
                      <div>
                        <h4 className="text-white font-medium">
                          {service.title}
                        </h4>
                        <p className="text-sm text-indigo-200">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-2xl mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Work With Us?
                </h2>

                <div className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 h-6 w-6 mt-0.5" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-yellow-400">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Request a Website Quote
                  </h3>

                  <p className="text-gray-600 mb-6">
                    Let’s build your next powerful web solution.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {inputFields.map(({ name, placeholder, icon: Icon }, i) => (
                      <div key={i}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {placeholder}
                        </label>

                        <div className="relative">
                          <Icon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            name={name}
                            value={formData[name as keyof typeof formData]}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border rounded-lg"
                            placeholder={placeholder}
                            required
                          />
                        </div>
                      </div>
                    ))}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-indigo-600 text-white py-4 rounded-lg font-bold hover:bg-indigo-700 transition"
                    >
                      {isSubmitting ? "Submitting..." : "Get My Website Quote"}
                    </button>
                  </form>

                  {/* BIO */}
                  <div className="mt-8 flex items-center space-x-4">
                    <Image
                      src="/coolestguy.png"
                      alt="Moshood Sanusi - Fullstack Developer & Founder"
                      width={128}
                      height={128}
                      className="rounded-full"
                    />

                    <div>
                      <h4 className="font-semibold">Moshood Sanusi</h4>
                      <p className="text-sm text-gray-600">
                        Fullstack Developer & Founder
                      </p>

                      <button
                        onClick={() => setShowBio(true)}
                        className="text-green-600 text-sm"
                      >
                        Read Bio →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-white/10 p-6 rounded-xl">
                  <h4 className="text-white text-center mb-4">
                    Trusted by Brands
                  </h4>

                  <div className="grid grid-cols-2 gap-4 text-white text-sm text-center">
                    {trustIndicators.map((t, i) => (
                      <div key={i}>
                        <div className="flex justify-center mb-2 text-yellow-400">
                          {t.icon}
                        </div>
                        {t.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Bio Modal */}
        {showBio && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    About Moshood Sanusi, Founder
                  </h3>
                  <button
                    onClick={() => setShowBio(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex items-start space-x-6 mb-6">
                  <Image
                    src="/coolestguy.png"
                    alt="Moshood Sanusi - Fullstack Developer & Founder"
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Moshood Sanusi – Fullstack Developer & Founder
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Fullstack Developer, Product Designer & Entrepreneur
                      building scalable digital products and brands
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    Moshood Sanusi is a fullstack developer and entrepreneur
                    with a strong focus on building scalable digital solutions,
                    modern web applications, and brand-driven online
                    experiences. He combines technical expertise with product
                    thinking to transform ideas into functional, user-centered
                    products.
                  </p>

                  <p>
                    With experience spanning web development, UI/UX design, and
                    business strategy, he has worked on multiple projects
                    ranging from SaaS platforms to business websites and
                    automation systems. His work focuses on performance,
                    usability, and real-world business impact.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 mr-2 text-indigo-600" />
                      Fullstack Web Development (React, Next.js, Flask, Node.js)
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <Server className="h-4 w-4 mr-2 text-indigo-600" />
                      Backend Systems & API Development
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <Cloud className="h-4 w-4 mr-2 text-indigo-600" />
                      SaaS Products, Automation & Scalable Architectures
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <Cloud className="h-4 w-4 mr-2 text-indigo-600" />
                      Brand Development & Digital Product Strategy
                    </div>
                  </div>

                  <p>
                    His approach focuses on understanding business goals first,
                    then building technology that solves real problems
                    efficiently. From startups to growing businesses, he helps
                    translate ideas into functional digital products that drive
                    growth and visibility.
                    <br />
                    <br />
                    He is also passionate about education, mentorship, and
                    helping others learn practical tech skills that lead to real
                    opportunities in the digital economy.
                  </p>
                </div>

                <div className="mt-8 bg-indigo-50 rounded-lg p-6">
                  <h5 className="font-semibold text-indigo-900 mb-2">
                    Highlights & Work Focus:
                  </h5>
                  <ul className="text-indigo-800 space-y-1">
                    <li>
                      • Built and deployed multiple fullstack web applications
                      and business platforms
                    </li>
                    <li>
                      • Designed responsive UI systems and modern user
                      experiences
                    </li>
                    <li>
                      • Developed automation tools and backend systems for
                      business workflows
                    </li>
                    <li>
                      • Focused on helping businesses improve online presence
                      and conversions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default WebsiteDesignLanding;
