import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-steel-900 sm:text-4xl">
            How PartShield Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-steel-500">
            Three simple steps to protect your margins and grow your business
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* Step 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-growth-100 rounded-full mb-6">
                <span className="text-2xl font-bold text-growth-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-steel-900 mb-4">You Quote a Project</h3>
              <p className="text-steel-600">
                Submit your project details and get PartShield coverage. Quote competitively without padding for scrap risk.
              </p>
            </div>
            
            {/* Arrow */}
            <div className="hidden sm:flex items-center justify-center">
              <ArrowRight className="text-growth-500 h-8 w-8" />
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-growth-100 rounded-full mb-6">
                <span className="text-2xl font-bold text-growth-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-steel-900 mb-4">PartShield Covers Risk</h3>
              <p className="text-steel-600">
                We handle the financial impact of scrap and rework, so quality failures don't affect your bottom line.
              </p>
            </div>
            
            {/* Arrow */}
            <div className="hidden sm:flex items-center justify-center">
              <ArrowRight className="text-growth-500 h-8 w-8" />
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-growth-100 rounded-full mb-6">
                <span className="text-2xl font-bold text-growth-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-steel-900 mb-4">Deliver Confidently</h3>
              <p className="text-steel-600">
                Complete projects with stable margins and predictable revenue, knowing you're protected against quality failures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
