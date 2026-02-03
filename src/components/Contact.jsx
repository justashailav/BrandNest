export default function Contact() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact BrandNest
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate?  
            Fill out the form or reach us directly — we’ll get back to you soon.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  You Are
                </label>
                <select className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Brand</option>
                  <option>Creator</option>
                  <option>Agency / Partner</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirement"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-full font-medium hover:bg-blue-600 transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Get in Touch
            </h2>

            <p className="mt-4 text-gray-600">
              Prefer direct communication?  
              Reach out to us via WhatsApp or email.
            </p>

            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                📧 <strong>Email:</strong> brandnestworks@email.com
              </p>
              <p>
                📱 <strong>WhatsApp:</strong> +91 9015118744
              </p>
              <p>
                🌍 <strong>Location:</strong> India (Working Globally)
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919015118744"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-3 bg-green-500 text-white rounded-full font-medium text-center hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
