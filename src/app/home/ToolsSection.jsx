import ToolCard from "@components/ui/ToolCard";
import { tools } from "@components/home/ToolsData";

export default function ToolsSection({ ref, className }) {
  return (
    <section id="tools" ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Available Tools</h2>
        <p className="text-slate-600 text-lg">Choose from our collection of generator utilities</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <ToolCard key={i} tool={tool} />
        ))}
      </div>
    </section>
  );
}
