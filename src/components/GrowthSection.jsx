import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function GrowthSections() {
  return (
    <>
      <ResultsSection />
      <ProcessSection />
      <CaseStudies />
      <Testimonials />
      <LeadForm />
    </>
  );
}

/* ================= RESULTS ================= */

function Counter({ end, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <div className="text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-blue-600">{count}+</h3>
      <p className="text-gray-600 text-sm mt-2">{label}</p>
    </div>
  );
}

function ResultsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Results
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">
          <Counter end={50} label="Million+ Views Generated" />
          <Counter end={200} label="Campaigns Managed" />
          <Counter end={100} label="Creators Represented" />
          <Counter end={2} label="Crore+ Ad Spend Managed" />
        </div>
      </div>
    </section>
  );
}

/* ================= PROCESS ================= */

function ProcessSection() {
  const steps = [
    {
      title: "Strategy",
      desc: "We analyze your brand, audience, and goals.",
    },
    {
      title: "Execution",
      desc: "We launch campaigns with creators & ads.",
    },
    {
      title: "Optimization",
      desc: "We track performance and improve results.",
    },
    {
      title: "Reporting",
      desc: "Clear insights & transparent analytics.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          How We Work
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center"
            >
              <div className="text-blue-500 font-bold text-lg">
                Step {i + 1}
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CASE STUDIES ================= */

function CaseStudies() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Case Studies
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <CaseCard
            brand="Fashion Brand X"
            result="4.2x ROAS in 30 Days"
            desc="We launched influencer + paid ads campaign driving profitable growth."
          />

          <CaseCard
            brand="Skincare Brand Y"
            result="12M+ Views in 45 Days"
            desc="Managed 25 creators & boosted organic + paid reach."
          />
        </div>
      </div>
    </section>
  );
}

function CaseCard({ brand, result, desc }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-gray-900">{brand}</h3>
      <p className="text-blue-600 font-bold mt-2">{result}</p>
      <p className="mt-4 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

/* ================= TESTIMONIALS ================= */

function Testimonials() {
  const reviews = [
    {
      name: "Brand Owner",
      text: "Thrive helped us scale campaigns profitably. Their execution is top-tier.",
    },
    {
      name: "Creator Partner",
      text: "Transparent communication and amazing brand deals.",
    },
    {
      name: "Startup Founder",
      text: "Our revenue increased 3x after working with Thrive.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Clients Say</h2>

        <div className="mt-12 space-y-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-gray-600 italic">"{review.text}"</p>
              <p className="mt-3 font-semibold text-gray-900">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= LEAD FORM ================= */

function LeadForm() {
  return (
    <section className="py-20 bg-blue-500 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Let’s Grow Your Brand
        </h2>

        <form className="mt-10 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg text-black"
          />
          <input
            type="text"
            placeholder="Brand Name"
            className="w-full px-4 py-3 rounded-lg text-black"
          />
          <input
            type="number"
            placeholder="Monthly Budget (₹)"
            className="w-full px-4 py-3 rounded-lg text-black"
          />
          <input
            type="text"
            placeholder="WhatsApp Number"
            className="w-full px-4 py-3 rounded-lg text-black"
          />

          <div className="space-y-4">
            <a
              href="tel:9015118744"
              className="block w-full text-center bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              📞 Call Now – 9015118744
            </a>

            <a
              href="https://wa.me/919015118744"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
