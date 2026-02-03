export default function FitScore() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-xs md:text-sm font-medium rounded-full bg-green-100 text-green-600">
          Smart Matching System
        </span>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Brand–Creator Fit Score
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
          Every collaboration is evaluated for niche relevance, audience
          alignment, and content style — before it’s proposed to a creator.
        </p>

        {/* Fit Cards */}
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          
          {/* High Fit */}
          <div className="p-5 rounded-xl bg-green-50 border border-green-200 shadow-sm">
            <h3 className="text-sm md:text-lg font-semibold text-green-700">
              🟢 High Fit
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              Strong alignment. Recommended for best engagement and authenticity.
            </p>
          </div>

          {/* Medium Fit */}
          <div className="p-5 rounded-xl bg-yellow-50 border border-yellow-200 shadow-sm">
            <h3 className="text-sm md:text-lg font-semibold text-yellow-700">
              🟡 Medium Fit
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              Partial alignment. Creator can review and decide comfortably.
            </p>
          </div>

          {/* Low Fit */}
          <div className="p-5 rounded-xl bg-red-50 border border-red-200 shadow-sm">
            <h3 className="text-sm md:text-lg font-semibold text-red-700">
              🔴 Low Fit
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              Limited alignment. Usually not recommended.
            </p>
          </div>

        </div>

        {/* Trust Line */}
        <p className="mt-8 text-xs md:text-sm text-gray-500">
          We prioritize relevance and long-term trust — never random matches.
        </p>

      </div>
    </section>
  );
}
