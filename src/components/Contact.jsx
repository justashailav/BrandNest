export default function Contact() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Contact BrandNest
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate?
            Fill out the form or reach us directly.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* FORM */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <Input label="Full Name" placeholder="Your name" />

              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
              />

              <Input
                label="Phone / WhatsApp Number"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
              />

              <Select
                label="You Are"
                options={["Brand", "Creator", "Agency / Partner"]}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirement"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-blue-500 text-white py-3 rounded-full font-medium hover:bg-blue-600 transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-center">

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Get in Touch
            </h2>

            <p className="mt-3 text-sm md:text-base text-gray-600">
              Prefer direct communication?
              Reach out via WhatsApp or email.
            </p>

            <div className="mt-6 space-y-3 text-sm md:text-base text-gray-700">
              <p>📧 <strong>Email:</strong> brandnestworks@gmail.com</p>
              <p>📱 <strong>WhatsApp:</strong> +91 9015118744</p>
              <p>🌍 <strong>Location:</strong> India (Working Globally)</p>
            </div>
            <a
              href="https://wa.me/919015118744"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-3 bg-green-500 text-white rounded-full font-medium text-center hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>

            {/* Trust Note */}
            <p className="mt-4 text-xs text-gray-500">
              We usually respond within 24 hours.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}

/* Reusable Input */
function Input({ label, type = "text", placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

/* Reusable Select */
function Select({ label, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
