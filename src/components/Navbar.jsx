"use client";

import { useState } from "react";
import { Shuffle, Github, Menu, X } from "lucide-react";

export default function Navbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (section) => {
    if (section === "source") {
      window.open("https://github.com/USERNAME/Randexia", "_blank");
      return;
    }

    onNavigate?.(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Shuffle className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">Randexia</span>
              <span className="text-xs text-slate-500 hidden sm:block">Random tools, simplified.</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNav("home")} className="nav-btn text-slate-700 hover:text-blue-600 transition-colors font-medium cursor-pointer">
              Home
            </button>
            <button onClick={() => handleNav("tools")} className="nav-btn text-slate-700 hover:text-blue-600 transition-colors font-medium cursor-pointer">
              Tools
            </button>
            <button onClick={() => handleNav("about")} className="nav-btn text-slate-700 hover:text-blue-600 transition-colors font-medium cursor-pointer">
              About
            </button>
            <button onClick={() => handleNav("source")} className="nav-btn text-slate-700 hover:text-blue-600 transition-colors cursor-pointer">
              <Github className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <button onClick={() => handleNav("home")}>Home</button>
          <button onClick={() => handleNav("tools")}>Tools</button>
          <button onClick={() => handleNav("about")}>About</button>
          <button onClick={() => handleNav("source")}>
            <Github className="w-5 h-5" />
          </button>
        </div>
      )}
    </nav>
  );
}
