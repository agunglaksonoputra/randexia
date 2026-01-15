import Footer from "@components/Footer";
import Navbar from "@/components/layout/Navbar";

export default function MainLayout({ children, onNavigate, navbar = { type: "main" } }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navbar variant={navbar.type} onNavigate={onNavigate} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
