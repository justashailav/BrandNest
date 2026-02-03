import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Brand<span className="text-blue-500">Nest</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/services" className="hover:text-blue-500">Services</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/join-creator"
            className="px-5 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
          >
            Join as a Creator
          </Link>
          <Link
            to="/work-with-us"
            className="px-5 py-2 rounded-full border border-blue-500 text-blue-500 font-medium hover:bg-blue-50 transition"
          >
            Work With Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-900 focus:outline-none text-2xl"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Overlay */}
     {/* Mobile Menu Overlay */}
{isOpen && (
  <div className="fixed inset-0 bg-black/40 z-40 md:hidden">

    {/* Slide Panel */}
    <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl p-6 animate-slideIn">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <span className="text-xl font-bold">
          Brand<span className="text-blue-500">Nest</span>
        </span>
        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-6 text-lg font-medium text-gray-800">
        <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
        <Link onClick={() => setIsOpen(false)} to="/services">Services</Link>
        <Link onClick={() => setIsOpen(false)} to="/about">About</Link>
        <Link onClick={() => setIsOpen(false)} to="/projects">Projects</Link>
        <Link onClick={() => setIsOpen(false)} to="/contact">Contact</Link>
      </nav>

      {/* Divider */}
      <div className="my-10 border-t border-gray-200" />

      {/* CTA Buttons */}
      <div className="space-y-4">
        <Link
          onClick={() => setIsOpen(false)}
          to="/join-creator"
          className="block w-full text-center px-6 py-3 rounded-full bg-blue-500 text-white font-medium"
        >
          Join as a Creator
        </Link>

        <Link
          onClick={() => setIsOpen(false)}
          to="/work-with-us"
          className="block w-full text-center px-6 py-3 rounded-full border border-blue-500 text-blue-500 font-medium"
        >
          Work With Us
        </Link>
      </div>

    </div>
  </div>
)}

    </nav>
  );
}
