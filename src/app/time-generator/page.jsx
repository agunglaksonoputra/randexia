import MainLayout from "@layouts/MainLayout";
import { Clock } from "lucide-react";
import TimeGeneratorSection from "./components/TimeGenerateSection";

export const metadata = {
  title: "Randexia: Time Generator",
  description: "Generate random times, intervals, and timestamps with Randexia Time Generator.",
};

export default function TimeGenerator() {
  return (
    <MainLayout
      navbar={{
        type: "feature",
        title: "Time Generator",
        icon: Clock,
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-blue-200 rounded-full text-sm shadow-sm mb-4">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-medium">Live Time</span>
          </div> */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Time Generator</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Generate timestamps in various formats. All times update in real-time.</p>
        </div>
        <TimeGeneratorSection />
      </div>
    </MainLayout>
  );
}
