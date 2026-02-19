export function IndustriesSection() {
  const industries = [
    "D2C Brands",
    "Fashion",
    "Skincare",
    "EdTech",
    "Fitness",
    "SaaS",
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Industries We Work With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              ✔ {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
