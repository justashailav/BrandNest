import { useState } from "react";

export function ROICalculator() {
  const [budget, setBudget] = useState("");
  const [aov, setAov] = useState("");
  const [conversion, setConversion] = useState("");
  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const monthlyBudget = Number(budget);
    const avgOrderValue = Number(aov);
    const conversionRate = Number(conversion) / 100;

    if (!monthlyBudget || !avgOrderValue || !conversionRate) return;

    // Assumption: 2% CTR & CPC ₹10
    const estimatedClicks = monthlyBudget / 10;
    const estimatedSales = estimatedClicks * conversionRate;
    const estimatedRevenue = estimatedSales * avgOrderValue;
    const roas = estimatedRevenue / monthlyBudget;

    setResults({
      revenue: Math.round(estimatedRevenue),
      roas: roas.toFixed(2),
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          ROI Calculator
        </h2>
        <p className="text-center text-gray-600 mt-3">
          Estimate your potential revenue with Thrive.
        </p>

        <div className="mt-10 bg-white p-8 rounded-2xl shadow-sm space-y-6">
          <input
            type="number"
            placeholder="Monthly Ad Budget (₹)"
            className="w-full px-4 py-3 border rounded-lg"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <input
            type="number"
            placeholder="Average Order Value (₹)"
            className="w-full px-4 py-3 border rounded-lg"
            value={aov}
            onChange={(e) => setAov(e.target.value)}
          />

          <input
            type="number"
            placeholder="Conversion Rate (%)"
            className="w-full px-4 py-3 border rounded-lg"
            value={conversion}
            onChange={(e) => setConversion(e.target.value)}
          />

          <button
            onClick={calculateROI}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Calculate
          </button>

          {results && (
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold text-gray-900">
                Estimated Revenue: ₹{results.revenue}
              </h3>
              <p className="mt-2 text-blue-600 font-semibold">
                Estimated ROAS: {results.roas}x
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
