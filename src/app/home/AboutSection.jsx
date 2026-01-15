"use client";

import { Clock, Hash, Shuffle } from "lucide-react";
import { forwardRef } from "react";

const FeaturesSection = forwardRef(function HeroSection(props, ref) {
  const { className } = props;

  return (
    <section id="about" ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-8 sm:p-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Fast & Reliable</h3>
            <p className="text-slate-600">Instant generation with no server delays</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shuffle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Privacy First</h3>
            <p className="text-slate-600">All processing happens in your browser</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Hash className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Open Source</h3>
            <p className="text-slate-600">Free to use and contribute on GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FeaturesSection;
