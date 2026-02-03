import { Link } from "react-router-dom";
import { BrandFAQ } from "./BrandFAQ";

export default function WorkWithUs() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Work With BrandNest
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            We help brands grow through the right creators, powerful content,
            and well-managed influencer campaigns.
          </p>

          {/* Trust line */}
          <p className="mt-3 text-xs text-gray-500">
            ✔ Creator-first • ✔ Quality-focused • ✔ Transparent execution
          </p>
        </div>
      </section>

      {/* PROBLEM + SOLUTION */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why Brands Choose BrandNest
            </h2>

            <ul className="mt-5 space-y-3 text-sm md:text-base text-gray-600">
              <li>✔ Finding the right creators takes time</li>
              <li>✔ Campaign coordination gets messy</li>
              <li>✔ Content quality is inconsistent</li>
              <li>✔ Results don’t meet expectations</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              Our Solution
            </h3>
            <p className="mt-3 text-sm md:text-base text-gray-600">
              We manage creators, campaigns, and creatives end-to-end —
              focusing on relevance, quality, and smooth execution.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
            What We Offer Brands
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Influencer Campaigns",
                desc: "Creator-led campaigns built for reach and trust.",
              },
              {
                title: "Creator Shortlisting",
                desc: "Thoughtful matching based on brand & audience fit.",
              },
              {
                title: "Campaign Management",
                desc: "From briefing to posting — fully handled.",
              },
              {
                title: "Video Editing",
                desc: "Scroll-stopping reels, shorts & videos.",
              },
              {
                title: "Graphic Designing",
                desc: "Clean visuals for social media & ads.",
              },
              {
                title: "Content Strategy",
                desc: "Content aligned with your business goals.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How It Works
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Share Your Goal",
              "We Shortlist Creators",
              "Finalize Strategy",
              "Content Goes Live",
              "You Get Results",
            ].map((step, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-xl shadow-sm">
                <span className="text-blue-500 font-bold text-lg">
                  {index + 1}
                </span>
                <p className="mt-2 text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
            Campaign Packages
          </h2>
          <p className="mt-3 text-sm md:text-base text-center text-gray-600">
            Flexible pricing based on your goals and scale.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">

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
      <section className="bg-blue-500 py-14 md:py-20 text-center text-white">
        <div className="max-w-xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Start a Campaign?
          </h2>

          <p className="mt-3 text-sm md:text-base text-blue-100">
            Tell us about your brand and we’ll plan the right campaign.
          </p>

          <Link
            to="/start-compaign"
            className="block w-full mt-8 px-6 py-3 bg-white text-blue-500 rounded-full font-medium shadow-sm"
          >
            Start a Campaign
          </Link>

        </div>
      </section>
      <BrandFAQ/>
    </main>
  );
}

/* PACKAGE CARD */
function PackageCard({ title, price, points, highlight }) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-sm ${
        highlight ? "bg-blue-500 text-white" : "bg-white"
      }`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 font-medium">{price}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {points.map((point, index) => (
          <li key={index}>✔ {point}</li>
        ))}
      </ul>
    </div>
  );
}
