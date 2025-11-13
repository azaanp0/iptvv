import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "الباقات", path: "/packages" },
    { name: "من نحن", path: "/about" },
    { name: "اتصل بنا", path: "/contact" },
    { name: "الأسئلة الشائعة", path: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-neon-red via-neon-purple to-neon-blue bg-clip-text text-transparent animate-glow">
              العروسي - IPTV
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-semibold transition-all duration-300 hover:text-neon-red ${
                  isActive(link.path) ? "text-neon-red" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              onClick={() => window.open("https://wa.me/966542881139?text=أرغب+بالاشتراك+في+IPTV", "_blank")}
              className="bg-neon-red hover:bg-neon-red/80 text-white font-bold shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300"
            >
              اشترك الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-semibold py-2 transition-colors ${
                  isActive(link.path) ? "text-neon-red" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              onClick={() => {
                window.open("https://wa.me/966542881139?text=أرغب+بالاشتراك+في+IPTV", "_blank");
                setIsOpen(false);
              }}
              className="w-full bg-neon-red hover:bg-neon-red/80 text-white font-bold"
            >
              اشترك الآن
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
