const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-gray-800">
      <div className="px-[7vw] lg:px-[20vw] py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Shailav Justa. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm">
          <a
            href="#about"
            className="text-gray-400 hover:text-white transition"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-400 hover:text-white transition"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
