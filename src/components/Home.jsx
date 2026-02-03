export default function Home() {
  return (
    <main className="pt-24">

      {/* HERO SECTION */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Where Creators Grow <br /> & Brands Collaborate
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              BrandNest is a creator management and creative agency that brings
              meaningful brand collaborations for creators and helps brands grow
              through powerful content and influencer marketing.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/work-with-us"
                className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition"
              >
                Work With BrandNest
              </a>
              <a
                href="/join-creator"
                className="px-6 py-3 border border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-50 transition"
              >
                Join as a Creator
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="w-full h-80 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 font-semibold">
              Hero Visual / Image
            </div>
          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            We Manage Creators. We Bring Brands. We Create Impact.
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            BrandNest works as a bridge between brands and creators, handling
            collaborations, content, and campaign execution — end to end.
          </p>
        </div>
      </section>

      {/* FOR CREATORS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Built for Creators
            </h3>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Brand collaboration opportunities</li>
              <li>• Deal negotiation & coordination</li>
              <li>• Clear briefs & timelines</li>
              <li>• Video editing & graphic support</li>
              <li>• Long-term creator growth</li>
            </ul>

            <a
              href="/join-creator"
              className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition"
            >
              Join as a Creator
            </a>
          </div>

          <div className="hidden md:block">
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
              Creator Section Visual
            </div>
          </div>

        </div>
      </section>

      {/* FOR BRANDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="hidden md:block">
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
              Brand Section Visual
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Built for Brands
            </h3>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Influencer & creator campaigns</li>
              <li>• Creator shortlisting & management</li>
              <li>• Video editing & graphic designing</li>
              <li>• Content & branding support</li>
              <li>• Campaign reporting & insights</li>
            </ul>

            <a
              href="/work-with-us"
              className="inline-block mt-6 px-6 py-3 border border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-50 transition"
            >
              Start a Campaign
            </a>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Our Services
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
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
                <h4 className="font-semibold text-lg text-gray-900">
                  {service}
                </h4>
                <p className="mt-2 text-gray-600">
                  Professional, growth-focused solutions tailored to your goals.
                </p>
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

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              "Apply / Share Goals",
              "Get Verified / Shortlisted",
              "Collaborate & Create",
              "Publish & Grow",
            ].map((step, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <span className="text-blue-500 font-bold text-xl">
                  {index + 1}
                </span>
                <p className="mt-3 text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-500 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to Grow With BrandNest?
        </h2>
        <p className="mt-4 max-w-xl mx-auto">
          Whether you’re a creator or a brand, let’s build something meaningful together.
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
