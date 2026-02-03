export default function Services() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            End-to-end creative, creator management, and influencer marketing
            solutions designed to help brands grow and creators succeed.
          </p>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            What We Offer
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {/* Video Editing */}
            <ServiceCard
              title="Video Editing"
              points={[
                "Instagram Reels & Shorts",
                "YouTube & long-form videos",
                "Talking-head & UGC edits",
                "Subtitles & motion text",
                "Trend-based editing",
              ]}
            />

            {/* Graphic Designing */}
            <ServiceCard
              title="Graphic Designing"
              points={[
                "Social media posts & carousels",
                "Thumbnails & banners",
                "Ad creatives",
                "Promotional posters",
                "Brand visuals",
              ]}
            />

            {/* Creator Management */}
            <ServiceCard
              title="Creator Management"
              points={[
                "Brand collaborations",
                "Deal negotiation",
                "Campaign coordination",
                "Timelines & approvals",
                "Long-term creator growth",
              ]}
            />

            {/* Influencer Marketing */}
            <ServiceCard
              title="Influencer Marketing"
              points={[
                "Creator discovery & shortlisting",
                "Campaign planning",
                "Creator coordination",
                "Content approvals",
                "Performance tracking",
              ]}
            />

            {/* Brand Identity */}
            <ServiceCard
              title="Brand Identity & Visual Branding"
              points={[
                "Logo design",
                "Color palette & fonts",
                "Instagram grid design",
                "Brand consistency",
                "Style guidelines",
              ]}
            />

            {/* Website */}
            <ServiceCard
              title="Website & Digital Design"
              points={[
                "Business websites",
                "Creator portfolios",
                "Landing pages",
                "Website banners & graphics",
                "Modern UI design",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FOR CREATORS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Services for Creators
            </h2>
            <p className="mt-4 text-gray-600">
              We help creators focus on content while we handle brands,
              collaborations, and campaign management.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Brand deals & collaborations</li>
              <li>• Fair pricing negotiation</li>
              <li>• Clear briefs & timelines</li>
              <li>• Video editing & design support</li>
              <li>• Transparent communication</li>
            </ul>

            <a
              href="/join-creator"
              className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition"
            >
              Join as a Creator
            </a>
          </div>

          <div className="hidden md:block">
            <div className="w-full h-64 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 font-medium">
              Creator Services Visual
            </div>
          </div>
        </div>
      </section>

      {/* FOR BRANDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:block">
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
              Brand Services Visual
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Services for Brands
            </h2>
            <p className="mt-4 text-gray-600">
              We help brands reach the right audience through creators and
              content that feels authentic and impactful.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Influencer & creator campaigns</li>
              <li>• Creator shortlisting & management</li>
              <li>• High-quality creative production</li>
              <li>• Campaign execution & reporting</li>
              <li>• Long-term brand partnerships</li>
            </ul>

            <a
              href="/work-with-us"
              className="inline-block mt-6 px-6 py-3 border border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-50 transition"
            >
              Work With BrandNest
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-500 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Need Creative or Creator Support?
        </h2>
        <p className="mt-4 max-w-xl mx-auto">
          Whether you’re a brand or a creator, BrandNest has solutions built for you.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/work-with-us"
            className="px-6 py-3 bg-white text-blue-500 rounded-full font-medium"
          >
            Work With Us
          </a>
          <a
            href="/join-creator"
            className="px-6 py-3 border border-white rounded-full font-medium"
          >
            Join as a Creator
          </a>
        </div>
      </section>

    </main>
  );
}

/* Reusable Card */
function ServiceCard({ title, points }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <ul className="mt-4 space-y-2 text-gray-600">
        {points.map((point, index) => (
          <li key={index}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}
