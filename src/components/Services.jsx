import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-lg max-w-3xl mx-auto">
            End-to-end creative, creator management, and influencer marketing
            solutions built for growth.
          </p>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
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
          </div>
        </div>
      </section>

      {/* FOR CREATORS */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Services for Creators
            </h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              Focus on creating content — we handle brands, negotiations, and campaigns.
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

          <div className="hidden md:flex">
            <div className="w-full h-64 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500">
              Creator Services
            </div>
          </div>

        </div>
      </section>

      {/* FOR BRANDS */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="hidden md:flex">
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
              Brand Services
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Services for Brands
            </h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              Reach the right audience through creators and content that feels authentic.
            </p>

            <ul className="mt-5 space-y-3 text-gray-600 text-sm md:text-base">
              <li>✔ Influencer & creator campaigns</li>
              <li>✔ Creator shortlisting</li>
              <li>✔ Creative production</li>
              <li>✔ Campaign execution</li>
              <li>✔ Reporting & insights</li>
            </ul>

            <Link
              to="/work-with-us"
              className="inline-block mt-6 px-6 py-3 border border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-50 transition"
            >
              Work With BrandNest
            </Link>
          </div>
        </div>
      </section>

      {/* CTA (FIXED FOR MOBILE) */}
      <section className="bg-blue-500 py-14 md:py-20 text-center text-white">
        <div className="max-w-xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-bold">
            Need Creative or Creator Support?
          </h2>

          <p className="mt-3 text-sm md:text-base text-blue-100">
            BrandNest has solutions built for both brands and creators.
          </p>

          {/* Primary CTA */}
          <Link
            to="/work-with-us"
            className="block w-full mt-8 px-6 py-3 bg-white text-blue-500 rounded-full font-medium shadow-sm"
          >
            Work With Us
          </Link>

          {/* Secondary CTA */}
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

/* CARD */
function ServiceCard({ title, points }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        {points.map((point, index) => (
          <li key={index}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}
