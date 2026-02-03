import { Link } from "react-router-dom";
import CreatorGuarantee from "./CreatorGaurantee";
import FitScore from "./FitScore";

export default function JoinCreator() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Join BrandNest as a Creator
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We manage creators and bring them genuine brand collaborations —
            so you can focus on creating, not chasing deals.
          </p>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Why Join BrandNest?
            </h2>

            <ul className="mt-6 space-y-4 text-gray-600">
              <li>• We bring relevant brand collaborations</li>
              <li>• No forced deals — you choose what you accept</li>
              <li>• Fair pricing & transparent communication</li>
              <li>• Clear briefs & timelines</li>
              <li>• Long-term creator growth focus</li>
            </ul>
          </div>

          <div className="hidden md:block">
            <div className="w-full h-64 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 font-medium">
              Creator Growth Visual
            </div>
          </div>

        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            What We Handle for You
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Deals",
                desc: "We bring brand collaboration opportunities that match your niche and audience.",
              },
              {
                title: "Negotiation",
                desc: "We negotiate fair pricing and deliverables on your behalf.",
              },
              {
                title: "Campaign Management",
                desc: "From briefs to posting schedules — we manage the entire process.",
              },
              {
                title: "Creative Support",
                desc: "Video editing and graphic design support when required.",
              },
              {
                title: "Communication",
                desc: "Clear, professional communication with brands.",
              },
              {
                title: "Growth Focus",
                desc: "We focus on long-term creator growth, not one-off deals.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Who Can Join?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We work with creators across different niches and platforms.
            Follower count matters less than content quality and consistency.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <ul className="space-y-3 text-gray-600">
              <li>• Instagram / YouTube creators</li>
              <li>• UGC creators</li>
              <li>• Lifestyle, fashion, travel, food, tech & more</li>
            </ul>

            <ul className="space-y-3 text-gray-600">
              <li>• Consistent content creators</li>
              <li>• Authentic audience engagement</li>
              <li>• Open to paid & barter collaborations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <CreatorGuarantee/>
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            How It Works
          </h2>

          <div className="mt-10 grid md:grid-cols-5 gap-4">
            {[
              "Apply to BrandNest",
              "Get Verified",
              "Receive Brand Opportunities",
              "Accept What You Like",
              "Create & Get Paid",
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <span className="text-blue-500 font-bold text-xl">
                  {index + 1}
                </span>
                <p className="mt-3 text-gray-700 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTES */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Important to Know
          </h3>

          <p className="mt-4 text-gray-600">
            Joining BrandNest is <strong>completely free</strong>.  
            We never force collaborations and always take creator approval
            before confirming any deal.
          </p>
        </div>
      </section>

      <FitScore/>
      <section className="bg-blue-500 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to Join BrandNest?
        </h2>
        <p className="mt-4 max-w-xl mx-auto">
          Apply now and get access to genuine brand collaborations.
        </p>

        <Link
          to="/apply-creator"
          className="inline-block mt-8 px-8 py-3 bg-white text-blue-500 rounded-full font-medium"
        >
          Apply as a Creator
        </Link>
      </section>

    </main>
  );
}
