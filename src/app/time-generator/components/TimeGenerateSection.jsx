"use client";

import { ChevronDown, Copy, Play, RefreshCw, Zap } from "lucide-react";
import { useState } from "react";
import { randomTimeBetween } from "../lib/randomTimeBetween";
import { intervalTimeBetween } from "../lib/intervalTimeBetween";

export default function TimeGeneratorSection() {
  const [mode, setMode] = useState("random");
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("17:00");
  const [count, setCount] = useState(5);
  const [interval, setInterval] = useState(30);

  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const handleGenerate = () => {
    try {
      setError("");
      if (mode == "random") {
        const data = randomTimeBetween({
          startTime,
          endTime,
          count,
        });
        setResults(data);
      } else if (mode == "interval") {
        const data = intervalTimeBetween({
          startTime,
          endTime,
          count,
          interval,
        });
        setResults(data);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const formatTime = (date, baseDate) => {
    const time = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const isNextDay = date.getDate() !== baseDate.getDate();

    return {
      time,
      isNextDay,
    };
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-lg">
      <div className="flex items-center space-x-2 mb-6">
        <Zap className="w-6 h-6 text-orange-600" />
        <h2 className="text-2xl font-bold text-slate-900">Random Time Generator</h2>
      </div>

      <p className="text-slate-600 mb-6">Generate random times within a specified range. Perfect for testing, scheduling, or simulation purposes.</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Start Time */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Start Time</label>
          <input type="time" placeholder="HH:MM" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900" />
          <p className="text-xs text-slate-500 mt-1">Beginning of time range</p>
        </div>

        {/* End Time */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">End Time</label>
          <input type="time" placeholder="HH:MM" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900" />
          <p className="text-xs text-slate-500 mt-1">End of time range (supports overnight)</p>
        </div>
      </div>

      {/* Generation Mode */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">Generation Mode</label>

        <div className="relative">
          <select value={mode} onChange={(e) => setMode(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900 appearance-none cursor-pointer">
            <option value="random">Random Times</option>
            <option value="interval">Fixed Interval</option>
          </select>

          {/* Chevron Icon */}
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
        </div>

        <p className="text-xs text-slate-500 mt-1">Choose between random or interval-based generation</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Count - for Random mode */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Number of Times</label>
          <input type="number" placeholder="5" min="1" max="100" value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900" />
          <p className="text-xs text-slate-500 mt-1">For random mode (max: 100)</p>
        </div>

        {/* Interval in Minutes */}
        {/* <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Interval (Minutes)</label>
          <input type="number" placeholder="30" min="1" max="1440" defaultValue="30" disabled={mode === "random"} className="w-full px-4 py-3 rounded-lg border bg-slate-50  border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900" />
          <p className="text-xs text-slate-500 mt-1">For interval mode (1-1440 min)</p>
        </div> */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Interval (Minutes)</label>
          <input
            type="number"
            placeholder="30"
            min="1"
            max="1440"
            value={interval}
            onChange={(e) => setInterval(Number(e.target.value))}
            disabled={mode === "random"}
            className="w-full px-4 py-3 rounded-lg border bg-slate-50  border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-slate-900"
          />
          <p className="text-xs text-slate-500 mt-1">For interval mode (1-1440 min)</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={handleGenerate} className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all cursor-pointer">
          <Play className="w-5 h-5" />
          <span>Generate Random Times</span>
        </button>
        <button onClick={() => setResults(null)} className="flex items-center justify-center space-x-2 px-6 py-3 bg-slate-100 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-200 transition-all cursor-pointer">
          <RefreshCw className="w-5 h-5" />
          <span>Regenerate</span>
        </button>
      </div>

      {error && <p className="mt-4 text-red-600 font-medium">{error}</p>}

      {/* Results Section (Placeholder) */}
      <div className="mt-8 pt-8 border-t border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Generated Results</h3>
          <span className="text-sm text-slate-500">{results ? results.results.length : 0} results</span>
        </div>

        {/* Empty State */}
        {!results && (
          <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-dashed border-orange-200 rounded-xl p-8 text-center">
            <Zap className="w-12 h-12 text-orange-400 mx-auto mb-3" />
            <p className="text-slate-600 font-medium mb-1">No results yet</p>
            <p className="text-sm text-slate-500">Configure the time range above and click &quot;Generate&quot;</p>
          </div>
        )}

        {/* Results List */}
        {results && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {results.results.map((t, i) => {
                const { time, isNextDay } = formatTime(t, results.results[0]);

                return (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <p className="font-mono text-slate-900">{time}</p>

                      {isNextDay && <span className="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-medium">+1 day</span>}
                    </div>

                    <button onClick={() => navigator.clipboard.writeText(time)} className="flex items-center space-x-1 px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all text-sm font-medium cursor-pointer">
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-700 font-medium mb-1">Generated At</p>
                <p className="text-blue-900 font-mono">{results.generatedAt}</p>
              </div>
              {/* <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="text-sm text-purple-700 font-medium mb-1">Timestamp Now</p>
                <p className="text-purple-900 font-mono">1737024030</p>
              </div> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
