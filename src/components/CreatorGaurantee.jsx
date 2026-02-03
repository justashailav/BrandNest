export default function CreatorGuarantee() {
  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-xs md:text-sm font-medium rounded-full bg-blue-100 text-blue-600">
          Creator-First Promise
        </span>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Creator Approval Guarantee
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
          At BrandNest, no brand collaboration is confirmed without the creator’s
          clear approval. You stay in control of what you promote and who you
          work with — always.
        </p>

        {/* Points */}
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          {[
            "No forced collaborations",
            "Full campaign details shared upfront",
            "Freedom to accept or decline any deal",
            "Transparent pricing & deliverables",
            "Creator-first communication",
            "Trust-focused long-term partnerships",
          ].map((point, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm md:text-base text-gray-700">
                ✔ {point}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs md:text-sm text-gray-500">
          We believe creators grow best when they feel respected, informed, and in control.
        </p>
      </div>
    </section>
  );
}
