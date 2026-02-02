"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const serviceID = "service_b3rdk0c";
      const templateID = "template_ceokmiq";
      const publicKey = "haApIcl_okl18mmq8";

      await emailjs.send(serviceID, templateID, formData, publicKey);

      toast.success("✅ Message sent successfully! We'll respond shortly.", {
        description: `Thank you, ${formData.name}, for reaching out. We'll get back to you via ${formData.email}.`,
        duration: 12000,
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);

      toast.error("❌ Something went wrong. Please try again.", {
        description:
          "Your message could not be sent at this time. Check your connection or try again later.",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <Heading />

      {/* ================= MAIN CONTENT ================= */}
      <section className="relative py-48 bg-linear-to-br from-slate-50 via-white to-slate-100 min-h-screen">
        {/* Subtle Background Glow */}
        <div className="absolute -top-40 -left-40 w-150 h-150 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-150 h-150 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="text-center mb-20"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
            >
              Let’s Start Your Project
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              Tell us about your goals. We’ll provide clear direction, honest
              advice, and a strategic path forward.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* ================= FORM ================= */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>

                <Card className="relative p-10 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200">
                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium mb-2 block text-slate-700">
                          Full Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="h-11 focus-visible:ring-2 focus-visible:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block text-slate-700">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="h-11 focus-visible:ring-2 focus-visible:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block text-slate-700">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 0000 000000"
                        required
                        className="h-11 focus-visible:ring-2 focus-visible:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block text-slate-700">
                        Project Details
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project goals, timeline, and requirements..."
                        required
                        rows={5}
                        className="resize-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 rounded-xl bg-linear-to-r from-[#0B1F3B] to-[#1E3A8A] hover:opacity-90 text-white font-semibold shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                      {!isLoading && <Send className="w-5 h-5 ml-2" />}
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      We respect your privacy. Your information is kept
                      confidential.
                    </p>
                  </form>
                </Card>
              </div>
            </motion.div>

            {/* ================= CONTACT INFO ================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+234 903 897 9339",
                  sub: "Mon–Fri, 9am–6pm",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "contact@vertexprimedigital.com",
                  sub: "Response within 24 hours",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Lekki, Lagos, Nigeria",
                  sub: "Serving clients globally",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#1E3A8A] font-medium">
                        {item.content}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">{item.sub}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
