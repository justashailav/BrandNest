import { Link } from "react-router-dom";
import CreatorGuarantee from "./CreatorGaurantee";
import FitScore from "./FitScore";
import { CreatorFAQ } from "./CreatorFAQ";

export default function JoinCreator() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Join BrandNest as a Creator
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            We manage creators and bring genuine brand collaborations —
            so you can focus on creating, not chasing deals.
          </p>

          {/* Trust line */}
          <p className="mt-3 text-xs text-gray-500">
            ✔ Free to join • ✔ No forced deals • ✔ Creator-first approach
          </p>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why Join BrandNest?
            </h2>

            <ul className="mt-5 space-y-3 text-sm md:text-base text-gray-600">
              <li>✔ Relevant brand collaborations</li>
              <li>✔ No forced deals — you choose</li>
              <li>✔ Fair pricing & transparency</li>
              <li>✔ Clear briefs & timelines</li>
              <li>✔ Long-term creator growth</li>
            </ul>
          </div>

          <div className="hidden md:flex">
            <div className="w-full h-64 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 font-medium">
              Creator Growth
            </div>
          </div>

        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
            What We Handle for You
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Brand Deals",
                desc: "Collaboration opportunities aligned with your niche.",
              },
              {
                title: "Negotiation",
                desc: "Fair pricing and deliverables handled for you.",
              },
              {
                title: "Campaign Management",
                desc: "Briefs, timelines, and execution.",
              },
              {
                title: "Creative Support",
                desc: "Editing and design support when needed.",
              },
              {
                title: "Communication",
                desc: "Professional, clear brand communication.",
              },
              {
                title: "Growth Focus",
                desc: "Long-term partnerships over one-offs.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Who Can Join?
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            Follower count matters less than content quality, consistency,
            and audience trust.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6 text-left max-w-4xl mx-auto text-sm md:text-base text-gray-600">
            <ul className="space-y-2">
              <li>✔ Instagram / YouTube creators</li>
              <li>✔ UGC creators</li>
              <li>✔ Any niche</li>
            </ul>

            <ul className="space-y-2">
              <li>✔ Consistent content</li>
              <li>✔ Authentic engagement</li>
              <li>✔ Paid or barter collaborations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CREATOR GUARANTEE */}
      <CreatorGuarantee />

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How It Works
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Apply to BrandNest",
              "Get Verified",
              "Receive Opportunities",
              "Accept What You Like",
              "Create & Get Paid",
            ].map((step, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-sm">
                <span className="text-blue-500 font-bold text-lg">
                  {index + 1}
                </span>
                <p className="mt-2 text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTE */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            Joining BrandNest is <strong>100% free</strong>.  
            We always take creator approval before confirming any collaboration.
          </p>
        </div>
      </section>

      {/* FIT SCORE */}
      <FitScore />

      {/* FINAL CTA */}
      <section className="bg-blue-500 py-14 md:py-20 text-center text-white">
        <div className="max-w-xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Join BrandNest?
          </h2>

          <p className="mt-3 text-sm md:text-base text-blue-100">
            Apply now and get access to genuine brand collaborations.
          </p>

          <Link
            to="/apply-creator"
            className="block w-full mt-8 px-6 py-3 bg-white text-blue-500 rounded-full font-medium shadow-sm"
          >
            Apply as a Creator
          </Link>

        </div>
      </section>
      <CreatorFAQ/>
    </main>
  );
}
