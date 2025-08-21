import { Phone, PlayCircle } from "lucide-react";

interface CTASectionProps {
  onRequestCall: () => void;
  onRequestDemo: () => void;
}

export default function CTASection({
  onRequestCall,
  onRequestDemo,
}: CTASectionProps) {
  return (
    <>
      {/* Mid-Page CTA Section */}
      <section className="py-16 bg-growth-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Protect Your Margins?
          </h2>
          <p className="mt-4 text-xl text-growth-100">
            Join hundreds of machine shops who've transformed their business
            with PartShield
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
            <button
              onClick={onRequestCall}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-growth-600 bg-white hover:bg-growth-50 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Request a Call
            </button>
            <button
              onClick={onRequestDemo}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-growth-600 transition-colors"
            >
              <PlayCircle className="h-4 w-4 mr-2" />
              Ask for a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-steel-800 rounded-2xl shadow-xl">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Start winning more jobs—without risking your margins.
                </h2>
                <p className="mt-3 max-w-3xl text-[1.35rem] text-white">
                  Get PartShield protection and quote your next project with
                  complete confidence.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row lg:mt-0 lg:ml-8 lg:flex-shrink-0 space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={onRequestCall}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-growth-600 hover:bg-growth-700 transition-colors"
                >
                  Request a Call
                </button>
                <button
                  onClick={onRequestDemo}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-steel-800 transition-colors"
                >
                  Ask for a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
