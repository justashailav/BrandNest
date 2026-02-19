import { useState } from "react";

const creatorsData = [
  {
    id: 1,
    name: "Aman Verma",
    niche: "Fitness",
    followers: 120000,
    engagement: 6.5,
    location: "Delhi",
    topPerformer: true,
    mediaKit: "#",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Riya Sharma",
    niche: "Fashion",
    followers: 250000,
    engagement: 4.8,
    location: "Mumbai",
    topPerformer: false,
    mediaKit: "#",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Kunal Mehta",
    niche: "Tech",
    followers: 80000,
    engagement: 7.2,
    location: "Bangalore",
    topPerformer: true,
    mediaKit: "#",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    niche: "Skincare",
    followers: 45000,
    engagement: 3.9,
    location: "Chandigarh",
    topPerformer: false,
    mediaKit: "#",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function Creators() {
  const [search, setSearch] = useState("");
  const [nicheFilter, setNicheFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [followersFilter, setFollowersFilter] = useState("All");
  const [sortBy, setSortBy] = useState("none");

  const filteredCreators = creatorsData
    .filter((creator) => {
      const matchesSearch = creator.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesNiche =
        nicheFilter === "All" || creator.niche === nicheFilter;

      const matchesLocation =
        locationFilter === "All" || creator.location === locationFilter;

      let matchesFollowers = true;
      if (followersFilter === "10-50") {
        matchesFollowers =
          creator.followers >= 10000 && creator.followers <= 50000;
      } else if (followersFilter === "50-100") {
        matchesFollowers =
          creator.followers > 50000 && creator.followers <= 100000;
      } else if (followersFilter === "100+") {
        matchesFollowers = creator.followers > 100000;
      }

      return (
        matchesSearch &&
        matchesNiche &&
        matchesLocation &&
        matchesFollowers
      );
    })
    .sort((a, b) => {
      if (sortBy === "engagement") {
        return b.engagement - a.engagement;
      }
      if (sortBy === "followers") {
        return b.followers - a.followers;
      }
      return 0;
    });

  return (
    <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Creators
          </h1>
          <p className="mt-4 text-gray-600">
            Discover top-performing creators managed by Thrive.
          </p>
        </div>

        {/* PERFORMANCE STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
          <Stat title="120+" subtitle="Active Creators" />
          <Stat title="5.8%" subtitle="Avg Engagement" />
          <Stat title="30+" subtitle="Niches Covered" />
          <Stat title="Pan India" subtitle="Coverage" />
        </div>

        {/* BULK CAMPAIGN CTA */}
        <div className="bg-blue-600 text-white p-6 rounded-2xl mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="font-semibold text-lg">
              Want to collaborate with multiple creators?
            </h3>
            <p className="text-sm opacity-90">
              Let Thrive handle full campaign planning & execution.
            </p>
          </div>

          <a
            href="https://wa.me/919015118744?text=Hi%20Thrive,%20I%20want%20to%20plan%20a%20multi-creator%20campaign."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold"
          >
            Plan Campaign
          </a>
        </div>

        {/* FILTERS */}
        <div className="grid md:grid-cols-5 gap-4 mt-10">
          <input
            type="text"
            placeholder="Search creator..."
            className="px-4 py-2 rounded-lg border"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={nicheFilter}
            onChange={(e) => setNicheFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border"
          >
            <option>All</option>
            <option>Fitness</option>
            <option>Fashion</option>
            <option>Tech</option>
            <option>Skincare</option>
          </select>

          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border"
          >
            <option>All</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Chandigarh</option>
          </select>

          <select
            value={followersFilter}
            onChange={(e) => setFollowersFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border"
          >
            <option value="All">All Followers</option>
            <option value="10-50">10K–50K</option>
            <option value="50-100">50K–100K</option>
            <option value="100+">100K+</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border"
          >
            <option value="none">Sort By</option>
            <option value="engagement">Highest Engagement</option>
            <option value="followers">Most Followers</option>
          </select>
        </div>

        {/* CREATOR GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {filteredCreators.map((creator) => (
            <div
              key={creator.id}
              className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              {creator.topPerformer && (
                <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                  Top Performer
                </span>
              )}

              <img
                src={creator.image}
                alt={creator.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {creator.name}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {creator.niche} • {creator.location}
                </p>

                <div className="mt-4 space-y-2 text-sm">
                  <p>
                    Followers: {(creator.followers / 1000).toFixed(0)}K
                  </p>

                  <p
                    className={`font-medium ${
                      creator.engagement > 6
                        ? "text-green-600"
                        : creator.engagement >= 4
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    Engagement: {creator.engagement}%
                  </p>
                </div>

                <a
                  href={creator.mediaKit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full text-center border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition"
                >
                  View Media Kit
                </a>

                <a
                  href={`https://wa.me/919015118744?text=Hi%20Thrive,%20I%20want%20to%20collaborate%20with%20${creator.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Request Collaboration
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

/* STAT COMPONENT */
function Stat({ title, subtitle }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-blue-600">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
    </div>
  );
}
