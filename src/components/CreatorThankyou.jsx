import { Link } from "react-router-dom";

export default function CreatorThankYou() {
  return (
    <main className="pt-24">
      <section className="py-20 text-center">
        <div className="max-w-xl mx-auto px-6">

          <h1 className="text-3xl font-bold text-gray-900">
            Application Submitted 🎉
          </h1>

          <p className="mt-4 text-gray-600">
            Thank you for applying to BrandNest.  
            Our team will review your profile and reach out if you’re shortlisted.
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
