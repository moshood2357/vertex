"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-20"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6">
              Get in touch with Vertex Prime Digital
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl md:max-w-2xl mx-auto">
              Have a project, question, or idea? Our team is ready to help you
              transform your digital presence.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto items-stretch">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-2 h-full"
            >
              <Card className="h-full flex flex-col p-6 sm:p-8 md:p-10 bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-slate-200">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col h-full space-y-6"
                >
                  {/* INPUTS SECTION */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* TEXTAREA (FLEX GROWS TO FILL SPACE) */}
                  <div className="flex-1 flex flex-col min-h-45">
                    <Textarea
                      name="message"
                      placeholder="Project Details"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="resize-none flex-1 min-h-0"
                    />
                  </div>

                  {/* BUTTON */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 rounded-xl bg-linear-to-r from-[#0B1F3B] to-[#1E3A8A] text-white font-semibold"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    {!isLoading && <Send className="w-5 h-5 ml-2" />}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-full flex flex-col gap-4 md:gap-6"
            >
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+234 903 897 9339",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "info@vertexprimedigital.com",
                  href: "mailto:info@vertexprimedigital.com",
                },
                {
                  icon: BsWhatsapp,
                  title: "WhatsApp",
                  content: "+234 903 897 9339",
                  href: "https://wa.me/2349038979339",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Lekki, Lagos, Nigeria",
                  isMap: true,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`p-5 sm:p-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-md border border-slate-200 flex flex-col ${
                    item.isMap ? "flex-2" : "flex-1"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>

                    <div className="w-full">
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h3>

                      <p className="text-[#1E3A8A] font-medium text-sm">
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.content}
                          </a>
                        ) : (
                          item.content
                        )}
                      </p>

                      {/* MAP */}
                      {item.isMap && (
                        <div className="mt-4">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d703582.0013323425!2d3.3293148202620153!3d6.288808691755373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e0b6855f00996ef%3A0x4ee218fed9996184!2sVertex%20Prime%20Digital%20Services%20Limited!5e0!3m2!1sen!2sng!4v1787825601684!5m2!1sen!2sng"
                            // width="100%"
                            // height="100%"
                            // style={{ border: 0 }}
                            // allowFullScreen
                            loading="lazy"
                            // referrerPolicy="no-referrer-when-downgrade"
                            title="Vertex Prime Digital Services Limited Map"
                          />
                        </div>
                      )}
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
