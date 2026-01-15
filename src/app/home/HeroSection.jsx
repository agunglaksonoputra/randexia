"use client";

import { Clock, ArrowRight, Github } from "lucide-react";
import { useCurrentTime } from "@hooks/useCurrentTime";

export default function HeroSection({ ref, className }) {
  const currentTime = useCurrentTime();

  return (
    <section id="home" ref={ref} className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-blue-200 rounded-full text-sm shadow-sm">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-medium">{currentTime}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900">Randexia</h1>

          <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">Random tools, simplified.</p>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">A collection of powerful utility generators. Generate timestamps, random numbers, UUIDs, and more.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#tools" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center space-x-2">
              <span>Explore Tools</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center space-x-2">
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
