import { useState } from "react";
import AnchalNegi from "../assets/AnchalNegi1.jpeg";
import KajalMogta from "../assets/KajalMogta.jpeg";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
const creatorsData = [
  {
    id: 1,
    name: "Anchal Negi",
    niche: "Fashion,Beauty,Lifestyle",
    followers: 132000,
    engagement: 6.5,
    location: "Shimla,Himachal Pradesh",
    topPerformer: true,
    verified: true,
    budgetRange: "₹25K – ₹40K",
    image: AnchalNegi,
    bio: "Turning everyday looks into main character moments.",
    audience: {
      female: 78,
      male: 22,
    },
    gallery: [AnchalNegi, AnchalNegi, AnchalNegi],

    analytics: {
      engagementHistory: [
        { month: "Jan", value: 5.1 },
        { month: "Feb", value: 5.4 },
        { month: "Mar", value: 5.9 },
        { month: "Apr", value: 6.2 },
        { month: "May", value: 6.5 },
      ],
      growth: [
        { month: "Jan", followers: 95000 },
        { month: "Feb", followers: 105000 },
        { month: "Mar", followers: 115000 },
        { month: "Apr", followers: 125000 },
        { month: "May", followers: 132000 },
      ],
      brands: ["Zara", "Nykaa", "H&M"],
      campaign: {
        avgViews: "90K",
        ctr: "3.8%",
        conversions: "1.9K",
      },
    },
  },

  {
    id: 2,
    name: "Kajal Mogta",
    niche: "Travel • Lifestyle • Fashion",
    followers: 211000,
    engagement: 6.8,
    location: "Shimla, Himachal Pradesh",
    topPerformer: true,
    verified: true,
    budgetRange: "₹45K–70K",
    image: KajalMogta,
    bio: "Travel & lifestyle creator blending mountain charm with elegance.",
    audience: {
      female: 76,
      male: 24,
    },
    gallery: [KajalMogta, KajalMogta, KajalMogta],

    analytics: {
      engagementHistory: [
        { month: "Jan", value: 6.0 },
        { month: "Feb", value: 6.3 },
        { month: "Mar", value: 6.5 },
        { month: "Apr", value: 6.7 },
        { month: "May", value: 6.8 },
      ],
      growth: [
        { month: "Jan", followers: 170000 },
        { month: "Feb", followers: 185000 },
        { month: "Mar", followers: 195000 },
        { month: "Apr", followers: 205000 },
        { month: "May", followers: 211000 },
      ],
      brands: ["Airbnb", "MakeMyTrip", "Zara", "Mamaearth"],
      campaign: {
        avgViews: "140K",
        ctr: "4.5%",
        conversions: "3.1K",
      },
    },
  },
];

