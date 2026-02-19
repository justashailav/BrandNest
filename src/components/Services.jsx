import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import GrowthSections from "./GrowthSection";
import { ROICalculator } from "./ROICalculator";
import { IndustriesSection } from "./IndustriesSection";

const creatorServices = [
  "Brand Deals",
  "Pricing Negotiation",
  "Content Strategy",
  "Editing Support",
  "Campaign Management",
];

const brandServices = [
  "Influencer Campaigns",
  "Creator Shortlisting",
  "Creative Production",
  "Campaign Execution",
  "Reporting & Insights",
  "Ad Campaign Setup", // ✅ Added here
];

export default function Services() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [brandServiceIndex, setBrandServiceIndex] = useState(0);

  useEffect(() => {
    const s = setInterval(
      () => setServiceIndex((p) => (p + 1) % creatorServices.length),
      2200
    );
    return () => clearInterval(s);
  }, []);

  useEffect(() => {
    const i = setInterval(
      () => setBrandServiceIndex((p) => (p + 1) % brandServices.length),
      2400
    );
    return () => clearInterval(i);
  }, []);

  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-lg max-w-3xl mx-auto">
            End-to-end creative, creator management, influencer marketing, and
            paid ad solutions built for growth.
          </p>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            What We Offer
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ServiceCard
              title="Video Editing"
              points={[
                "Instagram reels & shorts",
                "YouTube & long-form videos",
                "UGC & talking-head edits",
                "Subtitles & motion text",
                "Trend-based editing",
              ]}
            />

            <ServiceCard
              title="Graphic Designing"
              points={[
                "Social media posts",
                "Thumbnails & banners",
                "Ad creatives",
                "Promotional posters",
                "Brand visuals",
              ]}
            />

            <ServiceCard
              title="Creator Management"
              points={[
                "Brand collaborations",
                "Deal negotiation",
                "Campaign coordination",
                "Approvals & timelines",
                "Long-term growth",
              ]}
            />

            <ServiceCard
              title="Influencer Marketing"
              points={[
                "Creator discovery",
                "Campaign planning",
                "Creator coordination",
                "Content approvals",
                "Performance tracking",
              ]}
            />

            <ServiceCard
              title="Brand Identity"
              points={[
                "Logo design",
                "Color & typography",
                "Instagram grid",
                "Visual consistency",
                "Style guidelines",
              ]}
            />

            <ServiceCard
              title="Website & Digital Design"
              points={[
                "Business websites",
                "Creator portfolios",
                "Landing pages",
                "Modern UI design",
                "Web graphics",
              ]}
            />

            {/* ✅ NEW SERVICE */}
            <ServiceCard
              title="Ad Campaign Setup"
              points={[
                "Meta (Facebook & Instagram) ads",
                "Google ads setup",
                "Audience targeting",
                "Ad creative guidance",
                "Performance optimization",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FOR CREATORS */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Services for Creators
            </h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              Focus on creating content — we handle brands, negotiations, and
              campaigns.
            </p>

            <ul className="mt-5 space-y-3 text-gray-600 text-sm md:text-base">
              <li>✔ Brand deals & collaborations</li>
              <li>✔ Fair pricing negotiation</li>
              <li>✔ Clear briefs & timelines</li>
              <li>✔ Editing & design support</li>
              <li>✔ Transparent communication</li>
            </ul>

            <Link
              to="/join-creator"
              className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition"
            >
              Join as a Creator
            </Link>
          </div>

          <AnimatedCard
            index={serviceIndex}
            services={creatorServices}
            label="Service"
            subtitle="Handled by Thrive"
          />
        </div>
      </section>

      {/* FOR BRANDS */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <AnimatedCard
            index={brandServiceIndex}
            services={brandServices}
            label="Brand Service"
            subtitle="Managed end-to-end by Thrive"
          />

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Services for Brands
            </h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              Reach the right audience through creators and content that feels
              authentic.
            </p>

            <ul className="mt-5 space-y-3 text-gray-600 text-sm md:text-base">
              <li>✔ Influencer & creator campaigns</li>
              <li>✔ Creator shortlisting</li>
              <li>✔ Creative production</li>
              <li>✔ Campaign execution</li>
              <li>✔ Reporting & insights</li>
              <li>✔ Ad campaign setup & optimization</li> {/* ✅ Added */}
            </ul>

            <Link
              to="/work-with-us"
              className="inline-block mt-6 px-6 py-3 border border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-50 transition"
            >
              Work With Thrive
            </Link>
          </div>
        </div>
      </section>
      <ROICalculator/>
      <IndustriesSection/>
      <GrowthSections/>
      {/* CTA */}
      <section className="bg-blue-500 py-14 md:py-20 text-center text-white">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Need Creative or Creator Support?
          </h2>

          <p className="mt-3 text-sm md:text-base text-blue-100">
            Thrive has solutions built for both brands and creators.
          </p>

          <Link
            to="/work-with-us"
            className="block w-full mt-8 px-6 py-3 bg-white text-blue-500 rounded-full font-medium shadow-sm"
          >
            Work With Us
          </Link>

          <Link
            to="/join-creator"
            className="inline-block mt-4 text-sm font-medium underline underline-offset-4"
          >
            Or join as a creator →
          </Link>
        </div>
      </section>
    </main>
  );
}

/* PREMIUM CARD */
function ServiceCard({ title, points }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        {points.map((point, index) => (
          <li key={index}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}

/* REUSABLE ANIMATED CARD */
function AnimatedCard({ index, services, label, subtitle }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
      className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 p-6 flex items-center justify-center"
    >
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-md px-6 py-4 min-w-[240px] text-center">
          <p className="text-xs text-gray-500">{label}</p>

          <div className="relative h-8 mt-2 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h4
                key={index}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="absolute text-base font-semibold text-gray-900 whitespace-nowrap"
              >
                {services[index]}
              </motion.h4>
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-full shadow-sm px-5 py-2">
          <p className="text-xs text-gray-600 whitespace-nowrap">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
