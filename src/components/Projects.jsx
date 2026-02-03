export default function Projects() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Work
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A glimpse into the creative work, campaigns, and concepts we build
            for brands and creators.
          </p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-6">
        <p className="text-center text-sm text-gray-500">
          *Some projects shown below are demo or concept work created to showcase our capabilities.
        </p>
      </section>

      {/* VIDEO WORK */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Video Editing
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-600">
                  Reel / Video Preview
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">
                    Short-Form Reel Edit
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    High-engagement Instagram reel edited for reach and retention.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN WORK */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Graphic Designing
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-600">
                  Design Preview
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">
                    Social Media Creative
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Clean, brand-aligned post designed for visibility and clarity.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREATOR CAMPAIGNS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Creator Campaign Concepts
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Brand × Creator Collaboration
                </h3>
                <p className="mt-4 text-gray-600">
                  End-to-end influencer campaign concept including creator
                  shortlisting, content deliverables, and posting strategy.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Creator niche matching</li>
                  <li>• Reel + story deliverables</li>
                  <li>• Campaign timeline & execution</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-500 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Want Work Like This for Your Brand?
        </h2>
        <p className="mt-4 max-w-xl mx-auto">
          Let’s build creative content and campaigns that actually perform.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/work-with-us"
            className="px-6 py-3 bg-white text-blue-500 rounded-full font-medium"
          >
            Work With Us
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-white rounded-full font-medium"
          >
            Contact Us
          </a>
        </div>
      </section>

    </main>
  );
}
