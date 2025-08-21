import { AlertTriangle, TrendingDown, Shield } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-steel-900 sm:text-4xl">
            The Hidden Cost That's Killing Your Margins
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-steel-500">
            Every shop loses parts to scrap and rework. To cover the risk, you add markup—then lose bids. 
            With PartShield, you insure against quality failures so you can quote competitively.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Pain Point 1 */}
          <div className="relative bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-red-500">
            <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="text-red-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-steel-900 mb-4">Scrap → Costs</h3>
            <p className="text-steel-600">
              Quality failures eat into your margins unpredictably, forcing you to absorb unexpected losses or remake entire batches.
            </p>
          </div>
          
          {/* Pain Point 2 */}
          <div className="relative bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-orange-500">
            <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <TrendingDown className="text-orange-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-steel-900 mb-4">Markup → Lost Jobs</h3>
            <p className="text-steel-600">
              To protect against scrap risk, you inflate bids with safety margins—only to lose contracts to more aggressive competitors.
            </p>
          </div>
          
          {/* Solution */}
          <div className="relative bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-growth-500 sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 mx-auto bg-growth-100 rounded-full flex items-center justify-center mb-6">
              <Shield className="text-growth-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-steel-900 mb-4">Insurance → Growth</h3>
            <p className="text-steel-600">
              Transfer quality failure risk to PartShield. Quote competitively, protect your bottom line, and win more projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
