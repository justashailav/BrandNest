import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Work
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            A glimpse into the creative work, campaigns, and concepts we build
            for brands and creators.
          </p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-4">
        <p className="text-center text-xs md:text-sm text-gray-500 px-6">
          *Some projects shown below are demo or concept work created to showcase our capabilities.
        </p>
      </section>

      {/* VIDEO WORK */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Video Editing
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="h-44 md:h-48 bg-gray-300 flex items-center justify-center text-sm text-gray-600">
                  Reel / Video Preview
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">
                    Short-Form Reel Edit
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-gray-600">
                    High-engagement Instagram reel edited for reach and retention.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN WORK */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Graphic Designing
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="h-44 md:h-48 bg-gray-200 flex items-center justify-center text-sm text-gray-600">
                  Design Preview
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">
                    Social Media Creative
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-gray-600">
                    Clean, brand-aligned creative designed for visibility.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREATOR CAMPAIGNS */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Creator Campaign Concepts
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Brand × Creator Collaboration
                </h3>

                <p className="mt-3 text-sm md:text-base text-gray-600">
                  End-to-end influencer campaign concept including creator
                  shortlisting, content deliverables, and posting strategy.
                </p>

                <ul className="mt-4 space-y-2 text-xs md:text-sm text-gray-600">
                  <li>✔ Creator niche matching</li>
                  <li>✔ Reel + story deliverables</li>
                  <li>✔ Campaign timeline & execution</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (MOBILE-FRIENDLY) */}
      <section className="bg-blue-500 py-14 md:py-20 text-center text-white">
        <div className="max-w-xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-bold">
            Want Work Like This for Your Brand?
          </h2>

          <p className="mt-3 text-sm md:text-base text-blue-100">
            Let’s build creative content and campaigns that actually perform.
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
            to="/contact"
            className="inline-block mt-4 text-sm font-medium underline underline-offset-4"
          >
            Or contact us →
          </Link>

        </div>
      </section>

    </main>
  );
}
