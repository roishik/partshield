import { Shield, TrendingUp } from "lucide-react";

interface HeroProps {
  onRequestCall: () => void;
  onRequestDemo: () => void;
}

export default function Hero({ onRequestCall, onRequestDemo }: HeroProps) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                  <div className="py-12 lg:py-24">
                    <h1 className="text-4xl tracking-tight font-extrabold text-steel-900 sm:text-5xl md:text-6xl">
                      <span className="block">Protect Your Margins.</span>
                      <span className="block text-growth-600">Win More Jobs.</span>
                    </h1>
                    <p className="mt-3 text-base text-steel-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Insurance for scrap and rework—so you can quote with confidence and grow your shop.
                    </p>
                    
                    {/* Hero CTAs */}
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <button 
                          onClick={onRequestCall}
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-growth-600 hover:bg-growth-700 md:py-4 md:text-lg md:px-10 transition-colors"
                        >
                          Request a Call
                        </button>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button 
                          onClick={onRequestDemo}
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-growth-700 bg-growth-100 hover:bg-growth-200 md:py-4 md:text-lg md:px-10 transition-colors"
                        >
                          Ask for a Demo
                        </button>
                      </div>
                    </div>
                    
                    {/* Trust Indicators */}
                    <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-steel-500">
                      <div className="flex items-center">
                        <Shield className="h-4 w-4 text-growth-500 mr-2" />
                        <span>Stable Margins</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-growth-500 mr-2" />
                        <span>Predictable Revenue</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hero Image */}
                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                  <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                    <img 
                      src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                      alt="Modern machine shop floor with CNC equipment" 
                      className="w-full rounded-lg shadow-lg"
                    />
                    
                    {/* Overlay Text Box */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-steel-900">Your Shop, Protected</div>
                        <div className="text-sm text-steel-600 mt-1">Insurance-backed peace of mind</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
