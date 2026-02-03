import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            About BrandNest
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            Building meaningful partnerships between brands and creators
            through strategy, creativity, and trust.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Who We Are
            </h2>

            <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
              BrandNest is a creator management and creative agency built to
              simplify influencer marketing for both brands and creators.
            </p>

            <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
              We focus on authenticity, quality content, and long-term
              relationships — not just big numbers.
            </p>
          </div>

          <div className="hidden md:flex">
            <div className="w-full h-64 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 font-medium">
              About BrandNest
            </div>
          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            What We Do
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            We act as a bridge between brands and creators, managing
            collaborations, content, and campaigns end-to-end.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            <InfoCard
              title="Creator Management"
              desc="We manage brand deals, communication, approvals, and long-term creator growth."
            />
            <InfoCard
              title="Influencer Marketing"
              desc="We help brands reach the right audience through creator-led campaigns."
            />
            <InfoCard
              title="Creative Services"
              desc="High-quality video editing and graphic design to support campaigns."
            />
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our Values
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
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
                <p className="mt-2 text-xs md:text-sm text-gray-600">
                  We believe in honest, meaningful collaboration.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="hidden md:flex">
            <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
              Trust & Growth
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why Choose BrandNest?
            </h2>

            <ul className="mt-5 space-y-3 text-sm md:text-base text-gray-600">
              <li>✔ Creator-first approach</li>
              <li>✔ No forced collaborations</li>
              <li>✔ Thoughtful creator matching</li>
              <li>✔ Clear communication & timelines</li>
              <li>✔ Quality over quantity</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA (FIXED FOR MOBILE) */}
      <section className="bg-blue-500 py-14 md:py-20 text-center text-white">
        <div className="max-w-xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-bold">
            Let’s Build Something Meaningful
          </h2>

          <p className="mt-3 text-sm md:text-base text-blue-100">
            Whether you’re a brand or a creator, BrandNest is here to help you grow.
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
function InfoCard({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-sm text-gray-600">{desc}</p>
    </div>
  );
}