export default function Creators() {
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [selectedReel, setSelectedReel] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [shortlist, setShortlist] = useState([]);
  const [compareList, setCompareList] = useState([]);
  const [showShortlist, setShowShortlist] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const toggleShortlist = (creator) => {
    const exists = shortlist.find((c) => c.id === creator.id);
    if (exists) {
      setShortlist(shortlist.filter((c) => c.id !== creator.id));
    } else {
      setShortlist([...shortlist, creator]);
    }
  };

  const toggleCompare = (creator) => {
    const exists = compareList.find((c) => c.id === creator.id);
    if (exists) {
      setCompareList(compareList.filter((c) => c.id !== creator.id));
    } else {
      if (compareList.length < 2) {
        setCompareList([...compareList, creator]);
      } else {
        alert("You can compare only 2 creators");
      }
    }
  };
  const nextImage = () => {
    if (!selectedCreator) return;
    setCurrentIndex((prev) =>
      prev === selectedCreator.gallery.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    if (!selectedCreator) return;
    setCurrentIndex((prev) =>
      prev === 0 ? selectedCreator.gallery.length - 1 : prev - 1,
    );
  };
  return (
    <main className="pt-28 pb-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Creators
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover high-performing creators managed exclusively by Thrive.
          </p>
        </div>

        {/* SHORTLIST + COMPARE CONTROLS */}
        <div className="flex gap-4 mt-12 flex-wrap">
          <button
            onClick={() => setShowShortlist(true)}
            className="px-6 py-2 bg-red-500 text-white rounded-full shadow hover:scale-105 transition"
          >
            View Shortlist ({shortlist.length})
          </button>

          {compareList.length === 2 && (
            <button
              onClick={() => setShowCompare(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:scale-105 transition"
            >
              Compare Selected
            </button>
          )}
        </div>

        {/* CREATOR GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {creatorsData.map((creator) => (
            <div
              key={creator.id}
              className="relative bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden border border-gray-100"
            >
              {creator.topPerformer && (
                <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs px-4 py-1 rounded-full font-semibold shadow">
                  Top Performer
                </span>
              )}

              <img
                src={creator.image}
                alt={creator.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {creator.name}
                  </h3>

                  {creator.verified && (
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      Verified by Thrive
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  {creator.niche} • {creator.location}
                </p>

                <p className="mt-3 text-sm text-gray-600 italic">
                  {creator.bio}
                </p>

                <div className="mt-4 text-sm space-y-1">
                  <p>Followers: {(creator.followers / 1000).toFixed(0)}K</p>
                  <p className="text-green-600 font-medium">
                    Engagement: {creator.engagement}%
                  </p>
                </div>

                {/* SHORTLIST */}
                <button
                  onClick={() => toggleShortlist(creator)}
                  className="mt-4 w-full border border-red-400 text-red-500 py-2 rounded-full hover:bg-red-50 transition"
                >
                  {shortlist.find((c) => c.id === creator.id)
                    ? "Remove from Shortlist ❤️"
                    : "Save to Shortlist 🤍"}
                </button>

                {/* COMPARE */}
                <label className="flex items-center gap-2 mt-3 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={compareList.find((c) => c.id === creator.id)}
                    onChange={() => toggleCompare(creator)}
                  />
                  Add to Compare
                </label>

                {/* FULL PROFILE */}
                <button
                  onClick={() => {
                    setSelectedCreator(creator);
                    setCurrentIndex(0);
                    setActiveImage(creator.gallery?.[0] || creator.image);
                  }}
                  className="mt-4 w-full border border-gray-300 py-2 rounded-full hover:bg-gray-50 transition"
                >
                  View Full Profile
                </button>

                <a
                  href={creator.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full text-center border border-pink-500 text-pink-600 py-2 rounded-full hover:bg-pink-50 transition"
                >
                  View Instagram Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCreator && (
        <div className="fixed inset-0 bg-white overflow-y-auto z-50">
          {/* HERO BANNER */}
          <div className="relative h-[380px]">
            <img
              src={selectedCreator.gallery[currentIndex]}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-10 left-10 text-white">
              <h1 className="text-4xl font-bold">{selectedCreator.name}</h1>
              <p className="mt-2 text-lg">{selectedCreator.niche}</p>
              <p className="opacity-80">{selectedCreator.location}</p>
            </div>

            <button
              onClick={() => setSelectedCreator(null)}
              className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full"
            >
              Close
            </button>
          </div>

          <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-12 gap-12">
            <div className="col-span-8 space-y-12">
              <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-xl font-bold mb-6">Audience Gender</h2>
                <PieChart width={400} height={300}>
                  <Pie
                    data={[
                      {
                        name: "Female",
                        value: selectedCreator.audience.female,
                      },
                      { name: "Male", value: selectedCreator.audience.male },
                    ]}
                    dataKey="value"
                    outerRadius={100}
                  >
                    <Cell fill="#ec4899" />
                    <Cell fill="#3b82f6" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-xl font-bold mb-6">Engagement History</h2>
                <LineChart
                  width={600}
                  height={300}
                  data={selectedCreator.analytics.engagementHistory}
                >
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#10b981" />
                </LineChart>
              </div>

              {/* Growth Trend */}
              <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-xl font-bold mb-6">Growth Trend</h2>
                <LineChart
                  width={600}
                  height={300}
                  data={selectedCreator.analytics.growth}
                >
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="followers" stroke="#3b82f6" />
                </LineChart>
              </div>

              {/* Brand Collaborations */}
              <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-xl font-bold mb-6">Brand Collaborations</h2>
                <div className="flex gap-6 flex-wrap">
                  <div className="flex gap-6 flex-wrap">
                    {selectedCreator.analytics.brands.map((brand, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 px-6 py-4 rounded-xl"
                      >
                        {brand}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Campaign Performance */}
              <div className="bg-white p-6 rounded-2xl shadow">
                <h2 className="text-xl font-bold mb-6">Campaign Performance</h2>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-gray-500">Avg Reel Views</p>
                    <p className="text-xl font-bold">
                      {selectedCreator.analytics.campaign.avgViews}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">CTR</p>
                    <p className="text-xl font-bold">
                      {selectedCreator.analytics.campaign.ctr}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">Conversions</p>
                    <p className="text-xl font-bold">
                      {selectedCreator.analytics.campaign.conversions}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* STICKY SIDEBAR */}
            <div className="col-span-4">
              <div className="sticky top-24 bg-gray-50 p-6 rounded-2xl shadow space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">Followers</h3>
                  <p className="text-2xl font-bold">
                    {(selectedCreator.followers / 1000).toFixed(0)}K
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Engagement</h3>
                  <p className="text-green-600 font-bold text-xl">
                    {selectedCreator.engagement}%
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Story Views Estimate
                  </h3>
                  <p>~ {Math.round(selectedCreator.followers * 0.12)}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Cost Per Reel</h3>
                  <p>{selectedCreator.budgetRange}</p>
                </div>

                <button className="w-full bg-black text-white py-3 rounded-xl">
                  Book Collaboration
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* REAL INSTAGRAM EMBED */}
      {selectedReel && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl relative w-full max-w-lg">
            <button
              onClick={() => setSelectedReel(null)}
              className="absolute top-4 right-4"
            >
              ✕
            </button>

            <iframe
              src={`${selectedReel}embed`}
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
            ></iframe>
          </div>
        </div>
      )}

      {/* SHORTLIST MODAL */}
      {showShortlist && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl w-full max-w-2xl">
            <button
              onClick={() => setShowShortlist(false)}
              className="float-right"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6">Shortlisted Creators</h2>

            {shortlist.length === 0 && <p>No creators saved yet.</p>}

            {shortlist.map((creator) => (
              <div key={creator.id} className="mb-4 flex items-center gap-4">
                <img
                  src={creator.image}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div>
                  <p className="font-semibold">{creator.name}</p>
                  <p className="text-sm text-gray-500">
                    {(creator.followers / 1000).toFixed(0)}K •{" "}
                    {creator.engagement}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* COMPARE MODAL */}
      {showCompare && compareList.length === 2 && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-3xl w-full max-w-5xl relative">
            <button
              onClick={() => setShowCompare(false)}
              className="absolute top-4 right-4"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center mb-10">
              Creator Comparison
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {compareList.map((creator) => (
                <div key={creator.id} className="text-center">
                  <img
                    src={creator.image}
                    className="w-40 h-40 object-cover rounded-full mx-auto"
                  />
                  <h3 className="mt-4 text-xl font-semibold">{creator.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">{creator.niche}</p>
                  <p className="mt-4">
                    Followers: {(creator.followers / 1000).toFixed(0)}K
                  </p>
                  <p>Engagement: {creator.engagement}%</p>
                  <p className="mt-2 italic text-gray-600">{creator.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
