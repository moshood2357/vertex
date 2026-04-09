"use client";

import { motion } from "framer-motion";

export default function LatestBlogSection() {
  return (
    <section className="bg-gray-100 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg p-10 lg:p-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block bg-[#C6A75E] text-black text-sm font-semibold px-4 py-2 rounded-full mb-6"
          >
            Latest Insights
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Read Our Latest Blog Posts
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Stay ahead with expert tips, industry trends, and practical
            strategies to help your business grow online. From website design
            and cybersecurity to digital marketing and IT solutions, our latest
            blog posts are packed with valuable insights for modern businesses.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Whether you are looking to improve your online presence, protect
            your business, or increase productivity, our blog has something
            valuable for you.
          </motion.p>

          <motion.a
            href="https://blog.vertexprimedigital.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center bg-[#C6A75E] hover:bg-[#C6A75E] hover:scale-105 text-black font-semibold px-8 py-4 rounded-full transition duration-300 shadow-md hover:shadow-lg"
          >
            Read Our Latest Blog
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
