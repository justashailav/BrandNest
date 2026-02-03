export default function StartCampaign() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const message = `
🚀 *New Campaign Request – BrandNest*

🏢 Brand: ${form.brand.value}
🌐 Website / Handle: ${form.website.value}
👤 Contact Name: ${form.contact.value}
📧 Email: ${form.email.value}
📱 Phone: ${form.phone.value}

🎯 Campaign Goal: ${form.goal.value}
📲 Platform: ${form.platform.value}
👥 Creator Type: ${form.creatorType.value}
💰 Budget: ${form.budget.value}
⏳ Timeline: ${form.timeline.value}

📝 Notes:
${form.notes.value || "N/A"}
    `;

    const whatsappURL = `https://wa.me/919015118744?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    setTimeout(() => {
      window.location.href = "/campaign-success";
    }, 500);
  };

  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Start Your Campaign with BrandNest
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            Share your campaign goals and brand details. We’ll plan the right
            creator strategy and handle execution end-to-end.
          </p>
          <p className="mt-3 text-xs text-gray-500">
            ✔ Thoughtful creator matching • ✔ Transparent pricing • ✔ End-to-end
            management
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              Campaign Brief
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <Input
                name="brand"
                label="Brand / Company Name"
                placeholder="Your brand name"
                required
              />
              <Input
                name="website"
                label="Website or Instagram Handle"
                placeholder="https:// or @brandname"
              />
              <Input
                name="contact"
                label="Contact Person Name"
                placeholder="Your full name"
                required
              />
              <Input
                name="email"
                label="Email Address"
                type="email"
                placeholder="you@company.com"
                required
              />
              <Input
                name="phone"
                label="Phone / WhatsApp Number"
                placeholder="+91 XXXXX XXXXX"
                required
              />

              <Select
                name="goal"
                label="Campaign Goal"
                options={[
                  "Brand Awareness",
                  "Sales / Conversions",
                  "App Installs",
                  "UGC Content",
                  "Product Launch",
                ]}
              />

              <Select
                name="platform"
                label="Preferred Platform"
                options={["Instagram", "YouTube", "Both"]}
              />

              <Select
                name="creatorType"
                label="Creator Type Needed"
                options={[
                  "Micro Creators",
                  "Mid-Tier Creators",
                  "UGC Creators",
                  "Open to Suggestions",
                ]}
              />

              <Select
                name="budget"
                label="Estimated Budget Range"
                options={[
                  "Below ₹15,000",
                  "₹15,000 – ₹30,000",
                  "₹30,000 – ₹60,000",
                  "₹60,000+",
                ]}
              />

              <Input
                name="timeline"
                label="Campaign Timeline"
                placeholder="Immediate / Next month"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  rows="4"
                  placeholder="Any references or expectations"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-green-500 text-white py-3 rounded-full font-medium hover:bg-green-600 transition"
              >
                Submit & Send on WhatsApp
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-xs md:text-sm text-gray-500">
            After submitting, WhatsApp will open for confirmation.
          </p>
        </div>
      </section>
    </main>
  );
}

function Input({ label, type = "text", placeholder, name, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
function Select({ label, options, name }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        name={name}
        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
