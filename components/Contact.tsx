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
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      
      toast.success("Message sent successfully!", {
        description: `Thank you ${formData.name}. We'll respond via ${formData.email}.`,
        duration: 8000,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error: unknown) {
      console.error("EmailJS Error:", error);

      toast.error("Something went wrong.", {
        description: "Please try again later.",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <Heading />

      <section className="relative py-20 md:py-40 bg-linear-to-br from-slate-50 via-white to-slate-100">
        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight">
              Let’s Start Your Project
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl md:max-w-2xl mx-auto leading-relaxed">
              Tell us about your goals. We’ll provide clear direction, honest
              advice, and a strategic path forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* ================= FORM ================= */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-2"
            >
              <Card className="p-6 sm:p-8 md:p-10 bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-slate-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-slate-700">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
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
                        required
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
                      required
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
                      rows={4}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 rounded-xl bg-linear-to-r from-[#0B1F3B] to-[#1E3A8A] hover:opacity-90 text-white font-semibold flex items-center justify-center"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    {!isLoading && <Send className="w-5 h-5 ml-2" />}
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    We respect your privacy. Your information is confidential.
                  </p>
                </form>
              </Card>
            </motion.div>

            {/* ================= CONTACT INFO ================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4 md:space-y-6"
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
                  content: "vertexprimedigital@gmail.com",
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
                  className="p-5 sm:p-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-md border border-slate-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#1E3A8A] font-medium text-sm sm:text-base">
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
