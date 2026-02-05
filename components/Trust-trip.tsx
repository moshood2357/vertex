// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
import { motion } from "framer-motion";

export default function TrustStrip() {
    return (
        <>
            {/* Trust Strip */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 text-center gap-8">
                    {[
                        { num: "5+", label: "Projects Delivered" },
                        { num: "98%", label: "Client Satisfaction" },
                        { num: "Prompt", label: "Ongoing Support" },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                        >
                            <h3 className="text-3xl font-semibold text-[#0B1F3B]">
                                {item.num}
                            </h3>
                            <p className="text-slate-600">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

        </>

    );
}
