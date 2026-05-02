import Footer from "@/components/Footer";
import Header from "@/components/Heading";

export default function Page() {
  return (
      <div className="">
          <Header />
          

      <main className="bg-[#0B1F3B] text-white">
        <div className="max-w-5xl mx-auto px-6 py-32">
          {/* HERO */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            SEO Services in Lagos Nigeria
          </h1>

          <p className="text-slate-300 text-lg mb-10">
            We help businesses in Lagos and across Nigeria rank on Google,
            increase organic traffic, and generate consistent leads using proven
            SEO strategies including on-page, off-page, technical, and local
            SEO.
          </p>

          {/* CORE SERVICES */}
          <section className="bg-[#0f2a4d] border border-white/10 rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-semibold text-[#C6A75E] mb-4">
              Our SEO Services
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>✔ Keyword research & competitor analysis</li>
              <li>✔ On-page SEO optimization</li>
              <li>✔ Technical SEO (site speed, indexing, structure)</li>
              <li>✔ Local SEO (Google Maps ranking in Lagos)</li>
              <li>✔ Content strategy & SEO blogging</li>
              <li>✔ Link building & authority growth</li>
            </ul>
          </section>

          {/* WHY SEO MATTERS */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              Why SEO Matters for Your Business in Nigeria
            </h2>

            <p className="text-slate-300 leading-relaxed">
              In today’s digital economy, businesses that rank on Google
              dominate their industries. SEO helps you attract customers who are
              already searching for your services — without paying for ads.
            </p>

            <p className="text-slate-400 mt-4">
              Whether you run a small business, ecommerce store, or corporate
              brand, SEO ensures your website becomes a consistent source of
              leads and sales.
            </p>
          </section>

          {/* WHAT YOU GET */}
          <section className="bg-[#0f2a4d] border border-white/10 rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-semibold text-[#C6A75E] mb-4">
              What You Get With Our SEO Service
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>✔ Higher Google rankings for your business keywords</li>
              <li>✔ Increased organic website traffic</li>
              <li>✔ More qualified leads and inquiries</li>
              <li>✔ Improved website performance & structure</li>
              <li>✔ Long-term sustainable growth</li>
            </ul>
          </section>

          {/* LOCAL SEO */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              Local SEO for Lagos Businesses
            </h2>

            <p className="text-slate-300">
              We specialize in helping Lagos-based businesses rank on Google
              Maps and local search results so customers near you can easily
              find your services.
            </p>
          </section>

          {/* CTA */}
          <div className="text-center mb-16">
            <a
              href="/contact-us"
              className="inline-block bg-[#C6A75E] text-[#0B1F3B] px-8 py-3 rounded-md font-semibold hover:scale-105 transition"
            >
              Get Free SEO Consultation
            </a>
          </div>

          {/* FAQ */}
          <section className="bg-[#0f2a4d] border border-white/10 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-white font-semibold">
                  How long does SEO take in Nigeria?
                </h3>
                <p>
                  SEO typically takes 3–6 months to show strong ranking results
                  depending on competition and website quality.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  How much do SEO services cost in Lagos?
                </h3>
                <p>
                  SEO pricing in Nigeria ranges from ₦100,000 to ₦500,000+ per
                  month depending on business size and competition.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  Do I need SEO if I already have a website?
                </h3>
                <p>
                  Yes. A website without SEO is invisible on Google. SEO makes
                  your website discoverable and profitable.
                </p>
              </div>
            </div>
          </section>
        </div>
          </main>
          

            <Footer />
    </div>
  );
}