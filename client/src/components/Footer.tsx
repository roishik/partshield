export default function Footer() {
  return (
    <footer className="bg-steel-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">PartShield</span>
            </div>
            <p className="mt-4 text-steel-400 max-w-md">
              Insurance for scrap and rework - protecting machine shops so they
              can quote with confidence and grow their business. It's not just
              buying insurance, it's your lever of growth.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#how-it-works"
                  className="text-steel-400 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-steel-400 hover:text-white transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-steel-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-steel-400">support@partshield.com</li>
              <li className="text-steel-400">1-800-PARTSHLD</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-steel-700 pt-8">
          <p className="text-steel-400 text-sm text-center">
            © 2024 PartShield. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
