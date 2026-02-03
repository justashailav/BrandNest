export default function FitScore() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-green-100 text-green-600">
            Smart Matching System
          </span>

          <h2 className="text-3xl font-bold text-gray-900">
            Brand–Creator Fit Score
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Every collaboration is evaluated to ensure it aligns with the
            creator’s niche, audience, and content style — before it’s proposed.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {/* High Fit */}
          <div className="p-6 rounded-2xl bg-green-50 border border-green-200">
            <h3 className="text-lg font-semibold text-green-700">
              🟢 High Fit
            </h3>
            <p className="mt-3 text-sm text-gray-700">
              Strong alignment between brand and creator. Recommended for best
              engagement and authenticity.
            </p>
          </div>

          {/* Medium Fit */}
          <div className="p-6 rounded-2xl bg-yellow-50 border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-700">
              🟡 Medium Fit
            </h3>
            <p className="mt-3 text-sm text-gray-700">
              Partial alignment. Creator can review details and decide based on
              interest and comfort.
            </p>
          </div>

          {/* Low Fit */}
          <div className="p-6 rounded-2xl bg-red-50 border border-red-200">
            <h3 className="text-lg font-semibold text-red-700">
              🔴 Low Fit
            </h3>
            <p className="mt-3 text-sm text-gray-700">
              Limited alignment. Usually not recommended unless there is strong
              creator interest.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          We focus on relevance, authenticity, and long-term value — not random
          matches.
        </p>

      </div>
    </section>
  );
}
