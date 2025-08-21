import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import ValueProposition from "@/components/ValueProposition";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { useState } from "react";

export default function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'call' | 'demo'>('call');

  const openModal = (type: 'call' | 'demo') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-steel-800">PartShield</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#how-it-works" className="text-steel-600 hover:text-steel-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">How It Works</a>
                <a href="#testimonials" className="text-steel-600 hover:text-steel-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Reviews</a>
                <a href="#faq" className="text-steel-600 hover:text-steel-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => openModal('call')}
                className="bg-growth-500 hover:bg-growth-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Request a Call
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Hero onRequestCall={() => openModal('call')} onRequestDemo={() => openModal('demo')} />
        <ProblemSolution />
        <HowItWorks />
        <ValueProposition />
        <Testimonials />
        <FAQ />
        <CTASection onRequestCall={() => openModal('call')} onRequestDemo={() => openModal('demo')} />
      </main>
      
      <Footer />
      
      <LeadCaptureModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
      />
    </>
  );
}
