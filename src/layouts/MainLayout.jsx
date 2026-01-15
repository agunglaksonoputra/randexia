import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

export default function MainLayout({ children, onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navbar onNavigate={onNavigate} />
      {children}
      <Footer />
    </div>
  );
}
