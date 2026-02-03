export default function ApplyCreator() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const message = `
📩 *New Creator Application – BrandNest*

👤 Name: ${form.fullName.value}
📧 Email: ${form.email.value}
📱 Phone: ${form.phone.value}
📲 Platform: ${form.platform.value}
🔗 Profile: ${form.profile.value}
🎯 Niche: ${form.niche.value}
👥 Followers: ${form.followers.value}
🤝 Collaboration Type: ${form.collab.value}

📝 Notes:
${form.notes.value || "N/A"}
    `;

    const whatsappURL = `https://wa.me/919015118744?text=${encodeURIComponent(message)}`;
     window.open(whatsappURL, "_blank");
    setTimeout(() => {
      window.location.href = "/apply-success";
    }, 500);
  };

  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Apply as a Creator
          </h1>

          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Join BrandNest and get access to genuine brand collaborations.
            We manage deals so you can focus on creating content.
          </p>

          <p className="mt-3 text-xs text-gray-500">
            ✔ Free to join • ✔ No forced collaborations • ✔ Creator approval guaranteed
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              Creator Details
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <Input name="fullName" label="Full Name" placeholder="Your full name" required />
              <Input name="email" label="Email Address" type="email" placeholder="you@example.com" required />
              <Input name="phone" label="Phone / WhatsApp Number" placeholder="+91 XXXXX XXXXX" required />

              <Select
                name="platform"
                label="Primary Platform"
                options={["Instagram", "YouTube", "UGC Creator", "Other"]}
              />

              <Input name="profile" label="Profile Link" placeholder="https://" required />
              <Input name="niche" label="Content Niche" placeholder="Lifestyle, Fashion, Travel, Tech, etc." />
              <Input name="followers" label="Follower Count (Approx.)" placeholder="e.g. 10k, 50k" />

              <Select
                name="collab"
                label="Preferred Collaboration Type"
                options={["Paid", "Barter", "Both"]}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Anything else we should know?
                </label>
                <textarea
                  name="notes"
                  rows="4"
                  placeholder="Optional"
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
            Joining BrandNest is completely free.  
            We review applications carefully and contact shortlisted creators only.
          </p>

        </div>
      </section>

    </main>
  );
}

/* Reusable Input */
function Input({ label, type = "text", placeholder, name, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
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

/* Reusable Select */
function Select({ label, options, name }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
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
