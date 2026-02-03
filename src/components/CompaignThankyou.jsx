import { Link } from "react-router-dom";

export default function CampaignThankYou() {
  return (
    <main className="pt-24">
      <section className="py-20 text-center">
        <div className="max-w-xl mx-auto px-6">

          <h1 className="text-3xl font-bold text-gray-900">
            Campaign Brief Received 🚀
          </h1>

          <p className="mt-4 text-gray-600">
            Thank you for sharing your campaign details.
            Our team will review your brief and get back with next steps.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            ⏳ Expected response time: 24–48 hours
          </p>

          <Link
            to="/"
            className="inline-block mt-8 px-6 py-3 bg-blue-500 text-white rounded-full font-medium"
          >
            Back to Home
          </Link>

        </div>
      </section>
    </main>
  );
}
