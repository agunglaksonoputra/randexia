export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <span className="text-slate-600">© 2025 Randexia. Built with Next.js</span>
          <div className="flex items-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              GitHub
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
