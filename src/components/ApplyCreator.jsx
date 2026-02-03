export default function ApplyCreator() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Apply as a Creator
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join BrandNest and get access to genuine brand collaborations.
            We manage deals so you can focus on creating content.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Creator Details
            </h2>

            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
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

              {/* Phone */}
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

              {/* Platform */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Primary Platform
                </label>
                <select className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Instagram</option>
                  <option>YouTube</option>
                  <option>UGC Creator</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Profile Link */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Profile Link
                </label>
                <input
                  type="url"
                  placeholder="https://"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Niche */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Content Niche
                </label>
                <input
                  type="text"
                  placeholder="Lifestyle, Fashion, Travel, Tech, etc."
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Followers */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Follower Count (Approx.)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 10k, 50k"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Collaboration Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Preferred Collaboration Type
                </label>
                <select className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Paid</option>
                  <option>Barter</option>
                  <option>Both</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Anything else we should know?
                </label>
                <textarea
                  rows="4"
                  placeholder="Optional"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-full font-medium hover:bg-blue-600 transition"
              >
                Submit Application
              </button>

            </form>
          </div>

          {/* NOTE */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Joining BrandNest is completely free.  
            We review applications carefully and contact shortlisted creators.
          </p>

        </div>
      </section>

    </main>
  );
}
