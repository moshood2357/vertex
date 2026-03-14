"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does Vertex Prime Digital offer?",
    answer:
      "Vertex Prime Digital provides professional website design, web development, UI/UX design, SEO optimization, and digital solutions that help businesses grow their online presence.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A basic website usually takes 5–10 days, corporate websites take 2–3 weeks, while e-commerce websites may take 3–4 weeks depending on complexity.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Website pricing depends on the features and complexity of the project. Contact us for a custom quote based on your business needs.",
  },
  {
    question: "Will my website be mobile friendly?",
    answer:
      "Yes. All websites developed by Vertex Prime Digital are fully responsive and work perfectly on mobile phones, tablets, and desktop devices.",
  },
  {
    question: "Do you provide SEO for websites?",
    answer:
      "Yes. We build websites with standard SEO optimization to help your business appear on search engines like Google.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can redesign your current website to improve performance, modern design, responsiveness, and SEO.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We provide ongoing website maintenance including updates, security monitoring, and performance improvements.",
  },
  {
    question: "Can you build an e-commerce website?",
    answer:
      "Yes. We develop secure and scalable e-commerce websites that allow businesses to sell products online.",
  },
  {
    question: "Will I be able to update my website myself?",
    answer:
      "Yes. We can build your website with a content management system so you can easily update content without technical knowledge.",
  },
  {
    question: "How do I get started with Vertex Prime Digital?",
    answer:
      "You can contact us via phone at 09038979339 or email vertexprimedigital@gmail.com to discuss your project.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl text-[#0B1F3B] font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 cursor-pointer shadow-sm"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
