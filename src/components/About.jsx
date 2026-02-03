export default function About() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About BrandNest
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Building meaningful partnerships between brands and creators
            through strategy, creativity, and trust.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Who We Are
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              BrandNest is a creator management and creative agency built to
              simplify influencer marketing for both brands and creators.
              We manage creators professionally and help brands collaborate
              with the right voices — not just the biggest numbers.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our focus is on authenticity, quality content, and long-term
              relationships that benefit everyone involved.
            </p>
          </div>

          <div className="hidden md:block">
            <div className="w-full h-64 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 font-medium">
              About BrandNest Visual
            </div>
          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            What We Do
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We act as a bridge between brands and creators, managing everything
            from collaborations to content and campaigns.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            <InfoCard
              title="Creator Management"
              desc="We represent creators, manage brand deals, handle communication, and ensure fair and transparent collaborations."
            />
            <InfoCard
              title="Influencer Marketing"
              desc="We help brands reach the right audience through creator-led campaigns that feel authentic and effective."
            />
            <InfoCard
              title="Creative Services"
              desc="From video editing to graphic designing, we support campaigns with high-quality creative execution."
            />
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Values
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              "Authenticity",
              "Transparency",
              "Quality",
              "Long-Term Growth",
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm"
              >
                <h3 className="font-semibold text-gray-900">{value}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  We prioritize genuine connections and honest collaboration.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="hidden md:block">
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
              Trust & Growth Visual
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose BrandNest?
            </h2>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Creator-first and brand-focused approach</li>
              <li>• No forced collaborations</li>
              <li>• Carefully matched creators</li>
              <li>• Clear communication & timelines</li>
              <li>• Quality over quantity</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-500 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Let’s Build Something Meaningful
        </h2>
        <p className="mt-4 max-w-xl mx-auto">
          Whether you’re a brand or a creator, BrandNest is here to help you grow.
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

/* Reusable Info Card */
function InfoCard({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600">{desc}</p>
    </div>
  );
}
