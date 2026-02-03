export default function CreatorGuarantee() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600">
          Creator-First Promise
        </span>

        <h2 className="text-3xl font-bold text-gray-900">
          Creator Approval Guarantee
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          At BrandNest, no brand collaboration is confirmed without the
          creator’s clear approval. You stay in control of what you promote
          and who you work with.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
          {[
            "No forced collaborations",
            "Full campaign details shared before confirmation",
            "Freedom to accept or decline any deal",
            "Transparent pricing & deliverables",
            "Creator-first communication",
            "Long-term trust over short-term deals",
          ].map((point, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-sm"
            >
              <p className="text-gray-700">✔ {point}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
