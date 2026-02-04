const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <h3 className="text-white text-lg font-semibold">BrandNest</h3>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            A creator management & creative agency helping creators and brands
            grow through meaningful collaborations.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <p className="text-white text-sm font-medium">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/about" className="text-gray-400 hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-400 hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/work-with-us" className="text-gray-400 hover:text-white transition">
                Work With Us
              </a>
            </li>
          </ul>
        </div>

        {/* FOR CREATORS */}
        <div>
          <p className="text-white text-sm font-medium">Creators</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/join-creator" className="text-gray-400 hover:text-white transition">
                Join as a Creator
              </a>
            </li>
            <li>
              <a href="/apply-creator" className="text-gray-400 hover:text-white transition">
                Apply Now
              </a>
            </li>
            <li>
              <a href="/creator-faq" className="text-gray-400 hover:text-white transition">
                Creator FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT / SOCIAL */}
        <div>
          <p className="text-white text-sm font-medium">Connect</p>

          <ul className="mt-3 space-y-2 text-sm">
            <li className="text-gray-400">📩 brandnestworks@gmail.com</li>
            <li className="text-gray-400">📍 India</li>
          </ul>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-lg"
              aria-label="Instagram"
            >
              📸
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-lg"
              aria-label="LinkedIn"
            >
              💼
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-lg"
              aria-label="Twitter"
            >
              🐦
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} BrandNest. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs">
            <a href="/privacy" className="text-gray-500 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
