import { Link } from "react-router-dom";
import RangeOfHimalayas from "../assets/E-commerce.png"
import LIC from "../assets/lic.png"
const websiteProjects = [
  {
    title: "E-Commerce Store",
    desc: "High-converting online store with optimized checkout flow.",
    link: "https://www.rangeofhimalayas.co.in",
    image: RangeOfHimalayas,
  },
  {
    title: "LIC Advisor Website",
    desc: "Professional website built for a licensed LIC advisor to generate leads, build trust, and showcase insurance services.",
    link: "https://www.tejkavifuture.life",
    image: LIC
  },
];

export default function Projects() {
  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Work
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            We design and develop high-performing digital experiences for
            brands, creators, and businesses.
          </p>
        </div>
      </section>

      {/* WEBSITE PROJECTS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Website Projects
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-600 text-center max-w-2xl mx-auto">
            Custom-designed and developed websites focused on performance,
            branding, and conversion.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {websiteProjects.map((project, i) => (
              <div
                key={i}
                className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300"
              >
                {/* Screenshot */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium transition">
                      View Project →
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">{project.desc}</p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 text-sm font-medium text-blue-500 hover:underline"
                  >
                    Visit Live Site →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO WORK */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Video Editing
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <div className="h-48 bg-gray-300 flex items-center justify-center text-sm text-gray-600">
                  Reel / Video Preview
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">
                    Short-Form Reel Edit
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    High-engagement Instagram reel optimized for retention.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRAPHIC DESIGN */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Graphic Designing
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center text-sm text-gray-600">
                  Design Preview
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">
                    Social Media Creative
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Brand-aligned visuals designed for visibility and
                    engagement.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN CONCEPTS */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Creator Campaign Concepts
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Brand × Creator Collaboration
                </h3>

                <p className="mt-4 text-sm text-gray-600">
                  End-to-end influencer campaign planning, creator shortlisting,
                  and content execution.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>✔ Creator niche matching</li>
                  <li>✔ Reel + story deliverables</li>
                  <li>✔ Timeline & execution</li>
                  <li>✔ Performance tracking</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-500 py-16 md:py-24 text-center text-white">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Build Something Great?
          </h2>

          <p className="mt-4 text-sm md:text-base text-blue-100">
            Let’s create digital experiences that drive growth and performance.
          </p>

          <Link
            to="/work-with-us"
            className="block w-full mt-8 px-6 py-3 bg-white text-blue-500 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Work With Us
          </Link>

          <Link
            to="/contact"
            className="inline-block mt-4 text-sm font-medium underline underline-offset-4"
          >
            Or contact us →
          </Link>
        </div>
      </section>
    </main>
  );
}
