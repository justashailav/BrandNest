import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ABOUT ROTATING POINTS */
const aboutPoints = [
  {
    title: "Authenticity First",
    desc: "Real creators. Real audiences.",
    icon: "✨",
  },
  {
    title: "Quality Content",
    desc: "Content that converts, not just trends.",
    icon: "🎥",
  },
  {
    title: "Long-term Relationships",
    desc: "We grow with creators & brands.",
    icon: "🤝",
  },
];

/* JOURNEY */
const journey = [
  { year: "2023", text: "Started with creator management" },
  { year: "2024", text: "Executed multi-brand campaigns" },
  { year: "2025", text: "Expanded into creative & strategy" },
  { year: "Now", text: "Scaling creators & brands together" },
];

export default function About() {
  const [aboutIndex, setAboutIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setAboutIndex((p) => (p + 1) % aboutPoints.length),
      2600
    );
    return () => clearInterval(i);
  }, []);

  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            About BrandNest
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            Building meaningful partnerships between brands and creators through
            strategy, creativity, and trust.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Who We Are
            </h2>

            <p className="mt-4 text-gray-600">
              BrandNest is a creator management and creative agency built to
              simplify influencer marketing for both brands and creators.
            </p>

            <p className="mt-3 text-gray-600">
              We focus on authenticity, quality content, and long-term
              relationships — not just big numbers.
            </p>
          </div>

          {/* ABOUT VISUAL */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 p-6 flex items-center justify-center"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-blue-200/40"
              animate={{ x: ["0%", "30%", "0%"] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-md px-6 py-5 min-w-[260px] text-center">
                <p className="text-xs text-gray-500">About BrandNest</p>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={aboutIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="mt-3"
                  >
                    <div className="text-2xl mb-1">
                      {aboutPoints[aboutIndex].icon}
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      {aboutPoints[aboutIndex].title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {aboutPoints[aboutIndex].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex gap-3">
                <span className="text-xs px-4 py-1 bg-white/80 rounded-full shadow-sm">
                  Creators
                </span>
                <span className="text-xs px-4 py-1 bg-white/80 rounded-full shadow-sm">
                  Brands
                </span>
                <span className="text-xs px-4 py-1 bg-white/80 rounded-full shadow-sm">
                  Growth
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
            BrandNest Journey
          </h2>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {journey.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-5 shadow-sm text-center"
              >
                <p className="text-blue-500 font-semibold">{item.year}</p>
                <p className="mt-2 text-sm text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER VISION */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-md p-8 md:p-10"
          >
            <p className="text-xs text-gray-500">Founder’s Vision</p>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-2">
              A fair ecosystem for creators & brands
            </h3>
            <p className="mt-4 text-gray-600">
              BrandNest was built to remove confusion, unfair pricing, and
              short-term thinking from influencer marketing. Creators deserve
              clarity. Brands deserve authenticity.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              — Founder, BrandNest
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our Purpose
          </h2>
          <MissionVision />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-500 py-14 md:py-20 text-center text-white">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Let’s Build Something Meaningful
          </h2>

          <p className="mt-3 text-blue-100">
            Whether you’re a brand or a creator, BrandNest is here to help you
            grow.
          </p>

          <Link
            to="/work-with-us"
            className="block w-full mt-8 px-6 py-3 bg-white text-blue-500 rounded-full font-medium"
          >
            Work With Us
          </Link>

          <Link
            to="/join-creator"
            className="inline-block mt-4 underline underline-offset-4"
          >
            Or join as a creator →
          </Link>
        </div>
      </section>
    </main>
  );
}

/* MISSION / VISION TOGGLE */
function MissionVision() {
  const [active, setActive] = useState("mission");

  return (
    <div className="mt-8">
      <div className="flex justify-center gap-3">
        {["mission", "vision"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                active === tab
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-600 shadow-sm"
              }`}
          >
            {tab === "mission" ? "Our Mission" : "Our Vision"}
          </button>
        ))}
      </div>

      <div className="mt-6 min-h-[90px]">
        <AnimatePresence mode="wait">
          {active === "mission" ? (
            <motion.p
              key="mission"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="text-gray-600"
            >
              To empower creators with fair opportunities and help brands grow
              through authentic, result-driven collaborations.
            </motion.p>
          ) : (
            <motion.p
              key="vision"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="text-gray-600"
            >
              To become a trusted ecosystem where creators and brands grow
              together through transparency, creativity, and long-term value.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
