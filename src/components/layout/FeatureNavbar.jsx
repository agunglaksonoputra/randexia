import { Clock, Home } from "lucide-react";
import Link from "next/link";

export default function FeatureNavbar({ title, icon: Icon = Clock }) {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">Randexia</span>
              <span className="text-xs text-slate-500">{title}</span>
            </div>
          </div>

          {/* <a href="/" className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-all">
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
          </a> */}
          <Link href="/" className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-all">
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
