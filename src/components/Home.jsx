import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";

const creators = [
  "@creatorname",
  "@fashionqueen",
  "@lifestyleguru",
  "@reelstar",
];
const brands = ["Brand XYZ", "UrbanWear", "BlueHeaven", "StyleHub"];
const followerSets = [
  { followers: 32000, views: 120000 },
  { followers: 54000, views: 210000 },
  { followers: 78000, views: 340000 },
];
const campaigns = [
  "Summer Collection Launch",
  "Winter Wear Drop",
  "Festive Sale Campaign",
];

const campaignStats = [
  { creators: 12, reach: "1.2M" },
  { creators: 18, reach: "2.4M" },
  { creators: 9, reach: "900K" },
];

const tiltStyle = {
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const [brandIndex, setBrandIndex] = useState(0);
  const [creatorIndex, setCreatorIndex] = useState(0);
  const [statsIndex, setStatsIndex] = useState(0);
  const [campaignIndex, setCampaignIndex] = useState(0);

useEffect(() => {
  const i = setInterval(
    () => setCampaignIndex((p) => (p + 1) % campaigns.length),
    3000
  );
  return () => clearInterval(i);
}, []);

  useEffect(() => {
    const c = setInterval(
      () => setCreatorIndex((p) => (p + 1) % creators.length),
      2500,
    );
    const b = setInterval(
      () => setBrandIndex((p) => (p + 1) % brands.length),
      3000,
    );
    const s = setInterval(
      () => setStatsIndex((p) => (p + 1) % followerSets.length),
      2800,
    );

    return () => {
      clearInterval(c);
      clearInterval(b);
      clearInterval(s);
    };
  }, []);

  const { followers, views } = followerSets[statsIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setBrandIndex((prev) => (prev + 1) % brands.length);
    }, 3000); // slightly slower than creator
    return () => clearInterval(interval);
  }, []);

  // Auto change creator name
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % creators.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useTransform(mouseX, [-100, 100], [-15, 15]);
  const y = useTransform(mouseY, [-100, 100], [-15, 15]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }
  const mobileFloat = {
    animate: { y: [0, -8, 0] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <main className="pt-24">
      {/* HERO SECTION */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Where Creators Grow <br className="hidden md:block" /> & Brands
              Collaborate
            </h1>

            <p className="mt-4 text-gray-600 text-base md:text-lg">
              A creator management & creative agency connecting the right
              creators with the right brands through meaningful collaborations.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/work-with-us"
                className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium text-center hover:bg-blue-600 transition"
              >
                Work With BrandNest
              </Link>
              <Link
                to="/join-creator"
                className="px-6 py-3 border border-blue-500 text-blue-500 rounded-full font-medium text-center hover:bg-blue-50 transition"
              >
                Join as a Creator
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3 text-xs text-gray-600">
              <span className="px-3 py-1 bg-white rounded-full shadow-sm">
                ✔ Creator Approval Guaranteed
              </span>
              <span className="px-3 py-1 bg-white rounded-full shadow-sm">
                ✔ No Forced Deals
              </span>
              <span className="px-3 py-1 bg-white rounded-full shadow-sm">
                ✔ Quality Over Quantity
              </span>
            </div>
          </div>

          {/* Hero Visual */}
          <motion.div
            onMouseMove={handleMouseMove}
            className="relative w-full rounded-3xl overflow-hidden p-4 md:p-6 bg-gradient-to-br from-blue-50 to-blue-100"
          >
            {/* 🌊 Wavy Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-200/40 via-blue-100/40 to-blue-200/40"
              animate={{ x: ["0%", "20%", "0%"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* ================= MOBILE VIEW ================= */}
            <div className="relative z-10 md:hidden flex flex-col items-center gap-4 py-6">
              {/* Creator */}
              <motion.div
                {...mobileFloat}
                className="bg-white rounded-2xl shadow-md p-4 w-64 text-center"
              >
                <p className="text-xs text-gray-500">Creator</p>

                <motion.h4
                  key={index}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-semibold text-gray-900 mt-1"
                >
                  {creators[index]}
                </motion.h4>

                <p className="text-xs text-gray-600 mt-1">Lifestyle • Reels</p>
                <span className="inline-block mt-2 text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                  Verified
                </span>
              </motion.div>

              {/* Center */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="px-4 py-1 bg-blue-500 text-white text-xs rounded-full shadow"
              >
                Collaboration
              </motion.div>

              {/* Brand */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-white rounded-2xl shadow-md p-4 w-64 text-center"
              >
                <p className="text-xs text-gray-500">Brand</p>
                <motion.h4
                  key={brandIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-semibold text-gray-900 mt-1"
                >
                  {brands[brandIndex]}
                </motion.h4>

                <p className="text-xs text-gray-600 mt-1">Campaign: Reels</p>
                <span className="inline-block mt-2 text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                  Live
                </span>
              </motion.div>
            </div>

            {/* ================= DESKTOP VIEW ================= */}
            <div className="relative z-10 hidden md:block h-80">
              {/* Creator */}
              <motion.div
                style={{ x, y }}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 left-10 bg-white rounded-2xl shadow-md p-4 w-44"
              >
                <p className="text-xs text-gray-500">Creator</p>

                <motion.h4
                  key={index}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-semibold text-gray-900 mt-1"
                >
                  {creators[index]}
                </motion.h4>

                <p className="text-xs text-gray-600 mt-1">Lifestyle • Reels</p>
                <span className="inline-block mt-2 text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                  Verified
                </span>
              </motion.div>

              {/* Brand */}
              <motion.div
                style={{ x, y }}
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-12 right-10 bg-white rounded-2xl shadow-md p-4 w-44"
              >
                <p className="text-xs text-gray-500">Brand</p>
                <motion.h4
                  key={brandIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-semibold text-gray-900 mt-1"
                >
                  {brands[brandIndex]}
                </motion.h4>

                <p className="text-xs text-gray-600 mt-1">Campaign: Reels</p>
                <span className="inline-block mt-2 text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                  Live
                </span>
              </motion.div>

              {/* Center Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="px-4 py-2 bg-blue-500 text-white text-sm rounded-full shadow"
                >
                  Collaboration
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            We Manage Creators. We Bring Brands. We Create Impact.
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
            From creator management to content and campaigns — we handle
            everything end to end.
          </p>
        </div>
      </section>

      {/* FOR CREATORS */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Built for Creators
            </h3>

            <ul className="mt-5 space-y-3 text-gray-600 text-sm md:text-base">
              <li>✔ Brand collaboration opportunities</li>
              <li>✔ Fair deal negotiation</li>
              <li>✔ Clear briefs & timelines</li>
              <li>✔ Editing & design support</li>
              <li>✔ Long-term growth focus</li>
            </ul>

            <Link
              to="/join-creator"
              className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition"
            >
              Join as a Creator
            </Link>
          </div>

          <div className="relative w-full min-h-[22rem] md:h-64 rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50 p-4 md:p-6 overflow-hidden flex flex-col md:block gap-4">
            {/* Profile Card */}
            <motion.div
              whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                transformStyle: "preserve-3d",
              }}
              className="
    relative z-20 rounded-2xl shadow-lg p-4 w-full md:w-48
    md:absolute md:top-8 md:left-8
  "
            >
              <p className="text-xs text-gray-500">Creator Profile</p>

              {/* 🔄 Auto-changing creator */}
              <div className="relative h-6 overflow-hidden mt-1">
                <AnimatePresence mode="wait">
                  <motion.h4
                    key={creatorIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-0 top-0 font-semibold text-gray-900"
                  >
                    {creators[creatorIndex]}
                  </motion.h4>
                </AnimatePresence>
              </div>

              <p className="text-xs text-gray-600 mt-1">Fashion • Lifestyle</p>

              {/* 📈 Auto-changing numbers */}
              <motion.div
                key={statsIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-3 text-xs text-gray-700 space-y-1"
              >
                <p>📈 Followers: {(followers / 1000).toFixed(0)}K</p>
                <p>🎥 Avg Views: {(views / 1000).toFixed(0)}K</p>
              </motion.div>

              {/* 📊 Progress Bars */}
              <div className="mt-3 space-y-2">
                <div>
                  <p className="text-[10px] text-gray-500">Engagement</p>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: ["30%", "80%", "30%"] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-full bg-purple-500 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-gray-500">Growth</p>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: ["40%", "90%", "40%"] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <div
              className="
    flex items-center justify-center
    md:absolute md:inset-0
  "
            >
              <div className="px-4 py-2 bg-purple-500 text-white text-sm rounded-full shadow">
                Creator Growth
              </div>
            </div>

            {/* Brand Deal Card */}
            <div
              className="
    bg-white rounded-2xl shadow-md p-4 w-full md:w-48
    md:absolute md:bottom-8 md:right-8
  "
            >
              <p className="text-xs text-gray-500">Active Deal</p>

              {/* 🔄 Auto-changing Brand Name */}
              <div className="relative h-6 overflow-hidden mt-1">
                <AnimatePresence mode="wait">
                  <motion.h4
                    key={brandIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-0 top-0 font-semibold text-gray-900"
                  >
                    {brands[brandIndex]}
                  </motion.h4>
                </AnimatePresence>
              </div>

              <p className="text-xs text-gray-600 mt-1">Reel Collaboration</p>

              <span className="inline-block mt-2 text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                Approved
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOR BRANDS */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
  whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  style={{
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    transformStyle: "preserve-3d",
  }}
  className="w-full h-full rounded-3xl p-6 flex flex-col justify-between shadow-lg"
>
  {/* Header */}
  <div>
    <p className="text-xs text-gray-500">Campaign Preview</p>

    {/* 🔄 Auto-changing campaign name */}
    <div className="relative h-7 overflow-hidden mt-1">
      <AnimatePresence mode="wait">
        <motion.h3
          key={campaignIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="absolute left-0 top-0 text-xl font-semibold text-gray-900"
        >
          {campaigns[campaignIndex]}
        </motion.h3>
      </AnimatePresence>
    </div>

    <p className="text-sm text-gray-600 mt-2">
      Fashion • Instagram Reels
    </p>
  </div>

  {/* Stats */}
  <div className="grid grid-cols-2 gap-3 mt-4">
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl p-3 shadow-sm"
    >
      <p className="text-xs text-gray-500">Creators</p>
      <p className="text-lg font-semibold">
        {campaignStats[campaignIndex].creators}
      </p>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl p-3 shadow-sm"
    >
      <p className="text-xs text-gray-500">Reach</p>
      <p className="text-lg font-semibold">
        {campaignStats[campaignIndex].reach}
      </p>
    </motion.div>
  </div>

  {/* Status */}
  <div className="flex gap-2 mt-4">
    <span className="text-xs px-3 py-1 bg-purple-500 text-white rounded-full">
      Live
    </span>
    <span className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
      On Track
    </span>
  </div>
</motion.div>


          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Built for Brands
            </h3>

            <ul className="mt-5 space-y-3 text-gray-600 text-sm md:text-base">
              <li>✔ Influencer campaigns</li>
              <li>✔ Creator shortlisting</li>
              <li>✔ Video & graphic production</li>
              <li>✔ Content strategy</li>
              <li>✔ Campaign insights</li>
            </ul>

            <Link
              to="/start-compaign"
              className="inline-block mt-6 px-6 py-3 border border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-50 transition"
            >
              Start a Campaign
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
            Our Services
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Video Editing",
              "Graphic Designing",
              "Creator Management",
              "Influencer Marketing",
              "Brand Identity",
              "Website & Digital Design",
            ].map((service) => (
              <div
                key={service}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900">{service}</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Tailored solutions focused on real growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <section className="bg-blue-500 py-14 md:py-20 text-center text-white">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Ready to Grow With BrandNest?
          </h2>
          <p className="mt-3 text-sm md:text-base text-blue-100">
            Let’s build meaningful creator partnerships and brand campaigns.
          </p>
          <Link
            to="/work-with-us"
            className="block w-full mt-8 px-6 py-3 bg-white text-blue-500 rounded-full font-medium text-center shadow-sm hover:bg-gray-100 transition"
          >
            Work With Us
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/join-creator"
            className="inline-block mt-4 text-sm font-medium text-white underline underline-offset-4 hover:text-blue-200 transition"
          >
            Or join as a creator →
          </Link>
        </div>
      </section>
    </main>
  );
}
