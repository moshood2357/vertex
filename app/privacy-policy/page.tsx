"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Heading";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="">
      {/* head section */}
      <Header />


      <main className="bg-white">
        {/* HERO */}
        <section className="py-28 bg-linear-to-br from-slate-50 to-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-6 text-center"
          >
            <h1 className="text-5xl font-extrabold pt-24 text-[#0B1F3B] mb-6">
              Privacy Policy
            </h1>
            <p className="text-slate-600 text-lg">
              Effective Date: January 2026
            </p>
          </motion.div>
        </section>

        {/* CONTENT */}
        <section className="py-4">
          <div className="max-w-4xl mx-auto px-6 space-y-12 text-slate-700 leading-relaxed">
            {/* INTRO */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                1. Introduction
              </h2>
              <p>
                Vertex Prime Digital ("we", "our", or "us") is committed to protecting
                your privacy and handling your personal information with
                transparency and integrity. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or engage our web design and development
                services.
              </p>
            </div>

            {/* INFORMATION WE COLLECT */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                2. Information We Collect
              </h2>

              <p className="mb-4">
                We may collect the following types of information:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  Personal information (name, email address, phone number)
                </li>
                <li>Company and project details</li>
                <li>Billing and invoicing information</li>
                <li>
                  Technical data (IP address, browser type, device information)
                </li>
                <li>Usage data and analytics information</li>
                <li>Communications submitted through contact forms</li>
              </ul>
            </div>

            {/* HOW WE USE */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                3. How We Use Your Information
              </h2>

              <ul className="list-disc list-inside space-y-2">
                <li>To respond to enquiries and provide proposals</li>
                <li>
                  To deliver web design, development, and digital services
                </li>
                <li>To manage hosting, maintenance, and support</li>
                <li>To improve website performance and user experience</li>
                <li>To communicate project updates and service information</li>
                <li>To comply with legal and contractual obligations</li>
              </ul>
            </div>

            {/* CLIENT WEBSITE DATA */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                4. Client Website Data
              </h2>
              <p>
                As part of our development services, we may process data stored
                on websites we build or manage. In such cases, we process
                information solely for the purpose of delivering agreed services
                and in accordance with client instructions.
              </p>
            </div>

            {/* DATA SHARING */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                5. Sharing of Information
              </h2>
              <p className="mb-4">
                We may share information with trusted third-party service
                providers, including:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Cloud hosting providers</li>
                <li>Payment processors</li>
                <li>Analytics services</li>
                <li>Email communication platforms</li>
              </ul>

              <p className="mt-4">
                These providers only access information necessary to perform
                services on our behalf and are required to maintain
                confidentiality.
              </p>
            </div>

            {/* DATA SECURITY */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                6. Data Security
              </h2>
              <p>
                We implement reasonable administrative, technical, and physical
                safeguards to protect personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </div>

            {/* DATA RETENTION */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                7. Data Retention
              </h2>
              <p>
                We retain personal information only for as long as necessary to
                fulfill the purposes outlined in this policy, including
                contractual, legal, or operational requirements.
              </p>
            </div>

            {/* YOUR RIGHTS */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                8. Your Rights
              </h2>

              <p className="mb-4">
                Depending on your location, you may have rights regarding your
                personal information, including:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of personal data</li>
                <li>Restriction or objection to processing</li>
                <li>Withdrawal of consent where applicable</li>
              </ul>
            </div>

            {/* COOKIES */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                9. Cookies & Tracking Technologies
              </h2>
              <p>
                Our website may use cookies and similar technologies to enhance
                functionality, analyse traffic, and improve user experience. You
                may control cookie preferences through your browser settings.
              </p>
            </div>

            {/* POLICY UPDATES */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically. Any changes will
                be posted on this page with an updated effective date.
              </p>
            </div>

            {/* CONTACT */}
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3B] mb-4">
                11. Contact Us
              </h2>

              <p>
                If you have any questions regarding this Privacy Policy, please
                contact us at:
              </p>

              <p className="mt-4 font-semibold">
                Vertex Prime Digital
                <br />
                Email: info@vertexprimedigital.com
                <br />
                Website: www.vertexprimedigital.com
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* footer section */}
      <Footer />
    </div>
  );
}
