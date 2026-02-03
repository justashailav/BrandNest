export default function WorkWithUs() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Work With BrandNest
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We help brands grow through the right creators, powerful content,
            and well-managed influencer campaigns.
          </p>
        </div>
      </section>

      {/* PROBLEM + SOLUTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Why Brands Choose BrandNest
            </h2>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li>• Finding the right creators is time-consuming</li>
              <li>• Managing campaigns & follow-ups is messy</li>
              <li>• Content often lacks quality & consistency</li>
              <li>• Results don’t match expectations</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Our Solution
            </h3>
            <p className="mt-4 text-gray-600">
              BrandNest manages creators, campaigns, and creatives end-to-end.
              We focus on relevance, quality, and smooth execution — so your
              brand gets real visibility and engagement.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            What We Offer Brands
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Influencer Campaigns",
                desc: "Creator-led campaigns designed for reach, trust, and engagement.",
              },
              {
                title: "Creator Shortlisting",
                desc: "We match brands with creators that truly align with their audience.",
              },
              {
                title: "Campaign Management",
                desc: "From briefing to posting — we handle everything.",
              },
              {
                title: "Video Editing",
                desc: "High-quality reels, shorts, and videos that stop the scroll.",
              },
              {
                title: "Graphic Designing",
                desc: "Clean, professional visuals for social media & ads.",
              },
              {
                title: "Content Strategy",
                desc: "We help you plan content that supports your business goals.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            How It Works
          </h2>

          <div className="mt-10 grid md:grid-cols-5 gap-6">
            {[
              "Share Your Campaign Goal",
              "We Shortlist Creators",
              "Finalize Strategy",
              "Content Goes Live",
              "You Get Results",
            ].map((step, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <span className="text-blue-500 font-bold text-xl">
                  {index + 1}
                </span>
                <p className="mt-3 text-gray-700 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Campaign Packages
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Flexible pricing based on your campaign goals and scale.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            <PackageCard
              title="Starter Campaign"
              price="Starting from ₹15,000"
              points={[
                "1–3 creators",
                "Campaign coordination",
                "Basic reporting",
              ]}
            />

            <PackageCard
              title="Growth Campaign"
              price="Starting from ₹35,000"
              highlight
              points={[
                "3–7 creators",
                "Creator shortlisting",
                "Video & reel content",
                "Campaign management",
              ]}
            />

            <PackageCard
              title="Premium Campaign"
              price="Custom Pricing"
              points={[
                "7+ creators",
                "Full influencer strategy",
                "Creative production",
                "Detailed insights",
              ]}
            />

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-500 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to Start a Campaign?
        </h2>
        <p className="mt-4 max-w-xl mx-auto">
          Tell us about your brand and we’ll help you plan the right campaign.
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 px-8 py-3 bg-white text-blue-500 rounded-full font-medium"
        >
          Start a Campaign
        </a>
      </section>

    </main>
  );
}

/* Package Card Component */
function PackageCard({ title, price, points, highlight }) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-sm ${
        highlight ? "bg-blue-500 text-white" : "bg-white"
      }`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 font-medium">{price}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {points.map((point, index) => (
          <li key={index}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}
