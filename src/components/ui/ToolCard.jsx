import { ChevronRight } from "lucide-react";

export default function ToolCard({ tool }) {
  const Icon = tool.icon;

  return (
    <div className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-all hover:shadow-xl hover:shadow-blue-100">
      <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{tool.title}</h3>
      <p className="text-slate-600 mb-4">{tool.description}</p>
      <div className="flex items-center justify-between">
        <span className={`text-sm px-3 py-1 rounded-full font-medium ${tool.status === "Available" ? "bg-green-100 text-green-700 border border-green-200" : "bg-slate-100 text-slate-600 border border-slate-200"}`}>{tool.status}</span>

        {tool.status === "Available" && (
          <a href={tool.link} className="text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-1 font-medium">
            <span>Open</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </div>
  );
}
