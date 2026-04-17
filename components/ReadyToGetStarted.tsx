"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import Footer from "@/components/Footer";

export default function ReadyToGetStarted() {
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

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
