import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What happens if I scrap 20% of a batch?",
    answer:
      "PartShield covers the material and labor costs associated with scrapped parts. If you scrap 20% of a batch, we'll reimburse you for those costs according to your policy terms, protecting your project margins. You can also choose your coverage limits, ranging from 10% to 100%, so the protection matches the risk profile of your shop.",
  },
  {
    question: "Will this slow down my quoting process?",
    answer:
      "Not at all. PartShield integrates seamlessly into your existing workflow. Simply include coverage in your quote - it takes less than 5 minutes to add protection to any project.",
  },
  {
    question: "Is this insurance or a guarantee?",
    answer:
      "PartShield is insurance coverage specifically designed for manufacturing quality failures. Unlike warranties or guarantees, we focus on protecting your financial exposure to scrap and rework costs, not the end product performance.",
  },
  {
    question: "What types of shops qualify for coverage?",
    answer:
      "PartShield is designed for small to medium-sized machine shops (20-200 employees) involved in precision manufacturing, CNC machining, and fabrication work. Contact us to discuss your specific operation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-steel-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-steel-500">
            Get answers to common questions about PartShield coverage
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg shadow-sm"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-growth-500"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-steel-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`text-steel-400 h-5 w-5 transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-steel-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
