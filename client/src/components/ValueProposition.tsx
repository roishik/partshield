import { Eye, BarChart, Trophy, Handshake, Shield } from "lucide-react";

export default function ValueProposition() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-steel-900 sm:text-4xl">
              Why Machine Shops Choose PartShield
            </h2>
            <p className="mt-4 text-lg text-steel-500">
              Transform unpredictable quality failures into manageable, insured costs
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 bg-growth-100 rounded-full">
                    <Eye className="text-growth-600 h-4 w-4" />
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-steel-900">Clarity</h3>
                  <p className="mt-2 text-steel-600">No more guessing about hidden costs. Know exactly what your projects will cost.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 bg-growth-100 rounded-full">
                    <BarChart className="text-growth-600 h-4 w-4" />
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-steel-900">Stability</h3>
                  <p className="mt-2 text-steel-600">Predictable project revenue means better cash flow and financial planning.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 bg-growth-100 rounded-full">
                    <Trophy className="text-growth-600 h-4 w-4" />
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-steel-900">Growth</h3>
                  <p className="mt-2 text-steel-600">More competitive bids lead to more wins. Expand your business with confidence.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 bg-growth-100 rounded-full">
                    <Handshake className="text-growth-600 h-4 w-4" />
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-steel-900">Trust</h3>
                  <p className="mt-2 text-steel-600">Insurance-grade protection backed by industry experts who understand manufacturing.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Data Chart */}
          <div className="mt-10 lg:mt-0">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-steel-900 mb-6 text-center">Industry Impact of Scrap & Rework</h3>
              
              <div className="space-y-4">
                <div className="text-center text-2xl font-bold text-steel-800 mb-2">5-20%</div>
                <p className="text-center text-steel-600 mb-6">Average part loss to scrap and rework</p>
                
                {/* Visual bar chart representation */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-20 text-sm text-steel-600">Without PartShield:</span>
                    <div className="flex-1 ml-3">
                      <div className="bg-red-200 rounded-full h-6 relative">
                        <div className="bg-red-500 h-6 rounded-full w-3/4"></div>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">Unpredictable losses</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-20 text-sm text-steel-600">With PartShield:</span>
                    <div className="flex-1 ml-3">
                      <div className="bg-growth-200 rounded-full h-6 relative">
                        <div className="bg-growth-500 h-6 rounded-full w-full"></div>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">Protected margins</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-growth-50 rounded-lg border border-growth-200">
                <p className="text-sm text-growth-800 text-center">
                  <Shield className="h-4 w-4 inline mr-2" />
                  With PartShield, those losses don't eat into your margins
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
