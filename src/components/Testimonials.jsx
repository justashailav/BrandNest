export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          What People Say About BrandNest
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              text: "BrandNest made collaborations stress-free. Clear communication and fair deals.",
              role: "Lifestyle Creator",
            },
            {
              text: "Their creator matching was on point. Content felt authentic and well managed.",
              role: "D2C Brand Owner",
            },
            {
              text: "Professional execution and transparent process throughout the campaign.",
              role: "Marketing Manager",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-700 text-sm">“{item.text}”</p>
              <p className="mt-4 text-xs font-medium text-gray-500">
                — {item.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
